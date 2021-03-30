$("#BoutonGauche").change(function () {
  /*Bouton de changement d'équipe*/ if ($(this).val() == "Pau FC") {
    $("#Maillot1").attr("src", "img/maillot-paufc.png");
    $("#Maillot2").attr("src", "img/maillot-paufc.png");
    $("#Maillot3").attr("src", "img/maillot-paufc.png");
    $("#Maillot4").attr("src", "img/maillot-paufc.png");
    $("#Maillot5").attr("src", "img/maillot-paufc.png");
    $("#Maillot6").attr("src", "img/maillot-paufc.png");
    $("#Maillot7").attr("src", "img/maillot-paufc.png");
    $("#Maillot8").attr("src", "img/maillot-paufc.png");
    $("#Maillot9").attr("src", "img/maillot-paufc.png");
    $("#Maillot10").attr("src", "img/maillot-paufc.png");
    $(".Maillot").css({ opacity: "1" });
  } else if ($(this).val() == "PSG") {
    $("#Maillot1").attr("src", "img/maillot-psg.png");
    $("#Maillot2").attr("src", "img/maillot-psg.png");
    $("#Maillot3").attr("src", "img/maillot-psg.png");
    $("#Maillot4").attr("src", "img/maillot-psg.png");
    $("#Maillot5").attr("src", "img/maillot-psg.png");
    $("#Maillot6").attr("src", "img/maillot-psg.png");
    $("#Maillot7").attr("src", "img/maillot-psg.png");
    $("#Maillot8").attr("src", "img/maillot-psg.png");
    $("#Maillot9").attr("src", "img/maillot-psg.png");
    $("#Maillot10").attr("src", "img/maillot-psg.png");
    $(".Maillot").css({ opacity: "1" });
  }
});

$("#BoutonDroit").change(function () {
  /*Bouton de changement de formation*/ if ($(this).val() == "4-4-2") {
    $("#Maillot1").animate({ left: "39.5%", top: "13%" }, 250);
    $("#Maillot2").animate({ left: "53.5%", top: "13%" }, 250);
    $("#Maillot3").animate({ left: "28%", top: "33%" }, 250);
    $("#Maillot4").animate({ left: "38%", top: "33%" }, 250);
    $("#Maillot5").animate({ left: "55%", top: "33%" }, 250);
    $("#Maillot6").animate({ left: "65%", top: "33%" }, 250);
    $("#Maillot7").animate({ left: "28%", bottom: "33%" }, 250);
    $("#Maillot8").animate({ left: "38%", bottom: "33%" }, 250);
    $("#Maillot9").animate({ left: "55%", bottom: "33%" }, 250);
    $("#Maillot10").animate({ left: "65%", bottom: "33%" }, 250);
  } else if ($(this).val() == "4-4-2 losange") {
    $("#Maillot1").animate({ left: "39.5%", top: "13%" }, 250);
    $("#Maillot2").animate({ left: "53.5%", top: "13%" }, 250);
    $("#Maillot3").animate({ left: "46.5%", top: "28%" }, 250);
    $("#Maillot4").animate({ left: "39%", top: "40%" }, 250);
    $("#Maillot5").animate({ left: "54%", top: "40%" }, 250);
    $("#Maillot6").animate({ left: "46.5%", top: "52%" }, 250);
    $("#Maillot7").animate({ left: "29%", bottom: "32%" }, 250);
    $("#Maillot8").animate({ left: "39%", bottom: "24%" }, 250);
    $("#Maillot9").animate({ left: "54%", bottom: "24%" }, 250);
    $("#Maillot10").animate({ left: "64%", bottom: "32%" }, 250);
  } else if ($(this).val() == "Coupe du monde 2018") {
    $("#Maillot1").animate({ left: "46.5%", top: "13%" }, 250);
    $("#Maillot2").animate({ left: "33%", top: "33%" }, 250);
    $("#Maillot3").animate({ left: "46.5%", top: "33%" }, 250);
    $("#Maillot4").animate({ left: "60%", top: "33%" }, 250);
    $("#Maillot5").animate({ left: "39%", top: "46%" }, 250);
    $("#Maillot6").animate({ left: "54%", top: "46%" }, 250);
    $("#Maillot7").animate({ left: "28%", bottom: "32%" }, 250);
    $("#Maillot8").animate({ left: "39%", bottom: "24%" }, 250);
    $("#Maillot9").animate({ left: "54%", bottom: "24%" }, 250);
    $("#Maillot10").animate({ left: "65%", bottom: "32%" }, 250);
  } else if ($(this).val() == "5-3-2") {
    $("#Maillot1").animate({ left: "40%", top: "15%" }, 250);
    $("#Maillot2").animate({ left: "53%", top: "15%" }, 250);
    $("#Maillot3").animate({ left: "34%", top: "36%" }, 250);
    $("#Maillot4").animate({ left: "46.5%", top: "43%" }, 250);
    $("#Maillot5").animate({ left: "59.5%", top: "36%" }, 250);
    $("#Maillot6").animate({ left: "28.5%", top: "52.5%" }, 250);
    $("#Maillot7").animate({ left: "36%", bottom: "27%" }, 250);
    $("#Maillot8").animate({ left: "46.5%", bottom: "24%" }, 250);
    $("#Maillot9").animate({ left: "57%", bottom: "27%" }, 250);
    $("#Maillot10").animate({ left: "64.5%", bottom: "37.5%" }, 250);
  }
});
var State = 0;
$("#Suivant").click(function () {
  if (State == 0) {
    GoForward(1);
    State++;
    $("#NextStep").text("Paramètre du match");
    $("#BackStep").text("\u00c9quipe domicile");
  } else if (State == 1) {
    GoForward(2);
    State++;
    $("#NextStep").text("Lancement du match");
    $("#BackStep").text("\u00c9quipe extérieur");
  } else {
    console.log("NON");
  }
});
$("#Precedent").click(function () {
  if (State == 0) {
    window.location.href = "index.html";
  }
});
$("#Precedent").click(function () {
  if (State == 3) {
    GoBack(4);
    State--;
  } else if (State == 2) {
    GoBack(3);
    State--;
    $("#NextStep").text("Paramètre du match");
    $("#BackStep").text("\u00c9quipe domicile");
  } else if (State == 1) {
    GoBack(2);
    State--;
    $("#NextStep").text("\u00c9quipe extérieur");
    $("#BackStep").text("Menu Principale");
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
