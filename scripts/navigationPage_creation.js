/* 
	Homebrew France Web V4.1.0
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

const navList = document.getElementById("navList");
const docList = document.getElementById('docList');
const checkerList = document.getElementById('checkerList');

function navItemsAppend(navigationItems) {
    for (let index = 0; index < navigationItems.length; index++) {
        if (navigationItems[index].category == 'nav-link') {
            var li = document.createElement('li');
            var link = document.createElement('a');
            link.href = navigationItems[index].url;
            link.innerHTML = navigationItems[index].name;
            li.appendChild(link);
            navList.appendChild(li);        
        }
    }
}

function dropdownsItemsAppend(dropdownsItems) {
    for (let index = 0; index < dropdownsItems.length; index++) {
        if (dropdownsItems[index].dropdownId == 'docsDrop') {
            var li = document.createElement('li');
            var link = document.createElement('a');
            link.href = dropdownsItems[index].url;
            link.innerHTML = dropdownsItems[index].name;
            li.appendChild(link);
            docList.appendChild(li);        
        }
        else if (dropdownsItems[index].dropdownId == 'multicheckerDrop') {
            var li = document.createElement('li');
            var link = document.createElement('a');
            link.href = dropdownsItems[index].url;
            link.innerHTML = dropdownsItems[index].name;
            li.appendChild(link);
            checkerList.appendChild(li);        
        }
    }
}

document.addEventListener('DOMContentLoaded', function () {
    fetch('https://homebrewfrance.fr/json/navigation-items.json')
        .then(response => response.json())
        .then(data => {
            const navigationItems = data.navigationItems;
            navItemsAppend(navigationItems);
        })
        .catch(error => console.error('Erreur:', error));
    
    fetch('https://homebrewfrance.fr/json/dropdowns-items.json')
        .then(response => response.json())
        .then(data => {
            const dropdownsItems = data.dropdownsItems;
            dropdownsItemsAppend(dropdownsItems);
        })
        .catch(error => console.error('Erreur:', error));
});