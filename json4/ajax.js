function envoyer() {
var val = document.getElementById("number").value;

    var xhr = new XMLHttpRequest();

    xhr.onload = function () {
        var j = JSON.parse(xhr.responseText);


        for (var i=0; i<val ; i++) {

            var e = document.createElement("p");
            e.innerHTML = j.pays[i].nom;

            switch (j.pays[i].continent) {

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
        }


        /* var j = JSON.parse(xhr.responseText);

        /* if (j.pays.continent === "EU") {
             var p = document.getElementById("eu");
         } else if (j.pays.continent === "AF") {
             var p = document.getElementById("af");
         } else if (j.pays.continent === "AS") {
             var p = document.getElementById("as");
         }
         p.appendChild(e); */

    }

    xhr.open('GET', `http://jihane.fr/ajax/jpays.php?nb=${val}`);
    xhr.send();
}