$("#BoutonDroit").change(function () {
  if ($(this).val() == "4-4-2") {
    $("#Maillot1").animate({ left: "42%", top: "25%" }, 250);
    $("#Maillot2").animate({ right: "42%", top: "25%" }, 250);
    $("#Maillot3").animate({ left: "35%", top: "43%" }, 250);
    $("#Maillot4").animate({ left: "44%", top: "43%" }, 250);
    $("#Maillot5").animate({ right: "44%", top: "43%" }, 250);
    $("#Maillot6").animate({ left: "61%", top: "43%" }, 250);
    $("#Maillot7").animate({ left: "35%", bottom: "33%" }, 250);
    $("#Maillot8").animate({ left: "44%", bottom: "33%" }, 250);
    $("#Maillot9").animate({ right: "44%", bottom: "33%" }, 250);
    $("#Maillot10").animate({ right: "35%", bottom: "33%" }, 250);    
  } 
  
  else if ($(this).val() == "4-4-2 losange") {
    $("#Maillot1").animate({ left: "42%", top: "21%" }, 250);
    $("#Maillot2").animate({ right: "42%", top: "21%" }, 250);
    $("#Maillot3").animate({ left: "48%", top: "32%" }, 250);
    $("#Maillot4").animate({ left: "42%", top: "40%" }, 250);
    $("#Maillot5").animate({ right: "42%", top: "40%" }, 250);
    $("#Maillot6").animate({ left: "48%", top: "50%" }, 250);
    $("#Maillot7").animate({ left: "35%", bottom: "37%" }, 250);
    $("#Maillot8").animate({ left: "43%", bottom: "30%" }, 250);
    $("#Maillot9").animate({ right: "43%", bottom: "30%" }, 250);
    $("#Maillot10").animate({ right: "35%", bottom: "37%" }, 250);
  }

  else if ($(this).val() == "Coupe du monde 2018") {
    $("#Maillot1").animate({ left: "48%", top: "28%" }, 250);
    $("#Maillot2").animate({ left: "37%", top: "42%" }, 250);
    $("#Maillot3").animate({ left: "48%", top: "42%" }, 250);
    $("#Maillot4").animate({ left: "59%", top: "42%" }, 250);
    $("#Maillot5").animate({ left: "43%", top: "52%" }, 250);
    $("#Maillot6").animate({ left: "53%", top: "52%" }, 250);
    $("#Maillot7").animate({ left: "35%", bottom: "35%" }, 250);
    $("#Maillot8").animate({ left: "43%", bottom: "30%" }, 250);
    $("#Maillot9").animate({ right: "43%", bottom: "30%" }, 250);
    $("#Maillot10").animate({ right: "35%", bottom: "35%" }, 250);
  }

  else if ($(this).val() == "5-3-2") {
    $("#Maillot1").animate({ left: "43%", top: "27%" }, 250);
    $("#Maillot2").animate({ right: "43%", top: "27%", left:"null" }, 250);
    $("#Maillot3").animate({ left: "39%", top: "43%" }, 250);
    $("#Maillot4").animate({ left: "48%", top: "48%" }, 250);
    $("#Maillot5").animate({ left: "57%", top: "39%" }, 250);
    $("#Maillot6").animate({ left: "34%", top: "39%" }, 250);
    $("#Maillot7").animate({ left: "40%", bottom: "32%" }, 250);
    $("#Maillot8").animate({ left: "43%", bottom: "30%" }, 250);
    $("#Maillot9").animate({ right: "40%", bottom: "32%" }, 250);
    $("#Maillot10").animate({ right: "34%", bottom: "39%" }, 250);
  }
});
