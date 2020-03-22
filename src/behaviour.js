$(document).ready(function() {
  let thermostat = new Thermostat();
  let datares;
  getData = () => {
    $.get("http://localhost:9292/thermostat", function(data) {
      console.log("here is some data, yay");
      console.log(data);
    });
  };

  getData();

  $(function() {
    $.ajax({
      type: "GET",
      url: "http://localhost:9292/test",
      success: function() {
        console.log("success");
      }
    });
  });

  data = $.parseJSON(
    $.ajax({
      url: `http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${APIKEY}&units=metric`,
      dataType: "json",
      async: false
    }).responseText
  );

  $("#current-temperature").text(Math.round(data.main.temp) + " degrees");

  $("#current-city").change(function() {
    let city = $("#current-city").val();
    $.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric`,
      function(data) {
        $("#current-temperature").text(Math.round(data.main.temp) + " degrees");
        $("#city").text(city.charAt(0).toUpperCase() + city.substring(1));
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
    if (thermostat.powerSavingOn) {
      $(".power-saving-size").remove();
      $('<p class="power-saving-size">Power Saving On</p>').appendTo(
        ".power-saving-on"
      );
    } else {
      $(".power-saving-size").remove();
      $('<p class="power-saving-size">Power Saving Off</p>').appendTo(
        ".power-saving-on"
      );
    }
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

  $("#saveButton").on("click", function() {
    saveData();
  });

  saveData = async () => {
    let city = $("#current-city").val();
    console.log("hello there");
    try {
      console.log("we have hac ahv");
      await $.post("http://localhost:9292/thermostat", {
        temperature: thermostat.currentTempertaure,
        city: city
      });

      console.log("success");
    } catch (error) {
      console.error(error);
    }
  };
});
