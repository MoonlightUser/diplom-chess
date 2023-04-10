<?php
    header("Access-Control-Allow-Origin: *");
    header('Access-Control-Allow-Methods: GET, POST');

    $dsn = 'mysql:host=db5012555500.hosting-data.io;dbname=dbs10553173';
    $user = 'dbu3454008';
    $password = 'PDDfe233';

    $userName = $_POST['username'];
    $userPassword = $_POST['password'];
    $userEmail = $_POST['email'];
    
    $dbh = new PDO($dsn, $user, $password);

    $sql = 'INSERT INTO `users` (`name`, `password`, `email`) VALUES (?, ?, ?)';
    $stmt= $dbh->prepare($sql);
    $stmt->execute([$userName, $userPassword, $userEmail]);


?>