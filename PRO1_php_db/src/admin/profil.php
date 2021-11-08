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
<!-- <?php

if(isset($_SESSION['username']))  {
} else {
header("location:index.php");
}
?> -->
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
    
         
         $firstname   = escape($_POST['firstname']);
         $lastname    = escape($_POST['lastname']);
         $address     = escape($_POST['address']);

         $zipcode     = escape($_POST['zipcode']);
         $city        = escape($_POST['city']);
         $user_phone  = escape($_POST['user_phone']);
 
        // $post_image = $_FILES['image']['name'];
        // $post_image_temp = $_FILES['image']['tmp_name'];
 
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
       $query .="zipcode   =  '{$zipcode}', ";
       $query .="city   =  '{$city}', ";
       $query .="user_phone = '{$user_phone}', ";
       $query .="user_email = '{$user_email}', ";
       $query .="username = '{$username}', ";
       $query .="password   = '{$password}' ";
       $query .= "WHERE user_id = {$user_id} ";
    
    
         $edit_user_query = mysqli_query($connection,$query);
    
         confirmQuery($edit_user_query);

         echo "<p style='color:green; text-align: center; font-size: 18px;'>" . 'Dina uppgifter är uppdaterade' . "</p>";

         //echo "Dina uppgifter är uppdaterade";

   

       

          }  // if password empty check end

 



   
     } // Post reques to update user end





 else {  // If the user id is not present in the URL we redirect to the home page


     //header("Location: index.php");


   }
   if(isset($POST['delete'])){

    if(isset($_SESSION['username'])) {

        if($_SESSION['username'] == 'admin') {

        $user_id = escape($POST['delete']);

        $query = "DELETE FROM users WHERE user_id = {$user_id} ";
        $delete_user_query = mysqli_query($connection, $query);
        header("Location: admin");

            }   


        }
   
    
    }
    ?>

    <!-- <form method="post">
<input type="hidden" name="user_id" value="<?php echo $user_id ?>">

    </form>
   
   <?php 
   
   //echo   '<input class="submit" value="Avsluta konto!" type="submit" name="delete"/>'

?>
 -->
<?php


/* if($_SERVER['REQUEST_METHOD'] == "POST") {

    $error = [
    
      'firstname'=> '',
      'lastname'=> '',
      'address'=> '',
      'zipcode'=> '',
      'city'=> '',
      'user_phone'=> '',
      'user_email'=>''
  ];

  if(!empty($firstname) && !empty($lastname ) && !empty($address )){                     
    
    
   if($firstname ==''){
    
      $error['firstname'] = 'Fältet får inte vara tomt!';
}
    if (!preg_match_all('/[^\d]+/',$firstname)) {
      $error['firstname'] = 'Bara bokstäver och mellanslag!';
    }
    
  
    foreach ($error as $key => $value) {
            
      if(empty($value)){

        unset($error[$key]);

      } */



  // foreach

  //if(empty($error)){
    //register_user($username, $user_email, $password);

      //$data['message'] = $username;

     // $pusher->trigger('notifications', 'new_user', $data);

      //login_user($username, $password);
      
      
  /* 
  

}  */
  
  
  
  
  
   




   
 
 /*  
// define variables and set to empty values
$firstnameErr = $lastnameErr = $addressErr = $zipcodeErr = $cityErr = $user_phoneErr = $user_emailErr = $usernameErr = $passwordErr = "";
$firstname = $lastname = $address = $zipcode = $city = $user_phone = $user_email = $username = $password = "";
  
$user_id = $_POST['user_id'] ?? '';
$firstname = $_POST['firstname'] ?? '';
$lastname = $_POST['lastname'] ?? '';
$address = $_POST['address'] ?? ''; 
$zipcode = $_POST['zipcode'] ?? '';
$city = $_POST['city'] ?? '';
$user_phone = $_POST['user_phone'] ?? '';
$user_email = $_POST['user_email'] ?? ''; 
$username = $_POST['username'] ?? '';
$password = $_POST['password'] ?? '';


function pro1($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
  } 

  if($_SERVER['REQUEST_METHOD'] == "POST") {
    if($firstname ==''){
    
      $error['firstname'] = 'Fältet får inte vara tomt!';


  }
   if (empty($_POST["firstname"])) {
      $error = "Fältet får inte lämnas tomt!";
    } else {
      $firstname = pro1($_POST["firstname"]);
      // check if name only contains letters and whitespace
      if (!preg_match_all('/[^\d]+/',$firstname)) {
        $error = "Bara bokstäver och mellanslag tillåtet!";
      }
    }
  
    
  

        if (empty($_POST["lastname"])) {
          $lastnameErr = "Fältet får inte lämnas tomt!";
        } else {
          $lastname = pro1($_POST["lastname"]);
          // check if name only contains letters and whitespace
          if (!preg_match_all('/[^\d]+/',$lastname)) {
            $lastnameErr = "Bara bokstäver och mellanslag tillåtet!";
          }
        }

            if (empty($_POST["address"])) {
              $addressErr = "Fältet får inte lämnas tomt!";
            } else {
              $address = pro1($_POST["address"]);
              // check if name only contains letters and whitespace
              if (!preg_match_all('/[^\d]+/',$address)) {
                $addressErr = "Bara bokstäver och mellanslag tillåtet!";
              }
            }

                if (empty($_POST["zipcode"])) {
                  $zipcodeErr = "Fältet får inte lämnas tomt!";
                } else {
                  $zipcode = pro1($_POST["zipcode"]);
                  // check if name only contains letters and whitespace
                  if (!preg_match("@^([1-9][0-9 ]*)$@", $zipcode)) {
                    $uzipcodeErr = "Bara siffror tillåtna!";
                    }
                
                }
                if (empty($_POST["city"])) {
                  $cityErr = "Fältet får inte lämnas tomt!";
                } else {
                  $city = pro1($_POST["city"]);
                  // check if name only contains letters and whitespace
                  if (!preg_match_all('/[^\d]+/',$city)) {
                    $cityErr = "Bara bokstäver och mellanslag tillåtet!";
                  }
                }
            
                    if (empty($_POST["user_phone"])) {
                      $user_phoneErr = "Fältet får inte lämnas tomt!";
                    } else {
                      $user_phone = pro1($_POST["user_phone"]);
                      // check if name only contains letters and whitespace
                        if (!preg_match("@^([1-9][0-9 ]*)$@", $user_phone)) {
                          $user_phoneErr = "Bara siffror tillåtna!";
                          }
                      }
                    
            
                    if (empty($_POST["user_email"])) {
                      $user_emailErr = "Fältet får inte lämnas tomt!";
                    } else {
                      $user_email = pro1($_POST["user_email"]);
                      // check if e-mail address is well-formed
                      if (!filter_var(FILTER_VALIDATE_EMAIL, $user_email)) {
                        $user_emailErr = "Ogiltig e-post adress!";
                      }
                    }
                      if (empty($_POST["username"])) {
                          $usernameErr = "Fältet får inte lämnas tomt!";
                        } else {
                          $username = pro1($_POST["username"]);
                          // check if name only contains letters and whitespace
                          if (!preg_match_all('/[^\d]+/',$username)) {
                            $usernamesErr = "Bara bokstäver och mellanslag tillåtet!";
                          }
                        }
            
                            if (empty($_POST["password"])) {
                              $passwordErr = "Fältet får inte lämnas tomt!";
                            } else {
                              $password = pro1($_POST["password"]);
                              // check if name only contains letters and whitespace
                              if (!preg_match_all('/[^\d]+/',$password)) {
                                $passwordErr = "Bara bokstäver och mellanslag tillåtet!";
                              }
                            
                            }*/
                          
                                                       
 ?>
      <fieldset>
<legend>Fyll i dina uppgifter här! Tack <?php 
if(isset($_SESSION['username'])) {
echo $_SESSION['username'];
}
?>!</legend>
<form action="" method="post" enctype="multipart/form-data" />
<ul>  
<div style="display:flex; flex-direction: row; justify-content: left; align-items: center">
<li><label for="firstname">Förnamn:</label></li>
<li><input type="text" id="firstname" name="firstname" value="<?php echo $firstname;?>">
<span class="error">* <?php echo isset($error['firstname']) ? $error['firstname'] : '' ?></span></li>
<input type="hidden" name="user_id" value="<?php echo $user_id ?>">
<?php echo '<input class="submit" value="Avsluta konto!" style="background-color:red; type="submit" name="delete"/>' ?></div>
<div style="display:flex; flex-direction: row; justify-content: left; align-items: center">
<li><label for="namn">Efternamn:</label></li>
<li><input type="text" id="lastname" name="lastname" value="<?php echo $lastname;?>">
<span class="error">* <?php echo isset($error['lastname']) ? $error['lastname'] : '' ?></span></li>
</div>
<div style="display:flex; flex-direction: row; justify-content: left; align-items: center">
<li><label for="farg">Gatuadress:</label></li>
<li><input type="text" id="address" name="address" value="<?php echo $address;?>">
<span class="error">* <?php echo isset($error['address']) ? $error['address'] : '' ?></span></li>
</div>
<div style="display:flex; flex-direction: row; justify-content: left; align-items: center">
  <li><label for="hobby">Postnummer:</label></li>
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
<li><input type="text" id="user_email" name="user_email" value="<?php echo $user_email;?>"readonly>
<span class="error">* Kan inte ändras!<?php echo isset($error['user_email']) ? $error['user_email'] : '' ?></span></li>
</div>
<div style="display:flex; flex-direction: row; justify-content: left; align-items: center">
  <li><label for="username">Användarnamn:</label></li>
<li><input type="text" id="username" name="username" value="<?php echo $username;?>"readonly>
<span class="error">* Kan inte ändras!<?php echo isset($error['username']) ? $error['username'] : '' ?></span></li>
</div>
<div style="display:flex; flex-direction: row; justify-content: left; align-items: center">
  <li><label for="password">Lösenord:</label></li>
<li><input type="password" id="password" name="password" value="<?php echo $password;?>" readonly>
<span class="error">* Kan inte ändras!<?php echo isset($error['password']) ? $error['password'] : '' ?></span></li>
</div>

<br />
<br />
  <li><input class="submit" value="Dina uppgifter!" type="submit" name="edit_user"/></li>
  <!-- <li><input class="button" value="Rensa" onclick="window.location=''" /></li>  -->
  <br>
</form>


</ul>
</fieldset>
<br />
</main>
</body>
</html>