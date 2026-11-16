/* =========================
   NAVBAR: berubah biru saat di-scroll
========================= */

(function () {
    var navbar = document.getElementById('navbar');
    if (!navbar) return;

    function handleNavbarScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', handleNavbarScroll, { passive: true });
    handleNavbarScroll();


    /* =========================
       MENU MOBILE
    ========================= */

    var menuToggle = document.getElementById('menuToggle');
    var mobileNav = document.getElementById('mobileNav');
    if (!menuToggle || !mobileNav) return;

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


/* =========================
   FORM KONTAK (tampilan saja, belum terhubung ke server)
========================= */

(function () {
    var form = document.getElementById('contactForm');
    var success = document.getElementById('contactSuccess');
    var again = document.getElementById('contactAgain');
    var nameOut = document.getElementById('successName');
    if (!form || !success) return;

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        var name = document.getElementById('cName').value.trim();
        nameOut.textContent = name ? name.split(' ')[0] : 'friend';

        form.hidden = true;
        success.hidden = false;
    });

    if (again) {
        again.addEventListener('click', function () {
            form.reset();
            success.hidden = true;
            form.hidden = false;
        });
    }
})();