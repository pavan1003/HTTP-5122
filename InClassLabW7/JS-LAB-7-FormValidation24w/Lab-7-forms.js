/* LAB 7 - SHIPPING FORM */
//Order Shipping object (for extra EXTRA challenge, otherwise, ignore it)
var shipInfo = {
	cid: 0,
	name: "",
	pc: "",
	speed: "",
	cost: 0,
};

window.onload = function () {
	//Required Variables
	var formHandle = document.forms.form_ship;
	var thanksMsg = document.getElementById("thanks_msg");
	var thanksCustomer = document.getElementById("thanksCustomer");
	var thanksSpeed = document.getElementById("thanksSpeed");
	var thanksPC = document.getElementById("thanksPC");
	var thanksCost = document.getElementById("thanksCost");
	shipInfo.name = formHandle.f_Name;
	shipInfo.pc = formHandle.f_pc;
	shipInfo.speed = formHandle.f_speed;
	shipInfo.cost = shipInfo.speed.value;

	//Functions
	function processForm() {
		// alert("form sent");
		if(shipInfo.speed.value === "0"){
			shipInfo.speed.style.background = "red";
			shipInfo.speed.focus();
			return false;
		}
		shipInfo.speed.onchange = goSpeedDD();
		function goSpeedDD () {
			shipInfo.cost = shipInfo.speed.value;
		}
		if (shipInfo.name.value === "") {
			shipInfo.name.style.background = "red";
			shipInfo.name.focus();
			return false;
		}
		if (shipInfo.pc.value === "") {
			shipInfo.pc.style.background = "red";
			shipInfo.pc.focus();
			return false;
		}
		formHandle.style.display = "none";
		thanksMsg.style.display = "block";
		thanksCustomer.innerHTML = shipInfo.name.value;
		thanksSpeed.innerHTML = shipInfo.speed.options[shipInfo.speed.selectedIndex].text;
		thanksPC.innerHTML = shipInfo.pc.value;
		thanksCost.innerHTML = shipInfo.cost;

		return false;
	}

	//Listeners
	formHandle.onsubmit = processForm;
};
