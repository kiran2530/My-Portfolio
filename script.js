// ================ toggle icon navbar ===============
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

// ================ Remove toggle icon & navbar when click navbar link (scroll) ===============

window.onscroll = () => {
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

// ================ Scroll reveal ===============

ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading, .main-text, .services-container, .project-box, .contact form, .skill-left, .about-image, .about-content, .skill-right', {origin: 'top' });
ScrollReveal().reveal('.home-image', {origin: 'bottom' });
