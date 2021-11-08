<?php session_start(); ?>
<?php ob_start(); ?>
<?php include "db.php"; ?>
<?php include "function.php"; ?>

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
<title>Registrera dig!</title>
    
</head>
<body>
  <main>
 <?php
 

// define variables and set to empty values
$user_emailErr = $usernameErr = $passwordErr = "";
$user_email = $username = $password = "";

if(isset($_POST['submit'])) {
    echo "It's working";
    
    
    if($_SERVER['REQUEST_METHOD'] == "POST") {

        $username = trim($_POST['username']);
        $user_email  = trim($_POST['user_email']);
        $password = trim($_POST['password']);
    
    
        $error = [
    
            'username'=> '',
            'user_email'=>'',
            'password'=>''
    
        ];

       
        
    if(!empty($username) && !empty($user_email ) && !empty($password )){                     
            
        $username = mysqli_real_escape_string($connection, $username);
            $user_email = mysqli_real_escape_string($connection, $user_email);
            $password = mysqli_real_escape_string($connection, $password);
        
            $password = password_hash($password,PASSWORD_BCRYPT, array ('cost'=> 12));
                
                if(strlen($username) < 4){
    
            $error['username'] = 'Användarnamnet för kort!';
    
    
        }
    }
         if($username ==''){
    
            $error['username'] = 'Fältet får inte vara tomt!';
    
    
        }
    
    
         if(username_exists($username)){
    
            $error['username'] = 'Användarnamnet används redan!';
    
    
        }
    
    
    
        if($user_email ==''){
    
            $error['user_email'] = 'Fältet får inte vara tomt!';
            
    
    
        }
        if (!filter_var($user_email, FILTER_VALIDATE_EMAIL)) {
            $error['user_email'] = "Ogiltigt e-post format!";
          }
    
         if(email_exists($user_email)){
    
            $error['user_email'] = 'E-postadressen används redan!';
    
    
        }
    
    
        if($password == '') {
    
    
            $error['password'] = 'Fältet får inte vara tomt!';
    
        }
    
        if ($_POST["password"] === $_POST["psw-repeat"]) {
            // success!
         }
         else {
            $error['password'] = 'Fälten matchar inte!';
         }
    
        foreach ($error as $key => $value) {
            
            if(empty($value)){
    
                unset($error[$key]);
    
            }
    
    
    
        } // foreach
    
        if(empty($error)){
    
            register_user($username, $user_email, $password);
    
            $data['message'] = $username;
    
           // $pusher->trigger('notifications', 'new_user', $data);
    
            login_user($username, $password);
            
            
        }
        
    
    } 
}
    
    ?>
                    
      <fieldset style="margin-bottom: 10px">
<legend>Fyll i användarnamn, lösenord och e-post!</legend>
<form method="post" action="registrera.php">
<br/>
<ul>
<div style="display:flex; flex-direction: row; justify-content: left; align-items: center">
  <li><label for="username">Användarnamn:</label></li>
<li><input type="text" id="username" name="username" autocomplete="on"
value="<?php echo isset($username) ? $username : '' ?>">
<span class="error">* <?php echo isset($error['username']) ? $error['username'] : '' ?></span></li>
</div>
<div style="display:flex; flex-direction: row; justify-content: left; align-items: center">
  <li><label for="user_email">E-post:</label></li>
<li><input type="user_email" id="user_email" name="user_email" autocomplete="on"
value="<?php echo isset($user_email) ? $user_email : '' ?>">
<span class="error">* <?php echo isset($error['user_email']) ? $error['user_email'] : '' ?></span></li>
</div>
<div style="display:flex; flex-direction: row; justify-content: left; align-items: center">
  <li><label for="password">Lösenord:</label></li>
<li><input type="password" id="password" name="password">
<span class="error">* <?php echo isset($error['password']) ? $error['password'] : '' ?></span></li>
</div>
<div style="display:flex; flex-direction: row; justify-content: left; align-items: center">
  <li><label for="password">Lösenord igen!:</label></li>
<li><input type="password" id="psw-repeat" name="psw-repeat">
<span class="error">* <?php echo isset($error['password']) ? $error['password'] : '' ?></span></li>
</div>

<br />
</div>
<li><input type="submit" value="Registrera dig!" name="submit" class="submit" /></li>
<li><input class="button" value="Rensa" onclick="window.location=''" /></li> 
</form>
</ul>
</fieldset>
<br />
</main>
</body>
</html>