<?php
if (isset($_POST['team'])) {
    require_once('connexion.php');
    $team = $_POST['team'];
    $r = "SELECT * FROM equipe WHERE id = $team";
    $query = mysqli_query($conn, $r);
    $result = mysqli_fetch_assoc($query);
    echo $result[$_POST['donnee']];
}
