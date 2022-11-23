<?php
include_once "../DataRepository.php";
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

if ($_SERVER["REQUEST_METHOD"] == "GET") {
    if (isset($_GET["id"])) {
        echo json_encode(DataRepository::GetEmployee($_GET["id"]));
    } else
        echo json_encode(DataRepository::GetEmployees());
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $family = $_POST["family"];
    $name = $_POST["name"];
    $secondName = $_POST["secondName"];
    $dateBirthday = $_POST["dateBirthday"];
    $city = $_POST["city"];
    DataRepository::AddEmloyee($family,$name,$secondName,$dateBirthday,$city);
}

