(function () {

    /* NAVBAR SCROLL EFFECT */

    var navbar = document.getElementById('navbar');

    function handleNavbarScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', handleNavbarScroll, { passive: true });
    handleNavbarScroll();

    /* MOBILE NAVIGATION */

    var menuToggle = document.getElementById('menuToggle');
    var mobileNav = document.getElementById('mobileNav');

    menuToggle.addEventListener('click', function () {
        var isOpen = mobileNav.classList.toggle('open');
        menuToggle.setAttribute('aria-expanded', isOpen);
    });

    mobileNav.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
            mobileNav.classList.remove('open');
            menuToggle.setAttribute('aria-expanded', 'false');
        });
    });

})();
