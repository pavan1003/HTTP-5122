//#### LAB 5 - FUNCTIONS & OBJECTS ####
//PART 2:  MAKE THE BANK
//1. Create the object structure first.
var bankCustomer = {
  //2. Add the required properties to your object.
  lastName: "Mistry",
  branchNumber: "n01650001",
  accountBalance: 500.25,
  interestRate: 1.03,
  multipleAccounts: false,
  //3. Add your first method and test it. Remember, the methods will change the properties of the object.
  makeDeposit: function (amount) {
    bankCustomer.accountBalance = (bankCustomer.accountBalance + amount).toFixed(2);
    return "Thank you, your current balance is now $" + bankCustomer.accountBalance;
  },
  //4. Add your second method and test it.
  makeWithdrawal: function (amount) {
    bankCustomer.accountBalance = (bankCustomer.accountBalance - amount).toFixed(2);
    return "Thank you, your current balance is now $" + bankCustomer.accountBalance;
  },
  //6. Once everything is working, tackle the Stretch Goal!
  addInterest: function () {
    var temproryInterest = bankCustomer.interestRate;
    if (bankCustomer.multipleAccounts) {
      temproryInterest = temproryInterest + 0.005;
    }
    bankCustomer.accountBalance = (bankCustomer.accountBalance * temproryInterest).toFixed(2);
    return "Thank you, your current balance is now $" + bankCustomer.accountBalance;
}
};
//5. Create the required output to complete steps 6-10 of the lab.
console.log("Starting Balance: $" + bankCustomer.accountBalance);
console.log(bankCustomer.makeDeposit(200));
console.log(bankCustomer.makeWithdrawal(75));
console.log(bankCustomer.addInterest());

