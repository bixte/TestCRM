<?php
include_once "Employee.php";
try {
    $connect = new PDO("mysql:host=localhost;dbname=test", "root", "klopop-236805");
    $sql = "select * from employees;";
    $result = $connect->query($sql);
    $emp = new Employee();
    while ($row =$result->fetch()){
        $emp->name = $row["name"];
        $emp->family = $row["family"];
        $emp->city = $row["city"];
        $emp->dateBirthday = $row["dateBirthday"];
        $emp->secondName =$row["secondName"];
        $emp->id = $row["id"];
    }
} catch (\mysql_xdevapi\Exception $ex) {
    echo 'error';
    echo $ex->getMessage();
}
