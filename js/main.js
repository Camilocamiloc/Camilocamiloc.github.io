// Botón scroll to top
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Mostrar/ocultar botón scroll to top
window.addEventListener('scroll', function() {
    const scrollTop = document.querySelector('.scroll-top');
    if (window.pageYOffset > 300) {
        scrollTop.classList.add('visible');
    } else {
        scrollTop.classList.remove('visible');
    }
});

// Animación de aparición al scroll (Intersection Observer)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Inicializar animaciones cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    // Elementos a animar
    const animatedElements = document.querySelectorAll(
        '.project-card, .skill-card, .timeline-item, .stat-box'
    );
    
    // Configurar animación inicial para cada elemento
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Smooth scroll para enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start' 
            });
        }
    });
});

// Highlight de navegación activa basado en la página actual
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('nav ul li a');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});

// Efecto parallax sutil en el hero (opcional)
window.addEventListener('scroll', function() {
    const hero = document.querySelector('.hero');
    if (hero) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * 0.5;
        hero.style.transform = `translate3d(0, ${rate}px, 0)`;
    }
});

// Prevenir clic derecho en imágenes (opcional, para proteger contenido)
// Descomentar si deseas activar esta funcionalidad
/*
document.addEventListener('contextmenu', function(e) {
    if (e.target.tagName === 'IMG') {
        e.preventDefault();
    }
});
*/

// Loading animation (opcional)
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// Console message para desarrolladores
console.log('%c¡Hola Developer! 👋', 'color: #00d9ff; font-size: 20px; font-weight: bold;');
console.log('%cEste portafolio fue creado con HTML, CSS y JavaScript vanilla', 'color: #a0a0a0; font-size: 14px;');
console.log('%c¿Interesado en colaborar? ¡Contáctame!', 'color: #00d9ff; font-size: 14px;');