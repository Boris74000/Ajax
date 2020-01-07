

var etudiants = {"etudiants":[{"prenom":"Karim","id":"28"},
        {"prenom":"NicolasC","id":"31"},{"prenom":"Gabriel","id":"32"},
        {"prenom":"Charles","id":"33"}]};

/*
console.log(etudiants.etudiants[0].prenom);
*/

/*
/*
for (var i=0; i<etudiants.etudiants.length; i++) {
    console.log(etudiants.etudiants[i].prenom);
}
*/



function push1() {

    var val = document.getElementById("search1").value;
    var xhr = new XMLHttpRequest();


    xhr.onload = function () {
        var p = document.getElementsByTagName("section");
        p[0].innerHTML = "";
        var j = JSON.parse(xhr.responseText);


        for (var i=0; i<j.etudiants.length; i++) {

            var e = document.createElement("p");
            e.setAttribute("id", j.etudiants[i].id);
            e.setAttribute("onclick", "picture("+j.etudiants[i].id+")");
            e.innerHTML = j.etudiants[i].prenom;

            p[0].insertBefore(e, p[0].firstChild);

        }

    }

    xhr.open('GET', `http://jihane.fr/ajax/dwmg2.php?query=${val}`);
    xhr.send();

}

function picture(num) {

    var xhr = new XMLHttpRequest();

    xhr.onload = function () {

        r = JSON.parse(xhr.responseText);
        var enfant = document.createElement("img");
        enfant.setAttribute("src", r.image );
        /* Mettre en dernier élément du parent (section) */
        var parent = document.getElementsByTagName("section");
        parent[0].appendChild(enfant);

        /* Mettre en dessous du prénom
        var parent = document.getElementById(num);
        parent.appendChild(enfant);
        */


    }

    xhr.open('GET', 'http://jihane.fr/ajax/avatar.php?id=num');
    xhr.send();

}