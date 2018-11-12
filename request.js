window.onload = function () {
    "use strict";
    let btn = document.getElementById("search");
    btn.addEventListener("click", exec);
};
        
function exec () {
    let httpRequest = new XMLHttpRequest();
    let url = "https://info2180-lab6-lindsaypink.c9users.io/request.php/request.php?q=definition";
    httpRequest.onreadystatechange = function() {
        if (httpRequest.readyState === 4) {
            if (httpRequest.status === 200) {
                let response = (httpRequest.responseText.split("</h3>"));
                let div = document.createElement("div"); //used to remove html tags from php response
                div.innerHTML = response[1]; //used to remove html tags from php response
                alert(div.innerText);
            } else {
                alert("Problem with request.");
            }
        }
    };
    httpRequest.open("GET", url);
    httpRequest.send();
}