<?php

class DataRepository
{
    public function GetEmployees()
    {
        try {
            $connect = new PDO("mysql:host=localhost;dbname=test", "root", "klopop-236805");
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
}