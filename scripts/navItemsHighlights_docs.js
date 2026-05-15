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

var updtDate = document.querySelector('updtdate');
var navMenuBottom = document.createElement('div');
navMenuBottom.innerHTML = `
    <div class="nav-menu-separator"></div>
    <div class="nav-menu-item">Crédits des guides</div>
    <div class="nav-menu-item">Faire un don</div>
    <div class="nav-menu-item">Prérequis</div>
    <div class="nav-menu-item-date"><strong>Mis à jour le :</strong> ${updtDate.innerHTML}</div>
    <div class="nav-item-copy">&nbsp;&copy; Homebrew France</div>
`;

function createNavMenu() {
    var navElementsContainerHoriz = document.getElementsByClassName('nav-elements-horiz')[0];
    var navElementsContainerVert = document.getElementsByClassName('nav-elements-vert')[0];
    var navElements = document.getElementsByClassName('titles');
    var navMenuHoriz = document.getElementsByClassName('nav-menu-horiz')[0];
    for (let index = 0; index < navElements.length; index++) {
        var navMenuItem = document.createElement('div');
        navMenuItem.className = 'nav-menu-item';
        navMenuItem.setAttribute('data-target-id', navElements[index].id);
        navMenuItem.addEventListener('click', function() {
            window.location = '#' + navElements[index].id;
        });
        if (!navElements[index].innerHTML.includes('Préambule')) {
            navMenuItem.innerHTML = navElements[index].innerHTML;

            navElementsContainerHoriz.appendChild(navMenuItem);

            var clonedNavMenuItem = navMenuItem.cloneNode(true);
            clonedNavMenuItem.addEventListener('click', function() {
                window.location = '#' + navElements[index].id;
            });
            navElementsContainerVert.appendChild(clonedNavMenuItem);
        }
    }
    navElementsContainerVert.appendChild(navMenuBottom);
    navElementsContainerHoriz.appendChild(navMenuBottom);
}

function highlightNavMenu() {
    const navItems = document.querySelectorAll('.nav-menu-item');

    function highlightNavItem() {
        const sections = Array.from(document.querySelectorAll('h2.titles'));
        let currentSectionId = null;

        for (let i = sections.length - 1; i >= 0; i--) {
            const section = sections[i];
            const bounding = section.getBoundingClientRect();

            if (bounding.top <= window.innerHeight / 2) {
                currentSectionId = section.getAttribute('id');
                break;
            }
        }

        navItems.forEach(item => item.classList.remove('active-link'));

        if (currentSectionId) {
            const activeItem = Array.from(navItems).find(item =>
                item.getAttribute('data-target-id') === currentSectionId
            );
            if (activeItem) {
                activeItem.classList.add('active-link');
            }
        }
    }

    window.addEventListener('scroll', highlightNavItem);
    window.addEventListener('load', highlightNavItem);
}

document.addEventListener('DOMContentLoaded', function() {
    createNavMenu();
    highlightNavMenu();
});
