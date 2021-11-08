<a href="?djur=katt">Katt</a>
<a href="?djur=hund">Hund</a>
<a href="?djur=delfin">Delfin</a>
<a href="?djur=kräfta">Kräfta</a>

<br/><br/>

<?php

if (!isset($_GET['djur'])) {
    echo "Välj ett djur";
    $djur = '';
} else {
    $djur = $_GET['djur'];
}

/* Skriv din kod här: */

?>