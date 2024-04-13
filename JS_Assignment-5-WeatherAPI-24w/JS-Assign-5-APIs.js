//JS-Assign-5-APIs

// Listen for window load.
window.onload = function () {

    // Set Button Listeners
    document.getElementById("Toronto").onclick = function () { getWeatherData("Toronto"); };
    document.getElementById("Saskatoon").onclick = function () { getWeatherData("Saskatoon"); };

    // Define function to fetch weather data from API
    function getWeatherData(city) {

        // Get DOM elements to display weather data
        var output = document.getElementById("output");
        var out_location = document.getElementById("location");
        var out_icon = document.getElementById("icon");
        var out_temperature = document.getElementById("temperature");
        var out_conditions = document.getElementById("conditions");
        var out_sunset = document.getElementById("sunset");

        //API Key
        var APIKey = "8745cc0dae3abff69d73189d115c8c2c";

        //API URL
        var APIurl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + APIKey;

        // A new XMLHttpRequest object
        var xhr = new XMLHttpRequest();

        // Initialize the request
        xhr.open("GET", APIurl, true);

        // specify Response as JSON
        xhr.responseType = "json";

        // Send the request
        xhr.send(null);

        // A function to handle the response
        xhr.onreadystatechange = function () {

            // Check if the request is complete
            if (xhr.readyState === 4) {

                // Check if the request was successful
                if (xhr.status === 200) {

                    // Parse the JSON response
                    var DATA = xhr.response;
                                    
                    // Output Data to DOM
                    output.style.display = "block";
                    out_location.innerHTML = DATA.name;
                    out_icon.innerHTML = '<img src="https://openweathermap.org/img/w/' + DATA.weather[0].icon + '.png"/>';
                    out_temperature.innerHTML = Math.round(DATA.main.temp) + "&degC";
                    conditions = DATA.weather[0].description;
                    out_conditions.innerHTML = conditions.charAt(0).toUpperCase() + conditions.slice(1) + ".";
                    out_sunset.innerHTML = new Date(DATA.sys.sunset * 1000).toLocaleTimeString();
                } else {

                    // Handle The Error
                    output.style.display = "block";
                    output.innerHTML = "Error fetching weather data. Please try again later.";
                }
            } // end if readyState
        }; // end readyState listener function
    } // end getWeatherData function
}; // end window.onload
