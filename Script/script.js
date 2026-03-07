// Animación al hacer scroll
window.addEventListener("scroll", reveal);

function reveal() {
    const reveals = document.querySelectorAll(".reveal");

    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 100;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

// Ejecutar al cargar
reveal();

document.querySelectorAll('.combo-slide').forEach(link => {
    link.addEventListener('click', function (e) {
        if (this.getAttribute('href') === '#') {
            e.preventDefault();
        }
    });
});

// =============================
// Carrusel de combos con flechas activas/inactivas
// =============================
const track = document.querySelector('.carousel-track');
const nextBtn = document.querySelector('.carousel-btn.next');
const prevBtn = document.querySelector('.carousel-btn.prev');
const slides = document.querySelectorAll('.combo-slide');

if (track && nextBtn && prevBtn && slides.length > 0) {

    const slideWidth = 280; // ancho del slide + gap
    let position = 0;

    // Cantidad visible (ajusta si ves más o menos en pantalla)
    const visibleSlides = Math.floor(document.querySelector('.carousel-container').offsetWidth / slideWidth);

    const maxPosition = -(slideWidth * (slides.length - visibleSlides));

    // Función para actualizar estado de flechas
    function updateButtons() {
        // Inicio
        if (position >= 0) {
            prevBtn.classList.add('disabled');
        } else {
            prevBtn.classList.remove('disabled');
        }

        // Final
        if (position <= maxPosition) {
            nextBtn.classList.add('disabled');
        } else {
            nextBtn.classList.remove('disabled');
        }
    }

    nextBtn.addEventListener('click', () => {
        if (position > maxPosition) {
            position -= slideWidth;
            if (position < maxPosition) position = maxPosition;
            track.style.transform = `translateX(${position}px)`;
            updateButtons();
        }
    });

    prevBtn.addEventListener('click', () => {
        if (position < 0) {
            position += slideWidth;
            if (position > 0) position = 0;
            track.style.transform = `translateX(${position}px)`;
            updateButtons();
        }
    });

    // Estado inicial
    updateButtons();

}
// Menu Navbar efecto scroll
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

if(window.scrollY > 50){
navbar.classList.add("scrolled");
}else{
navbar.classList.remove("scrolled");
}

});

 // Menu Navbar
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
navLinks.classList.toggle("active");
});
