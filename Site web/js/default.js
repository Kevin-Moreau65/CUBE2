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
//Création d'une classe permettant de pouvoir stocker le left et le top/bottom en une seule variable
class posmaillot {
  constructor(left, botop) {
    this.left = left + "%";
    this.botop = botop + "%";
  }
}
let form442 = [
  //Le none est là pour que le tableau commence a l'index 1
  "none",
  //Les maillots sont dans l'ordre et ont le left puis le top/bottom
  new posmaillot(39.5, 13),
  new posmaillot(53.5, 13),
  new posmaillot(28, 33),
  new posmaillot(38, 33),
  new posmaillot(55, 33),
  new posmaillot(65, 33),
  new posmaillot(28, 27),
  new posmaillot(38, 27),
  new posmaillot(55, 27),
  new posmaillot(65, 27),
];
let form442los = [
  "none",
  new posmaillot(39.5, 13),
  new posmaillot(53.5, 13),
  new posmaillot(46.5, 28),
  new posmaillot(39, 40),
  new posmaillot(54, 40),
  new posmaillot(46.5, 52),
  new posmaillot(29, 30),
  new posmaillot(39, 17),
  new posmaillot(54, 17),
  new posmaillot(64, 30),
];
let formCDM = [
  "none",
  new posmaillot(46.5, 13),
  new posmaillot(33, 33),
  new posmaillot(46.5, 33),
  new posmaillot(60, 33),
  new posmaillot(39, 46),
  new posmaillot(54, 46),
  new posmaillot(28, 27),
  new posmaillot(39, 17),
  new posmaillot(54, 17),
  new posmaillot(65, 27),
];
let form532 = [
  "none",
  new posmaillot(40, 10),
  new posmaillot(53, 10),
  new posmaillot(34, 30),
  new posmaillot(46.5, 38),
  new posmaillot(59.5, 30),
  new posmaillot(28.5, 47.5),
  new posmaillot(36, 23),
  new posmaillot(46.5, 18),
  new posmaillot(57, 23),
  new posmaillot(64.5, 32.5),
];
//Ce tableau est la pour permettre de retrouver une formation grace a la value de la liste de selection
let formarray = [form442, form442los, formCDM, form532];
//Maillot = l'id, leftpos = left, botoppos = top/bottom, i pour identifier si il faut mettre bottom ou top
function FormationMaillot(Maillot, leftpos, botoppos, i) {
  if (i <= 6) {
    $(Maillot).animate({ left: leftpos, top: botoppos }, 250);
  } else {
    $(Maillot).animate({ left: leftpos, bottom: botoppos }, 250);
  }
}
$("#BoutonDroit, #BoutonDroitE").change(function () {
  //Si la dernière lettre de l'id de la liste est t, c'est automatiquement la formation de
  //l'équipe a domicile que l'on doit changer
  if ($(this).attr("id").slice(-1) === "t") {
    //On retrouve la formation voulue grace a la value de la liste et le tableau contenant toute les
    //formations
    array = formarray[$(this).val()];
    for (i = 1; i <= 10; i++) {
      //i commence a 1 pour faciliter la selection des maillots
      array[i];
      FormationMaillot("#Maillot" + i, array[i].left, array[i].botop, i);
    }
  } else {
    array = formarray[$(this).val()];
    for (i = 1; i <= 10; i++) {
      array[i];
      FormationMaillot("#Maillot" + i + "E", array[i].left, array[i].botop, i);
    }
  }
});
/*-----------------------------Bouton droite et gauche-----------------------------------------------------------------------------*/
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
    setStep("Paramètre du match","\u00c9quipe domicile","\u00c9quipe extérieur",2);
    move(valeur, 0.66);
  } else if (State == 1) {
    GoForward(2);
    State++;
    setStep("\u00c9quipe domicile","\u00c9quipe extérieur","Lancement du match",3);
    move(valeur, 1);
  }
});
$("#Precedent").click(function () {
  let valeur = $("#Barreetape").val();
  if (State == 2) {
    GoBack(3);
    State--;
    setStep("Paramètre du match","\u00c9quipe domicile","\u00c9quipe extérieur",2);
    move(valeur, 0.66);
  } else if (State == 1) {
    GoBack(2);
    State--;
    setStep("Menu Principal", "Paramètre du match", "\u00c9quipe domicile", 1);
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
let Precedent, Suivant;
let Timer = [Precedent, Suivant];
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
  let valeur = $("#Barreetape").val();
  $("#AlerteRetour, #Darken").animate({ opacity: "0" }, 100);
  setTimeout(function () {
    $("#AlerteRetour, #Darken").hide();
  }, 100);
  move(valeur, 0.33);
  $("#Etapetext").text("Etape 1/3");
});
/*----------------------------------------------------------------------------------------------------------*/
let NomJoueur;
let MaillotSRC;
let MaillotDIV;
let FromDrop;
let IDdrag;
let remplacant = 0;
let remplacantE = 0;
let Droite = false;
let Dropped = false;
$(function () {
  $(".bouge").draggable({
    helper: "clone",
    tolerance: "pointer",
    start: function () {
      $(this).hide();
      NomJoueur = $(this).children("h4").text();
      MaillotSRC = $(this).children("img").attr("src");
      MaillotDIV = $(this);
      FromDrop = $(this).parent();
      IDdrag = $(this).parent().attr("id");
    },
    stop: function () {
      if (Dropped === false) {
        $(this).show();
      } else {
        Dropped = false;
        if (IDdrag === "Droite") {
          $(this).remove();
        }
      }
    },
  });
  $(".DragCapitaine").draggable({
    helper: "clone",
    tolerance: "pointer",
    stop: function () {
      if (Dropped === false) {
        $(this).show();
      } else {
        Dropped = false;
      }
    },
  });
  $("#Droite, .Droppable").droppable({
    tolerance: "pointer",
    drop: function () {
      if (MaillotDIV.hasClass("Capitaine") === false) {
        Droite = true;
        $(this).append(MaillotDIV);
        $(this).children(MaillotDIV).show();
        Dropped = true;
        if ($(this).hasClass("Droppable")) {
          nombreRemplacant(IDdrag, true);
        }
        nombreRemplacant(IDdrag);
      }
    },
  });
  $("#Gauche").droppable({
    tolerance: "pointer",
    drop: function () {
      $(MaillotDIV).show();
      Dropped = true;
      nombreRemplacant(IDdrag);
    },
  });
  $(".MaillotT>img").droppable({
    tolerance: "pointer",
    drop: function () {
      if (MaillotDIV.hasClass("Capitaine")) {
        $(this)
          .parent()
          .append('<img src="' + MaillotSRC + '" class="bouge Capitaine">');
        $(this).parent().children("img.Capitaine").css({
          position: "absolute",
          zIndex: "999999",
          marginTop: "-18.5%",
        });
      } else {
        $(this).parent().children("img").attr("src", MaillotSRC);
        $(this).parent().children("h4").text(NomJoueur);
        $(this).parent().css({
          opacity: "1",
        });
        $($(this).parent().children("h4")).css({
          opacity: "1",
        });
      }
      Dropped = true;
      nombreRemplacant(IDdrag);
    },
  });
});
function RefreshMaillot() {
  //Cette fonction sert a reset les maillot des terrain ainsi que ceux dispo en cas de changement d'équipe
  $(".MaillotT>img").attr("src", "/Site web/img/maillot-blanc.png");
  //On réattribut des maillot blanc aux maillots du terrain puis on les remet d'origine
  $(".MaillotT>img.Capitaine").remove();
  //On enlève le capitaine
  $(".MaillotT>h4").css({ opacity: "0" });
  $(".MaillotT").css({ opacity: "0.5" });
  $(".bouge").show();
  //On affiche tout les maillot des joueurs dispo
  $("#Droite > .bouge").remove();
  //On suprimme tout les joueurs coté remplacant
}
function nombreRemplacant(ID, Ext) {
  if (Ext === true){
    if (Droite === true) {
      //Si oui on incrémente le nombre de remplacant
      remplacantE++;
      //Puis on actualise l'affichage
      $("#ColoneBanc2").text("BANC (" + remplacantE + "/11)");
      //On reinitialise le flag
      Droite = false;
    } else if (ID === "Droite") {
      //Si le maillot qui vient d'etre drop vient de la zone remplacant c'est qu'on a enlever un remplacant
      remplacantE--;
      //On décrémente puis on actualise
      $("#ColoneBanc2").text("BANC (" + remplacantE + "/11)");
    }
    if (remplacantE >= 6) {
      //Si le nombre de remplacant est supérieur ou égal a 1 on estime que l'utilisateur a pris connaissance
      //du nombre mini de remplacant nécéssaire, on enlève le message
      $(".Droppable > #Warning").text(" ");
    } else {
      //Si le nombre de remplacant retombe a 0, on remet le warning
      $(".Droppable > #Warning").text("Il faut un minimum de 6 remplacants");
    }
  } else {
  //On vérifie si le maillot a était drop sur la zone des remplacant
  if (Droite === true) {
    //Si oui on incrémente le nombre de remplacant
    remplacant++;
    //Puis on actualise l'affichage
    $("#ColoneBanc").text("BANC (" + remplacant + "/11)");
    //On reinitialise le flag
    Droite = false;
  } else if (ID === "Droite") {
    //Si le maillot qui vient d'etre drop vient de la zone remplacant c'est qu'on a enlever un remplacant
    remplacant--;
    //On décrémente puis on actualise
    $("#ColoneBanc").text("BANC (" + remplacant + "/11)");
  }
  if (remplacant >= 6) {
    //Si le nombre de remplacant est supérieur ou égal a 1 on estime que l'utilisateur a pris connaissance
    //du nombre mini de remplacant nécéssaire, on enlève le message
    $("#Warning").text(" ");
  } else {
    //Si le nombre de remplacant retombe a 0, on remet le warning
    $("#Warning").text("Il faut un minimum de 6 remplacants");
  }
}}
function Selectchange(Select) {
  //Cette fonction permet de masquer l'équipe selectionner dans l'autre liste, ce qui empeche de
  //selectionner deux fois la meme équipe
  //Value va prendre la valeur de l'élément de la liste sélectionner
  let value;
  //On vérifie si la liste où l'élément à était selectionner viens de domicile ou exterieur
  if (Select === "Dom") {
    //La liste est Domicile
    //On montre toute les valeurs de l'autre liste pour faire un "reset"
    $("#BoutonGaucheE > option").show();
    value = $("#BoutonGauche").val();
    //Puis on cache l'élément sélectionner dans l'autre liste
    $("#BoutonGaucheE > option:contains('" + value + "')").hide();
  } else if (Select === "Ext") {
    $("#BoutonGauche > option").show();
    value = $("#BoutonGaucheE").val();
    $("#BoutonGauche > option:contains('" + value + "')").hide();
  }
}
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
$("#AjArbitre").click(function () {
  $("#MenuArbitre,#Darken").show();
  $("#MenuArbitre,#Darken").animate({ opacity: "1" }, 250);
});
$("#Back").click(function () {
  $("#MenuArbitre,#Darken").animate({ opacity: "0" }, 250);
  setTimeout(function () {
    $("#MenuArbitre,#Darken").hide();
  }, 250);
});
$("#Back").click(function () {
  IsVoidArbitre();
});
function IsVoid(Input, Title) {
  //Title = Titre de l'input et input = l'input
  // Si on veut mettre que l'input en rouge si il est vide
  if (Title === undefined) {
    if (Input.val() === "" || Input.val() === null) {
      Input.addClass("Void");
      return true;
    } else {
      Input.removeClass("Void");
      return;
    }
    //Si on veut mettre son titre
  } else {
    if (Input.val() === "" || Input.val() === null) {
      Title.addClass("Red");
      return true;
    } else {
      Title.removeClass("Red");
      return;
    }
  }
}
function IsVoidArbitre() {
  //On utilise 2 fois cette suite, autant en faire un fonction
  //L'array sert a stocker si oui ou non chaque input est vide (true) ou non (false)
  //Je le fait de cette sorte car un if ne s'arreterait qu'au premier true
  let array = [];
  array.push(IsVoid($("#NatArbitreP")));
  array.push(IsVoid($("#NomArbitreP")));
  array.push(IsVoid($("#NatArbitreSec1")));
  array.push(IsVoid($("#NomArbitreSec1")));
  array.push(IsVoid($("#NatArbitreSec2")));
  array.push(IsVoid($("#NomArbitreSec2")));
  //Si l'index (la position dans l'array) de true === -1 cela veut dire qu'il n'existe pas dans l'array
  //et donc que tous les champs sont remplie
  if (array.indexOf(true) !== -1) {
    //Arbitre sera en rouge ainsi que le/les champs d'arbitre vide
    $("#Arbitres>h3").addClass("Red");
    return true;
  } else {
    //Arbitre ainsi que tt les champs d'arbitre seront normaux
    $("#Arbitres>h3").removeClass("Red");
    return false;
  }
}
$("#SaveFirstStep").click(function () {
  //Meme méthode qu'en haut mais avec tout les champs de la page
  let array = [];
  array.push(IsVoid($("#Lieuinput"), $("#LieuTitre")));
  array.push(IsVoid($("#DatePicker"), $("#DateTitre")));
  array.push(
    IsVoid($("#BoutonGaucheE"), $("#BoutonGaucheE").parent().children("h3"))
  );
  array.push(
    IsVoid($("#BoutonGauche"), $("#BoutonGauche").parent().children("h3"))
  );
  array.push(IsVoidArbitre());
  if (array.indexOf(true) !== -1) {
    //On affiche une alerte pour indiquer que la sauvegarde est impossible du a des champs mal remplie
    alert(
      "Pour sauvegarder la première étape il est important de remplir tout les champs."
    );
  }
});
