<?php
    header("Access-Control-Allow-Origin: *");
    header('Access-Control-Allow-Methods: GET, POST');

    $dsn = 'mysql:host=db5012555500.hosting-data.io;dbname=dbs10553173;charset=utf8mb4';
    $user = 'dbu3454008';
    $password = 'PDDfe233';

    $roomName = $_POST['roomName'];
    $data = $_POST['data'];

    $pdo = new PDO($dsn, $user, $password);

    $sql = "UPDATE `game-data` SET `data` = ? WHERE `room-name` = ?";
    $pdo->prepare($sql)->execute([$data, $roomName]);
    echo json_encode("success");
?>