<?php
$host = 'cubefootbdd.mysql.database.azure.com';
$username = 'footadmin@cubefootbdd';
$password = 'Viacesi65';
$db_name = 'cubes';

//Initializes MySQLi
$conn = mysqli_init();

mysqli_ssl_set($conn, NULL, NULL, "/php/DigiCertGlobalRootG2.crt.pem", NULL, NULL);

// Establish the connection
mysqli_real_connect($conn, $host, $username, $password, $db_name, 3306, MYSQLI_CLIENT_SSL, MYSQLI_CLIENT_SSL_DONT_VERIFY_SERVER_CERT);
