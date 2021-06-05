<?php
$host = 'cubefootbdd.mysql.database.azure.com';
$username = 'footadmin@cubefootbdd';
$password = 'Viacesi65';
$db_name = 'cubes';
if (isset($_POST['team'])) {
    $conn = mysqli_init();

    mysqli_ssl_set($conn, NULL, NULL, "/php/DigiCertGlobalRootG2.crt.pem", NULL, NULL);

    // Establish the connection
    mysqli_real_connect($conn, $host, $username, $password, $db_name, 3306, MYSQLI_CLIENT_SSL, MYSQLI_CLIENT_SSL_DONT_VERIFY_SERVER_CERT);
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
