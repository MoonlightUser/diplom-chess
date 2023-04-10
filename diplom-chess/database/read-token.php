<?php
    header('Access-Control-Allow-Origin: *');

    header('Access-Control-Allow-Methods: GET, POST');
    require __DIR__ . '/../vendor/autoload.php';
    use \Firebase\JWT\JWT; 
    use \Firebase\JWT\Key; 
    $token = $_POST['token'];
    $key = "key123123";

    $decoded = JWT::decode($token, new Key($key, 'HS256'));
    if ($decoded -> exp < time()){
        echo  json_encode(false);
    }
    else{
        $decoded -> exp = time() + 60*10 ;
        $array = [$decoded, $token];
        echo  json_encode($array);
    }

?> 