<?php

if (!empty($_GET) && isset($_GET)) {

    $user='root';
    $password='root';
    $dbConnection = new PDO('mysql:host=localhost;dbname=biere',$user,$password);

    $namebiere = $_GET['nom'];
    $degresbiere = $_GET['degres'];
    $prixbiere = $_GET['prix'];
    $couleurbiere = $_GET['couleur'];
    $amertumebiere = $_GET['amertume'];
    $paysbiere = $_GET['pays'];

    $query = "INSERT INTO listebiere (nom, degres, prix, couleur, amertume, pays) VALUES (:namebiere, :degresbiere, :prixbiere, :couleurbiere, :amertumebiere, :paysbiere)";


    $preparedQuery = $dbConnection ->prepare($query);

    $preparedQuery->bindParam(":namebiere", $_GET['nom']);
    $preparedQuery->bindParam(":degresbiere", $_GET['degres']);
    $preparedQuery->bindParam(":prixbiere", $_GET['prix']);
    $preparedQuery->bindParam(":couleurbiere", $_GET['couleur']);
    $preparedQuery->bindParam(":amertumebiere", $_GET['amertume']);
    $preparedQuery->bindParam(":paysbiere", $_GET['pays']);


    $preparedQuery ->execute();
    var_dump($preparedQuery);
    echo "ok";
}
else{
    alert('erreur');
}


// var_dump($namebiere, $degresbiere, $prixbiere, $typebiere);

