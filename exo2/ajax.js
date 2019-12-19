function envoie() {
var xhr = new XMLHttpRequest();

xhr.onload = function() {
    e = document.getElementById("nombre");
    e.innerHTML = xhr.responseText;


};

xhr.open('GET', 'http://jihane.fr/ajax/nombre.php');
xhr.send();

};


