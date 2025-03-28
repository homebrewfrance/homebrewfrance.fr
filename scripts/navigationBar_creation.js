/* 
	Homebrew France Web V4
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

const body = document.getElementsByTagName('body')[0];
const usrAgent = navigator.userAgent;
var websiteIcon = "https://cdn.homebrew-france.fun/generic/beta_website-icon.png";
var websiteIconTitle = "Homebrew France";
if (pageID.startsWith('DOC')) {
    websiteIcon = "https://cdn.homebrew-france.fun/generic/lumia-guides.png";
    websiteIconTitle = "Lumia Guides - par Homebrew France";
    var optionalClass = "class=\"lumiaIconNav\"";
}

const nav = document.createElement('div');
nav.className = 'navbar'
nav.innerHTML = `
<div id="navContainer">
    <img id="navIcon" src="${websiteIcon}" ${optionalClass} style="height: 45px; width: 45px;" title="${websiteIconTitle}">
    <div id="navbarToggler">
        <img id="hamburgerMenu" src="https://cdn.homebrew-france.fun/generic/hamburger-icon.png" style="height: 38px; width: 38px;">
    </div>
</div>
<span id="desktopItems">
</span>
<span id="mobileItems">
</span>
`;

body.appendChild(nav);

const navContainer = document.createElement('div');
navContainer.id = "navContainer";

const navIcon = document.getElementById('navIcon');
navIcon.onclick = function() {
    window.location.href = 'https://homebrewfrance.fr/';
};

const mobileItems = document.getElementById('mobileItems');

const desktopItems = document.getElementById('desktopItems');

function createNavbarItemsDesktop(navigationItems) {
    for (let index = 0; index < navigationItems.length; index++) {
        const navItem = document.createElement('a');
        navItem.className = navigationItems[index].category;
        navItem.id = navigationItems[index].id;
        if (navigationItems[index].url) {
            navItem.href = navigationItems[index].url;
        }
        if (navItem.className === 'dropdown-item') {
            navItem.innerHTML = `
            <span class="nav-item-content">
                ${navigationItems[index].name}
            </span>
            <div class="dropdown-menu animated fadeIn" id="${navigationItems[index].id + '-menu'}">
            `;
        }
        else {
            navItem.innerHTML = `<span id="${navigationItems[index].id + "Span"}">${navigationItems[index].name}</span>`;
        }
        desktopItems.appendChild(navItem);
    }
}

function createNavbarItemsMobile(navigationItems) {
    for (let index = 0; index < navigationItems.length; index++) {
        const navItem = document.createElement('a');
        navItem.className = navigationItems[index].category;
        navItem.id = navigationItems[index].id;
        if (navigationItems[index].url) {
            navItem.href = navigationItems[index].url;
        }
        if (navItem.className === 'dropdown-item') {
            navItem.innerHTML = `
            <span class="nav-item-content">
                ${navigationItems[index].name}
            </span>
            <div class="dropdown-menu animated fadeIn" id="${navigationItems[index].id + '-menu'}">
            `;
        }
        else {
            navItem.innerHTML = `<span id="${navigationItems[index].id + "Span"}">${navigationItems[index].name}</span>`;
        }
        mobileItems.appendChild(navItem);
    }
}

function createDropdownItemsDesktop(dropdownsItems) {
    for (let index = 0; index < dropdownsItems.length; index++) {
        const dropItem = document.createElement('a');
        if (dropdownsItems[index].id.includes('grayed')) {
            dropItem.className = 'drop-item grayed';
            dropItem.title = 'Bientôt disponible!';
        }
        else {
            dropItem.className = 'drop-item';
            dropItem.href = dropdownsItems[index].url;
        }
        dropItem.id = dropdownsItems[index].id;
        if (dropdownsItems[index].iconLink) {
            dropItem.innerHTML = `
            <img src="${dropdownsItems[index].iconLink}" width="20px" height="20px" style="margin-right: 9px;">
            ${dropdownsItems[index].name}
        `;
        } else {
            dropItem.innerHTML = dropdownsItems[index].name;
        }
        const dropdownTargetId = dropdownsItems[index].dropdownId + '-menu';
        const dropdownTarget = document.querySelector('#desktopItems div#' + dropdownTargetId);
        if (dropdownTarget) {
            dropdownTarget.appendChild(dropItem);
        }
    }
}

function createDropdownItemsMobile(dropdownsItems) {
    for (let index = 0; index < dropdownsItems.length; index++) {
        const dropItem = document.createElement('a');
        dropItem.href = dropdownsItems[index].url;
        if (dropdownsItems[index].id.includes('grayed')) {
            dropItem.className = 'drop-item grayed';
        }
        else {
            dropItem.className = 'drop-item';
        }
        dropItem.id = dropdownsItems[index].id;
        if (dropdownsItems[index].iconLink) {
            dropItem.innerHTML = `
            <img src="${dropdownsItems[index].iconLink}" width="20px" height="20px" style="margin-right: 9px;">
            ${dropdownsItems[index].name}
        `;
        } else {
            dropItem.innerHTML = dropdownsItems[index].name;
        }
        const dropdownTargetId = dropdownsItems[index].dropdownId + '-menu';
        const dropdownTarget = document.querySelector('#mobileItems div#' + dropdownTargetId);
        if (dropdownTarget) {
            dropdownTarget.appendChild(dropItem);
        }
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const navbarToggler = document.getElementById("navbarToggler");
    const mobileNavMenu = document.getElementById("mobileItems");

    navbarToggler.addEventListener("click", function() {
        mobileNavMenu.classList.toggle("showLinks");
    });

    fetch('https://homebrewfrance.fr/beta/json/navigation-items.json')
        .then(response => response.json())
        .then(data => {
            const navigationItems = data.navigationItems;
            createNavbarItemsDesktop(navigationItems);
            createNavbarItemsMobile(navigationItems);

            document.querySelectorAll('.dropdown-item').forEach(item => {
                const dropdownMenuDesktop = document.querySelector('#desktopItems div#' + item.id + '-menu');
                if (dropdownMenuDesktop) {
                    item.addEventListener('click', function() {
                        var desktopItemsCheck = document.getElementById('desktopItems');
                        var otherDrop = desktopItemsCheck.getElementsByClassName('showDropdown')[0];
                        var allDrops = desktopItemsCheck.getElementsByClassName('showDropdown');
                        dropdownMenuDesktop.classList.toggle('showDropdown');

                        if (otherDrop) {
                            otherDrop.classList.remove('showDropdown');
                        }

                        if (usrAgent.includes('Chrome')) {
                            if (allDrops.length > 0) {
                                var navbar = document.getElementsByClassName('navbar')[0];
                                navbar.style.backdropFilter = 'none';
                                navbar.style.backgroundColor = '#1f2023e3';
                            }
                            else {
                                var navbar = document.getElementsByClassName('navbar')[0];
                                navbar.style.backdropFilter = 'blur(10px)';
                            }
                        }
                    });
                }

                const dropdownMenuMobile = document.querySelector('#mobileItems div#' + item.id + '-menu');
                if (dropdownMenuMobile) {
                    item.addEventListener('click', function() {
                        var mobileItemsCheck = document.getElementById('mobileItems');
                        var otherDrop = mobileItemsCheck.getElementsByClassName('showDropdown')[0];
                        dropdownMenuMobile.classList.toggle('showDropdown');
                        if (otherDrop) {
                            otherDrop.classList.remove('showDropdown');
                        }
                    });
                }
            });
        })
        .catch(error => console.error('Erreur:', error));
    
    fetch('https://homebrewfrance.fr/beta/json/dropdowns-items.json')
        .then(response => response.json())
        .then(data => {
            const dropdownsItems = data.dropdownsItems;
            var dropdownItemNavbar = document.getElementsByClassName('dropdown-item')[0];
            if (dropdownItemNavbar) {
                createDropdownItemsDesktop(dropdownsItems);
                createDropdownItemsMobile(dropdownsItems);
                var navLinks = document.getElementsByClassName('nav-link');
                var dropLinks = document.getElementsByClassName('dropdown-item');
            
                for (var index=0; index<navLinks.length; index++) {
                    if ((navLinks[index].id == 'accueilLink' && pageID == 'HBF-Home') || (navLinks[index].id == 'telechargementsLink' && pageID == 'TELECHARGEMENTS') || (navLinks[index].id == 'recrutementsLink' && pageID == 'RECRUTEMENTS') || (navLinks[index].id == 'boutiqueLink' && pageID == 'BOUTIQUE') || (navLinks[index].id == 'aproposLink' && pageID == 'A-PROPOS')) {
                        navLinks[index].className = "nav-link active";
                    }
                    else {
                    }
                }
                for (var index=0; index<dropLinks.length; index++) {
                    if ((dropLinks[index].id == 'docsDrop' && pageID.startsWith('DOC')) || (dropLinks[index].id == 'multicheckerDrop' && pageID.startsWith('MLTI'))) {
                        dropLinks[index].className = "dropdown-item active";
                    }
                    else {
                    }
                }
                
            }
            else {
                setTimeout(function() {
                    createDropdownItemsDesktop(dropdownsItems);
                    createDropdownItemsMobile(dropdownsItems);
                }, 2000);
            }
        })
        .catch(error => console.error('Erreur:', error));
});
