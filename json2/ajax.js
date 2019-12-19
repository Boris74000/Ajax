function recevoir() {

    var xhr = new XMLHttpRequest();

    xhr.onload = function () {
        var j = JSON.parse(xhr.responseText);
        var e = document.createElement("p");
        e.innerHTML = j.pays.nom;
        var p = document.getElementsByTagName("section");
        p[0].insertBefore(e, p[0].firstChild);

    }
    xhr.open('GET', 'http://jihane.fr/ajax/jpays.php');
    xhr.send();
};
