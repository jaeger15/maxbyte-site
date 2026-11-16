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
   FAQ ACCORDION
========================= */

(function () {
    var faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(function (item) {
        var question = item.querySelector('.faq-question');

        question.addEventListener('click', function () {
            var isActive = item.classList.contains('active');

            faqItems.forEach(function (faq) {
                faq.classList.remove('active');
            });

            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
})();