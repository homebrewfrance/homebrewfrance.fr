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

var htmlpage = document.getElementsByTagName('html')[0];
var websiteIcon = "https://cdn.homebrew-france.fun/generic/beta_website-icon.png";
var websiteIconTitle = "Homebrew France";
var optionalClass = "";

if (pageID && pageID.startsWith('DOC')) {
    websiteIcon = "https://cdn.homebrew-france.fun/generic/lumia-guides.png";
    websiteIconTitle = "Lumia Guides - par Homebrew France";
    optionalClass = 'class="lumiaIconNav"';
}

htmlpage.insertAdjacentHTML('afterbegin', `
<div class="navbar-container">
  <div class="navbar">
    <div id="navContainer">
      <img id="navIcon" src="${websiteIcon}" ${optionalClass} style="height: 45px; width: 45px;" title="${websiteIconTitle}">
      <div id="navbarToggler">
        <img id="hamburgerMenu" src="https://cdn.homebrew-france.fun/generic/hamburger-icon.png" style="height: 38px; width: 38px;">
      </div>
    </div>
    <span id="desktopItems">
      <a class="nav-link" id="accueilLink" href="https://homebrewfrance.fr/"><span id="accueilLinkSpan">Accueil</span></a>
      <a class="nav-link" id="telechargementsLink" href="https://homebrewfrance.fr/ressources/"><span id="telechargementsLinkSpan">Ressources</span></a>
      <a class="dropdown-item" id="docsDrop"><span class="nav-item-content">Guides</span><div class="dropdown-menu animated fadeIn" id="docsDrop-menu"></div></a>
      <a class="dropdown-item" id="multicheckerDrop"><span class="nav-item-content">Checker</span><div class="dropdown-menu animated fadeIn" id="multicheckerDrop-menu"></div></a>
      <a class="nav-link" id="aproposLink" href="https://homebrewfrance.fr/a-propos/"><span id="aproposLinkSpan">À propos</span></a>
    </span>
    <span id="mobileItems">
      <a class="nav-link" id="accueilLink" href="https://homebrewfrance.fr/"><span id="accueilLinkSpan">Accueil</span></a>
      <a class="nav-link" id="telechargementsLink" href="https://homebrewfrance.fr/ressources/"><span id="telechargementsLinkSpan">Ressources</span></a>
      <a class="dropdown-item" id="docsDrop"><span class="nav-item-content">Guides</span><div class="dropdown-menu animated fadeIn" id="docsDrop-menu"></div></a>
      <a class="dropdown-item" id="multicheckerDrop"><span class="nav-item-content">Checker</span><div class="dropdown-menu animated fadeIn" id="multicheckerDrop-menu"></div></a>
      <a class="nav-link" id="aproposLink" href="https://homebrewfrance.fr/a-propos/"><span id="aproposLinkSpan">À propos</span></a>
    </span>
  </div>
</div>
`);

var htmlpage = document.getElementsByTagName('html')[0];
const body = document.getElementsByTagName('body')[0];
const usrAgent = navigator.userAgent;
var websiteIcon = "https://cdn.homebrew-france.fun/generic/beta_website-icon.png";
var websiteIconTitle = "Homebrew France";
if (pageID.startsWith('DOC')) {
    websiteIcon = "https://cdn.homebrew-france.fun/generic/lumia-guides.png";
    websiteIconTitle = "Lumia Guides - par Homebrew France";
    var optionalClass = "class=\"lumiaIconNav\"";
}


const navIcon = document.getElementById('navIcon');
navIcon.onclick = function() {
    window.location.href = 'https://homebrewfrance.fr/';
};

const mobileItems = document.getElementById('mobileItems');

const desktopItems = document.getElementById('desktopItems');


function updateNavbarWidth() {
    var navbarElement = document.getElementsByClassName('navbar')[0];
    if (navbarElement) {
        const navbarWidth = navbarElement.offsetWidth;  
        document.documentElement.style.setProperty('--navbar-width', `${navbarWidth}px`);
        const navbarHeight = navbarElement.offsetHeight;  
        document.documentElement.style.setProperty('--navbar-height', `${navbarHeight}px`);
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const navbarToggler = document.getElementById("navbarToggler");
    const mobileNavMenu = document.getElementById("mobileItems");

    navbarToggler.addEventListener("click", function() {
        mobileNavMenu.classList.toggle("showLinks");
    });

    updateNavbarWidth();
    window.addEventListener('resize', updateNavbarWidth);

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
                    var navbar = document.getElementsByClassName('navbar')[0];
                    navbar.style.backdropFilter = (allDrops.length > 0) ? 'none' : 'blur(10px)';
                    if (allDrops.length > 0) navbar.style.backgroundColor = '#151518e5';
                }
            });
        }

        const dropdownMenuMobile = document.querySelector('#mobileItems div#' + item.id + '-menu');
        if (dropdownMenuMobile) {
            item.addEventListener('click', function() {
                var mobileItemsCheck = document.getElementById('mobileItems');
                var otherDrop = mobileItemsCheck.getElementsByClassName('showDropdown')[0];
                dropdownMenuMobile.classList.toggle('showDropdown');
                if (otherDrop) otherDrop.classList.remove('showDropdown');
            });
        }
    });

    var navbarEl = document.getElementsByClassName('navbar')[0];
    if (mobileNavMenu.className != '') navbarEl.classList.toggle('navbarMobileRadius');

    var navLinks = document.getElementsByClassName('nav-link');
    var dropLinks = document.getElementsByClassName('dropdown-item');

    for (var index=0; index<navLinks.length; index++) {
        if ((navLinks[index].id == 'accueilLink' && pageID == 'HBF-Home') ||
            (navLinks[index].id == 'telechargementsLink' && pageID == 'TELECHARGEMENTS') ||
            (navLinks[index].id == 'recrutementsLink' && pageID == 'RECRUTEMENTS') ||
            (navLinks[index].id == 'boutiqueLink' && pageID == 'BOUTIQUE') ||
            (navLinks[index].id == 'aproposLink' && pageID == 'A-PROPOS')) {
            navLinks[index].className = "nav-link active";
        }
    }
    for (var index=0; index<dropLinks.length; index++) {
        if ((dropLinks[index].id == 'docsDrop' && pageID.startsWith('DOC')) ||
            (dropLinks[index].id == 'multicheckerDrop' && pageID.startsWith('MLTI'))) {
            dropLinks[index].className = "dropdown-item active";
        }
    }
});