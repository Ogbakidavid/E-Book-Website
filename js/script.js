// =========== Header ============
const header = document.querySelector('[data-header');
const menu = document.querySelector('[data-toggle')
const menuLinks = document.querySelector('[data-menu');
const overlay = document.querySelector('[data-overlay');

window.addEventListener('scroll', function() {
    header.classList[window.scrollY >= 40 ? 'add' : 'remove']("active")
});

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
    overlay.classList.toggle('active');
});

menuLinks.addEventListener('click', function() {
    menuLinks.classList.remove('active');
    overlay.classList.remove('active');
    menu.setAttribute('class', 'navbar__toggle');
})

// ========= Search =============
const searchButton = document.querySelector('[data-search');
const searchClose = document.querySelector('[data-close');
const searchContent = document.querySelector('[data-content');

// ======== Search show =========
if(searchButton) {
    searchButton.addEventListener('click', () => {
        searchContent.classList.add('show-search');
    });
}

// ======== Search Remove =========
if(searchClose) {
    searchClose.addEventListener('click', () => {
        searchContent.classList.remove('show-search');
    });
}

// =========== Login ============
const loginButton = document.querySelector('[data-login');
const loginClose = document.querySelector('[data-login-close');
const loginContent = document.querySelector('[data-login-content');

// ======== Login show =========
if(loginButton) {
    loginButton.addEventListener('click', () => {
        loginContent.classList.add('show-login');
    });
}

// ======== Login Remove =========
if(loginClose) {
    loginClose.addEventListener('click', () => {
        loginContent.classList.remove('show-login');
    });
}

// ============== Swiper =============
let swiperHome = new Swiper('.home__swiper', {
    loop: true,
    spaceBetween: -24,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    breakpoints: {
        580: {
            spaceBetween: -32,
        }
    }
});

// ============ Featured Swiper ============
let swiperFeatured = new Swiper('.featured__swiper', {
    loop: true,
    spaceBetween: 32,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: false,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        580: {
            spaceBetween: 16,
            slidesPerView: 2,
        },
        960: {
            slidesPerView: 4,
        }
    }
});

// ============ New Swiper ============
let swiperNew = new Swiper('.new__swiper', {
    loop: true,
    spaceBetween: 16,
    grabCursor: true,
    slidesPerView: 'auto',

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    breakpoints: {
        680: {
            slidesPerView: 2,
        },
        960: {
            slidesPerView: 3,
        }
    }
});

// ============= Testimonial Swiper ==============
let swiperTestimonial = new Swiper('.testimonial__swiper', {
    loop: true,
    spaceBetween: 16,
    grabCursor: true,
    slidesPerView: 'auto',


    breakpoints: {
        680: {
            slidesPerView: 2,
        },
        960: {
            slidesPerView: 3,
        }
    }
});

// =============== Dark Theme ============
const themeButton = document.querySelector('[data-theme');
const darkTheme = 'dark-theme';
const iconTheme = 'ri-sun-line';

// Previously Selected Topic (if user select)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

const getCurrentTheme = () => document.body.classList.contains('darkTheme') ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains('iconTheme') ? 'ri-moon-line': 'ri-sun-line'

// Validate Theme
if(selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
};

// Activate / Deactivate Theme
themeButton.addEventListener('click', () => {
    // Add or Remove dark / icon theme
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);

    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
});

// ============ Scroll Reveal ===========
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 3000,
    delay: 400,
});

sr.reveal(`.home__section, .featured__container, .new__container, .testimonial`);

sr.reveal(`.home__images`, {
    delay: 600,
    distance: '80px',
});

sr.reveal(`.service__card`, {
    interval: 100,
});

sr.reveal(`.discount__content`, {
    origin: 'left'
});

sr.reveal(`.discount__images`, {
    origin: 'right'
});

sr.reveal(`.join__content`, {
    origin: 'bottom'
});

sr.reveal(`.footer`, {
    origin: 'bottom',
})