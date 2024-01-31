//7 variables with movie names
var movie1 = "3 Idiots";
var movie2 = "Once upon a time in Hollywood";
var movie3 = "2Fast2Furious";
var movie4 = "Lunchbox";
var movie5 = "Ladies vs Ricky Behl";
var movie6 = "Forest Gump";
var movie7 = "John Wick";

// Array of my top movies
var topMovies = [movie6, movie1, movie3, movie4, movie7, movie5, movie2];

// variable for valid user input
var isValidInput = false;

var userInput = parseInt(prompt("Which top 7 movie would you like?","Pick a number: 1-7"));

// While Loop to repeatedly ask the user for input until it's valid
while (!isValidInput) {
    //Ask the user to pick a movie
    userInput = parseInt(prompt("Which top 7 movie would you like?","Pick a number: 1-7"));

    // Check if the input is a valid number between 1 and 7
    if (!isNaN(userInput) && userInput >= 1 && userInput <= 7 && userInput !==null) {
        isValidInput = true;
        // Display the chosen movie using a pop-up
        alert("Number " + userInput + " on the list is " + topMovies[userInput - 1]);
    } else {
        // Display an error message using a pop-up
        alert("Please enter a number between 1 and 7!");
    }
}

// Output messages to the console with a loop
for (var i = 0; i < topMovies.length; i++) {
    console.log("Movie " + (i + 1) + ": " + topMovies[i]);
}
