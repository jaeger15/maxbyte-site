const navbar = document.getElementById('navbar');

function handleNavbarScroll() {

    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

}

window.addEventListener('scroll', handleNavbarScroll, {
    passive: true
});

handleNavbarScroll();


/* MOBILE NAVIGATION */

const menuToggle = document.getElementById('menuToggle');
const mobileNav = document.getElementById('mobileNav');

menuToggle.addEventListener('click', () => {

    const isOpen = mobileNav.classList.toggle('open');

    menuToggle.setAttribute('aria-expanded', isOpen);

});


/* CLOSE MOBILE MENU WHEN LINK CLICKED */

mobileNav.querySelectorAll('a').forEach(link => {

    link.addEventListener('click', () => {

        mobileNav.classList.remove('open');

        menuToggle.setAttribute('aria-expanded', 'false');

    });

});


/* FAQ ACCORDION */

const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {

    const question = item.querySelector('.faq-question');

    question.addEventListener('click', () => {

        const isActive = item.classList.contains('active');

        faqItems.forEach(faq => {
            faq.classList.remove('active');
        });

        if (!isActive) {
            item.classList.add('active');
        }

    });

});


(function () {
    var btn = document.getElementById('seeMoreBtn');
    var box = document.getElementById('aboutMore');
    if (!btn || !box) return;

    btn.addEventListener('click', function () {
        var open = box.classList.toggle('open');
        btn.setAttribute('aria-expanded', open);
        btn.querySelector('.see-more-label').textContent = open ? 'See less' : 'See more';
    });
})();

(function () {
    var grid = document.querySelector('.feature-marquee .feature-grid');
    if (!grid) return;

    Array.prototype.slice.call(grid.children).forEach(function (card) {
        var copy = card.cloneNode(true);
        copy.setAttribute('aria-hidden', 'true');
        grid.appendChild(copy);
    });
})();
