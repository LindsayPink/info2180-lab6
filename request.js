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
    let httpRequest = new XMLHttpRequest();
    let url = "https://info2180-lab6-lindsaypink.c9users.io/request.php/request.php?q=&all=true";
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
    
    function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunction(this);
    }
  };
  xhttp.open("GET", "request.xml", true);
  xhttp.send();
}
function myFunction(xml) {
  let xmlDoc = xml.responseXML;
  let oList = document.createElement("ol");
  
  let x = xmlDoc.getElementsByTagName("definition");
  for (let i = 0; i < x.length; i++) { 
    oList.appendChild(document.createElement("h3"));
    x[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +

    x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +

  }
  document.getElementById("demo").innerHTML = table;
}
}