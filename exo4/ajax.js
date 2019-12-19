function envoie() {

var xhr = new XMLHttpRequest();
var classe = "size1";

xhr.onload = function() {
    p = document.getElementsByTagName("section");
    p[0].innerHTML = " ";
    for (i=0; i<xhr.responseText; i++) {
    e = document.createElement("div");
    e.setAttribute("onclick","changeColor(id)");
    e.setAttribute("id",i);
    e.classList.add(classe);


     if (classe == "size1") {

         classe = "size2";
     } else {
          classe = "size1";
    }

    p[0].insertBefore(e, p[0].firstChild);
    }

}

xhr.open('GET', 'http://jihane.fr/ajax/nombre.php');
xhr.send();

}

function changeColor(id) {
    var e = document.getElementById(id);
    e.className = "size3";

};
