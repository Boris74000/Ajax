function push1() {

    var val = document.getElementById("search1").value;
    var xhr = new XMLHttpRequest();


    xhr.onload = function () {
        var j = JSON.parse(xhr.responseText);

    }

    xhr.open('GET', `http://jihane.fr/ajax/dwmg2.php?query=${val}`);
    xhr.send();

}

