<?php
$user='root';
$password='root';
$dbConnection = new PDO('mysql:host=localhost;dbname=biere',$user,$password);

$query = 'SELECT id,nom FROM biere.listebiere';
$preparedQuery = $dbConnection ->prepare($query);
$preparedQuery ->execute();
$bieres = $preparedQuery->fetchAll();

echo json_encode($bieres);
// var_dump($bieres);




