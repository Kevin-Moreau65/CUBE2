<?php
require_once('../../php/connexion.php');
$query = mysqli_query($conn, 'SELECT * FROM equipe');
$i = 0;
$option = "";
while ($team = mysqli_fetch_assoc($query)) {
  $i++;
  $teamnom = $team['Nom'];
  $option .= "<option value='$i'>$teamnom</option>";
}
?>
<!DOCTYPE html>

<head>
  <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@500&display=swap" rel="stylesheet" />
  <link href="/Site web/css/Index.css" rel="stylesheet" type="text/css" />
  <link href="/Site web/css/CreateMatch.css" rel="stylesheet" type="text/css" />
  <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css" />
  <meta charset="UTF-8" />
  <title>Préparation d'un match</title>
</head>

<body>
  <h1 id="Titre">Préparation d'un match</h1>
  <div id="CentreTitre">
    <h2 id="SousTitre">Paramètres du match</h2>
    <a id="étapes"><span id="Etapetext">Etape 1/3</span>
      <progress id="Barreetape" value="0.33"></progress>
    </a>
  </div>
  <!-----------------------------------------------------Pages 1--------------------------------------------------------->
  <div id="Etape1" class="Etape">
    <div class="rectangle">
      <div id="M1G">
        <h3>Domicile</h3>
        <select id="BoutonGauche" class="BoutonMenu" name="TeamDom">
          <option value="none" selected disabled hidden>
            Liste des équipes
          </option>
          <?php echo $option ?>
        </select>
      </div>
      <div id="M1D">
        <h3>Exterieur</h3>
        <select id="BoutonGaucheE" class="BoutonMenu" name="TeamExt">
          <option value="none" selected disabled hidden>
            Liste des équipes
          </option>
          <?php echo $option ?>
        </select>
      </div>
    </div>
    <div id="Arbitres">
      <h3>Arbitres</h3>
      <div id="AjArbitre" class="bouton">
        <h3>Ajouter</h3>
      </div>
    </div>
    <div class="rectangle">
      <div id="Date">
        <h3 id="DateTitre">Date</h3>
        <input id="DatePicker" class="BoutonMenu" type="date" oninput="IsVoid($('#DatePicker'))" />
      </div>
      <div id="Lieu">
        <h3 id="LieuTitre">Lieu</h3>
        <input id="Lieuinput" class="BoutonMenuInput" oninput="IsVoid($('#Lieuinput'))" />
      </div>
    </div>
    <div class="bouton" id="SaveFirstStep">
      <h3>Sauvegarder</h3>
    </div>
  </div>
  <!-----------------------------------------------------Pages 2--------------------------------------------------------->
  <div id="Etape2" class="PasPassé Etape">
    <div id="Menu-Gauche">
      <div id="Gauche">
        <div class="DIVswitch">
          <p>Domicile</p>
          <label class="switch">
            <input type="checkbox" id="switchDOM">
            <span class="slider round"></span>
          </label>
          <p>Neutre</p>
        </div>
        <h3 id="ColoneAttaquant">ATTAQUANT</h3>
        <div id="float" class="attaquant categorieDOM">
        </div>
        <h3 id="ColoneMilieu">MILIEU</h3>
        <div id="float" class="milieu categorieDOM">
        </div>
        <h3 id="ColoneDefenseur categorieDOM">DEFENSEUR</h3>
        <div id="float" class="defenseur categorieDOM">
        </div>
        <h3 id="ColoneGardien categorieDOM">GARDIEN</h3>
        <div id="float" class="gardien categorieDOM">
        </div>
        <h3 id="ColoneCapitaine">Capitaine</h3>
        <div class="Capitaine bouge" id="DivMaillot">
          <img class="Brassard Capitaine" src="/Site web/img/brassard.png" />
          <h4>CAPITAINE</h4>
        </div>
      </div>
    </div>

    <div id="Menu-Droit">
      <select id="BoutonDroit" class="BoutonMenu" name="Selec1">
        <option value="none" selected disabled hidden>
          Selection de la formation
        </option>
        <option value="0">4-4-2</option>
        <option value="1">4-4-2 losange</option>
        <option value="2">Coupe du monde 2018</option>
        <option value="3">5-3-2</option>
      </select>
      <div id="Droite">
        <h3 id="ColoneBanc">BANC (0/11)</h3>
        <h4 id="Warning">Il faut un minimum de 6 remplaçants</h4>
      </div>
    </div>
    <div id="TerrainMaillot">
      <div class="MaillotT" id="Maillot1">
        <img src="/Site web/img/maillot-blanc.png" />
        <h4>&nbsp;</h4>
      </div>
      <div class="MaillotT" id="Maillot2">
        <img src="/Site web/img/maillot-blanc.png" />
        <h4>&nbsp;</h4>
      </div>
      <div class="MaillotT" id="Maillot3">
        <img src="/Site web/img/maillot-blanc.png" />
        <h4>&nbsp;</h4>
      </div>
      <div class="MaillotT" id="Maillot4">
        <img src="/Site web/img/maillot-blanc.png" />
        <h4>&nbsp;</h4>
      </div>
      <div class="MaillotT" id="Maillot5">
        <img src="/Site web/img/maillot-blanc.png" />
        <h4>&nbsp;</h4>
      </div>
      <div class="MaillotT" id="Maillot6">
        <img src="/Site web/img/maillot-blanc.png" />
        <h4>&nbsp;</h4>
      </div>
      <div class="MaillotT" id="Maillot7">
        <img src="/Site web/img/maillot-blanc.png" />
        <h4>&nbsp;</h4>
      </div>
      <div class="MaillotT" id="Maillot8">
        <img src="/Site web/img/maillot-blanc.png" />
        <h4>&nbsp;</h4>
      </div>
      <div class="MaillotT" id="Maillot9">
        <img src="/Site web/img/maillot-blanc.png" />
        <h4>&nbsp;</h4>
      </div>
      <div class="MaillotT" id="Maillot10">
        <img src="/Site web/img/maillot-blanc.png" />
        <h4>&nbsp;</h4>
      </div>
      <div class="MaillotT" id="Maillot11">
        <img src="/Site web/img/maillot-blanc.png" />
        <h4>&nbsp;</h4>
      </div>
      <img id="Terrain" src="/Site web/img/Terrain-menu.jpg" />
    </div>
  </div>
  <!-----------------------------------------------------Pages 3--------------------------------------------------------->
  <div id="Etape3" class="PasPassé Etape">
    <div id="Menu-Gauche">
      <div id="Gauche">
        <div class="DIVswitch">
          <p>Exterieur</p>
          <label class="switch">
            <input type="checkbox" id="switchEXT">
            <span class="slider round"></span>
          </label>
          <p>Neutre</p>
        </div>
        <h3 id="ColoneAttaquant">ATTAQUANT</h3>
        <div id="float" class="attaquant categorieEXT">
        </div>
        <h3 id="ColoneMilieu">MILIEU</h3>
        <div id="float" class="milieu categorieEXT">
        </div>
        <h3 id="ColoneDefenseur">DEFENSEUR</h3>
        <div id="float" class="defenseur categorieEXT">
        </div>
        <h3 id="ColoneGardien">GARDIEN</h3>
        <div id="float" class="gardien categorieEXT">
        </div>
        <h3 id="ColoneCapitaine">CAPITAINE</h3>
        <div class="Capitaine bouge" id="DivMaillot">
          <img class="Brassard Capitaine" src="/Site web/img/brassard.png" />
          <h4>Capitaine</h4>
        </div>
      </div>
    </div>

    <div id="Menu-Droit">
      <select id="BoutonDroitE" class="BoutonMenu" name="Selec1">
        <option value="none" selected disabled hidden>
          Selection de la formation
        </option>
        <option value="0">4-4-2</option>
        <option value="1">4-4-2 losange</option>
        <option value="2">Coupe du monde 2018</option>
        <option value="3">5-3-2</option>
      </select>
      <div id="Droite" class="Droppable">
        <h3 id="ColoneBanc2">BANC (0/11)</h3>
        <h4 id="Warning">Il faut un minimum de 6 remplaçants</h4>
      </div>
    </div>
    <div id="TerrainMaillot">
      <div class="MaillotT" id="Maillot1E">
        <img src="/Site web/img/maillot-blanc.png" />
        <h4>&nbsp;</h4>
      </div>
      <div class="MaillotT" id="Maillot2E">
        <img src="/Site web/img/maillot-blanc.png" />
        <h4>&nbsp;</h4>
      </div>
      <div class="MaillotT" id="Maillot3E">
        <img src="/Site web/img/maillot-blanc.png" />
        <h4>&nbsp;</h4>
      </div>
      <div class="MaillotT" id="Maillot4E">
        <img src="/Site web/img/maillot-blanc.png" />
        <h4>&nbsp;</h4>
      </div>
      <div class="MaillotT" id="Maillot5E">
        <img src="/Site web/img/maillot-blanc.png" />
        <h4>&nbsp;</h4>
      </div>
      <div class="MaillotT" id="Maillot6E">
        <img src="/Site web/img/maillot-blanc.png" />
        <h4>&nbsp;</h4>
      </div>
      <div class="MaillotT" id="Maillot7E">
        <img src="/Site web/img/maillot-blanc.png" />
        <h4>&nbsp;</h4>
      </div>
      <div class="MaillotT" id="Maillot8E">
        <img src="/Site web/img/maillot-blanc.png" />
        <h4>&nbsp;</h4>
      </div>
      <div class="MaillotT" id="Maillot9E">
        <img src="/Site web/img/maillot-blanc.png" />
        <h4>&nbsp;</h4>
      </div>
      <div class="MaillotT" id="Maillot10E">
        <img src="/Site web/img/maillot-blanc.png" />
        <h4>&nbsp;</h4>
      </div>
      <div class="MaillotT" id="Maillot11E">
        <img src="/Site web/img/maillot-blanc.png" />
        <h4>&nbsp;</h4>
      </div>
      <img id="Terrain" src="/Site web/img/Terrain-menu.jpg" />
    </div>
  </div>
  <!----------------------------------------------------Flèche et autre éléments---------------------------------------------------------->
  <div id="Precedent">
    <h3>
      < <h4 id="BackStep">Menu principal</h4>
  </div>
  <div id="Suivant">
    <h3>></h3>
    <h4 id="NextStep">Equipe domicile</h4>
  </div>
  <div id="Darken"></div>
  <div id="CentreRetour" class="Centre">
    <div id="AlerteRetour">
      <h2>Retour</h2>
      <h3>Voulez-vous retourner au menu principal ?</h3>
      <h4>(Votre avancée ne sera pas sauvegarder)</h4>
      <h3 id="RetourMenu">Oui</h3>
      <h3 id="RetourPage">Non</h3>
    </div>
  </div>
  <div class="Centre">
    <div id="MenuArbitre">
      <h2>Ajouter des arbitres</h2>
      <h3>Arbitre principal</h3>
      <div class="LigneArbitre">
        <h4 class="bouton">+</h4>
        <h4>
          Nom :
          <input id="NomArbitreP" oninput="IsVoid($('#NomArbitreP'))" />
        </h4>
        <h4>
          Nationalité :
          <input id="NatArbitreP" oninput="IsVoid($('#NatArbitreP'))" />
        </h4>
      </div>
      <h3>Arbitres secondaires</h3>
      <div class="LigneArbitre">
        <h4 class="bouton">+</h4>
        <h4>
          Nom :
          <input id="NomArbitreSec1" oninput="IsVoid($('#NomArbitreSec1'))" />
        </h4>
        <h4>
          Nationalité :
          <input id="NatArbitreSec1" oninput="IsVoid($('#NatArbitreSec1'))" />
        </h4>
      </div>
      <div class="LigneArbitre">
        <h4 class="bouton">+</h4>
        <h4>
          Nom :
          <input id="NomArbitreSec2" oninput="IsVoid($('#NomArbitreSec2'))" />
        </h4>
        <h4>
          Nationalité :
          <input id="NatArbitreSec2" oninput="IsVoid($('#NatArbitreSec2'))" />
        </h4>
      </div>
      <div class="bouton" id="Back">
        <h3>Terminer</h3>
      </div>
    </div>
  </div>

  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
  <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
  <script src="/Site web/js/default.js"></script>
</body>