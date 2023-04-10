<?php
    header('Access-Control-Allow-Origin: *');

    header('Access-Control-Allow-Methods: GET, POST');
    require __DIR__ . '/../vendor/autoload.php';
    use \Firebase\JWT\JWT; 
    $username = $_POST['username'];
    $password = $_POST['password'];
    
    
    
    $key = "key123123";
    $payload = array(
        "username" => $username,
        "password" => $password,
        "exp" => time() + 60*10  // 10 minutes
    );
    $jwt = JWT::encode($payload, $key, 'HS256');
    $jwt = json_encode($jwt);
    echo $jwt;
?> 