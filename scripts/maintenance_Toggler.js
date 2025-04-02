/* 
	Homebrew France Web V4.0.0-Beta
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
]

const global_doc_warning = 'Ce guide ne doit pas être utilisé dans le but de contourner des protections et d\'exécuter des logiciels piratés.';
var bodyElement = document.querySelector('body');
var html = document.querySelector('html');
var pageID = bodyElement.getAttribute("data-page-id");

var page = document.getElementsByClassName('page')[0];
var pageDocu = document.getElementsByClassName('page-docu')[0];

if (warningsList.length >= 1) {
    var warning = document.createElement('div');
}

for (i = 0; i < warningsList.length; i++) {
    if (warningsList.length >= 1) {
        var warningText = document.createElement('div');
        warning.className = "warning";
        warningText.innerHTML = "<i class=\"fa fa-exclamation-triangle\"></i>&nbsp;" + warningsList[i];
        if (warningsList.length != 0) {
            warning.appendChild(warningText);
        }
        
        if (!pageID.startsWith('DOC') && !pageID.startsWith('MLTI')) {
            if (warningsList.length != 0) {
                page.prepend(warning);
            }
        } 
        else {
            pageDocu.prepend(warning);
        }
    }
}

console.log(pageID);


if (pageID.startsWith('DOC') && (!pageID.includes('Revanced'))) {
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


  

updateDeviceHeight();
updateDeviceWidth();

window.addEventListener('resize', updateDeviceHeight);
window.addEventListener('resize', updateDeviceWidth);
