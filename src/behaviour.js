$(document).ready(function() {
  let thermostat = new Thermostat();

  data = $.parseJSON(
    $.ajax({
      url: `http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${APIKEY}&units=metric`,
      dataType: "json",
      async: false
    }).responseText
  );

  $("#current-temperature").text(data.main.temp + " degrees C");

  console.log(data.main.temp);

  $("#current-city").change(function() {
    let city = $("#current-city").val();
    $.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric`,
      function(data) {
        $("#current-temperature").text(data.main.temp);
        $("#city").text(city);
      }
    );
  });

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
