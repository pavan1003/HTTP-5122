//#### LAB 4 - FUNCTIONS ####
//PART 3:  WALKING THE DOG

//################## CREATE YOUR checkTemp FUNCTION
//This function will checks if it is safe or not to walk the dog based on the temperature input.
//It expects to receive the current temperature as a parameter (variable name: currentTemp, data type: number).
//It will return a boolean value - true if it's safe to walk, false otherwise.
function checkTemp(currentTemp) {
  if (currentTemp > 30 || currentTemp < -10) {
    return false;
  } else {
    return true;
  }
}

//################## LOGIC THAT OUTPUTS MESSAGES BASED ON FUNCTION RESULTS
var walkDog = checkTemp(prompt("Whats the current Temperature outside?"));

walkDog
  ? alert("You're good, have a nice walk!")
  : alert("Yikes! This is no weather for dog walking!");
