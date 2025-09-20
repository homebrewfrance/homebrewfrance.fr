
const warningsList = [
    'La disponibilité du site web n\'est pas garantie pour les prochains mois en raison d\'une importante mise à jour qui arrivera prochainement.'
]

const annoncesList = [
]

var bodyElement = document.querySelector('body');
var html = document.querySelector('html');

var page = document.getElementsByClassName('page')[0];

if (warningsList.length >= 1) {
    var warningContainer = document.createElement('div');
    warningContainer.className = 'warning-container';
    var warning = document.createElement('div');
}

if (annoncesList.length >= 1) {
    var annonceContainer = document.createElement('div');
    annonceContainer.className = 'annonce-container';
    var annonce = document.createElement('div');
}

for (i = 0; i < warningsList.length; i++) {
    if (warningsList.length >= 1) {
        var warningText = document.createElement('div');
        warning.className = "warning";
        warningText.innerHTML = "<!--i style\"color: rgb(201, 201, 201)!important;\" class=\"fa fa-exclamation-triangle\"></i>&nbsp;&nbsp;-->" + warningsList[i];
        if (warningsList.length != 0) {
            warning.appendChild(warningText);
            warningContainer.appendChild(warning);
        }
        if (warningsList.length != 0) {
            page.prepend(warningContainer);
        }
    }
}

for (i = 0; i < annoncesList.length; i++) {
    if (annoncesList.length >= 1) {
        var annonceText = document.createElement('div');
        annonce.className = "annonce";
        annonceText.innerHTML = "<strong>ANNONCE :</strong>&nbsp;" + annoncesList[i];
        if (annoncesList.length != 0) {
            annonce.appendChild(annonceText);
            annonceContainer.appendChild(annonce);
        }
        if (annoncesList.length != 0) {
            page.prepend(annonceContainer);
        }
    }
}
