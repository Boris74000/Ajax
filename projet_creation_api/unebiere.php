<?php
$user='root';
$password='root';
$dbConnection = new PDO('mysql:host=localhost;dbname=biere',$user,$password);


$idbiere = $_GET['id'];
$query = "SELECT * FROM biere.listebiere WHERE id = $idbiere";
$preparedQuery = $dbConnection ->prepare($query);
$preparedQuery ->execute();
$bieres = $preparedQuery->fetch();

echo json_encode($bieres);



