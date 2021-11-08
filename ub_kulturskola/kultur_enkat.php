<?php include 'kulturphp2.php';?>
<!DOCTYPE html>
<html lang="se">
<head>
<meta http-equiv="Content-type" content="text/html; charset=utf-8" />
<link rel="stylesheet" type="text/css" href="kultur.css">
</head>
<body>

<div class="wrapper">
<?php echo "<h3 class='success_msg','text-align: center;'>".$msg_success."</h3>"; ?>
<?php echo "<h3 class='failure_msg','text-align: center;'>".$msg_failure."</h3>"; ?>
<form id="myform" method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
      		<span id="formerror" class="error"></span>
<fieldset>
            <legend>Upplands Bro Kulturskola föräldraenkät</legend>
            <table style="width:100%">
               <br><br><br>
<tr>
      <td class="left">Kön</td>
      <td class="right">Flicka</td>
      <td><input type="radio" name="question1" value="Flicka" <?php if ((isset($question1)) && ($question1 === 'Flicka')) { echo "checked"; } ?> /></td> 
      <td></td>
      <td></td>
      <td></td>
      <td><input type="radio" name="question1" value="Pojke" <?php if ((isset($question1)) && ($question1 === 'Pojke')) { echo "checked"; } ?> /></td>
	<td class="left">Pojke</td>
	<td><span class="error"><?php if (isset($question1Err)) { echo $question1Err; } ?></span></td>
</tr>
<tr>
      <td class="left">Mitt barn deltar i:
      (Flera kryss är möjliga)</td>
      <td class="right">Instrument/<br />
      Sång</td>
	<td><input type="checkbox" name="question2[]" value="Instrument" id="Instrument" <?php if ((isset($question2)) && (in_array("Instrument", $question2))) { echo "checked"; } ?> /></td> 
      <td class="right">Musikal</td>
      <td><input type="checkbox" name="question2[]" value="Musikal" id="Musikal" <?php if ((isset($question2)) && (in_array("Musikal", $question2))) { echo "checked"; } ?> /></td>
            <td class="right">Dans</td>
      <td><input type="checkbox" name="question2[]" value="Dans" id="Dans" <?php if ((isset($question2)) && (in_array("Dans", $question2))) { echo "checked"; } ?> /></td> 
      <td></td>
</tr>
<tr>
	<td></td>
      <td class="right">Teater</td>
		<td><input type="checkbox" name="question2[]" value="Teater" id="Teater" <?php if ((isset($question2)) && (in_array("Teater", $question2))) { echo "checked"; } ?> /></td>
      <td class="right">Rockskola</td>
      <td><input type="checkbox" name="question2[]" value="Rockskola" id="Rockskola" <?php if ((isset($question2)) && (in_array("Rockskola", $question2))) { echo "checked"; } ?> /></td>
      <td class="right">Orkester</td>
      <td><input type="checkbox" name="question2[]" value="Orkester" id="Orkester"<?php if ((isset($question2)) && (in_array("Orkester", $question2))) { echo "checked"; } ?> /></td>
      <td></td>
	<td><span class="error"><?php if (isset($question2Err)) { echo $question2Err; } ?></span></td>
</tr>
<tr>
      <td class="left">Mitt barn får undervisning på:
      (Flera kryss är möjliga)</td>
      <td class="right">Sin egen skola</td>
      <td><input type="checkbox" name="question3[]" value="Egen_skola" id="Egen_skola" <?php if ((isset($question3)) && (in_array("Egen_skola", $question3))) { echo "checked"; } ?> /></td> 
      <td></td>
      <td></td>
      <td></td>
      <td><input type="checkbox" name="question3[]" value="Annan_skola" id="Annan_skola" <?php if ((isset($question3)) && (in_array("Annan_skola", $question3))) { echo "checked"; } ?> /></td>
      <td>annan skola/lokal</td>
	<td><span class="error"><?php if (isset($question3Err)) { echo $question3Err; } ?></span></td>
</tr>
</table>
</fieldset><br><br>
<fieldset>
<legend>Trivsel och trygghet</legend>
      <table label style="width:100%">
<tr>
      <td></td><td></td>
      <td><label for="radio">ingen åsikt/vet ej</label></td>
      <td><label for="radio">stämmer inte alls</label></td>
      <td><label for="radio">stämmer till viss del</label></td>
      <td><label for="radio">stämmer bra</label></td>
      <td><label for="radio">stämmer mycket bra</label></td>

</tr>
      <tr>
      
	<td class="left">Mitt/mina barn trivs med sina kamrater på Kulturskolan</td>
	<td></td>
	<td><input type="radio" name="question4" id="question4" value="1" <?php if ((isset($question4)) && ($question4 === '1')) { echo "checked"; } ?> /></td>
   	<td><input type="radio" name="question4" id="question4" value="2" <?php if ((isset($question4)) && ($question4 === '2')) { echo "checked"; } ?> /></td>
	<td><input type="radio" name="question4" id="question4" value="3" <?php if ((isset($question4)) && ($question4 === '3')) { echo "checked"; } ?> /></td>      
	<td><input type="radio" name="question4" id="question4" value="4" <?php if ((isset($question4)) && ($question4 === '4')) { echo "checked"; } ?> /></td>
	<td><input type="radio" name="question4" id="question4" value="5" <?php if ((isset($question4)) && ($question4 === '5')) { echo "checked"; } ?> /></td>
      <td></td>
	<td><span class="error"><?php if (isset($question4Err)) { echo $question4Err; } ?></span></td>
</tr>
<tr>
      <td class="left">Mitt/mina barn trivs med sin/sina lärare på Kulturskolan</td>
      <td></td>
      <td><input type="radio" name="question5" value="1" <?php if ((isset($question5)) && ($question5 === '1')) { echo "checked"; } ?> /></td> 
      <td><input type="radio" name="question5" value="2" <?php if ((isset($question5)) && ($question5 === '2')) { echo "checked"; } ?> /></td>
      <td><input type="radio" name="question5" value="3" <?php if ((isset($question5)) && ($question5 === '3')) { echo "checked"; } ?> /></td>
      <td><input type="radio" name="question5" value="4" <?php if ((isset($question5)) && ($question5 === '4')) { echo "checked"; } ?> /></td>
      <td><input type="radio" name="question5" value="5" <?php if ((isset($question5)) && ($question5 === '5')) { echo "checked"; } ?> /></td>
      <td></td>
	<td><span class="error"><?php if (isset($question5Err)) { echo $question5Err; } ?></span></td>
</tr>
</table>
</fieldset><br><br>
<fieldset>
<legend>Bemötande</legend>
            <table style="width:100%">
<tr>
      <td class="left">Jag är nöjd med kontakten med mitt/mina barns lärare</td>
      <td></td>
      <td><input type="radio" name="question6" value="1" <?php if ((isset($question6)) && ($question6 === '1')) { echo "checked"; } ?> /></td> 
      <td><input type="radio" name="question6" value="2" <?php if ((isset($question6)) && ($question6 === '2')) { echo "checked"; } ?> /></td>
      <td><input type="radio" name="question6" value="3" <?php if ((isset($question6)) && ($question6 === '3')) { echo "checked"; } ?> /></td>
      <td><input type="radio" name="question6" value="4" <?php if ((isset($question6)) && ($question6 === '4')) { echo "checked"; } ?> /></td>
      <td><input type="radio" name="question6" value="5" <?php if ((isset($question6)) && ($question6 === '5')) { echo "checked"; } ?> /></td>
      <td></td>
	<td><span class="error"><?php if (isset($question6Err)) { echo $question6Err; } ?></span></td>
</tr>
<tr>
      <td class="left">Jag är nöjd med kontakten med Kulturskolans expediotion</td>
      <td></td>
      <td><input type="radio" name="question7" value="1" <?php if ((isset($question7)) && ($question7 === '1')) { echo "checked"; } ?> /></td> 
      <td><input type="radio" name="question7" value="2" <?php if ((isset($question7)) && ($question7 === '2')) { echo "checked"; } ?> /></td>
      <td><input type="radio" name="question7" value="3" <?php if ((isset($question7)) && ($question7 === '3')) { echo "checked"; } ?> /></td>
      <td><input type="radio" name="question7" value="4" <?php if ((isset($question7)) && ($question7 === '4')) { echo "checked"; } ?> /></td>
      <td><input type="radio" name="question7" value="5" <?php if ((isset($question7)) && ($question7 === '5')) { echo "checked"; } ?> /></td>
      <td></td>
	<td><span class="error"><?php if (isset($question7Err)) { echo $question7Err; } ?></span></td>
</tr>
</table>

</fieldset><br><br>
<fieldset>
<legend>Undervisning</legend>
            <table style="width:100%">
            <tr>
            <td class="left">Jag upplever att mitt/mina barn får en omväxlande lärorik och lustfylld undervisning</td>
      <td></td>
      <td><input type="radio" name="question8" value="1" <?php if ((isset($question8)) && ($question8 === '1')) { echo "checked"; } ?> /></td> 
      <td><input type="radio" name="question8" value="2" <?php if ((isset($question8)) && ($question8 === '2')) { echo "checked"; } ?> /></td>
      <td><input type="radio" name="question8" value="3" <?php if ((isset($question8)) && ($question8 === '3')) { echo "checked"; } ?> /></td>
      <td><input type="radio" name="question8" value="4" <?php if ((isset($question8)) && ($question8 === '4')) { echo "checked"; } ?> /></td>
      <td><input type="radio" name="question8" value="5" <?php if ((isset($question8)) && ($question8 === '5')) { echo "checked"; } ?> /></td>
      <td></td>
	<td><span class="error"><?php if (isset($question8Err)) { echo $question8Err; } ?></span></td>
</tr>
<tr>
      <td class="left">Jag upplever att mitt barn lär sig och utvecklas</td>
      <td></td>
      <td><input type="radio" name="question9" value="1" <?php if ((isset($question9)) && ($question9 === '1')) { echo "checked"; } ?> /></td> 
      <td><input type="radio" name="question9" value="2" <?php if ((isset($question9)) && ($question9 === '2')) { echo "checked"; } ?> /></td>
      <td><input type="radio" name="question9" value="3" <?php if ((isset($question9)) && ($question9 === '3')) { echo "checked"; } ?> /></td>
      <td><input type="radio" name="question9" value="4" <?php if ((isset($question9)) && ($question9 === '4')) { echo "checked"; } ?> /></td>
      <td><input type="radio" name="question9" value="5" <?php if ((isset($question9)) && ($question9 === '5')) { echo "checked"; } ?> /></td>
      <td></td>
	<td><span class="error"><?php if (isset($question9Err)) { echo $question9Err; } ?></span></td>
</tr>
</table>
</fieldset><br><br>
<fieldset>
<legend>Information</legend>
      <table style="width:100%">
      <tr><td></td><td></td>
      <td><label for="radio">ingen åsikt/vet ej</label></td>
      <td><label for="radio">stämmer inte alls</label></td>
      <td><label for="radio">stämmer till viss del</label></td>
      <td><label for="radio">stämmer bra</label></td>
      <td><label for="radio">stämmer mycket bra</label></td>
      </tr>
      <td class="left">Jag hämtar information om Kulturskolan på www.upplands-bro.se</td>
      <td></td>
      <td><input type="radio" name="question10" value="1" <?php if ((isset($question10)) && ($question10 === '1')) { echo "checked"; } ?> /></td> 
      <td><input type="radio" name="question10" value="2" <?php if ((isset($question10)) && ($question10 === '2')) { echo "checked"; } ?> /></td>
      <td><input type="radio" name="question10" value="3" <?php if ((isset($question10)) && ($question10 === '3')) { echo "checked"; } ?> /></td>
      <td><input type="radio" name="question10" value="4" <?php if ((isset($question10)) && ($question10 === '4')) { echo "checked"; } ?> /></td>
      <td><input type="radio" name="question10" value="5" <?php if ((isset($question10)) && ($question10 === '5')) { echo "checked"; } ?> /></td>
      <td></td>
      	<td><span class="error"><?php if (isset($question10Err)) { echo $question10Err; } ?></span></td>
</tr>
      <tr>
      <td class="left">Jag är nöjd med informationen på Kulturskolans hemsida</td>
      <td></td>
      <td><input type="radio" name="question11" value="1" <?php if ((isset($question11)) && ($question11 === '1')) { echo "checked"; } ?> /></td> 
      <td><input type="radio" name="question11" value="2" <?php if ((isset($question11)) && ($question11 === '2')) { echo "checked"; } ?> /></td>
      <td><input type="radio" name="question11" value="3" <?php if ((isset($question11)) && ($question11 === '3')) { echo "checked"; } ?> /></td>
      <td><input type="radio" name="question11" value="4" <?php if ((isset($question11)) && ($question11 === '4')) { echo "checked"; } ?> /></td>
      <td><input type="radio" name="question11" value="5" <?php if ((isset($question11)) && ($question11 === '5')) { echo "checked"; } ?> /></td>
      <td></td>
      	<td><span class="error"><?php if (isset($question11Err)) { echo $question11Err; } ?></span></td>
</tr>
      <tr>
      <td class="left">Jag är nöjd med den information jag får från mitt/mina barns lärare</td>
      <td></td>
      <td><input type="radio" name="question12" value="1" <?php if ((isset($question12)) && ($question12 === '1')) { echo "checked"; } ?> /></td> 
      <td><input type="radio" name="question12" value="2" <?php if ((isset($question12)) && ($question12 === '2')) { echo "checked"; } ?> /></td>
      <td><input type="radio" name="question12" value="3" <?php if ((isset($question12)) && ($question12 === '3')) { echo "checked"; } ?> /></td>
      <td><input type="radio" name="question12" value="4" <?php if ((isset($question12)) && ($question12 === '4')) { echo "checked"; } ?> /></td>
      <td><input type="radio" name="question12" value="5" <?php if ((isset($question12)) && ($question12 === '5')) { echo "checked"; } ?> /></td>
      <td></td>
	<td><span class="error"><?php if (isset($question12Err)) { echo $question12Err; } ?></span></td>
</tr>
</table>
</fieldset><br><br>
<fieldset>
<legend>Verksamhet</legend>
      <table style="width:100%">
<tr>
      <td class="left">Jag är nöjd med Kulturskolans utbud av ämnen/aktiviteter</td>
      <td></td>
      <td><input type="radio" name="question13" value="1" <?php if ((isset($question13)) && ($question13 === '1')) { echo "checked"; } ?> /></td> 
      <td><input type="radio" name="question13" value="2" <?php if ((isset($question13)) && ($question13 === '2')) { echo "checked"; } ?> /></td>
      <td><input type="radio" name="question13" value="3" <?php if ((isset($question13)) && ($question13 === '3')) { echo "checked"; } ?> /></td>
      <td><input type="radio" name="question13" value="4" <?php if ((isset($question13)) && ($question13 === '4')) { echo "checked"; } ?> /></td>
      <td><input type="radio" name="question13" value="5" <?php if ((isset($question13)) && ($question13 === '5')) { echo "checked"; } ?> /></td>
      <td></td>
	<td><span class="error"><?php if (isset($question13Err)) { echo $question13Err; } ?></span></td>
</tr>
<tr>
      <td class="left">Jag är nöjd med Kulturskolans föreställningar och konserter</td>
      <td></td>
      <td><input type="radio" name="question14" value="1" <?php if ((isset($question14)) && ($question14 === '1')) { echo "checked"; } ?> /></td> 
      <td><input type="radio" name="question14" value="2" <?php if ((isset($question14)) && ($question14 === '2')) { echo "checked"; } ?> /></td>
      <td><input type="radio" name="question14" value="3" <?php if ((isset($question14)) && ($question14 === '3')) { echo "checked"; } ?> /></td>
      <td><input type="radio" name="question14" value="4" <?php if ((isset($question14)) && ($question14 === '4')) { echo "checked"; } ?> /></td>
      <td><input type="radio" name="question14" value="5" <?php if ((isset($question14)) && ($question14 === '5')) { echo "checked"; } ?> /></td>
      <td></td>
	<td><span class="error"><?php if (isset($question14Err)) { echo $question14Err; } ?></span></td>
</tr>
</table>
</fieldset><br><br>
<fieldset>
<legend>Tillgänglighet</legend>
            <table style="width:100%">
            <tr>
            <td class="left">Jag är nöjd med tidpunkten för mitt barns lektion/lektioner</td>
      <td></td>
      <td><input type="radio" name="question15" value="1" <?php if ((isset($question15)) && ($question15 === '1')) { echo "checked"; } ?> /></td> 
      <td><input type="radio" name="question15" value="2" <?php if ((isset($question15)) && ($question15 === '2')) { echo "checked"; } ?> /></td>
      <td><input type="radio" name="question15" value="3" <?php if ((isset($question15)) && ($question15 === '3')) { echo "checked"; } ?> /></td>
      <td><input type="radio" name="question15" value="4" <?php if ((isset($question15)) && ($question15 === '4')) { echo "checked"; } ?> /></td>
      <td><input type="radio" name="question15" value="5" <?php if ((isset($question15)) && ($question15 === '5')) { echo "checked"; } ?> /></td>
      <td></td>
	<td><span class="error"><?php if (isset($question15Err)) { echo $question15Err; } ?></span></td>
</tr>
<tr>
      <td class="left">Vi föredrar lektioner:</td>
      <td class="right">Under skoltid</td>
      <td><input type="radio" name="question16" value="under_skoltid" <?php if ((isset($question16)) && ($question16 === 'under_skoltid')) { echo "checked"; } ?> /></td> 
      <td></td>
      <td></td>
      <td></td>
      <td><input type="radio" name="question16" value="efter_skoltid"<?php if ((isset($question16)) && ($question16 === 'efter_skoltid')) { echo "checked"; } ?> /></td>
	<td>Efter skoltid</td>
	<td><span class="error"><?php if (isset($question16Err)) { echo $question16Err; } ?></span></td>
</tr>
</table>
</fieldset><br><br>
<fieldset>
<legend>Egna kommentarer</legend>
           <!--<table style="width:100%">-->
            <tr>
            <ul style="list-style-type:none">

<li class="label teaxtarea">
<td><label for="textarea">(Frivilligt) Det här tycker jag som förälder särskilt bra om på Kulturskolan</label></td>
<textarea name="question17" id="question17" rows="6" cols="40"><?php if (isset($question17)) { echo $question17; } ?></textarea>
</li>
<br><br><br>
<li class="label teaxtarea">
<label for="textarea">(Frivilligt) Det här tycker jag som förälder att man kan förbättra på Kulturskolan</label>
<textarea name="question18" id="question18" rows="6" cols="40"><?php if (isset($question18)) { echo $question18; } ?></textarea>
</li>
<br><br><br>
<li class="label teaxtarea">
<label for="textarea">(Frivilligt) Övrigt jag vill framföra till Kulturskolan som har med verksamheten/mitt barns lektioner att göra</label>
<textarea name="question19" id="question19" rows="6" cols="40"><?php if (isset($question19)) { echo $question19; } ?></textarea>
</li>
<br><br><br>
</tr>
</ul><!--</table>-->
</fieldset><br><br>

<fieldset class="submit">
<p style="text-align: center;"><input name="submit" type="submit" value="Skicka" /><input type="button" value="Rensa" onclick="window.location=''" /> 

</fieldset>
</form>
<div class="push"></div>
</div>
<div class="footer"><p>©Peter Mikkola 2016</p></div>
</body>
</html>