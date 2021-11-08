<?php session_start(); ?>
<?php ob_start(); ?>
<?php  include "db.php"; ?>
<?php  include "function.php"; ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel ="stylesheet" href="style.css?=v<?php echo time(); ?>
    <link rel="preconnect" href="https://fonts.googleapis.com"> 
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> 
<link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;1,300&display=swap" rel="stylesheet">
<title>Login</title>
    
</head>
<body>
<main>

<?php
if(isset($_POST['login'])) {

  

        if(ifItIsMethod('post')){


                if(isset($_POST['login'])){


                    if(isset($_POST['username']) && isset($_POST['password'])){

                        login_user($_POST['username'], $_POST['password']);


                    }else {


                        redirect('index');
                    }


                }

        }
}


if(isset($_SESSION['username'])) 
/* } else {
header("location:index.php");
} */

  if(login_user($username, $password)) {
 
   
   // $error['password'] = 'Ogiltig inloggning. Försök igen!'; 
  
}
?> 

      <fieldset style="margin-bottom: 10px">
<legend>Fyll i användarnamn och lösenord:</legend>
<form method="post">

<ul>
<li><span class="error"><?php echo isset($error['password']) ? $error['password'] : '' ?></span></li> 
<br/>
<div style="display:flex; flex-direction: row; justify-content: left; align-items: center">
  <li><label for="username">Användarnamn:</label></li>
<li><input type="text" id="username" name="username">
</div><br />
<div style="display:flex; flex-direction: row; justify-content: left; align-items: center">
  <li><label for="password">Lösenord:</label></li>
<li><input type="password" id="password" name="password">
</div>
<br />
</div>
<li><input class="submit" value="Logga in!" type="submit" name="login"; /></li>
<li><input class="button" value="Rensa" onclick="location.reload(true);''" /></li> 
</form>
<br />
<li><p style="text-align:right;"><a href="registrera.php">Bli medlem!</a></p></li>
</ul>
</fieldset>
<br />
</main>
</body>
</html>
