// Création de l'évenement de type "Click" sur le bouton "Charger les pokémon"
var loadIt = document.getElementsByClassName("loadIt");
loadIt[1].addEventListener("click", function() {
    loadPoke()
});

// Fonction qui charge le nom des pokémons
function loadPoke() {
    fetch('https://pokeapi.co/api/v2/pokemon')

        .then(
        function (response) {
            return response.json()

        }
    )
        .then(
            function (data) {
                for (let i=0; i<=19; i++) {

                    p = document.getElementById("poke1");

                    // Div qui contient les paragraphes "Nom" et "Voir détail"
                    r = document.createElement("div");
                    r.setAttribute("class", "divG");

                    p.appendChild(r);

                    // Paragraphe qui contient le nom du Pokémon
                    e = document.createElement("p");
                    e.innerHTML = data.results[i].name;

                    // Paragraphe qui contient "Voir le détail"
                    e2 = document.createElement("p");
                    e2.innerHTML = "Voir le détail";
                    r.appendChild(e);
                    r.appendChild(e2);
                    e2.addEventListener("click", function () {
                        loadDetail(data.results[i].name)
                    });
                }
                // Affichage du bouton Suivant
                b = document.getElementsByClassName("loadIt");
                b[2].className = "loadIt visible";
                b[2].addEventListener("click", function () {
                    nextPoke()
                });

                // Masquage du bouton Précédent
                c = document.getElementsByClassName("loadIt");
                b[0].className = "loadIt invisible";

            }
        )
}

function loadDetail(name) {

    fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`)

        .then(
            function (response) {
                return response.json()

            }
        )
        .then(
            function(data) {
                p = document.getElementById("detail1");
                p.innerHTML = " ";

                // Creation de la Div qui recoit ID, nom, hauteur, image
                d = document.createElement("div");
                d.setAttribute("class", "divDetail");
                p.appendChild(d);

                // Ajout de l'ID
                e = document.createElement("p");
                e.innerHTML = 'ID : ' + data.id;
                d.appendChild(e);

                // Ajout du nom
                e2 = document.createElement("p");
                e2.innerHTML = `NAME : ${name}` ;
                d.appendChild(e2);

                // Ajout de la hauteur
                e3 = document.createElement("p");
                e3.innerHTML = 'HAUTEUR : ' + data.height;
                d.appendChild(e3);

                // Ajout de l'image
                e4 = document.createElement("p");
                e5 = document.createElement("img");
                e4.innerHTML = 'IMAGE : <img src="'+data.sprites.front_shiny+'" alt="Photo du Pokémon">'
                d.appendChild(e4);


            }
        )
}

function nextPoke() {
    fetch('https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20')

        .then(
            function (response) {
                return response.json()

            }
        )
        .then(
            function (data) {
                p = document.getElementById("poke1")
                p.innerHTML = " ";
                for (let i=0; i<=19; i++) {

                    // Div qui contient les paragraphes "Nom" et "Voir détail"
                    r = document.createElement("div");
                    r.setAttribute("class", "divG")

                    p.appendChild(r);

                    // Paragraphe qui contient le nom du Pokémon
                    e = document.createElement("p")
                    e.innerHTML = data.results[i].name;

                    // Paragraphe qui contient "Voir le détail"
                    e2 = document.createElement("p")
                    e2.innerHTML = "Voir le détail"
                    r.appendChild(e);
                    r.appendChild(e2);
                    e2.addEventListener("click", function () {
                        loadDetail(data.results[i].name)
                    });
                }
                // Affichage du bouton Précédent
                b = document.getElementsByClassName("loadIt");
                b[0].className = "loadIt visible";
                // Variable pour incrementer le numéro de page

                b[0].addEventListener("click", function () {
                    page -= 20
                    previousPoke()
                });


            }
        )
}

function previousPoke() {
    fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20')
        .then(
            function (response) {
                return response.json()

            }
        )
        .then(
            function (data) {
                p = document.getElementById("poke1")
                p.innerHTML = " ";
                for (let i=0; i<=19; i++) {

                    // Div qui contient les paragraphes "Nom" et "Voir détail"
                    r = document.createElement("div");
                    r.setAttribute("class", "divG")

                    p.appendChild(r);

                    // Paragraphe qui contient le nom du Pokémon
                    e = document.createElement("p")
                    e.innerHTML = data.results[i].name;

                    // Paragraphe qui contient "Voir le détail"
                    e2 = document.createElement("p")
                    e2.innerHTML = "Voir le détail"
                    r.appendChild(e);
                    r.appendChild(e2);
                    e2.addEventListener("click", function () {
                        loadDetail(data.results[i].name)
                    });
                }
            }
        )
}
