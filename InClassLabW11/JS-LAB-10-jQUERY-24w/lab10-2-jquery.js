//LAB 10 - 2 INVENTORY PAGE

//Listen for window load the jQuery way
jQuery(window).on("load", function () {
	//Inside of here is your jQuery/JavaScript
	jQuery(".desc").hide();

	//ADD MOUSEOVER/MOUSEOUT FUNCTIONS FOR <tr>
	$("tr").hover(
		function () {
			$(this).toggleClass("selected");
		},
		function () {
			$(this).toggleClass("selected");
		}
	);

	//ADD CLICK EVENT TO <tr>
	$("tr").on("click", function () {
		$(".desc").hide();
		$(this).find(".desc").show();
	});
});
