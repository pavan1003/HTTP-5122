//######## LAB 2-3 EMAIL SIGNUP ########
// alert("hey 2.3");//COMMENT OUT ONCE CONNECTED TO YOUR HTML PAGE
//==== VARIABLES =========

// Create a popup box that asks the user if they would like to join your mailing list.
var joinMailingList = confirm("Would you like to be a part of our Mailing List?");

//==== LOGIC =============

// If the user agrees to sign up for the mailing list, provide a popup textbox to ask for that information.
// me@example.com should appear in the text box itself as helper text.
if (joinMailingList === true) {
  var email = prompt("Please enter your email to sign up: ", "me@example.com");

  // Validate the input against no input, the default text, or a Cancel click.
  
  if (email == "" || email === null || email === "me@example.com") {
    alert("Thank you, but your email was not valid.");
  } else {
    alert("Thank you, our next newsletter will be sent to" + email);
  }
  
  // A popup will end the transaction.  If the user declines to join.
} else {
  alert("Thank you, we will not bother you again.");
}
