$("#BoutonGauche").change(function () {
  if ($(this).val() == "Pau FC") {
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
  if ($(this).val() == "4-4-2") {
    $("#Maillot1").animate({ left: "42%", top: "25%" }, 250);
    $("#Maillot2").animate({ left: "53.5%", top: "25%" }, 250);
    $("#Maillot3").animate({ left: "35%", top: "43%" }, 250);
    $("#Maillot4").animate({ left: "44%", top: "43%" }, 250);
    $("#Maillot5").animate({ left: "51.5%", top: "43%" }, 250);
    $("#Maillot6").animate({ left: "60.5%", top: "43%" }, 250);
    $("#Maillot7").animate({ left: "35%", bottom: "33%" }, 250);
    $("#Maillot8").animate({ left: "44%", bottom: "33%" }, 250);
    $("#Maillot9").animate({ left: "51.5%", bottom: "33%" }, 250);
    $("#Maillot10").animate({ left: "60.5%", bottom: "33%" }, 250);
  } else if ($(this).val() == "4-4-2 losange") {
    $("#Maillot1").animate({ left: "42%", top: "21%" }, 250);
    $("#Maillot2").animate({ left: "53.5%", top: "21%" }, 250);
    $("#Maillot3").animate({ left: "48%", top: "32%" }, 250);
    $("#Maillot4").animate({ left: "42%", top: "40%" }, 250);
    $("#Maillot5").animate({ left: "53.5%", top: "40%" }, 250);
    $("#Maillot6").animate({ left: "48%", top: "50%" }, 250);
    $("#Maillot7").animate({ left: "35%", bottom: "37%" }, 250);
    $("#Maillot8").animate({ left: "43%", bottom: "30%" }, 250);
    $("#Maillot9").animate({ left: "52.5%", bottom: "30%" }, 250);
    $("#Maillot10").animate({ left: "60.5%", bottom: "37%" }, 250);
  } else if ($(this).val() == "Coupe du monde 2018") {
    $("#Maillot1").animate({ left: "48%", top: "28%" }, 250);
    $("#Maillot2").animate({ left: "37%", top: "42%" }, 250);
    $("#Maillot3").animate({ left: "48%", top: "42%" }, 250);
    $("#Maillot4").animate({ left: "59%", top: "42%" }, 250);
    $("#Maillot5").animate({ left: "43%", top: "52%" }, 250);
    $("#Maillot6").animate({ left: "53%", top: "52%" }, 250);
    $("#Maillot7").animate({ left: "35%", bottom: "35%" }, 250);
    $("#Maillot8").animate({ left: "43%", bottom: "30%" }, 250);
    $("#Maillot9").animate({ left: "53%", bottom: "30%" }, 250);
    $("#Maillot10").animate({ left: "60.5%", bottom: "35%" }, 250);
  } else if ($(this).val() == "5-3-2") {
    $("#Maillot1").animate({ left: "43%", top: "27%" }, 250);
    $("#Maillot2").animate({ left: "53.5%", top: "27%" }, 250);
    $("#Maillot3").animate({ left: "39%", top: "43%" }, 250);
    $("#Maillot4").animate({ left: "48%", top: "48%" }, 250);
    $("#Maillot5").animate({ left: "56.5%", top: "43%" }, 250);
    $("#Maillot6").animate({ left: "35%", top: "56%" }, 250);
    $("#Maillot7").animate({ left: "40%", bottom: "32%" }, 250);
    $("#Maillot8").animate({ left: "48%", bottom: "30%" }, 250);
    $("#Maillot9").animate({ left: "55.5%", bottom: "32%" }, 250);
    $("#Maillot10").animate({ left: "60.5%", bottom: "37.5%" }, 250);
  }
});
var State = 0;
$("#Suivant").click(function () {
  if (State == 0) {
    GoForward(1);
    State++;
  } else if (State == 1) {
    GoForward(2);
    State++;
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
  } else if (State == 1) {
    GoBack(2);
    State--;
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
