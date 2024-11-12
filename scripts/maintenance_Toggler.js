const warningsList = [
    "Cette version du site est une version Beta, certains éléments et certaines pages peuvent ne pas fonctionner comme prévu.",
]

var page = document.getElementsByClassName('page')[0];
var warningText = document.createElement('div');

for (i=0; i < warningsList.length; i++) {
    if (warningsList.length >= 1) {
        var warning = document.createElement('div');
        warning.className = "warning";
        warningText.innerHTML = "<i class=\"fa fa-exclamation-triangle\"></i>&nbsp;" + warningsList[i];
        warning.appendChild(warningText);
        page.prepend(warning.cloneNode(true));
    }
}


