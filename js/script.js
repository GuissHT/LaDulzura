// Esperamos a que todo el contenido de la página esté cargado
document.addEventListener("DOMContentLoaded", function() {
    
    const videoHero = document.getElementById("bg-video");
    
    if (videoHero) {
        videoHero.playbackRate = 0.5; 
    }
// Este código se asegura de que el formulario esté vacío al cargar la página
window.onload = function() {
    const formulario = document.querySelector('form');
    if (formulario) {
        formulario.reset();
    }
};
    window.addEventListener("scroll", function() {
        const navbar = document.querySelector(".navbar");
        if (window.scrollY > 50) {
            navbar.classList.add("navbar-scrolled", "shadow");
        } else {
            navbar.classList.remove("navbar-scrolled", "shadow");
        }
    });

});