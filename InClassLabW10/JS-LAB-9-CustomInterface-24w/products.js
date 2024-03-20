//LAB 9-DATA STORAGE: PRODUCTS PAGE
//form object
var info = {
    name: "",
    color: "",
};

//window.onload
window.onload = function () {
    var newMsgBox = document.getElementById("newMsgBox");
    //check for stored values
    if (document.cookie.length > 0) {
        //retrieve stored values
        var cookieArray = document.cookie.split(";");
        info.name = cookieArray[0].split("=")[1];
        info.color = cookieArray[1].split("=")[1];
        //change welcome text to stored name
        newMsgBox.innerHTML = "Welcome!, " + info.name + "!";
        //change BG colour to stored colour
        document.body.style.background = info.color;
    }
};
