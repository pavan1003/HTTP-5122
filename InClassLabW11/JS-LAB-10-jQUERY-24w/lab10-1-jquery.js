//LAB 10 - 1 FAQ PAGE

//Listen for window load the jQuery way
jQuery(window).on("load", function () {
  //Inside of here is your jQuery/JavaScript
  jQuery("p").hide();

  function toggleParagraph(thisClass, contentClass) {
    $(".contentBox").not($(thisClass).next(contentClass)).slideUp(3000);
    $(thisClass).next(contentClass).slideToggle(3000);
  }
  //ADD CLICK EVENT TO <h2>
  $("#h21").on("click", function () { toggleParagraph(this, ".contentBox"); });
  $("#h22").on("click", function () { toggleParagraph(this, ".contentBox"); });
  $("#h23").on("click", function () { toggleParagraph(this, ".contentBox"); });
  $("#h24").on("click", function () { toggleParagraph(this, ".contentBox"); });
  //CHANGE <p> BACKGROUND ON HOVER
  $(".contentBox").hover(
    function () { $(".contentBox").toggleClass("textHovered"); },
    function () { $(".contentBox").toggleClass("textHovered"); }
  );
});
