//LAB 3 - ARRAYS & LOOPS - PART 3

//PART 3 - SHOPPING CART SHIPPING
//==== VARIABLES ========
var itemsTotal = 0;
var itemCost = 0;
var cart = [];
var THRESHOLD = 35
//==== LOGIC ========
//CHECK FOR ITEMS UNTIL THRESHOLD IS MET.
while (itemsTotal < THRESHOLD) {
  //GET ITEM COST FROM USER
  itemCost = prompt("Enter amount of item");
  //CONVERT USER INPUT TO A NUMBER
  //ADD ITEM COST TO RUNNING TOTAL VARIABLE
  itemsTotal += parseInt(itemCost);
  //PUSH ITEM COST TO CART ARRAY
  cart.push("$"+itemCost);
}
//SEND POPUP MESSAGE TO USER
alert("Your shipping for this order will be free! Total is $" + itemsTotal);

//SEND OUTPUT TO CONSOLE
console.log("Item prices: " + cart.join(" | "));
