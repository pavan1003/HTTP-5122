//#### LAB 4 - FUNCTIONS ####
//PART 2:  AN AVERAGE FUNCTION

//################## CREATE YOUR AVERAGE FUNCTION
//This function takes five numbers and returns their average to one decimal place.
function averageOfFiveNumbers(num1, num2, num3, num4, num5) {
  var average = ((num1 + num2 + num3 + num4 + num5) / 5).toFixed(1);
  return average;
}
console.log(averageOfFiveNumbers(5, 10, 15, 20, 25));

//################## LOGIC THAT OUTPUTS MESSAGES BASED ON FUNCTION RESULTS
// var HTTP5110 = 99;
// var HTTP5114 = 89;
// var HTTP5121 = 98;
// var HTTP5122 = 88;
// var HTTP5125 = 100;

// var HTTP5110 = 69;
// var HTTP5114 = 69;
// var HTTP5121 = 69;
// var HTTP5122 = 69;
// var HTTP5125 = 69;

var HTTP5110 = 70;
var HTTP5114 = 70;
var HTTP5121 = 70;
var HTTP5122 = 70;
var HTTP5125 = 70;

var overallAverage = averageOfFiveNumbers(HTTP5110, HTTP5114, HTTP5121, HTTP5122, HTTP5125);

if (overallAverage >= 70) {
  alert("Success. Congratulations and keep up the good work!");
} else {
  alert("Review required");
}
