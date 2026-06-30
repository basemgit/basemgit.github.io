const menuButton = document.querySelector(".menu-button");
const closeButton = document.querySelector(".close-button");
const sideMenu = document.querySelector(".side-menu");

menuButton.addEventListener("click", () => {

    sideMenu.classList.add("open");

});

closeButton.addEventListener("click", () => {

    sideMenu.classList.remove("open");

});