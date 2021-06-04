<?php
$db = new PDO('mysql:host=localhost;dbname=CUBES;charset=utf8', 'root', '');
    $team = $_POST['id'];
    $path = $_POST['type'];
    $r = "SELECT * FROM equipe WHERE id = $team";
    $query = $db->query($r);
    $result = $query->fetch();
    echo $result[$path];