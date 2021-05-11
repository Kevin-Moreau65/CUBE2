var State = 0;
$("#Suivant").click(function () {
    if (State == 0) {
        GoForward(1);
        State++;
        $("#NextStep").text("Etape 2/3");
        $("#BackStep").text("Etape 1/3");
        $("#SousTitre").text("Etape 3/3");
      } else if (State == 1) {
        GoForward(2);
        State++;
        $("#NextStep").text("Etape 3/3");
        $("#BackStep").text("Etape 1/3");
        $("#SousTitre").text("Etape 2/3");
      } else {
        console.log("NON");
      }
    });
    $("#Precedent").click(function () {
      if (State == 3) {
        GoBack(4);
        State--;
      } else if (State == 2) {
        GoBack(3);
        State--;
        $("#NextStep").text("Création");
        $("#BackStep").text("\u00c9quipe domicile");
        $("#SousTitre").text("\u00c9quipe extérieur");
      } else if (State == 1) {
        GoBack(2);
        State--;
        $("#NextStep").text("\u00c9quipe extérieur");
        $("#BackStep").text("Menu Principal");
        $("#SousTitre").text("\u00c9quipe domicile");
      } else if (State == 0) {
        $("#AlerteRetour, #Darken").show();
        $("#AlerteRetour, #Darken").animate({ opacity: "1" }, 100);
      } else {
        console.log("NON");
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