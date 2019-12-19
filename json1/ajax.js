var data = {
    "debug": "on",
    "title": "Sample Konfabulator",
    "name": "main_window",
    "width": 500,
    "height": 500,
    "src": "Images/Sun.png",
    "hOffset": 250,
    "vOffset": 250,
    "alignment": "center"
};




var p = document.getElementById("tableau");

var tr = document.createElement("tr");

var td = document.createElement("td");
td.innerText = "debug";

var td2 = document.createElement("td");
td2.innerText = data.debug;

p.appendChild(tr);
tr.appendChild(td);
tr.appendChild(td2);

var tr = document.createElement("tr");

var td = document.createElement("td");
td.innerText = "title";

var td2 = document.createElement("td");
td2.innerText = data.title;

p.appendChild(tr);
tr.appendChild(td);
tr.appendChild(td2);

var tr = document.createElement("tr");

var td = document.createElement("td");
td.innerText = "name";

var td2 = document.createElement("td");
td2.innerText = data.name;

p.appendChild(tr);
tr.appendChild(td);
tr.appendChild(td2);

var tr = document.createElement("tr");

var td = document.createElement("td");
td.innerText = "width";

var td2 = document.createElement("td");
td2.innerText = data.width;

p.appendChild(tr);
tr.appendChild(td);
tr.appendChild(td2);

var tr = document.createElement("tr");

var td = document.createElement("td");
td.innerText = "height";

var td2 = document.createElement("td");
td2.innerText = data.height;

p.appendChild(tr);
tr.appendChild(td);
tr.appendChild(td2);

var tr = document.createElement("tr");

var td = document.createElement("td");
td.innerText = "src";

var td2 = document.createElement("td");
td2.innerText = data.src;

p.appendChild(tr);
tr.appendChild(td);
tr.appendChild(td2);

var tr = document.createElement("tr");

var td = document.createElement("td");
td.innerText = "hOffset";

var td2 = document.createElement("td");
td2.innerText = data.hOffset;

p.appendChild(tr);
tr.appendChild(td);
tr.appendChild(td2);

var tr = document.createElement("tr");

var td = document.createElement("td");
td.innerText = "vOffset";

var td2 = document.createElement("td");
td2.innerText = data.vOffset;

p.appendChild(tr);
tr.appendChild(td);
tr.appendChild(td2);

var tr = document.createElement("tr");

var td = document.createElement("td");
td.innerText = "alignment";

var td2 = document.createElement("td");
td2.innerText = data.alignment;

p.appendChild(tr);
tr.appendChild(td);
tr.appendChild(td2);

// Autre méthode

var parent = document.getElementById("tableau");
// Methode avec parcours de l'objet
for (key in data) {
    create_function(parent, key, data[key]);
}
// Methode avec appel de la fonction
/*
create_function(parent, "debug", data.debug);
create_function(parent, "title", data.title);
create_function(parent, "name", data.name);
create_function(parent, "width", data.width);
create_function(parent, "height", data.height);
create_function(parent, "src", data.src);
create_function(parent, "hOffset", data.hOffset);
create_function(parent, "vOffset", data.vOffset);
create_function(parent, "alignment", data.alignment);
*/
function create_function(parent, key, value) {
    var tr = document.createElement("tr");
    var td = document.createElement("td");
    var td2 = document.createElement("td");
    td.innerText = key;
    td2.innerText = value;
    tr.appendChild(td);
    tr.appendChild(td2);
    parent.appendChild(tr);
}


