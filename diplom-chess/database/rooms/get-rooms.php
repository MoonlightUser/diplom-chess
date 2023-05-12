<?php
    header("Access-Control-Allow-Origin: *");
    header('Access-Control-Allow-Methods: GET, POST');

    $dsn = 'mysql:host=db5012555500.hosting-data.io;dbname=dbs10553173';
    $user = 'dbu3454008';
    $password = 'PDDfe233';
    
    $dbh = new PDO($dsn, $user, $password);

    $sql = 'SELECT * FROM `rooms` WHERE `status`= "100" AND `password`=""';
    // $stmt= $dbh->prepare($sql);
    // $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
    // echo json_encode($result);
    $room = $dbh->query($sql)->fetchAll();
    // and somewhere later:
    foreach ($room as $row) {
        echo $row['room-name']. "\n";
}
?>