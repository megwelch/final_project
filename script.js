// HAMBURGER MENU

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-right");

hamburger.addEventListener("click", showNavMenu);

function showNavMenu () {
  console.log ("click");
  hamburger.classList.toggle("show");
  navMenu.classList.toggle("show");
}

// MOVE-TO LINKS

const aboutDaveLink = document.querySelector(".about-dave-link");
const projectGalleryLink = document.querySelector(".project-gallery-link");
const contactLink = document.querySelector(".contact-link");

aboutDaveLink.addEventListener("click", moveToAboutDave);
projectGalleryLink.addEventListener("click", moveToProjectGallery);


function moveToAboutDave () {
  console.log ("click");
  const aboutDave = document.querySelector("#jump-dave");
  aboutDave.scrollIntoView({block: "start", behavior: "smooth"});
}

function moveToProjectGallery () {
  const projectGallery = document.querySelector(".gallery-title");
  projectGallery.scrollIntoView({block: "start", behavior: "smooth"});
}

aboutDaveLink.addEventListener("click", menuDisappear);

function menuDisappear () {
  navMenu.classList.add("hide");
}

// CONTACT FORM

const form = document.querySelector("#contact-form");
const errorsList = document.querySelector("#errors");

form.addEventListener("submit", validateForm);

function validateForm (event) {
  event.preventDefault();
  errorsList.innerHTML = "";

  let firstName = document.querySelector("#firstname").value;
  if (firstName.length < 1) {
    addError("You must provide a first name.")
  }

  let lastName = document.querySelector("#lastname").value;
  if (lastName.length < 1) {
    addError("You must provide a last name.")
  }

  let email = document.querySelector("#email").value;
  let emailValidation = "@";
  if (email.indexOf(emailValidation) === -1){
    addError("You must provide a valid email address.")
  }

  let message = document.querySelector("#message").value;
  if (message.length < 1) {
    addError("Please let us know what you want Dave to create!")
  }
}


function addError(error) {
  let li = document.createElement("li");
  li.innerText = error;
  errorsList.appendChild(li);
}
