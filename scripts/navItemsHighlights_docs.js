document.addEventListener('DOMContentLoaded', function() {
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
                item.getAttribute('onclick').includes(`#${currentSectionId}`)
            );
            if (activeItem) {
                activeItem.classList.add('active-link');
            }
        }
    }

    window.addEventListener('scroll', highlightNavItem);
    window.addEventListener('load', highlightNavItem);
});
