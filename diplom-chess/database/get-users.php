<?php
    header("Access-Control-Allow-Origin: *");
    $dsn = 'mysql:host=db5012555500.hosting-data.io;dbname=dbs10553173';
    $user = 'dbu3454008';
    $password = 'PDDfe233';

    $dbh = new PDO($dsn, $user, $password);

    $sth_users = $dbh->query('SELECT * FROM `users`');  
    $users = $sth_users->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($users);
?>