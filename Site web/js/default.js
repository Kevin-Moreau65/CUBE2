$("#BoutonGauche").change(function () {
  /*Bouton de changement d'équipe*/
  if ($(this).val() == "Pau FC") {
    $(".MaillotD").attr("src", "/Site web/img/maillot-paufc.png");
    $(".MaillotGoal").attr("src", "/Site web/img/maillot-gardien.png");
  }
  if ($(this).val() == "Cesi") {
    $(".MaillotD").attr("src", "/Site web/img/maillot-cesi.png");
    $(".MaillotGoal").attr("src", "/Site web/img/maillot-gardiencesi.png");
  }
  if ($(this).val() == "PSG") {
    $(".MaillotD").attr("src", "/Site web/img/maillot-psg.png");
    $(".MaillotGoal").attr("src", "/Site web/img/maillot-gardien.png");
  }
  if ($(this).val() == "Dortmund") {
    $(".MaillotD").attr("src", "/Site web/img/maillot-dortmund.png");
    $(".MaillotGoal").attr("src", "/Site web/img/maillot-gardien.png");
  }
  if ($(this).val() == "Juventus") {
    $(".MaillotD").attr("src", "/Site web/img/maillot-juventus.png");
    $(".MaillotGoal").attr("src", "/Site web/img/maillot-gardien.png");
  }
  RefreshMaillot();
});
$("#BoutonGaucheE").change(function () {
  /*Bouton de changement d'équipe*/ if ($(this).val() == "Pau FC") {
    $(".MaillotDE").attr("src", "/Site web/img/maillot-paufc.png");
    $(".MaillotGoalE").attr("src", "/Site web/img/maillot-gardien.png");
  }
  if ($(this).val() == "PSG") {
    $(".MaillotDE").attr("src", "/Site web/img/maillot-psg.png");
    $(".MaillotGoalE").attr("src", "/Site web/img/maillot-gardien.png");
  }
  if ($(this).val() == "Dortmund") {
    $(".MaillotDE").attr("src", "/Site web/img/maillot-dortmund.png");
    $(".MaillotGoalE").attr("src", "/Site web/img/maillot-gardien.png");
  }
  if ($(this).val() == "Juventus") {
    $(".MaillotDE").attr("src", "/Site web/img/maillot-juventus.png");
    $(".MaillotGoal").attr("src", "/Site web/img/maillot-gardien.png");
  }
  RefreshMaillot();
});

$("#BoutonDroit").change(function () {
  /*Bouton de changement de formation*/ if ($(this).val() == "4-4-2") {
    $("#Maillot1").animate({ left: "39.5%", top: "13%" }, 250);
    $("#Maillot2").animate({ left: "53.5%", top: "13%" }, 250);
    $("#Maillot3").animate({ left: "28%", top: "33%" }, 250);
    $("#Maillot4").animate({ left: "38%", top: "33%" }, 250);
    $("#Maillot5").animate({ left: "55%", top: "33%" }, 250);
    $("#Maillot6").animate({ left: "65%", top: "33%" }, 250);
    $("#Maillot7").animate({ left: "28%", bottom: "27%" }, 250);
    $("#Maillot8").animate({ left: "38%", bottom: "27%" }, 250);
    $("#Maillot9").animate({ left: "55%", bottom: "27%" }, 250);
    $("#Maillot10").animate({ left: "65%", bottom: "27%" }, 250);
  } else if ($(this).val() == "4-4-2 losange") {
    $("#Maillot1").animate({ left: "39.5%", top: "13%" }, 250);
    $("#Maillot2").animate({ left: "53.5%", top: "13%" }, 250);
    $("#Maillot3").animate({ left: "46.5%", top: "28%" }, 250);
    $("#Maillot4").animate({ left: "39%", top: "40%" }, 250);
    $("#Maillot5").animate({ left: "54%", top: "40%" }, 250);
    $("#Maillot6").animate({ left: "46.5%", top: "52%" }, 250);
    $("#Maillot7").animate({ left: "29%", bottom: "30%" }, 250);
    $("#Maillot8").animate({ left: "39%", bottom: "17%" }, 250);
    $("#Maillot9").animate({ left: "54%", bottom: "17%" }, 250);
    $("#Maillot10").animate({ left: "64%", bottom: "30%" }, 250);
  } else if ($(this).val() == "Coupe du monde 2018") {
    $("#Maillot1").animate({ left: "46.5%", top: "13%" }, 250);
    $("#Maillot2").animate({ left: "33%", top: "33%" }, 250);
    $("#Maillot3").animate({ left: "46.5%", top: "33%" }, 250);
    $("#Maillot4").animate({ left: "60%", top: "33%" }, 250);
    $("#Maillot5").animate({ left: "39%", top: "46%" }, 250);
    $("#Maillot6").animate({ left: "54%", top: "46%" }, 250);
    $("#Maillot7").animate({ left: "28%", bottom: "27%" }, 250);
    $("#Maillot8").animate({ left: "39%", bottom: "17%" }, 250);
    $("#Maillot9").animate({ left: "54%", bottom: "17%" }, 250);
    $("#Maillot10").animate({ left: "65%", bottom: "27%" }, 250);
  } else if ($(this).val() == "5-3-2") {
    $("#Maillot1").animate({ left: "40%", top: "10%" }, 250);
    $("#Maillot2").animate({ left: "53%", top: "10%" }, 250);
    $("#Maillot3").animate({ left: "34%", top: "30%" }, 250);
    $("#Maillot4").animate({ left: "46.5%", top: "38%" }, 250);
    $("#Maillot5").animate({ left: "59.5%", top: "30%" }, 250);
    $("#Maillot6").animate({ left: "28.5%", top: "47.5%" }, 250);
    $("#Maillot7").animate({ left: "36%", bottom: "23%" }, 250);
    $("#Maillot8").animate({ left: "46.5%", bottom: "18%" }, 250);
    $("#Maillot9").animate({ left: "57%", bottom: "23%" }, 250);
    $("#Maillot10").animate({ left: "64.5%", bottom: "32.5%" }, 250);
  }
});
$("#BoutonDroitE").change(function () {
  /*Bouton de changement de formation*/ if ($(this).val() == "4-4-2") {
    $("#Maillot1E").animate({ left: "39.5%", top: "13%" }, 250);
    $("#Maillot2E").animate({ left: "53.5%", top: "13%" }, 250);
    $("#Maillot3E").animate({ left: "28%", top: "33%" }, 250);
    $("#Maillot4E").animate({ left: "38%", top: "33%" }, 250);
    $("#Maillot5E").animate({ left: "55%", top: "33%" }, 250);
    $("#Maillot6E").animate({ left: "65%", top: "33%" }, 250);
    $("#Maillot7E").animate({ left: "28%", bottom: "27%" }, 250);
    $("#Maillot8E").animate({ left: "38%", bottom: "27%" }, 250);
    $("#Maillot9E").animate({ left: "55%", bottom: "27%" }, 250);
    $("#Maillot10E").animate({ left: "65%", bottom: "27%" }, 250);
  } else if ($(this).val() == "4-4-2 losange") {
    $("#Maillot1E").animate({ left: "39.5%", top: "13%" }, 250);
    $("#Maillot2E").animate({ left: "53.5%", top: "13%" }, 250);
    $("#Maillot3E").animate({ left: "46.5%", top: "28%" }, 250);
    $("#Maillot4E").animate({ left: "39%", top: "40%" }, 250);
    $("#Maillot5E").animate({ left: "54%", top: "40%" }, 250);
    $("#Maillot6E").animate({ left: "46.5%", top: "52%" }, 250);
    $("#Maillot7E").animate({ left: "29%", bottom: "30%" }, 250);
    $("#Maillot8E").animate({ left: "39%", bottom: "17%" }, 250);
    $("#Maillot9E").animate({ left: "54%", bottom: "17%" }, 250);
    $("#Maillot10E").animate({ left: "64%", bottom: "30%" }, 250);
  } else if ($(this).val() == "Coupe du monde 2018") {
    $("#Maillot1E").animate({ left: "46.5%", top: "13%" }, 250);
    $("#Maillot2E").animate({ left: "33%", top: "33%" }, 250);
    $("#Maillot3E").animate({ left: "46.5%", top: "33%" }, 250);
    $("#Maillot4E").animate({ left: "60%", top: "33%" }, 250);
    $("#Maillot5E").animate({ left: "39%", top: "46%" }, 250);
    $("#Maillot6E").animate({ left: "54%", top: "46%" }, 250);
    $("#Maillot7E").animate({ left: "28%", bottom: "27%" }, 250);
    $("#Maillot8E").animate({ left: "39%", bottom: "17%" }, 250);
    $("#Maillot9E").animate({ left: "54%", bottom: "17%" }, 250);
    $("#Maillot10E").animate({ left: "65%", bottom: "27%" }, 250);
  } else if ($(this).val() == "5-3-2") {
    $("#Maillot1E").animate({ left: "40%", top: "10%" }, 250);
    $("#Maillot2E").animate({ left: "53%", top: "10%" }, 250);
    $("#Maillot3E").animate({ left: "34%", top: "30%" }, 250);
    $("#Maillot4E").animate({ left: "46.5%", top: "38%" }, 250);
    $("#Maillot5E").animate({ left: "59.5%", top: "30%" }, 250);
    $("#Maillot6E").animate({ left: "28.5%", top: "47.5%" }, 250);
    $("#Maillot7E").animate({ left: "36%", bottom: "23%" }, 250);
    $("#Maillot8E").animate({ left: "46.5%", bottom: "18%" }, 250);
    $("#Maillot9E").animate({ left: "57%", bottom: "23%" }, 250);
    $("#Maillot10E").animate({ left: "64.5%", bottom: "32.5%" }, 250);
  }
});
/*-----------------------------Bouton droite et gauche-----------------------------------------------------------------------------*/
var State = 0;
$("#Suivant").click(function () {
  if (State == 0) {
    GoForward(1);
    State++;
    $("#NextStep").text("Paramètre du match");
    $("#BackStep").text("\u00c9quipe domicile");
    $("#SousTitre").text("\u00c9quipe extérieur");
  } else if (State == 1) {
    GoForward(2);
    State++;
    $("#NextStep").text("Lancement du match");
    $("#BackStep").text("\u00c9quipe extérieur");
    $("#SousTitre").text("Paramètre du match");
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
/*----------------------------------------------------------------------------------------------------------*/
let NomJoueur;
let MaillotSRC;
let MaillotDIV;
let FromDrop;
let Dropped;
let Num = 0;
$(function () {
  $(".bouge").draggable({
    helper: "clone",
    tolerance: "pointer",
    greedy: true,
    start: function () {
      $(this).hide();
      NomJoueur = $(this).children("h4").text();
      MaillotSRC = $(this).children("img").attr("src");
      MaillotDIV = $(this);
      FromDrop = $(this).parent();
    },
    stop: function() {
      if (Dropped === false) {
        $(this).show()
      } else {
        Dropped = false
      }
    }
  });
  $("#Droite").droppable({
    tolerance: "pointer",
    drop: function () {
      $(this).append(MaillotDIV);
      $(this).children(MaillotDIV).show();
      Dropped = true;
    },
  });
  $("#Gauche").droppable({
    tolerance: "pointer",
    drop: function () {
      $(MaillotDIV).show();
      Dropped = true;
    },
  });
  $(".MaillotT>img").droppable({
    tolerance: "pointer",
    drop: function () {
      $(this).parent().children("img").attr("src", MaillotSRC);
      $(this).parent().children("h4").text(NomJoueur);
      $(this).parent().css({ opacity: "1" });
      Dropped = true;
    },
  });
});
function RefreshMaillot() {
  $(".MaillotT>img").attr("src", "/Site web/img/maillot-blanc.png");
  $(".MaillotT>h4").text("");
  $(".MaillotT").css({ opacity: "0.5" });
  $(".bouge").show();
  $("#Droite > .bouge").remove();
}
