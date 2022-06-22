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
const shopName = document.querySelector(".shop-name");

aboutDaveLink.addEventListener("click", moveToAboutDave);
projectGalleryLink.addEventListener("click", moveToProjectGallery);
contactLink.addEventListener("click", moveToContact);
shopName.addEventListener("click", moveToTopOfPage);


function moveToAboutDave () {
  console.log ("click");
  const aboutDave = document.querySelector("#jump-dave");
  aboutDave.scrollIntoView({block: "start", behavior: "smooth"});
}

function moveToProjectGallery () {
  const projectGallery = document.querySelector(".gallery-title");
  projectGallery.scrollIntoView({block: "start", behavior: "smooth"});
}

function moveToContact () {
  const contact = document.querySelector(".contact-dave");
  contact.scrollIntoView({block: "start", behavior: "smooth"});
}

function moveToTopOfPage () {
  console.log("click");
  const topOfPage = document.querySelector(".top-of-page");
  topOfPage.scrollIntoView({block: "start", behavior: "smooth"});
}



aboutDaveLink.addEventListener("click", menuDisappear);
projectGalleryLink.addEventListener("click", menuDisappear);
contactLink.addEventListener("click", menuDisappear);

function menuDisappear () {
  navMenu.classList.remove("show");
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
  if (!email.toLowerCase().match(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
  ){
    addError("You must provide a valid email address.")
  }

  let message = document.querySelector("#message").value;
  if (message.length < 1) {
    addError("Please let us know what you want Dave to create!")
  }
}

function addError (error) {
  let li = document.createElement("li");
  li.innerText = error;
  errorsList.appendChild(li);
}