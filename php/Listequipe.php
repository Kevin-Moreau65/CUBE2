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
    $r = "SELECT * FROM equipe WHERE id = $team";
    $query = mysqli_query($conn, $r);
    $result = mysqli_fetch_assoc($query);
    echo $result[$_POST['donnee']];
}
