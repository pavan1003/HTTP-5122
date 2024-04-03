//LAB 11 - APIs

//Listen for window load the jQuery way
window.onload = function () {
  var out_location = document.getElementById("location");
  var out_temperature = document.getElementById("temperature");
  var out_conditions = document.getElementById("conditions");
  var conditions = "";

  //API Key
  var mySecureAPIKey = "8745cc0dae3abff69d73189d115c8c2c";
  // var mySecureAPIKey = "";

  //API URL
  var APIurl =
    "https://api.openweathermap.org/data/2.5/weather?q=Toronto&units=metric&appid=" +
    mySecureAPIKey;

  var xhr = new XMLHttpRequest();
  xhr.open("GET", APIurl, true);
  // specify Response as JSON
  xhr.responseType = "json";
  xhr.send(null);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        var DATA = xhr.response;
        console.log(DATA)

        // Output to DOM
        out_location.innerHTML = DATA.name;
        out_temperature.innerHTML = Math.round(DATA.main.temp) + " &degC";
        conditions = DATA.weather[0].description;
        out_conditions.innerHTML = conditions.charAt(0).toUpperCase() + conditions.slice(1) + ".";
      } else {
        // Handle The Error
        out_location.innerHTML = "API call was unsuccessful";

      }
    } // end if readyState
  }; // end readyState listener function
};
