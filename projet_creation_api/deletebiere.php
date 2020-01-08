<?php

if (!empty($_GET) && isset($_GET)) {

    $user='root';
    $password='root';
    $dbConnection = new PDO('mysql:host=localhost;dbname=biere',$user,$password);


    $query = "DELETE FROM biere.listebiere WHERE id = :biere_id";
    $deleteQuery = $dbConnection ->prepare($query);
    $deleteQuery ->bindParam(':biere_id', $_GET['id']);
    $deleteQuery ->execute();

    echo "ok";
}
else{
    alert('erreur');
}