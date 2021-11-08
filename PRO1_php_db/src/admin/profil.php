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
<title>Min profil</title>
    
</head>
<body>
<?php

if(isset($_SESSION['username']))  {
} else {
redirect("../index.php");
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
<?php



   if(isset($_SESSION['username'])) {
    
    $username = $_SESSION['username'];
    
    $query = "SELECT * FROM users WHERE username = '{$username}' ";
    
    $select_user_profile_query = mysqli_query($connection, $query);
    
    while($row = mysqli_fetch_array($select_user_profile_query)) {
    
        $user_id = $row['user_id'];
        $firstname = $row['firstname'];
        $lastname = $row['lastname'];
        $address = $row['address'];
        $zipcode = $row['zipcode'];
        $city = $row['city'];
        $user_phone = $row['user_phone'];
        $user_email = $row['user_email'];
        $username = $row['username'];
        $password= $row['password'];
       
 }
    }
 ?>
<?php

  // Post request to update user 
   
if(isset($_POST['edit_user'])) {
    
        $user_id      = escape($_POST['user_id']);
         $firstname   = escape($_POST['firstname']);
         $lastname    = escape($_POST['lastname']);
         $address     = escape($_POST['address']);

         $zipcode     = escape($_POST['zipcode']);
         $city        = escape($_POST['city']);
         $user_phone  = escape($_POST['user_phone']);
 
        $user_email    = escape($_POST['user_email']);
         $username      = escape($_POST['username']);
         $password      =  escape($_POST['password']);
         //$post_date     = escape(date('d-m-y'));

    
   

     if(!empty($password)) { 

       $query_password = "SELECT password FROM users WHERE user_id =  $user_id";
       $get_user_query = mysqli_query($connection, $query_password);
       confirmQuery($get_user_query);

       $row = mysqli_fetch_array($get_user_query);

       $password = $row['password'];


     if($password != $password) {

         $hashed_password = password_hash($password, PASSWORD_BCRYPT, array('cost' => 12));

       }


       $query = "UPDATE users SET ";
       $query .="firstname  = '$firstname', ";
       $query .="lastname = '$lastname', ";
       $query .="address   =  '$address', ";
       $query .="zipcode   =  '$zipcode', ";
       $query .="city   =  '$city', ";
       $query .="user_phone = '$user_phone', ";
       $query .="user_email = '$user_email', ";
       $query .="username = '$username', ";
       $query .="password   = '$password' ";
       $query .= "WHERE user_id = $user_id ";
    
    
         $edit_user_query = mysqli_query($connection,$query);
    
         confirmQuery($edit_user_query);

         echo "<p style='color:green; text-align: center; font-size: 18px;'>" . 'Dina uppgifter är uppdaterade' . "</p>";

         //echo "Dina uppgifter är uppdaterade"
        
        }  // if password empty check end

} // Post reques to update user end

else {  // If the user id is not present in the URL we redirect to the home page


   }

   
   if(isset($_POST['delete'])){
//echo "Works!";
    // if(isset($_SESSION['username'])) {

        //if($_SESSION['username'] == 'admin')   {  

        $user_id = mysqli_real_escape_string($connection, $_POST['user_id']);

        $query = "DELETE FROM users WHERE user_id = {$user_id} ";
        $delete_user_query = mysqli_query($connection, $query); 
        {
          //success
          //Set Refresh header using PHP.
header( "refresh:4;url=../logout.php" );
echo "<p style='color:#8B1010; text-align: center; font-size: 18px;'>" . 'Ditt konto är borttaget!' . "</p>";
        } 
         /* {

                echo 'query error; ' . mysqli_error($connection);

        }  */

      }
    
  
      
        ?>
<fieldset class="fieldset">
   
   <form method="post" form id="delete"/>
<ul>  
<li><div style="display:flex; flex-direction: row; justify-content: left; align-items: center"></li>
<li><input type="hidden" name="user_id" value="<?php echo $user_id ?>"></li></div>
<li><?php echo '<input class="submit1" value="Avsluta konto!" type="submit" name="delete">'; ?></li>
</ul>
</form>
    </fieldset>

<fieldset>
<legend>Fyll i dina uppgifter här! Tack <?php 
if(isset($_SESSION['username'])) {
echo $_SESSION['username'];
}
?>!</legend>

</form>
<form method="post" />
<ul>  

<br>

<div style="display:flex; flex-direction: row; justify-content: left; align-items: center">
<li><label for="user_id">User Id:</label></li>
<li><input type="text" id="user_id" name="user_id" value="<?php echo $user_id;?>" readonly>
<span class="error">* Kan inte ändras!<?php echo isset($error['user_id']) ? $error['user_id'] : '' ?></span></li>
</div>
<div style="display:flex; flex-direction: row; justify-content: left; align-items: center">
<li><label for="firstname">Förnamn:</label></li>
<li><input type="text" id="firstname" name="firstname" value="<?php echo $firstname;?>">
<span class="error">* <?php echo isset($error['firstname']) ? $error['firstname'] : '' ?></span></li>
</div>
<div style="display:flex; flex-direction: row; justify-content: left; align-items: center">
<li><label for="lastname">Efternamn:</label></li>
<li><input type="text" id="lastname" name="lastname" value="<?php echo $lastname;?>">
<span class="error">* <?php echo isset($error['lastname']) ? $error['lastname'] : '' ?></span></li>
</div>
<div style="display:flex; flex-direction: row; justify-content: left; align-items: center">
<li><label for="address">Gatuadress:</label></li>
<li><input type="text" id="address" name="address" value="<?php echo $address;?>">
<span class="error">* <?php echo isset($error['address']) ? $error['address'] : '' ?></span></li>
</div>
<div style="display:flex; flex-direction: row; justify-content: left; align-items: center">
  <li><label for="zipcode">Postnummer:</label></li>
<li><input type="text" id="zipcode" name="zipcode" value="<?php echo $zipcode;?>">
<span class="error">* <?php echo isset($error['zipcode']) ? $error['zipcode'] : '' ?></span></li>
</div>
<div style="display:flex; flex-direction: row; justify-content: left; align-items: center">
  <li><label for="city">Postort:</label></li>
<li><input type="text" id="city" name="city" value="<?php echo $city;?>">
<span class="error">* <?php echo isset($error['city']) ? $error['city'] : '' ?></span></li>
</div>
<div style="display:flex; flex-direction: row; justify-content: left; align-items: center">
  <li><label for="user_phone">Mobil:</label></li>
<li><input type="text" id="user_phone" name="user_phone" value="<?php echo $user_phone;?>">
<span class="error">* <?php echo isset($error['user_phone']) ? $error['user_phone'] : '' ?></span></li>
</div>
<div style="display:flex; flex-direction: row; justify-content: left; align-items: center">
  <li><label for="user_email">E-post:</label></li>
<li><input type="text" id="user_email" name="user_email" value="<?php echo $user_email;?>">
<span class="error">* <?php echo isset($error['user_email']) ? $error['user_email'] : '' ?></span></li>
</div>
<div style="display:flex; flex-direction: row; justify-content: left; align-items: center">
  <li><label for="username">Användarnamn:</label></li>
<li><input type="text" id="username" name="username" value="<?php echo $username;?>" readonly>
<span class="error">* Kan inte ändras!<?php echo isset($error['username']) ? $error['username'] : '' ?></span></li>
</div>
<div style="display:flex; flex-direction: row; justify-content: left; align-items: center">
  <li><label for="password">Lösenord:</label></li>
<li><input type="password" id="password" name="password" value="<?php echo $password;?>" >
<span class="error">* <?php echo isset($error['password']) ? $error['password'] : '' ?></span></li>
</div>

<br />
<br />
  <li><input class="submit" value="Dina uppgifter!" type="submit" name="edit_user"/></li>
  <li><input class="button" value="Rensa" onclick="window.location=''" /></li> 
  <br>
</form>


</ul>
</fieldset>
<br />
</main>
</body>
</html>