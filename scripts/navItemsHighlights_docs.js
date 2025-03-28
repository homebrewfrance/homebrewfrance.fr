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
    if ((!pageID.includes('Switch')) && (!pageID.includes('Revanced')) && (!pageID.includes('3DS'))) {
        var downloadPDFBtn = document.createElement('div');
        downloadPDFBtn.className = 'nav-menu-item';
        downloadPDFBtn.id = 'downloadPDF';
        downloadPDFBtn.title = 'Téléchargez ce guide en PDF pour le consulter partout! (Fonction expérimentale)';
        downloadPDFBtn.innerHTML = `
            <i class="fa-solid fa-download"></i> Télécharger en PDF&nbsp;<sup style="color: rgb(165, 165, 165);">beta</sup>
        `;
        navElementsContainerHoriz.appendChild(downloadPDFBtn);
        var clonedDLBTN = downloadPDFBtn.cloneNode(true);
        navElementsContainerVert.appendChild(clonedDLBTN);
        downloadPDF();
    }

    var navBottom = document.createElement('div');
    navBottom.className = "nav-bottom";
    navBottom.innerHTML = `
        <h4 style="font-family: 'Sora', sans-serif; font-size: 18px; align-items: center; display: flex;">
            <img src="https://cdn.homebrew-france.fun/generic/lumia-guides.png" width="24px">
            <span style="font-weight: 300;">Lumia</span>&nbsp;Guides
        </h4>
        <p style="font-size: 15px; color: rgb(210, 210, 210);">Made by Homebrew France</p>
    `;
    navMenuHoriz.appendChild(navBottom);
}

function downloadPDF() {
    var dlPDFicon = document.getElementById('dlPDFicon');
    document.getElementById("downloadPDF").addEventListener("click", function() {
        let element = document.querySelector(".page-docu").cloneNode(true);
        let buttonToRemove = element.querySelector("#downloadPDF");
        if (buttonToRemove) buttonToRemove.remove();
    
        element.style.width = "100%";
        element.style.margin = "0%";
        element.style.maxWidth = "210mm"; 
        element.style.height = "auto";
        element.style.maxHeight = "none";
    
        html2pdf(element, {
            margin: 0, 
            filename: pageID + '_' + Date.now() + '.pdf',
            image: { type: 'jpeg', quality: 1 },
            html2canvas: { scale: 3, useCORS: true },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
        });     
    });
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
