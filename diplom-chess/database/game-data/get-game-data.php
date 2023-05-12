<?php
    header("Access-Control-Allow-Origin: *");
    header('Access-Control-Allow-Methods: GET, POST');

    $dsn = 'mysql:host=db5012555500.hosting-data.io;dbname=dbs10553173;charset=utf8mb4';
    $user = 'dbu3454008';
    $password = 'PDDfe233';

    $roomName = $_POST['roomName'];
    
    $dbh = new PDO($dsn, $user, $password);

    $sql = 'SELECT `data` FROM `game-data` WHERE `room-name`=?';
    $stmt= $dbh->prepare($sql);
    $stmt->execute([$roomName]);
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($result);
?>