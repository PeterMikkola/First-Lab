<?php mysqli_report(MYSQLI_REPORT_ALL) ;
try {
      $mysqli = new mysqli('localhost','root','DbMaj7(#11)','cms-3');
      /* I don't need to throw the exception, it's being thrown automatically */

} catch (Exception $e) {
  echo $e->getMessage();
} ?>




<?php if ($mysqli_connection->connect_error) {
   echo "Not connected, error: " . $mysqli_connection->connect_error;
}
else {
   echo "Connected.";
} 


if (mysqli_connect_errno()) {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
  exit();
}
?>
               <?php   print "This works so far1()\n"; ?>
