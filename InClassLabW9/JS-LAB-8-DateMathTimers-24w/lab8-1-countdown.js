/* LAB 8-1 - FINAL COUNTDOWN!! */


//create page load listener
window.onload = goNow;

//create page load function
function goNow() {

	//create variables for required HTML elements
	var todayData = document.getElementById("todayData");
	var finalData = document.getElementById("finalData");
	var dueData = document.getElementById("dueData");
	var countMsg = document.getElementById("countMsg");

	//create variables for now date and due date
	var nowDate = new Date();
	// var dueDate = new Date("April 19,2024 18:00:00");
	var dueDate = new Date("January 19,2024 18:00:00");

	//OUTPUT NOW DATE & DUE DATE TO HTML PAGE
	todayData.innerHTML = nowDate.toDateString();
	finalData.innerHTML = dueDate.toDateString();

	//CONVERT TO UTC AND SUBTRACT TO GET TIME DIFFERENCE
	var nowDateInt = nowDate.getTime();
	var dueDateInt = dueDate.getTime();
	var timeDiff = dueDateInt - nowDateInt;
	var daysTillDueDate = timeDiff / 86400000;

	//CONVERT TIME DIFFERENCE TO WHOLE NUMBER OF DAYS
	var fullDays = Math.floor(daysTillDueDate);

	//LOGIC TO CHECK IF DUE DATE HAS PASSED, AND OUPUT APPROPRIATE MESSAGE TO HTML PAGE
	if (fullDays > 0) {
		dueData.innerHTML = fullDays;
	} else {
		countMsg.innerHTML = "The Deadline for the Final Assignment has passed!";
	}
}
