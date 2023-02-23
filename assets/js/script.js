// global variables
let navToggler = document.querySelector(".navbar .navbar-toggler");
let navList = document.querySelector("#navbarSupportedContent");
let navbarItems = document.querySelectorAll(".nav-item a");
let header = document.querySelector("#header");
let up = document.querySelector(".up");
let slides = Array.from(document.querySelectorAll(".testimonials .slide"));
let indicators = document.querySelectorAll(".indicators li");
let videoSection = document.querySelector(".video");
let videoOverlay = document.querySelector(".video .overlay");
let videoIcon = document.querySelector(".video .icon");
///////////////  HEADER SECTION /////////////////
window.onscroll = function () {
  if (scrollY > 50) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
  if (window.scrollY >= 400) {
    up.classList.add("active");
  } else {
    up.classList.remove("active");
  }
};

// show navbar while clicking on bar icon
navToggler.addEventListener("click", () => {
  navList.classList.toggle("active");
});

// add active class to li on navbar
navbarItems.forEach((el) => {
  el.addEventListener("click", () => {
    removeActiveClass();
    el.classList.add("active");
  });
});
function removeActiveClass() {
  navbarItems.forEach((el) => {
    el.classList.remove("active");
  });
}
/////////// ARROW UP //////////
up.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  up.classList.add("active");
});
