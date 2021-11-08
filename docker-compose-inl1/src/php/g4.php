<style>
    a {
        display: inline-block;
        margin-top: 10px;
        padding: 10px;
        border: 1px solid gray;
        background-color: #ccc;
    }

    a:hover {
        background-color: #ddd;
    }
</style>

<a href="?tal1=3&tal2=6">3 + 6</a>
<a href="?tal1=2&tal2=8">2 + 8</a>
<a href="?tal1=3&tal2=3">3 + 3</a>

<br /><br />

<?php

if (!isset($_GET['tal1'])) {
    echo "Välj ett tal för att räkna ut!";
} else {
    $tal1 = (int)$_GET['tal1'];
    $tal2 = (int)$_GET['tal2'];

    /* Skriv din kod här: */

}
?>