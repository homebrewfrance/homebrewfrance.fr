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

function createItemShop(themes, packs) {
    var themesDownload = document.getElementById('themes-download');
    var packsDownload = document.getElementById('packs-download');
    var chargementTelechargements1 = document.getElementsByClassName('chargementTelechargements')[0];
    var chargementTelechargements2 = document.getElementsByClassName('chargementTelechargements')[1];
    packsDownload.removeChild(chargementTelechargements1);
    themesDownload.removeChild(chargementTelechargements2);
    for (var itemIndex = 0; itemIndex < packs.length; itemIndex++) {
        var itemGitButton = '';
        if (packs[itemIndex].gitType == 'github') {
            itemGitButton = '<i class="fa-brands fa-github"></i>&nbsp;GitHub';
        }
        else if (packs[itemIndex].gitType == 'gitlab') {
            itemGitButton = '<i class="fa-brands fa-gitlab"></i>&nbsp;GitLab';
        }
        else if (packs[itemIndex].gitType == 'codeberg') {
            itemGitButton = '<i class="fa-solid fa-code"></i>&nbsp;CodeBerg';
        }
        var div = document.createElement('div');
        div.className = "grid-downloads " + packs[itemIndex].console + "-grid " + packs[itemIndex].exploit;
        div.id = packs[itemIndex].itemID;
        div.innerHTML =     
            `
                <h3 id="consolePack" style="font-weight: 700;">${packs[itemIndex].name}</h3>
                <h4 id="exploitPack" style="text-align: center; margin-top: 4px;">${packs[itemIndex].exploit}</h4>
                <small id="compatPack" style="color: white; margin-top: 4px"><strong>Compatibilité :</strong>&nbsp;${packs[itemIndex].compatibility}</small>
                <small style="color: white; margin-top: 4px"><strong>Auteur :</strong>&nbsp;<a href="${packs[itemIndex].authorLink}">${packs[itemIndex].author}</a></small>
                <div class="btn-container">
                    <a href="https://github.com/Le-Homebrew-France/Packs-Homebrew-France/releases/latest/download/${packs[itemIndex].lienDL}" id="${packs[itemIndex].console}">
                        <button class="default-button">
                        <i class="fa fa-download" aria-hidden="true"></i>
                        &nbsp;Télécharger</button>
                    </a>
                    <a href="${packs[itemIndex].gitLink}">
                        <button class="default-button git-button">${itemGitButton}&nbsp;</button>
                    </a>
                </div>
            `;

        packsDownload.appendChild(div)
    }

    for (var itemIndex = 0; itemIndex < themes.length; itemIndex++) {
        var div = document.createElement('div');
        div.className = "grid-downloads";
        div.innerHTML = 
        `
            <img src="${themes[itemIndex].image}" style="width: 24%; height: auto;">
            <h3 style="font-weight: 700;">${themes[itemIndex].name}</h3>
            <small style="text-align: center; padding-bottom: 12px;">${themes[itemIndex].description}</small><br>
            <small style="color: white;"><strong>Console :</strong>&nbsp;${themes[itemIndex].console}</small><small style="color: white;"><strong>Auteur :</strong>&nbsp;${themes[itemIndex].author}</small>
            <small style="color: white;"><strong>Catégorie :</strong>&nbsp;${themes[itemIndex].category}</small>
            <div class="btn-container">
                <a href="${themes[itemIndex].lienDL}"><button class="default-button"><i class="fa fa-download" aria-hidden="true"></i>&nbsp;Télécharger</button></a>
            </div>
        `;


        var popup = document.createElement('div');
        popup.className = 'popup';
        popup.id = 'itemQR' + themes[itemIndex].name.replace(/\s/g, '');

        popup.innerHTML = `
            <h2 style="color: white; text-align: center; margin-bottom: 8px;">${themes[itemIndex].name}</h2>
            <img src="${themes[itemIndex].qr}" class="qrcode">
            <button class="close-btn" id="${themes[itemIndex].name.replace(/\s/g, '') + "CloseBtn"}">
                Fermer
            </button>
        `
        var html = document.getElementsByTagName('html')[0];
        html.appendChild(popup);

        if (themes[itemIndex].qr == undefined) {
            console.log('NO QR');
        }
        else {
            var itemQRCode = document.createElement('button');
            var itemBtnContainer = div.querySelector('.btn-container');
            itemQRCode.className = 'git-button';
            itemQRCode.innerHTML = '<i class="fa fa-qrcode" aria-hidden="true"></i>&nbsp;QR';
            itemQRCode.id = 'QRBtn' + themes[itemIndex].name.replace(/\s/g, '');
            itemBtnContainer.appendChild(itemQRCode);
        }
        themesDownload.appendChild(div);
    }
}

function createQRPopups(themes) {
    setTimeout(function() {  
        for (let itemIndex3 = 0; itemIndex3 < themes.length; itemIndex3++) { 
            const popupId = 'itemQR' + themes[itemIndex3].name.replace(/\s/g, '');
            const findPopup = document.getElementById(popupId);
            if (themes[itemIndex3].qr == undefined) {
                
            } else {
                const qrButtonId = 'QRBtn' + themes[itemIndex3].name.replace(/\s/g, '');
                const finditemQRCode = document.getElementById(qrButtonId);
                const bodyElement = document.getElementsByTagName('body')[0];

                if (findPopup && finditemQRCode) {
                    finditemQRCode.addEventListener('click', function() {
                        findPopup.classList.add('show');
                        bodyElement.classList.add('blurred');
                    });

                    const closeButton = findPopup.querySelector('.close-btn');
                    if (closeButton) {
                        closeButton.addEventListener('click', function() {
                            findPopup.classList.remove('show');
                            bodyElement.classList.remove('blurred');
                        });
                    } else {
                    }
                } else {
                }
            }
        }
    }, 0);
}


function searchPack() {
    var packSearch = document.getElementById('packSearch');
    packSearch.addEventListener('keyup', function () {
        var packSearchValue = document.getElementById('packSearch').value.toLowerCase();
        var packsDownloadContainer = document.getElementById('packs-download');
        var searchGridItems = packsDownloadContainer.querySelectorAll('.grid-downloads')
        var compteurElements = 0;

        Array.from(searchGridItems).forEach(function (item) {
            if (!item.innerHTML.toLowerCase().includes(packSearchValue)) {
                item.style.display = "none";
            } else {
                item.style.display = "";
                compteurElements++;
            }
            var packNumResults = document.getElementById('packNumResults');
            packNumResults.innerHTML = `
                <p id="compteurResultats">${compteurElements} résultats</p>
            `;
        });
    });
}

function searchTheme() {
    var themeSearch = document.getElementById('themeSearch');
    themeSearch.addEventListener('keyup', function () {
        var themeSearchValue = document.getElementById('themeSearch').value.toLowerCase();
        var themesDownloadContainer = document.getElementById('themes-download');
        var searchGridItems = themesDownloadContainer.querySelectorAll('.grid-downloads')
        var compteurElements = 0;

        Array.from(searchGridItems).forEach(function (item) {
            if (!item.innerHTML.toLowerCase().includes(themeSearchValue)) {
                item.style.display = "none";
            } else {
                item.style.display = ""; 
                compteurElements++;
            }
            var themeNumResults = document.getElementById('themeNumResults');
            themeNumResults.innerHTML = `
                <p id="compteurResultats">${compteurElements} résultats</p>
            `;
        });
    });
}

document.addEventListener('DOMContentLoaded', function() {
    fetch('https://homebrewfrance.fr/beta/json/download-items.json')
    .then(response => response.json())
    .then(data => {
        const themes = data.themes;
        const packs = data.packs;

        createItemShop(themes, packs);
        createQRPopups(themes);
        searchPack();
        searchTheme();
    })
    .catch(error => console.error('Error loading navigation data:', error));
});

