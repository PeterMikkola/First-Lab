<?php
if (($_SERVER['REQUEST_METHOD'] == 'POST') && (!empty($_POST['submit']))):
if (isset($_POST['question1'])) { $question1 = $_POST['question1']; }
if (isset($_POST['question2'])) { $question2 = $_POST['question2']; } else { $question2 = array(); }
if (isset($_POST['question3'])) { $question3 = $_POST['question3']; } else { $question3 = array(); }
if (isset($_POST['question4'])) { $question4 = $_POST['question4']; }
if (isset($_POST['question5'])) { $question5 = $_POST['question5']; }
if (isset($_POST['question6'])) { $question6 = $_POST['question6']; }
if (isset($_POST['question7'])) { $question7 = $_POST['question7']; }
if (isset($_POST['question8'])) { $question8 = $_POST['question8']; }
if (isset($_POST['question9'])) { $question9 = $_POST['question9']; }
if (isset($_POST['question10'])) { $question10 = $_POST['question10']; }
if (isset($_POST['question11'])) { $question11 = $_POST['question11']; }
if (isset($_POST['question12'])) { $question12 = $_POST['question12']; }
if (isset($_POST['question13'])) { $question13 = $_POST['question13']; }
if (isset($_POST['question14'])) { $question14 = $_POST['question14']; }
if (isset($_POST['question15'])) { $question15 = $_POST['question15']; }
if (isset($_POST['question16'])) { $question16 = $_POST['question16']; }
if (isset($_POST['question17'])) { $question17 = filter_var($_POST['question17'], FILTER_SANITIZE_STRING ); }
    else { $question17 = ''; }
if (isset($_POST['question18'])) { $question18 = filter_var($_POST['question18'], FILTER_SANITIZE_STRING ); }
    else { $question18 = ''; }
if (isset($_POST['question19'])) { $question19 = filter_var($_POST['question19'], FILTER_SANITIZE_STRING ); }
    else { $question19 = ''; }

// define variables and set to empty values

	$formerrors = false;

if(empty($_POST['question1'])) {
     $question1Err = "Här saknas svar"; 
		$formerrors = true;
}

if(empty($_POST['question2'])) {
     $question2Err = "Här saknas svar";
		$formerrors = true;
}  

if(empty($_POST['question3'])) {
     $question3Err = "Här saknas svar";
		$formerrors = true;
}

if(empty($_POST['question4'])) {
     $question4Err = "Här saknas svar";
		$formerrors = true;
}  

if(empty($_POST['question5'])) {
     $question5Err = "Här saknas svar";
		$formerrors = true;
}

if(empty($_POST['question6'])) {
     $question6Err = "Här saknas svar";
		$formerrors = true;
}

if(empty($_POST['question7'])) {
     $question7Err = "Här saknas svar";
		$formerrors = true;
}  

if(empty($_POST['question8'])) {
     $question8Err = "Här saknas svar";
		$formerrors = true;
}

if(empty($_POST['question9'])) {
     $question9Err = "Här saknas svar";
		$formerrors = true;
}  

if(empty($_POST['question10'])) {
     $question10Err = "Här saknas svar";
		$formerrors = true;
}
if(empty($_POST['question11'])) {
     $question11Err = "Här saknas svar";
		$formerrors = true;
}
if(empty($_POST['question12'])) {
     $question12Err = "Här saknas svar";
		$formerrors = true;
}

if(empty($_POST['question13'])) {
     $question13rr = "Här saknas svar";
		$formerrors = true;
}  

if(empty($_POST['question14'])) {
     $question14Err = "Här saknas svar";
		$formerrors = true;
}

if(empty($_POST['question15'])) {
     $question15Err = "Här saknas svar";
		$formerrors = true;
}  

if(empty($_POST['question16'])) {
     $question16Err = "Här saknas svar";
		$formerrors = true;
}
endif; //form filled
$formdata = array (
  'question1' => $question1,
  'question2' => $question2,
  'question3' => $question3,
  'question4' => $question4,
  'question5' => $question5,
  'question6' => $question6,
  'question7' => $question7,
  'question8' => $question8,
  'question9' => $question9,
  'question10' => $question10,
  'question11' => $question11,
  'question12' => $question12,
  'question13' => $question13,
  'question14' => $question14,
  'question15' => $question15,
  'question16' => $question16,
  'question17' => $question17,
  'question18' => $question18,
  'question19' => $question19
 );	
 
//($question2 = array());
	//($question3 = array());
function test_input($data) {
 $data = trim($data);
 $data = stripslashes($data);
 $data = htmlspecialchars($data);
 return $data;
	}

?>
<?php 
if (isset($_REQUEST['submit'])) {
  if($question1Err=="" && $question2Err=="" && $question3Err=="" && $question4Err=="" && $question5Err=="" && $question6Err=="" && $question7Err=="" && $question8Err=="" && $question9Err=="" && $question10Err=="" && $question11Err=="" && $question12Err=="" && $question13Err=="" && $question14Err=="" && $question15Err=="" && $question16Err=="")
  {
  $msg_success = "Tack för din medverkan! Din enkät har blivit registrerad";
} else { 
$msg_failure = "Oops! Det blev visst fel! Något kanske saknas";
}
} 
 ?>
 <?php
//$question1Err = $question2Err = $question3Err = $question4Err = $question5Err = $question6Err = $question7Err = $question8Err = $question9Err = $question10Err = $question11Err = $question12Err = $question13Err = $question14Err = $question15Err = $question16Err = $question17Err = $question18Err = $question19Err = "";
//$question1 = $question2 = $question3 = $question4 = $question5 = $question6 = $question7 = $question8 = $question9 = $question10 = $question11 = $question12 = $question13 = $question14 = $question15 = $question16 = $question17 = $question18 = $question19 = "";

if (isset($_POST['submit'])) { 
//if (isset($_REQUEST['submit'])) {
//$servername = "localhost";
$servername = "mysql.b04.levonline.com";
$username = "b0466701";
$password = "QemQ3nk6";
$dbname = "b0466700_db1";
$table = "Survey_2016";
	
	if (!($formerrors)) {
// Create connection
$connection = mysqli_connect($servername, $username, $password, $dbname);
  // Test if connection succeeded
  if(mysqli_connect_errno()) {
    die("Database connection failed: " . 
         mysqli_connect_error() . 
         " (" . mysqli_connect_errno() . ")"
    );
  }
  // Change character set to utf8
mysqli_set_charset($connection,"utf8");

  $query = "INSERT INTO $table (question1, question2, question3, question4, question5, question6, question7, question8, question9, question10,question11, question12, question13, question14, question15, question16, question17, question18, question19)
VALUES (
		  
		  '".$question1."',
		  '".implode(', ', $question2)."',
		  '".implode(', ', $question3)."',
		  '".$question4."',
		  '".$question5."',
		  '".$question6."',
		  '".$question7."',
		  '".$question8."',
		  '".$question9."',
		  '".$question10."',
		  '".$question11."',
		  '".$question12."',
		  '".$question13."',
		  '".$question14."',
		  '".$question15."',
		  '".$question16."',
		  '".$question17."',
		  '".$question18."',
		  '".$question19."'
)";  

$result = mysqli_query($connection, $query);
	if ($result) {
	echo '<div class="smiley">'.'<img src="img/smiley.png">' .'</div>'; 
} else {
		  echo "<span class='error'</span>Database query failed OR Error: Det saknas tydligen ett svar på någon fråga";
//die("Database query failed. " . mysqli_error($connection));
}
}
}
?>
