// Ask user for team number
var teamNumber = parseInt(prompt("Which team number do you belong to?"));

// Check if the entered value is valid (numeral,  not text)
// Also checked the Fixed team number 4
if (isNaN(teamNumber) || teamNumber !== 4 || teamNumber === null || teamNumber === "") {
  // Display "Access denied!" for invalid value/team number.
  alert("Access denied! Please enter a valid team number.");
} else {
  // Prompt user for first name
  var firstName = prompt("Please enter your first name:");

  if (firstName !== null) {
    // switch cases of valid team members names
    switch (firstName.toLowerCase()) {
      case "pavan":
        alert("Welcome Pavan Mistry!");
        break;
      case "alejandro":
        alert("Welcome Alejandro Castro!");
        break;
      case "jinil":
        alert("Welcome Jinil Parekh!");
        break;
      case "joel":
        alert("Welcome Joel Tuffour!");
        break;
      case "irina":
        alert("Welcome Irina Balanel!");
        break;
      default:
        alert("Access denied!");
        break;
    }
  } else alert("Access denied!");
}
