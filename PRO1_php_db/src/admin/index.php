<?php session_start(); ?>
<?php ob_start(); ?>
<?php include "../db.php"; ?>
<?php include "../function.php"; ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel ="stylesheet" href="../style.css?=v<?php echo time(); ?>
    <link rel="preconnect" href="https://fonts.googleapis.com"> 
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> 
<link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;1,300&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<title>Du är inloggad!</title>
    
</head>
<body>
<?php

if(isset($_SESSION['username']))  {
} else {
header("location:admin.php");
}
?>

<header>
    <figure>
<a href="profil.php">
<img src="../img/user.png" alt="User" style="width: 50px; height: 50px;">
</a>
<p style="font-size: 12px;">
<figcaption>Mitt Konto
    <br>
<a href="../logout.php">Log Out!</a>
</figcaption></p></figure>
</header>
<main>
 
<fieldset>

<legend><h3>Välkommen <?php 
if(isset($_SESSION['username'])) {
echo $_SESSION['username'];
}
?></h3></legend>

<p>Den här sidan är sidan efter inloggning. Jag vill med den här sidan bara visa att du ser ditt eget username här ovan i "legenden",
som bevisar att du är inloggad. Härifrån kan man gå varsomhelst i siten. Om man vill. Och om vi vill.<br /><br />
Uppe till höger har vi användarikonen som också bara dyker upp om du är inloggad. Under den här menyn ligger profilsidan där man fyller i resten av
sina uppgifter om man vill. Här kan man samla alla menyer som rör den enskilda medlemmen.<br /><br />
Observera att detta bara är förslag från min sida och egentligen bara ett dummyprojekt för att se att alla länkar
och databaslänkar fungerar. Backend koden kan användas till vilka kopplingar som helst. Bara att byta ut
filnamnen, lägga till eller dra ifrån.<br /><br />
Till sist. Själva layouten är ju en Kalle Anka version men om jag ska prova om en knapp till DB fungerar 
så måste jag ju ha en knapp att trycka på. Allt detta ska ju ersättas med det vi såg i Figma.</p>


</fieldset>
<br />
</main>
</body>
</html>