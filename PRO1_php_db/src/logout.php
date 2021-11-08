<?php ob_start(); ?>
<?php session_start(); ?>

<?php 

$_SESSION['username'] = null;
$_SESSION['firstname'] = null;
$_SESSION['lastname'] = null;
$_SESSION['address'] = null;
$_SESSION['zipcode'] = null;
$_SESSION['city'] = null;
$_SESSION['user_phone'] = null;
$_SESSION['user_email'] = null;
    
header("Location:index.php");

?>

