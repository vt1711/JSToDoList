var txtnd, opdiv, str = "", lii, ctxtnd, cbtnn ;

var ip = document.querySelector("#ip");
var adbtn = document.querySelector("#addbtn");
adbtn.addEventListener("click", addtxt);

function del(e) {
    e.parentNode.remove();
}

function addtxt() {
    str = ip.value;
    if (str == "") {
        alert("Please Enter list item");
        return false;
    }
    else {
        //creating list
        lii = document.createElement("li");
        lii.setAttribute("class", "liitem");
        txtnd = document.createTextNode(str);
        lii.appendChild(txtnd);

        //creating cancel button
        cbtnn = document.createElement("button");
        cbtnn.setAttribute("class", "cbtn");
        ctxtnd = document.createTextNode("-");
        cbtnn.appendChild(ctxtnd);
        cbtnn.onclick = function (event) {
            del(event.currentTarget);
        }

        //adding button to list
        lii.appendChild(cbtnn);

        //adding list to output div
        opdiv = document.querySelector("#op");
        opdiv.appendChild(lii);


        ip.value = "";
        ip.focus();
    }
}

// adbtn.style.backgroundColor="grey";