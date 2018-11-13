window.onload = function () {
    "use strict";
    let btn = document.getElementById("search");
    let allDef = document.getElementById("all");
    btn.addEventListener("click", exec);
    allDef.addEventListener("click", showAll);
};

function exec () {
    let txt = document.getElementById("text").value.toLowerCase().trim();
    if (txt) {
        if (txt === "ajax" || txt === "bar" || txt === "css" || txt === "definition" || txt === "html" || txt === "javascript" || txt === "php") {
            let httpRequest = new XMLHttpRequest();
            let url = "https://info2180-lab6-lindsaypink.c9users.io/request.php/request.php?q=" + txt;
            httpRequest.onreadystatechange = function() {
                if (httpRequest.readyState === 4) {
                    if (httpRequest.status === 200) {
                        let response = (httpRequest.responseText);
                        document.getElementById("result").innerHTML = response;
                    } else {
                        alert("Problem with request. Try again");
                    }
                }
            };
            httpRequest.open("GET", url);
            httpRequest.send();
        } else {
            alert("Problem with search term. Try again.");
        }
    }
    else {
        alert("Problem with search. Try again\nEnsure that search bar is not empty.");
    }
}

function showAll () {
   
}