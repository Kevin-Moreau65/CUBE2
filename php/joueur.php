<?php
if (isset($_POST['team'])) {
    $db = new PDO('mysql:host=localhost;dbname=CUBES;charset=utf8', 'root', '');
    $team = $_POST['team'];
    $r = "SELECT * FROM joueurs WHERE Equipe = $team";
    $query = $db->query($r);
    $equipe = array();
    while ($joueur = $query->fetch()) {
        $equipe[] = $joueur['Nom'];
    }
    echo json_encode($equipe);
}
