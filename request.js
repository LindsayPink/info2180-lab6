window.onload = function () {
    "use strict";
    let btn = document.getElementById("search");
    btn.addEventListener("click", exec);
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
                        let response = (httpRequest.responseText.split("</h3>")); //splits term and term's definition
                        let div0 = document.createElement("div"); //used to remove html tags from php response
                        let div1 = document.createElement("div"); //used to remove html tags from php response
                        div0.setAttribute("id", "r1");
                        div1.setAttribute("id", "r2");
                        
                        div0.innerHTML = response[0]; //used to remove html tags from php response & selecting only the definition
                        div1.innerHTML = response[1];
                        document.getElementById("term").innerHTML = div0.innerText;
                        document.getElementById("defn").innerHTML = div1.innerText;
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