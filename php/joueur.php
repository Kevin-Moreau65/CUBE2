<?php
if (isset($_POST['team'])) {
    $db = new PDO('mysql:host=localhost;dbname=CUBES;charset=utf8', 'root', '');
    $team = $_POST['team'];
    $r = "SELECT * FROM joueurs WHERE Equipe = $team";
    $query = $db->query($r);
    $equipe = array();
    $gardien = array();
    $defenseur = array();
    $milieu = array();
    $attaquant = array();
    while ($joueur = $query->fetch()) {
        if ($joueur['Poste'] === "Gardien") {
            $gardien[] = $joueur['Nom'];
        } else if ($joueur['Poste'] === "Défenseur") {
            $defenseur[] = $joueur['Nom'];
        } else if ($joueur['Poste'] === "Milieu") {
            $milieu[] = $joueur['Nom'];
        } else {
            $attaquant[] = $joueur['Nom'];
        }
    }
    $equipe['gardien'] = $gardien;
    $equipe['defenseur'] = $defenseur;
    $equipe['milieu'] = $milieu;
    $equipe['attaquant'] = $attaquant;
    echo json_encode($equipe);
}
