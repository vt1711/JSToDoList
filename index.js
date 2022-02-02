let litxtnd, str = "", lii, dtxtnd, etxtnd, dbtnn, ebtnn, flag = 0, storedevent;

let ip = document.querySelector("#ip");
let adbtn = document.querySelector("#addbtn");
let opdiv = document.querySelector("#op");
adbtn.addEventListener("click", addtxt);

function del(e) {
    e.parentNode.remove();
}

function getlitext(e) {
    // console.log(e.path[1].childNodes[0].data); for testing if we can get text of current list
    storedevent = e;
    ip.value = e.path[1].childNodes[0].data;
    ip.focus();
    flag = 1;
}

function updatelitext() {
    storedevent.path[1].childNodes[0].data = ip.value;
    flag = 0;
    ip.value = "";
    ip.focus();
}

function addtxt() {

    if (flag == 1) {
        updatelitext();
    }

    else {
        str = ip.value;
        if (str == "") {
            alert("Please enter list item");
            return false;
        }
        else {
            //creating list
            lii = document.createElement("li");
            lii.setAttribute("class", "liitem");
            litxtnd = document.createTextNode(str);
            lii.appendChild(litxtnd);

            //creating delete button
            dbtnn = document.createElement("button");
            dbtnn.setAttribute("class", "dbtn");
            dtxtnd = document.createTextNode("-");
            dbtnn.appendChild(dtxtnd);
            dbtnn.onclick = function (event) {
                del(event.currentTarget);
            }

            //adding delete button to list
            lii.appendChild(dbtnn);

            //creating edit button
            ebtnn = document.createElement("button");
            ebtnn.setAttribute("class", "dbtn");
            etxtnd = document.createTextNode("e");
            ebtnn.appendChild(etxtnd);
            ebtnn.onclick = function (event) {
                getlitext(event);
            }

            //adding  edit button to list
            lii.appendChild(ebtnn);

            //adding list to output div
            opdiv.appendChild(lii);

            ip.value = "";
            ip.focus();
        }
    }

}

// adbtn.style.backgroundColor="grey";