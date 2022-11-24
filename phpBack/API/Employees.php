<?php
include_once "../DataRepository.php";
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("access control allow methods:*");

if ($_SERVER["REQUEST_METHOD"] == "GET") {
    if (isset($_GET["id"])) {
        echo json_encode(DataRepository::GetEmployee($_GET["id"]));
    } else
        echo json_encode(DataRepository::GetEmployees());
}


if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $request = file_get_contents('php://input');
    $data = json_decode($request);
    if (isset($_REQUEST["id"]) ) {
        DataRepository::ChangeEmployee($_REQUEST["id"], $data->family, $data->name, $data->secondName, $data->dateBirthday, $data->city);
    } else {
        DataRepository::AddEmloyee($data->family, $data->name, $data->secondName, $data->dateBirthday, $data->city);
    }
}





