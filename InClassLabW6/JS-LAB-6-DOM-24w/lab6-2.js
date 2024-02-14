//#### LAB 6 - DOM MANIPULATION ####
//PART 2: MYSTERY BOX

//LISTEN FOR load EVENT
window.onload = onPageLoad;

//'WRAPPER' FUNCTION FOR DOM LOGIC
function onPageLoad(){

	//GET DOM ELEMENTS WE'LL NEED
	var mysteryBox = document.getElementById("mysteryBox");
	var buttonBox = document.getElementById("buttonBox");
	
	//====CREATE THE FUNCTIONS WE'LL NEED====
	//FUNCTION TO ASK USER
	function askUser(){
		var onOk = confirm("Do you want to see something?");
		if(onOk) {
			mysteryBox.style.display = "none";
			buttonBox.style.display = "block";
		}
	}

	//FUNCTION TO CHANGE buttonBox
	function handleBoxClick() {
		buttonBox.style.width = "600px";
		buttonBox.innerHTML = "<h2>SURPRISE!!</h2>";
		buttonBox.style.backgroundColor = "orange";
	}
	
	//SETUP LISTENERS
	mysteryBox.onmouseover = askUser;
	buttonBox.onclick = handleBoxClick;

}//END onload FUNCTION