//LAB 9-DATA STORAGE: INDEX PAGE

//form object
var info = {
    name: "",
    color: "",
};

function makeCookie(cookieName, cookieValue, lifespan) {
    document.cookie = cookieName + "=" + cookieValue + ";max-age=" + lifespan;
}

function deleteCookie() {
    var cookieArray = document.cookie.split(";");
    for (let i = 0; i < cookieArray.length; i++) {
        const cookieName = cookieArray[i].split("=")[0];
        document.cookie = cookieName + "=;max-age=0";
    }
    window.location.reload();
}

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

    //#####============== DO THIS PART FIRST! ===============
    //get the form and set submit listener
    var formHandle = document.forms.infoForm;

    formHandle.onsubmit = processForm;

    //onsubmit Function
    function processForm() {
        //Validation goes here

        //get values from form
        info.name = formHandle.f_name.value;
        info.color = formHandle.f_color.value;

        //console.log the form values
        console.log("Info: ", info);

        //store values
        makeCookie("inName", info.name, 86400);
        makeCookie("inColor", info.color, 86400);
    }

    document.getElementById("btnDel").onclick = deleteCookie;
};
