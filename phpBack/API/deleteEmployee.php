<?php
include_once "../DataRepository.php";
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("access control allow methods:*");


DataRepository::DeleteEmployee($_REQUEST["id"]);