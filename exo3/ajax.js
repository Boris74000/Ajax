function envoie() {

var xhr = new XMLHttpRequest();

xhr.onload = function() {

    var e = document.getElementById("para1");
    e.innerHTML = " ";

    for(var i=0; i<xhr.responseText; i++) {
    e.innerHTML +=i + " ";
    }

};

xhr.open('GET', 'http://jihane.fr/ajax/nombre.php');
xhr.send();

}
