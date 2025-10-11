/* 
	Homebrew France Web V5.0.0
    Copyright (C) 2025  Homebrew France

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

const warningsList = [
    //"Voici la nouvelle version des services web Homebrew France !<br> Voir le <a style=\"color: #ade5ff;\" href=\"https://github.com/homebrewfrance/homebrewfrance.fr/releases/tag/V4.0.0\">changelog</a> sur GitHub.",
    // '<strong>ANNONCE :</strong> Nous recrutons des nouveaux modérateurs pour la communauté ! Postulez maintenant sur <a style="color:rgb(142, 179, 255)" href="https://homebrewfrance.fr/devenir-modo">cette page</a>'
    //'<strong>ANNONCE :</strong> La session de recrutements de modérateurs 2025-2026 ouvrira Jeudi 7 août 2025 à 15h30 (UTC+1:00)'
    //'<strong>MAINTENANCE :</strong>&nbsp;Une maintenance pour le déploiement de la version 5.0.0 des services est prévue du 1er novembre 2025 à 17h30 jusqu\'au 2 novembre à 18h'
]

const annoncesList = [
    //'<strong>Homebrew France</strong> fête ses 4 ans d\'existence ! La communauté a été créée le 4 septembre 2021 !'
    //'Nouveau guide disponible : <a href="https://homebrewfrance.fr/docs/windows-10">ESU Windows 10</a>'
]

const global_doc_warning = 'Nos guides ne doivent pas être utilisés dans le but de contourner des protections et d\'exécuter des logiciels piratés.';
var bodyElement = document.querySelector('body');
var html = document.querySelector('html');
var pageID = bodyElement.getAttribute("data-page-id");

var page = document.getElementsByClassName('page')[0];
var pageDocu = document.getElementsByClassName('page-docu')[0];

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
        
        if (!pageID.startsWith('DOC') && !pageID.startsWith('MLTI')) {
            if (warningsList.length != 0) {
                page.prepend(warningContainer);
            }
        } 
        else {
            pageDocu.prepend(warningContainer);
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
        
        if (!pageID.startsWith('DOC') && !pageID.startsWith('MLTI')) {
            if (annoncesList.length != 0) {
                page.prepend(annonceContainer);
            }
        } 
        else {
            pageDocu.prepend(annonceContainer);
        }
    }
}

console.log(pageID);


if (pageID.startsWith('DOC') && (!pageID.includes('Revanced')) && (!pageID.includes('WIN'))) {
    var doc_warning = document.createElement('div');
    doc_warning.className = 'doc-warning';
    doc_warning.innerHTML = `
        <div><img src="https://cdn.homebrew-france.fun/generic/lumia-guides.png" id="lumia_ic_warn">&nbsp;${global_doc_warning} (<a href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000020740345">Art. L335-3 du <span title="Code de la propriété intellectuelle">C.P.I</span>)</a></div> <div id="closeWarning" title="Fermer" style="margin-left: 15px;"><i class="fas fa-times-circle"></i></div>
    `
    bodyElement.appendChild(doc_warning);
}

if (pageID.startsWith('DOC')) {
    var i = document.getElementsByTagName('i');
    for (var index=0; index<i.length;index++) {
        if (i[index].className) {
            if (i[index].className.includes('fa')) {
                i[index].style.color = 'white';
            }
        }
        else {
            i[index].style.color = '#9e9e9e';
        }
    }

    var closeBtn = document.getElementById('closeWarning');
    closeBtn.addEventListener('click', function() {
        var doc_warningSearch = document.getElementsByClassName('doc-warning')[0];
        doc_warningSearch.style.display = 'none';
    })
}


function updateDeviceHeight() {
    const deviceHeight = window.innerHeight;
    document.documentElement.style.setProperty('--device-height', `${deviceHeight}px`);
}

function updateDeviceWidth() {
    const deviceWidth = window.innerWidth;
    document.documentElement.style.setProperty('--device-width', `${deviceWidth}px`);
}

function updateNavbarWidth() {
    var navbarElement = document.getElementsByClassName('navbar')[0];
    if (navbarElement) {
        const navbarWidth = navbarElement.offsetWidth; 
        document.documentElement.style.setProperty('--navbar-width', `${navbarWidth}px`);
    }
}


  

updateDeviceHeight();
updateDeviceWidth();
updateNavbarWidth();

window.addEventListener('resize', updateDeviceHeight);
window.addEventListener('resize', updateDeviceWidth);
window.addEventListener('resize', updateNavbarWidth);
