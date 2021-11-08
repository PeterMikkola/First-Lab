<?php ob_start();?>

<?php

$db['db_host'] = "localhost";
$db['db_user'] = "root";
$db['db_pass'] = "example";
$db['db_name'] = "cms-3"; 

/* 
$servername = "localhost";
$username = "root";
$password = "example";
$name = "cms-3";
 */
foreach($db as $key => $value){
    define(strtoupper($key), $value);
    }
    // Create connection
    $connection = new mysqli($db_host, $db_user, $db_pass, $name);
    //$connection = mysqli_connection(DB_HOST,DB_USER,DB_PASS,DB_NAME);
    
    
    
    $query = "SET NAMES utf8";
    mysqli_query($connection,$query);
    
    if($connection) {
    
    echo "We are connected";
    
    }
// Create connection
$conn = new mysqli($localhost, $root, $example, $cms-3);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
} 
echo "Connected successfully";


?>