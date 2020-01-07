function envoie() {
    var xhr = new XMLHttpRequest();

    xhr.onload = function () {

        var r = xhr.responseText

        if (r == "erreur") {
            document.getElementById("er").className = "visible"
        } else if (r == "ok") {
            document.getElementById("ok").className = "visible"
        }
    }

    xhr.open('POST','http://jihane.fr/ajax/form.php');
    var formulaire = document.getElementById('formulaire');
    var formData = new FormData(formulaire);

    xhr.send(formData);
}