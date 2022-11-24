<?php
include_once "models/Employee.php";

class DataRepository
{
    static string $connectionString = "mysql:host=localhost;dbname=test";
    static string $userName ="root";
    static string $password = "klopop-236805";

    public static function GetEmployees(): array
    {
        try {
            $connect = new PDO(self::$connectionString, self::$userName,self::$password);
            $sql = "select * from employees;";
            $result = $connect->query($sql);
            $emps = [];
            while ($row = $result->fetch()) {
                $emp = new Employee();
                $emp->name = $row["name"];
                $emp->family = $row["family"];
                $emp->city = $row["city"];
                $emp->dateBirthday = $row["dateBirthday"];
                $emp->secondName = $row["secondName"];
                $emp->id = $row["id"];
                array_push($emps, $emp);
            }
        } catch (\mysql_xdevapi\Exception $ex) {
            echo 'error';
            echo $ex->getMessage();
        }
        return $emps;
    }

    public static function GetEmployee(int $id)
    {
        try {
            $connect = new PDO(self::$connectionString, self::$userName,self::$password);
            $sql = "select * from employees WHERE id =$id;";
            $result = $connect->query($sql);
            $emp = new Employee();
            while ($row = $result->fetch()) {
                $emp->name = $row["name"];
                $emp->family = $row["family"];
                $emp->city = $row["city"];
                $emp->dateBirthday = $row["dateBirthday"];
                $emp->secondName = $row["secondName"];
                $emp->id = $row["id"];

            }
        } catch (\mysql_xdevapi\Exception $ex) {
            echo 'error';
            echo $ex->getMessage();
        }
        return $emp;
    }

    public static function AddEmloyee($family, $name, $secondName, $dateBirthday, $city):void
    {
        try {
            $connect = new PDO(self::$connectionString, self::$userName,self::$password);
            $sql = "Insert employees(family, name, secondName, dateBirthday, city) values('$family', '$name', '$secondName', '$dateBirthday', '$city')";
            $connect->exec($sql);

        } catch (\mysql_xdevapi\Exception $ex) {
            echo 'error';
            echo $ex->getMessage();
        }
    }

    public  static  function  ChangeEmployee($id,$family, $name, $secondName, $dateBirthday, $city):int{
        try {
            $connect = new PDO(self::$connectionString, self::$userName,self::$password);
            $sql = "update employees SET name ='$name',family='$family', secondName ='$secondName',dateBirthday ='$dateBirthday', city='$city' WHERE id =$id;";
            $result = $connect->exec($sql);

        } catch (\mysql_xdevapi\Exception $ex) {
            echo 'error';
            echo $ex->getMessage();
        }
        return $result;
    }

    public static function DeleteEmployee(int $id):void
    {
        try {
            $connect = new PDO(self::$connectionString, self::$userName,self::$password);
            $sql = "DELETE from employees WHERE id=$id;";
            $result = $connect->exec($sql);
        } catch (\mysql_xdevapi\Exception $ex) {
            echo 'error';
            echo $ex->getMessage();
        }}
}