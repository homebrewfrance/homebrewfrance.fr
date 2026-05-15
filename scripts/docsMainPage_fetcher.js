/* 
	Homebrew France Web V6.0.0
    Copyright (C) 2026  Homebrew France

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

//const docsElements = document.getElementById('docs-elements');
const chargementAproposDocs = document.getElementsByClassName('chargementApropos')[0];
const gridContainerDocs = document.getElementsByClassName('grid-docs-container')[0];

gridContainerDocs.removeChild(chargementAproposDocs);
function createItemDocs(docs) {
    for (var itemIndex = 0; itemIndex < docs.length; itemIndex++) {
        var gridDocs = document.createElement('div');
        gridDocs.className = 'grid-docs';
        gridDocs.innerHTML = `
            <div class="left-row-docs-items">
                <div>
                    <img src="https://homebrewfrance.github.io/cdn/docs/${docs[itemIndex].name}/main.png" width='190'>
                </div>
            </div>
            <div class="right-row-docs-items">
                <h3>${docs[itemIndex].displayName}</h3>
                <div class="dosc-description">
                    ${docs[itemIndex].description}
                </div>
                <div class="btn-container">
                    <a href="https://homebrewfrance.fr/docs/${docs[itemIndex].name}"><button class="git-button">Consulter <i class="fa fa-external-link" aria-hidden="true"></i></button></a>
                </div>
            </div>      
        
        `
        gridContainerDocs.appendChild(gridDocs);

    }
}

document.addEventListener('DOMContentLoaded', function() {
    const json = JSON.parse(document.getElementById("docsData").textContent);

    createItemDocs(json.docs);
});