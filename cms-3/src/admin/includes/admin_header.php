<?php session_start(); ?>
<?php ob_start(); ?>
<?php include "db.php"; ?>
<?php include "functions.php"; ?>


<?php 




if(isset($_SESSION['user_role'])) {



} else {

header("location: ../index.php");


}




 ?>







<!DOCTYPE html>
<html lang="en">


<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>SB Admin - Bootstrap Admin Template</title>

    <!-- Bootstrap Core CSS -->
    <link href="css/bootstrap.min.css" rel="stylesheet">

    <!-- Custom CSS -->
    <link href="css/sb-admin.css" rel="stylesheet">

    <!-- Custom Fonts -->
    <link href="font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
    
    <style>
    #online { color: #FF0000; } /* CSS link color */
     </style> 
      

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-select@1.13.14/dist/css/bootstrap-select.min.css">
<link href="css/styles.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/bootstrap-select@1.13.14/dist/js/bootstrap-select.min.js"></script>
<script type="text/javascript" src="https://www.google.com/jsapi"></script>
<script src="http://tinymce.cachefly.net/4.1/tinymce.min.js"></script>
<!-- Can use this one below as well -->
<script src="https://cdn.tiny.cloud/1/gym667gvhhe4qu2x4g5zmg16kccizgm2bdf9bobn7iqlkxtz/tinymce/5/tinymce.min.js" referrerpolicy="origin">
</script>
 <script src="js/Emoij_add_post.js"></script>
 <script src="js/TinyMCE_dark.js"></script>
<script src="js/jquery.js"></script>
<link href="css/style_2.css" rel="stylesheet">
<style>a:link {
 color: text-light !important;
}</style>
</head>

<body>



