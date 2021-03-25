$("#BoutonDroit").change(function () {
  if ($(this).val() == "4-4-2") {
    $("#Maillot1").animate({ left: "45%", top: "23%" }, 250);
    $("#Maillot2").animate({ left: "45%", top: "40%" }, 250);
  } else if ($(this).val() == "3-5-2") {
    $("#Maillot1").animate({ left: "35%", top: "23%" }, 250);
    $("#Maillot2").animate({ left: "60%", top: "23%" }, 250);
  }
});
