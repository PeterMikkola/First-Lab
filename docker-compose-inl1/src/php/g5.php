<!-- Lägg in ditt formulär här -->

<form method="post" action="">

    Skriv ett djur: <input type="text" name="djur"><br />
    Skriv ett namn: <input type="text" name="namn"><br />
    Skriv en färg: <input type="text" name="farg"><br />
    Skriv en hobby: <input type="text" name="hobby"></br />
    <input type="submit" value="Berätta en saga!" />

</form>

<br /><br />

<?php

if (!$_POST) {
    echo "Fyll i rutorna så berättar jag en saga";
} else {
    /*Lägg in php-koden som berättar sagan här */

}

?>