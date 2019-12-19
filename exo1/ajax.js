function envoie(){
var xhr = new XMLHttpRequest();

xhr.onload = function() {
    e = document.createElement("p");
    e.innerHTML = xhr.responseText;
    p = document.getElementsByTagName("section");
    p[0].insertBefore(e, p[0].firstChild);
}

xhr.open('GET','http://192.168.33.20/ajax/pays.php');
xhr.send();

}
