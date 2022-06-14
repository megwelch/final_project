const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-right");

hamburger.addEventListener("click", showNavMenu);

function showNavMenu () {
  console.log ("click");
  hamburger.classList.toggle("show");
  navMenu.classList.toggle("show");
}