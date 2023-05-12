<?php
    header("Access-Control-Allow-Origin: *");
    header('Access-Control-Allow-Methods: GET, POST');

    $dsn = 'mysql:host=db5012555500.hosting-data.io;dbname=dbs10553173';
    $user = 'dbu3454008';
    $password = 'PDDfe233';

    $roomName = $_POST['roomName'];
    $userName = $_POST['userName'];
    $status = $_POST['status'];
    $roomPassword = $_POST['password'];

    $pdo = new PDO($dsn, $user, $password);

    $sql = "UPDATE rooms SET `status` = ?, `user-name` = ?, `password` = ? WHERE `room-name` = ?";
    $pdo->prepare($sql)->execute([$status, $userName, $roomPassword, $roomName]);
    echo json_encode("success");
?>