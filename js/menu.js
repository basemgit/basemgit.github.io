const menuButton = document.querySelector(".menu-button");
const closeButton = document.querySelector(".close-button");
const sideMenu = document.querySelector(".side-menu");

menuButton.addEventListener("click", (event) => {
    event.stopPropagation();
    sideMenu.classList.add("open");
});

closeButton.addEventListener("click", () => {
    sideMenu.classList.remove("open");
});

sideMenu.addEventListener("click", (event) => {
    event.stopPropagation();
});

document.addEventListener("click", () => {
    sideMenu.classList.remove("open");
});