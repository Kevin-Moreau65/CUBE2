<?php
if (isset($_POST['team'])) {
    require_once('connexion.php');
    $team = $_POST['team'];
    $r = "SELECT * FROM joueurs WHERE Equipe = $team";
    $query = mysqli_query($conn, $r);
    $equipe = array();
    $gardien = array();
    $defenseur = array();
    $milieu = array();
    $attaquant = array();
    while ($joueur = mysqli_fetch_assoc($query)) {
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
