<?php
    header("Access-Control-Allow-Origin: *");
    header('Access-Control-Allow-Methods: GET, POST');

    $dsn = 'mysql:host=db5012555500.hosting-data.io;dbname=dbs10553173';
    $user = 'dbu3454008';
    $password = 'PDDfe233';

    $roomName = $_POST['roomName'];
    $userName = $_POST['userName'];


    
    $pdo = new PDO($dsn, $user, $password);

    $sql = "UPDATE rooms SET `status` = ?, `user-name` = ? WHERE `room-name` = ?";
    $pdo->prepare($sql)->execute(["101", $userName, $roomName]);
    echo json_encode("success");
?>