/* LAB 8.2 - STOP TIME */

//create page load listener
window.onload = goNow;

//create page load function
function goNow() {
	//create variables for required HTML elements
	var hoursOut = document.getElementById("hoursOut");
	var minsOut = document.getElementById("minsOut");
	var secsOut = document.getElementById("secsOut");
	var btnStart = document.getElementById("btnStart");
	var btnStop = document.getElementById("btnStop");

	//create time variable so all functions have access to it
	var interval = null;
	var setStart = null;

	//CREATE FUNCTION THAT DISPLAYS THE TIME
	function displayTime() {
		setStart = setInterval(startClock, 1000);
	}
	//CREATE FUNCTION TO START THE CLOCK.
	function startClock() {
		interval = new Date();
		hoursOut.innerHTML = interval.getHours() + ":";
		minsOut.innerHTML = formatTime(interval.getMinutes()) + ":";
		secsOut.innerHTML = formatTime(interval.getSeconds());
	}
	//CREATE FUNCTION TO STOP THE CLOCK
	function stopClock() {
		clearInterval(setStart);
	}

	function formatTime(time) {
		return time < 10 ? "0" + time : time;
	}

	// SET EVENT LISTENERS
	btnStart.onclick = displayTime;
	btnStop.onclick = stopClock;

}
