//######## LAB 2-2 LOGIN ########
//1. LINK THIS JS FILE TO THE HTML FILE
// alert("hey 2.2");//COMMENT OUT ONCE CONNECTED TO YOUR HTML PAGE

//====VARIABLES===============
//2. CREATE NECESSARY VARIABLES
		// Correct user name
		// Correct password
		// user name input
		// password input
var username = "dart";
var password = "vader";

//====LOGIC===================
//3. CREATE POPUP BOX FOR USERNAME
var inputUsername = prompt("Please enter your Username: ");

//4. OUTPUT PROVIDED USERNAME TO JS CONSOLE
console.log("Hello ", inputUsername, ", I hope you are doing well!");

//5. CREATE POPUP BOX FOR PASSWORD
var inputPassword = prompt("Please enter your Password: ");

//6. OUTPUT PROVIDED PASSWORD TO JS CONSOLE
console.log("Shhhh..... Your Password is '", inputPassword, "', Hide it!");

//7. CHECK IF PROVIDED USERNAME AND PROVIDED PASSWORD MATCH THE STORED USERNAME/PASSWORD
if (inputUsername === username && inputPassword === password) {
  //8. IF THEY MATCH, POPUP SUCCESS MESSAGE AND OUTPUT TO CONSOLE
  alert("Welcome back " + inputUsername + " !");
  console.log("Login successful");
}

//9. IF THEY DON'T MATCH, POPUP INVALID MESSAGE & OUTPUT TO CONSOLE
else{
  alert("Invalid username/password");
  console.log("Login Fail");
}
