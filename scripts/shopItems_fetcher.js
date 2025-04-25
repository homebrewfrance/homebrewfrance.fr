/* 
	Homebrew France Web V4.0.0
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

function createItemShop(modifConsoles, consolesPucees) {
    var pucageConsoles = document.getElementById('pucageconsoles');
	var consolesPuceesID = document.getElementById('consolespucees');
    var chargementBoutique1 = document.getElementsByClassName('chargementBoutique')[0];
    var chargementBoutique2 = document.getElementsByClassName('chargementBoutique')[1];
    pucageConsoles.removeChild(chargementBoutique1);
    for (var itemIndex = 0; itemIndex < modifConsoles.length; itemIndex++) {
        var itemGrid = document.createElement('div');
        itemGrid.className = 'grid-shop';
        itemGrid.innerHTML = `
            <img src="${modifConsoles[itemIndex].image}" class="fup-article-image">
            <h3>${modifConsoles[itemIndex].name}</h3>
            <small><i>${modifConsoles[itemIndex].description}</i></small>
            <h3 style="margin: 6px; display: flex; flex-direction: row; ">
                <span class="prix-actuel">${modifConsoles[itemIndex].prixActuel}</span>
                &nbsp;
                <span class="prix-original">${modifConsoles[itemIndex].prixOriginal}</span>
            </h3>
            <div class="btn-container" style="margin-bottom: 8px;">
                <a href="${modifConsoles[itemIndex].lienArticle}">
                    <button class="shop-button"><i class="fas fa-shopping-cart"></i>&nbsp;Acheter</button>
                </a>
                <a href="${modifConsoles[itemIndex].lienArticle+'#descriptionTab'}">
                    <button class="shop-button"><i class="fas fa-plus-circle"></i>&nbsp;Plus d'infos</button>
                </a>
            </div>
            <div class="reductions">${calculReduc(modifConsoles[itemIndex])}</div>
            <div class="fup-icon-small"><img src="https://cdn.homebrew-france.fun/partner/fixurphone.png" width="75px"></div>
        `;

        function calculReduc() {
            var reduction = (((modifConsoles[itemIndex].prixActuel * 100) / modifConsoles[itemIndex].prixOriginal) - 100).toFixed(0);
            return reduction + "% RÉDUCTION";
        }
        pucageConsoles.appendChild(itemGrid);
    }
    consolesPuceesID.removeChild(chargementBoutique2);
	for (var itemIndex2 = 0; itemIndex2 < consolesPucees.length; itemIndex2++) {
        var itemGrid = document.createElement('div');
        itemGrid.className = 'grid-shop';
        itemGrid.innerHTML = `
            <img src="${consolesPucees[itemIndex2].image}" style="width: 60%; height: auto; padding-top: 22px; padding-bottom: 11px;">
            <h3>${consolesPucees[itemIndex2].name}</h3>
            <div class="edition">${consolesPucees[itemIndex2].edition}</div>
            <small><i>${consolesPucees[itemIndex2].description}</i></small>
            <h3 style="margin: 6px; display: flex; flex-direction: row; ">
                <span class="prix-actuel">${consolesPucees[itemIndex2].prixActuel}</span>
                &nbsp;
                <span class="prix-original">${consolesPucees[itemIndex2].prixOriginal}</span>
            </h3>
            <div class="btn-container">
                <a href="${consolesPucees[itemIndex2].lienArticle}">
                    <button class="shop-button"><i class="fas fa-shopping-cart"></i>&nbsp;Acheter</button>
                </a>
                <a href="${consolesPucees[itemIndex2].lienArticle+"#descriptionTab"}">
                    <button class="shop-button"><i class="fas fa-plus-circle"></i>&nbsp;Plus d'infos</button>
                </a>
            </div>
            <div class="reductions">${calculReduc(consolesPucees[itemIndex2])}</div>
            <div class="fup-icon-small"><img src="https://cdn.homebrew-france.fun/partner/fixurphone.png" width="75px"></div>
        `;

        function calculReduc() {
            var reduction = (((consolesPucees[itemIndex2].prixActuel * 100) / consolesPucees[itemIndex2].prixOriginal) - 100).toFixed(0);
            return reduction + "% RÉDUCTION";
        }
        consolesPuceesID.appendChild(itemGrid);
    }


}

document.addEventListener('DOMContentLoaded', function() {
    fetch('https://homebrewfrance.fr/json/shop-items.json')
    .then(response => response.json())
    .then(data => {
        const modifConsoles = data.modifConsoles;
        const consolesPucees = data.consolesPucees;

        createItemShop(modifConsoles, consolesPucees);
    })
    .catch(error => console.error('Erreur lors de la récupération des articles de la boutique FIXurPHONE:', error));
});

