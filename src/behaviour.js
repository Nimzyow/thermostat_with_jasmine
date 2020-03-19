$(document).ready(function() {
  let thermostat = new Thermostat();

  //  $(".medBackground")
  //    .$("#temp")
  //    .text(thermostat.currentTempertaure);

  $("#incrementButton").on("click", function() {
    thermostat.increase();
    $("#temp").text(thermostat.currentTempertaure);
    checkColor();
  });

  $("#decrementButton").on("click", function(e) {
    thermostat.decrease();
    $("#temp").text(thermostat.currentTempertaure);
    checkColor();
  });

  $("#powerOnOff").on("click", function(e) {
    thermostat.powerSavingSwitch();
    thermostat.powerSavingOn
      ? $("#powerOnOff").text("Power Saving On")
      : $("#powerOnOff").text("Power Saving Off");
  });

  $("#resetButton").on("click", function() {
    thermostat.reset();
    $("#temp").text(thermostat.currentTempertaure);
  });

  checkColor = () => {
    $("#background")
      .removeClass()
      .addClass(thermostat.energyUsage());
  };
});
