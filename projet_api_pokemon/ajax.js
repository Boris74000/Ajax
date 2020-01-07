var loadIt = document.getElementById("loadIt")
loadIt.addEventListener("click", function() {
    loadPoke()
});

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

                    p = document.getElementById("poke1")

                    // Div qui contient les paragraphes "Nom" et voir "Voir détail"
                    r = document.createElement("div");
                    r.setAttribute("class", "divG")

                    p.appendChild(r);

                    // Paragraphe qui contient le nom du Pokémon
                    e = document.createElement("p")
                    e.innerHTML = data.results[i].name;

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
                e4.innerHTML = 'IMAGE : ' + data.sprites.front_shiny;
                d.appendChild(e4);
            }
        )

}



