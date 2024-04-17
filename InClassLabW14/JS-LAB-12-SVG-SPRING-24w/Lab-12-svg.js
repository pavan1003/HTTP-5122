//LAB 12 - SVG OUTDOOR SCENE

window.onload = function () {
    var svgBox = document.getElementById("svgDiv");
    var showHideBtn = document.getElementById("show-hide-btn");
    var dotGrid = document.getElementById("dotGrid");

    showHideBtn.onclick = showHideGrid;
    svgBox.onclick = showPosition;

    function showHideGrid() {
        console.log("svgClick");
        if (dotGrid.style.display === "none") {
            dotGrid.style.display = "block";
        } else {
            dotGrid.style.display = "none";
        }
    }

    function showPosition(e) {
        var xPos = e.clientX - 8;
        var yPos = e.clientY - 8;
        console.log("X:" + xPos + " Y:" + yPos);
    }
}