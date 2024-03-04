/* Assignment-4-Forms */
var userInfo = {
  fName: "",
  lName: "",
  id: "",
  program: "",
  project: "",
};
window.onload = function () {
  //Required Variables
  var headerElement = document.getElementById("welcome");
  var formHandle = document.forms.ixdForm;
  var resultElement = document.getElementById("result");
  var fNameResult = document.getElementById("result__Fname");
  var lNameResult = document.getElementById("result__Lname");
  var idResult = document.getElementById("result__id");
  var humberIdRegEx = /(n|N)\d{8}/;
  var programResult = document.getElementById("result__program");
  var projectResult = document.getElementById("result__project");
  var projectCaption = document.getElementById("caption_project");
  userInfo.fName = formHandle.f__fName;
  userInfo.lName = formHandle.f__lName;
  userInfo.id = formHandle.f__id;
  userInfo.program = formHandle.f__program;
  userInfo.project = formHandle.f__project;

  //Functions
  function processForm() {
    if (userInfo.fName.value === "") {
      userInfo.fName.style.background = "red";
      userInfo.fName.focus();
      return false;
    }
    if (userInfo.lName.value === "") {
      userInfo.lName.style.background = "red";
      userInfo.lName.focus();
      return false;
    }
    console.log(!humberIdRegEx.test(userInfo.id.value));
    if (userInfo.id.value === "" || !humberIdRegEx.test(userInfo.id.value)) {
      userInfo.id.style.background = "red";
      userInfo.id.focus();
      return false;
    }

    if (userInfo.program.value === "X") {
      userInfo.program.style.background = "red";
      userInfo.program.focus();
      return false;
    }
    userInfo.program.onchange = goProgramDD();
    function goProgramDD() {
      userInfo.program = formHandle.f__program;
    }

    if (userInfo.project.value === "") {
      projectCaption.style.background = "red";
      return false;
    }

    headerElement.style.display = "none";
    formHandle.style.display = "none";
    resultElement.style.display = "block";
    fNameResult.innerHTML = userInfo.fName.value;
    lNameResult.innerHTML = userInfo.lName.value;
    idResult.innerHTML = userInfo.id.value;
    programResult.innerHTML = userInfo.program.options[userInfo.program.selectedIndex].text;
    projectResult.innerHTML = userInfo.project.value;
    return false;
  }

  //Listeners
  formHandle.onsubmit = processForm;
};
