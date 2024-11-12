const body = document.getElementsByTagName('body')[0];

const nav = document.createElement('nav');
nav.className = 'navbar'

const navContainer = document.createElement('div');
navContainer.id = "navContainer";

const navIcon = document.createElement('img');
navIcon.id = "navIcon";
navIcon.onclick = function() {
    window.location.href = 'https://homebrew-france.fr/';
};
navIcon.src = "https://homebrew-france.fr/style/assets/generic/website-icon.png";
navIcon.style.height = '45px';
navIcon.style.width = '45px';


const mobileItems = document.createElement('span');
mobileItems.id = "mobileItems";

const desktopItems = document.createElement('span');
desktopItems.id = "desktopItems";

const navbarToggler = document.createElement('div');
navbarToggler.id = "navbarToggler";

const hamburgerIcon = document.createElement('img');
hamburgerIcon.id = "hamburgerMenu";
hamburgerIcon.src = "https://homebrew-france.fr/style/assets/generic/hamburger-icon.png";
hamburgerIcon.style.height = '38px';
hamburgerIcon.style.width = '38px';

navbarToggler.appendChild(hamburgerIcon);
navContainer.appendChild(navIcon);
nav.appendChild(desktopItems);
navContainer.appendChild(navbarToggler);
nav.appendChild(mobileItems);
nav.prepend(navContainer);

body.appendChild(nav);

function createNavbarItemsDesktop(navigationItems) {
    for (let index = 0; index < navigationItems.length; index++) {
        const navItem = document.createElement('a');
        navItem.id = navigationItems[index].id;
        navItem.className = navigationItems[index].category;

        const span = document.createElement('span');
        span.innerText = navigationItems[index].name;
        navItem.appendChild(span);

        if (navItem.className === 'dropdown-item') {
            const dropdownMenu = document.createElement('div');
            dropdownMenu.className = 'dropdown-menu';
            dropdownMenu.id = navigationItems[index].id + '-menu';
            dropdownMenu.classList.add('animated', 'fadeIn');
            navItem.appendChild(dropdownMenu);
        } else if (navigationItems[index].url) {
            navItem.href = navigationItems[index].url;
        }

        desktopItems.appendChild(navItem);
    }
}

function createNavbarItemsMobile(navigationItems) {
    for (let index = 0; index < navigationItems.length; index++) {
        const navItem = document.createElement('a');
        navItem.id = navigationItems[index].id;
        navItem.className = navigationItems[index].category;

        const span = document.createElement('span');
        span.innerText = navigationItems[index].name;
        navItem.appendChild(span);

        if (navItem.className === 'dropdown-item') {
            const dropdownMenu = document.createElement('div');
            dropdownMenu.className = 'dropdown-menu';
            dropdownMenu.id = navigationItems[index].id + '-menu';
            navItem.appendChild(dropdownMenu);
        } else if (navigationItems[index].url) {
            navItem.href = navigationItems[index].url;
        }

        mobileItems.appendChild(navItem);
    }
}

function createDropdownItemsDesktop(dropdownsItems) {
    for (let index = 0; index < dropdownsItems.length; index++) {
        const dropItem = document.createElement('a');
        dropItem.href = dropdownsItems[index].url;
        dropItem.innerHTML = dropdownsItems[index].name;
        dropItem.className = 'drop-item';
        dropItem.id = dropdownsItems[index].id;
        var iconLink = dropdownsItems[index].iconLink;
        if (iconLink) {
            var dropItemIcon = document.createElement('img');
            dropItemIcon.src = dropdownsItems[index].iconLink;
            dropItemIcon.style.height = '20px';
            dropItemIcon.style.width = '20px';
            dropItemIcon.style.marginRight = '9px';
            dropItem.prepend(dropItemIcon);
        }
        const dropdownTargetId = dropdownsItems[index].dropdownId + '-menu';
        console.log('Tentative d\'ajouter à:', dropdownTargetId);
        const dropdownTarget = document.querySelector('#desktopItems div#' + dropdownTargetId);
        if (dropdownTarget) {
            dropdownTarget.appendChild(dropItem);
        } else {
            console.error('L\'élément suivant n\'a pas pu être trouvé :', dropdownTargetId);
        }
    }
}

function createDropdownItemsMobile(dropdownsItems) {
    for (let index = 0; index < dropdownsItems.length; index++) {
        const dropItem = document.createElement('a');
        var dropItemIcon = document.createElement('img');
        dropItemIcon.src = dropdownsItems[index].iconLink;
        dropItemIcon.style.height = '20px';
        dropItemIcon.style.width = '20px';
        dropItemIcon.style.marginRight = '9px';
        dropItem.href = dropdownsItems[index].url;
        dropItem.innerHTML = dropdownsItems[index].name;
        dropItem.className = 'drop-item';
        dropItem.id = dropdownsItems[index].id;
        dropItem.prepend(dropItemIcon);
        const dropdownTargetId = dropdownsItems[index].dropdownId + '-menu';
        console.log('Tentative d\'ajouter à:', dropdownTargetId);
        const dropdownTarget = document.querySelector('#mobileItems div#' + dropdownTargetId);
        if (dropdownTarget) {
            dropdownTarget.appendChild(dropItem);
        } else {
            console.error('L\'élément suivant n\'a pas pu être trouvé :', dropdownTargetId);
        }
    }
}

document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

document.addEventListener('DOMContentLoaded', function () {
    const navbarToggler = document.getElementById("navbarToggler");
    const mobileNavMenu = document.getElementById("mobileItems");

    navbarToggler.addEventListener("click", function() {
        mobileNavMenu.classList.toggle("showLinks");
    });

    fetch('https://beta.homebrew-france.site/json/navigation-items.json')
        .then(response => response.json())
        .then(data => {
            const navigationItems = data.navigationItems;
            createNavbarItemsDesktop(navigationItems);
            createNavbarItemsMobile(navigationItems);

            document.querySelectorAll('.dropdown-item').forEach(item => {
                const dropdownMenuDesktop = document.querySelector('#desktopItems div#' + item.id + '-menu');
                if (dropdownMenuDesktop) {
                    item.addEventListener('click', function() {
                        dropdownMenuDesktop.classList.toggle('showDropdown');
                    });
                } else {
                    console.error('Dropdown menu non trouvé pour l\'élément :', item.id);
                }

                const dropdownMenuMobile = document.querySelector('#mobileItems div#' + item.id + '-menu');
                if (dropdownMenuMobile) {
                    item.addEventListener('click', function() {
                        dropdownMenuMobile.classList.toggle('showDropdown');
                    });
                } else {
                    console.error('Dropdown menu non trouvé pour l\'élément :', item.id);
                }
            });
        })
        .catch(error => console.error('Error loading navigation data:', error));
    
    fetch('https://beta.homebrew-france.site/json/dropdowns-items.json')
        .then(response => response.json())
        .then(data => {
            const dropdownsItems = data.dropdownsItems;
            var dropdownItemNavbar = document.getElementsByClassName('dropdown-item')[0];
            if (dropdownItemNavbar) {
                createDropdownItemsDesktop(dropdownsItems);
                createDropdownItemsMobile(dropdownsItems);
            }
            else {
                setTimeout(function() {
                    createDropdownItemsDesktop(dropdownsItems);
                    createDropdownItemsMobile(dropdownsItems);
                }, 2000);
            }
        })
        .catch(error => console.error('Error loading dropdown data:', error));
});
