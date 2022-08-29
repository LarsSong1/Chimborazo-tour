// obtener elementos por la barra
const navbar = document.querySelector("nav");
const menu = document.querySelector(".menu")
const menuBtn = document.querySelector(".menu-btn")

// presionar la barra oara abrir el menu y cerrar

menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("nav-background");
    menu.classList.toggle("nav-toggle");
});