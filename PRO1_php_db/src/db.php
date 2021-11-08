<?php
mysqli_report(MYSQLI_REPORT_ERROR);
$servername = "db";
$username = "root";
$password = "example";
$database = "PRO1_PHP_DB";


 // Create connection
$connection = mysqli_connect($servername, $username, $password, $database);

// Check connection
if (!$connection) {
  die("Connection failed: " . mysqli_connect_error());
}
echo "Connected successfully"; 

/*    try {
    $conn = new PDO("mysql:host=$servername;dbname=myDB", $username, $password);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "Connected successfully"; 
  } catch(PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
  }  */

 /*  // Create connection
$conn = new mysqli($servername, $username, $password);

// Check connection
if (mysqli_connect_error()) {
    die("Database connection failed: " . mysqli_connect_error());
  } */
?>

