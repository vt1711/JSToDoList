let litxtnd, str = "", lii, dtxtnd, etxtnd, dbtnn, ebtnn, flag = 0, storedevent;

let updateid;
let count = localStorage.getItem("storagecount");

if (count === null) {
    count = 0;
    localStorage.setItem("storagecount", 0);
}

let ip = document.querySelector("#ip");
let adbtn = document.querySelector("#addbtn");
let opdiv = document.querySelector("#op");
adbtn.addEventListener("click", addtxt);

for (let i = 0; i < localStorage.length; i++) {
    if (localStorage.key(i) != "storagecount") {
        createlist(localStorage.key(i),"old");
    }
}

function createlist(key, type) {

    //accessing value from local storage
    if (type === "old") { str = localStorage.getItem(key); }
    else {
        str=type;
    }

    //creating list
    lii = document.createElement("li");
    lii.setAttribute("class", "liitem");
    lii.setAttribute("id", key);
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
    ebtnn.setAttribute("class", "ebtn");
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

function del(e) {
    e.parentNode.remove();
    localStorage.removeItem(e.parentNode.id);
}

function getlitext(e) {
    // console.log(storedevent.srcElement.parentElement.childNodes[0].data); for testing if we can get text of current list
    storedevent = e;
    updateid = e.target.parentElement.id;
    storedevent.srcElement.parentElement.style.transition = "";
    storedevent.srcElement.parentElement.style.backgroundColor = "rgb(210, 216, 216)";
    ip.value = storedevent.srcElement.parentElement.childNodes[0].data;
    ip.focus();
    flag = 1;
}

function updatelitext() {
    storedevent.srcElement.parentElement.childNodes[0].data = ip.value;
    localStorage.setItem(updateid, ip.value)
    flag = 0;
    ip.value = "";
    ip.focus();
    storedevent.srcElement.parentElement.style.backgroundColor = "";
    storedevent.srcElement.parentElement.style.transition = "background-color 1s";

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

            //incrementing counter and creating list
            count++;
            createlist(count,str);
    
            //adding to localstorage
            localStorage.setItem(count, str);
            localStorage.setItem("storagecount", count);
        }
    }

}

// adbtn.style.backgroundColor="grey";