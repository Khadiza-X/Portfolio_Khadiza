// Wrapped in a function so its variable names can never clash with script.js
(function () {

    // ===== Skill filter buttons (runs first, independent of everything else) =====
    const filterButtons = document.querySelectorAll('.filter-btn');
    const skillTiles = document.querySelectorAll('.skill-tile');

    filterButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            filterButtons.forEach(function (b) { b.classList.remove('active'); });
            button.classList.add('active');

            const filter = button.getAttribute('data-filter');

            skillTiles.forEach(function (tile) {
                const show = filter === 'all' || tile.getAttribute('data-category') === filter;
                tile.classList.toggle('hide', !show);
            });
        });
    });

    // ===== Mobile menu =====
    const menuIcon = document.querySelector('#menu-icon');
    const navbar = document.querySelector('nav');
    const navLinks = document.querySelectorAll('nav a');

    function closeMenu() {
        if (!menuIcon || !navbar) return;
        menuIcon.classList.add('fa-bars');
        menuIcon.classList.remove('fa-xmark');
        navbar.classList.remove('active');
    }

    if (menuIcon && navbar) {
        menuIcon.addEventListener('click', function () {
            menuIcon.classList.toggle('fa-bars');
            menuIcon.classList.toggle('fa-xmark');
            navbar.classList.toggle('active');
        });
    }

    navLinks.forEach(function (link) {
        link.addEventListener('click', closeMenu);
    });

    // ===== Highlight the nav link of the section you are viewing =====
    const pageSections = document.querySelectorAll('section[id]');

    function updateActiveLink() {
        let current = 'home';

        pageSections.forEach(function (section) {
            if (window.scrollY >= section.offsetTop - 200) {
                current = section.id;
            }
        });

        navLinks.forEach(function (link) {
            link.classList.toggle('active', link.getAttribute('href') === '#' + current);
        });
    }

    window.addEventListener('scroll', updateActiveLink);
    updateActiveLink();

})();