<?php
$db = new PDO('mysql:host=localhost;dbname=cesi;charset=utf8', 'root', '');
$r = "INSERT INTO eleves (nom, prenom, email, datedenaissance, tel) VALUE (:nom,:prenom,:email,:datedeN, :tel)";
$sql = $db->prepare($r);
$sql->bindParam(':nom', $_POST["nom"], PDO::PARAM_STR);
$sql->bindParam(':prenom', $_POST["prenom"], PDO::PARAM_STR);
$sql->bindParam(':email', $_POST["email"], PDO::PARAM_STR);
$sql->bindParam(':datedeN', $_POST["datedeN"], PDO::PARAM_STR);
$sql->bindParam(':tel', $_POST["tel"], PDO::PARAM_STR);
$resultat = $sql->execute();