let State = 0;
//State = 0 = étape 1
//State = 1 = étape 2
//State = 2 = étape 3
function setStep(Back, Current, Next, Step) {
  $("#BackStep").text(Back);
  $("#SousTitre").text(Current);
  $("#Etapetext").text("Etape " + Step + "/3");
  $("#NextStep").text(Next);
}
$("#Suivant").click(function () {
  let valeur = $("#Barreetape").val();
  if (State == 0) {
    GoForward(1);
    State++;
    setStep("Paramètres de l'équipe","Saisie des joueurs","Apperçu",2);
    move(valeur, 0.66);
  } else if (State == 1) {
    GoForward(2);
    State++;
    setStep("Saisie des joueurs","Apperçu","Valider",3);
    move(valeur, 1);
  }
});
$("#Precedent").click(function () {
  let valeur = $("#Barreetape").val();
  if (State == 2) {
    GoBack(3);
    State--;
    setStep("Paramètres de l'équipe","Saisie des joueurs","Apperçu",2);
    move(valeur, 0.66);
  } else if (State == 1) {
    GoBack(2);
    State--;
    setStep("Menu Principal", "Paramètres de l'équipe", "Saisie des joueurs", 1);
    move(valeur, 0.33);
  } else if (State == 0) {
    $("#AlerteRetour, #Darken").show();
    $("#AlerteRetour, #Darken").animate({ opacity: "1" }, 100);
    $("#Etapetext").text("Etape 0/3");
    move(valeur, 0);
    return;
  }
});

function GoBack(i) {
  iMoins = i--;
  $("#Etape" + i).toggleClass("Passé");
  $("#Etape" + iMoins).toggleClass("PasPassé");
}
function GoForward(i) {
  iPlus = i++;
  $("#Etape" + i).toggleClass("PasPassé");
  $("#Etape" + iPlus).toggleClass("Passé");
}

    // 2 timer, un pour chaque flèches
    var Precedent, Suivant;
    var Timer = [Precedent, Suivant];
    // Quand la souris passe sur les flèches
    $("#Suivant, #Precedent").hover(
      function () {
        // reset le timer de l'animation
        clearTimeout(Timer[Timer.indexOf($(this).attr("id"))]);
        // animation
        $(this).animate({ width: "9.5em" }, 200);
      },
      function () {
        // Délai de désactivation de l'animation
        DelayHover(this, $(this).attr("id"));
      }
    );
    function DelayHover(Element, i) {
      clearTimeout(Timer[Timer.indexOf(i)]);
      // active le timer de la flèche correspondante
      Timer[Timer.indexOf(i)] = setTimeout(function () {
        // remet la flèche dans sa taille d'origine
        $(Element).animate({ width: "1.2em" }, 200);
        return;
      }, 800);
    }
    $("#RetourMenu").click(function () {
      window.location.href = "/Site web/index.html";
    });
    $("#RetourPage").click(function () {
      $("#AlerteRetour, #Darken").animate({ opacity: "0" }, 100);
      setTimeout(function () {
        $("#AlerteRetour, #Darken").hide();
      }, 100);
    });



    
    // INPUT TYPE FILE AFFICHER APPERCU AVANT ENVOI ////////////////////////////////////////
    function readURL(input) {
      if (input.files && input.files[0]) {
          var reader = new FileReader();

          reader.onload = function (e) {
              $('#blah')
                  .attr('src', e.target.result)
                  .width("5%")
                  .height("15%");
          };

          reader.readAsDataURL(input.files[0]);
      }
  }

  function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#clah')
                .attr('src', e.target.result)
                .width("5%")
                .height("15%");
        };

        reader.readAsDataURL(input.files[0]);
    }
}

function readURL(input) {
  if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e) {
          $('#dlah')
              .attr('src', e.target.result)
              .width("5%")
              .height("15%");
      };

      reader.readAsDataURL(input.files[0]);
  }
}
// BARRE DE CHARGEMENT -------------------------------------------------
function move(value, nextvalue) {
  //Cette fonction fait l'animation de la barre de progrès
  //value = valeur de la barre, nextvalue = valeur que doit prendre la barre
  //On vérifie d'abord si la valeur que doit prendre la barre est plus petite ou plus grande que
  //la valeur actuelle
  //Ici value est plus petit que nextvalue donc la barre doit monter
  if (value < nextvalue) {
    //On initialise un interval : la fonction frame sera appeller tout les 22 millième de seconde
    //tant que value ne sera pas égal a next value
    let int = setInterval(frame, 22);
    function frame() {
      if (value >= nextvalue) {
        //Si la condition est remplie l'interval se stop
        clearInterval(int);
      } else {
        //sinon value s'incrémente de 0.01 puis envoie cette value a la barre de progression
        //Vu que l'intervalle est trés petit, cela donne une impression d'animation de la barre
        value += 0.01;
        $("#Barreetape").val(value);
      }
    }
  } else {
    //Meme chose qu'en haut, hors vu que value est plus grand que nextvalue, la barre doit descendre
    let int = setInterval(frame, 22);
    function frame() {
      if (value <= nextvalue) {
        clearInterval(int);
      } else {
        value -= 0.01;
        $("#Barreetape").val(value);
      }
    }
  }
}



// BOUTON SUPPRIMER ------------------------------------------------------

/* //////////////////////////////////////////////
Plus d'informations liées à la solution  : 
//////////////////////////////////////////////
## equivalent de classList.add et classList.remove
https://www.zonecss.fr/cours-css-javascript/manipuler-les-valeurs-de-l-attribut-class.html#pKoWax00000.codepen
*/
/*
Toutes le fonctions ci-dessous peuvent être optimisées
elles sont même volontairement non optimisées
Elles sont là juste pour vous présenter le concept à vous de les améliorer 
*/
var str= ""; 
for(var i =0;i< 5;i++){
  str=str+'<tr>'
    +'<td>Ligne '+i+'</td>'
    +'<td>Ligne '+i+'</td>'
    +'<td>Ligne '+i+'</td>'
    +'<td><span class="bt-supprimer">Sup Ligne '+i+'<span></td>'
    +'</tr>';
}
document.getElementById("tbody").innerHTML=str; 
document.getElementById("tbody3").innerHTML=str;

var delC =null, oBtSup =  null;
document.addEventListener('DOMContentLoaded',function(){
  oTable = document.getElementById('table_dpi');
  oBtSup = oTable.getElementsByClassName('bt-supprimer');
  for(var i = 0; i<oBtSup.length; i++){
    oBtSup[i].addEventListener('click',  supprimerLigne);
  }//for

  oTable = document.getElementById('table_dpi3');
  oBtSup = oTable.getElementsByClassName('bt-supprimer');
  for(var i = 0; i<oBtSup.length; i++){
    oBtSup[i].addEventListener('click',  supprimerLigne3);
  }//for
});

/*
Méthode 1 basic 
compatible avec tous les navigateurs même tres anciens
*/
function supprimerLigne(oEvent){
  var oEleBt = oEvent.currentTarget,
      oTr = oEleBt.parentNode.parentNode ;
  oTr.remove(); 
}//fct

// $("tonbouton").click(function()

function addRow()
{
    $("#Tableau").append('<tr><td>joueur 20</td><td>pierre</td><td>Richard</td><td>Richard</td><td class="btncr">'+
    '<img src="/Site web/img/crayon-modifié.png"><td class="btntb">'+
    '<img src="/Site web/img/icons8-supprimer-24.png"></tr>')
}

