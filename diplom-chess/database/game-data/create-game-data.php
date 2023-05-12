<?php
    header("Access-Control-Allow-Origin: *");
    header('Access-Control-Allow-Methods: GET, POST');

    $dsn = 'mysql:host=db5012555500.hosting-data.io;dbname=dbs10553173;charset=utf8mb4';
    $user = 'dbu3454008';
    $password = 'PDDfe233';

    $roomName = $_POST['roomName'];
    $data = $_POST['data'];
    
    $dbh = new PDO($dsn, $user, $password);

    $sql = 'INSERT INTO `game-data` (`data`, `room-name`) VALUES (?, ?)';
    $stmt= $dbh->prepare($sql);
    $stmt->execute([$data, $roomName]);
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($data);
?>