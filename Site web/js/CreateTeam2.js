$("#Precedent").click(function () {
    if (State == 3) {
      GoBack(4);
      State--;
    } else if (State == 2) {
      GoBack(3);
      State--;
      $("#NextStep").text("Paramètre du match");
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