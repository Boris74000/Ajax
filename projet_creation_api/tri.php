<?php

if (!empty($_GET) && isset($_GET)) {
    $user='root';
    $password='root';
    $dbConnection = new PDO('mysql:host=localhost;dbname=biere',$user,$password);

    if(!empty($_GET['couleur'])){
        $query = "SELECT * FROM listebiere WHERE couleur LIKE :couleurbiere";

        $triBiere = $dbConnection->prepare($query);

        $triBiere->bindParam(":couleurbiere", $_GET['couleur']);

        $triBiere->execute();
        $showBiere1 = $triBiere->fetchAll();
        echo json_encode($showBiere1);
    }
    elseif (!empty($_GET['pays'])){
        $query = "SELECT * FROM listebiere WHERE pays LIKE :paysbiere";

        $triBiere = $dbConnection->prepare($query);
    
        $triBiere->bindParam(":paysbiere", $_GET['pays']);
    
        $triBiere->execute();
        $showBiere2 = $triBiere->fetchAll();
        echo json_encode($showBiere2);
    }
    elseif (!empty($_GET['degres'])){
        $query = "SELECT * FROM listebiere WHERE degres < :degresbiere";

        $triBiere = $dbConnection->prepare($query);
    
        $triBiere->bindParam(":degresbiere", $_GET['degres']);
    
        $triBiere->execute();
        $showBiere3 = $triBiere->fetchAll();
        echo json_encode($showBiere3);
    }

// $tabfinal=array_merge($showBiere1, $showBiere2, $showBiere3 );
// echo json_encode($tabfinal);

   // var_dump($showBiere);
}
else{
    alert('erreur');
}
