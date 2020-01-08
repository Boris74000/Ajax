<?php
if (!empty($_GET) && isset($_GET)) {
    $user='root';
    $password='root';
    $dbConnection = new PDO('mysql:host=localhost;dbname=biere',$user,$password);

    $query = "UPDATE listebiere SET 

    nom = :namebiere,
    degres = :degresbiere,
    prix = :prixbiere,
    couleur = :couleurbiere,
    amertume = :amertumebiere,
    pays = :paysbiere

    WHERE 
    id = :biere_id";

    $updateBiere = $dbConnection->prepare($query);

    $updateBiere->bindParam(":namebiere", $_GET['nom']);
    $updateBiere->bindParam(":degresbiere", $_GET['degres']);
    $updateBiere->bindParam(":prixbiere", $_GET['prix']);
    $updateBiere->bindParam(":couleurbiere", $_GET['couleur']);
    $updateBiere->bindParam(":amertumebiere", $_GET['amertume']);
    $updateBiere->bindParam(":paysbiere", $_GET['pays']);
    $updateBiere->bindParam(":biere_id", $_GET['id']);

    $updateBiere->execute();

    echo "ok";

    // var_dump($updateBiere);
}
else{
    alert('erreur');
}
