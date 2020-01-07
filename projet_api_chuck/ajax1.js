function genere() {
    var xhr = new XMLHttpRequest();

    xhr.onload = function () {
        var j = JSON.parse(xhr.responseText);
        var e = document.createElement("p");
        p = document.getElementById("rep");
        p.innerHTML = " ";
        e.setAttribute("class", "para"  );
        e.innerHTML = j[0].fact;
        p.appendChild(e);
        document.getElementById("hiddenButton").className = "autre visible ";
        document.getElementById("hiddenButton2").className = "autre invisible";


    };

    xhr.open('GET', 'http://jihane.fr/ajax/chucknorris.php/get?data=tri:alea;type:txt;nb:1');
    xhr.send();
}

var top10 = document.getElementById("top10");
top10.addEventListener("click", function() { toptop()});

function toptop() {
    fetch('http://jihane.fr/ajax/chucknorris.php/get?data=tri:top;type:txt;nb:10;')

        .then(
        function (response) {
            return response.json()

        }
    )
        .then(
            function(data) {
                p = document.getElementById("rep");
                p.innerHTML = " ";
                for(i=0; i<10; i++) {
                    var e = document.createElement("p");
                    e.setAttribute("class", "para"  );
                    e.innerHTML = data[i].fact;
                    p.appendChild(e);
                    document.getElementById("hiddenButton2").className = "autre visible";
                    document.getElementById("hiddenButton").className = "autre invisible";

                }

            }
        )
}

var page = 1;

var next = document.getElementById("next");
next.addEventListener("click", function() {
    page ++;
    showNext()
});

var previous = document.getElementById("previous");
previous.addEventListener("click", function() {
    page --;
    if (page == 0) {
        page = 1;
    } else {
        showNext();
    }
})

function showNext() {

    fetch(`http://jihane.fr/ajax/chucknorris.php/get?data=tri:top;type:txt;nb:10;page:${page}`)

        .then(
            function (response) {
                return response.json()
            }
        )
        .then(
            function(data) {
                p = document.getElementById("rep");
                p.innerHTML = " ";
                for(i=0; i<10; i++) {
                    var e = document.createElement("p");
                    e.setAttribute("class", "para"  );
                    e.innerHTML = data[i].fact;
                    p.appendChild(e);
                    document.getElementById("hiddenButton2").className = "autre visible";
                    document.getElementById("hiddenButton").className = "autre invisible";

                }

            }
        )
}


var lastFacts = document.getElementById("lastFacts");
lastFacts.addEventListener("click", function() { last()});

function last() {
    fetch('http://jihane.fr/ajax/chucknorris.php/get?data=tri:last;type:txt;nb:10')

        .then(
            function (response) {
                return response.json()

            }
        )
        .then(
            function(data) {
                p = document.getElementById("rep");
                p.innerHTML = " ";
                for(i=0; i<10; i++) {
                    var e = document.createElement("p");
                    e.setAttribute("class", "para"  );
                    e.innerHTML = data[i].fact;
                    p.appendChild(e);
                    document.getElementById("hiddenButton2").className = "autre invisible";
                    document.getElementById("hiddenButton").className = "autre invisible";
                    document.getElementById("hiddenButton3").className = "autre visible";

                }

            }
        )
}


var page2 = 1;

var next2 = document.getElementById("next2");
next2.addEventListener("click", function() {
    page2 ++;
    showNext2()
});

var previous2 = document.getElementById("previous2");
previous2.addEventListener("click", function() {
    page2 --;
    if (page2 == 0) {
        page2 = 1;
    } else {
        showNext2();
    }
})

function showNext2() {

    fetch(`http://jihane.fr/ajax/chucknorris.php/get?data=tri:last;type:txt;nb:10;page:${page2}`)

        .then(
            function (response) {
                return response.json()
            }
        )
        .then(
            function(data) {
                p = document.getElementById("rep");
                p.innerHTML = " ";
                for(i=0; i<10; i++) {
                    var e = document.createElement("p");
                    e.setAttribute("class", "para"  );
                    e.innerHTML = data[i].fact;
                    p.appendChild(e);
                    document.getElementById("hiddenButton2").className = "autre invisible";
                    document.getElementById("hiddenButton").className = "autre invisible";
                    document.getElementById("hiddenButton3").className = "autre visible";


                }

            }
        )
}





