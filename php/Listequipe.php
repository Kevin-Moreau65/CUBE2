<?php
if (isset($_POST['team'])) {
    $db = new PDO('mysql:host=localhost;dbname=CUBES;charset=utf8', 'root', '');
    $team = $_POST['team'];
    $r = "SELECT * FROM equipe WHERE id = $team";
    $query = $db->query($r);
    $result = $query->fetch();
    echo $result[$_POST['donnee']];
}