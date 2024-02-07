//#### LAB 5 - FUNCTIONS & OBJECTS ####
//PART 1:  I OBJECT!
var meObject = {
  name: "Pavan Mistry",
  age: "22",
  gender: "Male",
  hobby: "Skating",
  nameAndAge: function () {
    alert("My name is " + meObject.name + " and I am " + meObject.age + " years old!");
  }
};

console.log(meObject.name);

// alert("My name is " + meObject.name + " and I am " + meObject.age + " years old!");

meObject.nameAndAge();