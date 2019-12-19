function envoyer() {

    var xhr = new XMLHttpRequest();

    xhr.onload = function () {

        var j = JSON.parse(xhr.responseText);
        var e = document.createElement("p");
        e.innerHTML = j.pays.nom;


       switch (j.pays.continent) {

           case "EU":
               var p = document.getElementById("eu");
               break;
           case "AF":
               var p = document.getElementById("af");
               break;
           case "AS":
               var p = document.getElementById("as");
               break;



       }
        p.appendChild(e);


       /* if (j.pays.continent === "EU") {
            var p = document.getElementById("eu");
        } else if (j.pays.continent === "AF") {
            var p = document.getElementById("af");
        } else if (j.pays.continent === "AS") {
            var p = document.getElementById("as");
        }
        p.appendChild(e); */

    }

    xhr.open('GET', 'http://jihane.fr/ajax/jpays.php');
    xhr.send();
}