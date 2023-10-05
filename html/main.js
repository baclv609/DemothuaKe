let search = document.querySelector(".search-box")
document.querySelector("#search-icon").onclick = () => {
    search.classList.toggle("active")
    menu.classList.remove("active")
}

let menu = document.querySelector(".nav.container")
ocument.getElementById("menu-icon").addEventListener("click", function () {
    var navbar = document.querySelector(".navbar");
    navbar.classList.toggle("open");
});
// hide menu and search 
window.onscroll = () => {
    menu.classList.remove("active")
    search.classList.remove("active")
}

// header
const header = document.querySelector("header");
window.addEventListener("scroll", () => {
    header.classList.toggle("shadow", window.scrollY > 0);
});