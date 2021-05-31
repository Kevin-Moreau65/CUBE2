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
  }µ

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

