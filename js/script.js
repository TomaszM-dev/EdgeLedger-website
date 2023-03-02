"use strict";

const navLinks = document.querySelector(".nav-links");
const navBar = document.querySelectorAll(".nav_bar");
const home = document.querySelector("#home");
const about = document.querySelector("#about");
const nav = document.querySelector("#navbar");
const hero = document.querySelector("#home");

let scrolled = false;

navLinks.addEventListener("click", function (e) {
  const clicked = e.target.closest(".nav_bar");
  if (!clicked) return;

  navBar.forEach((t) => t.classList.remove("nav_bar--active"));
  clicked.classList.add("nav_bar--active");
});

window.onscroll = function () {
  if (window.pageYOffset > 100) {
    navbar.classList.remove("top");
    if (!scrolled) {
      navbar.style.transform = "translateY(-70px)";
    }
    setTimeout(function () {
      navbar.style.transform = "translateY(0)";
      scrolled = true;
    }, 200);
  } else {
    navbar.classList.add("top");
    scrolled = false;
  }
};

document.querySelector(".btn-H").addEventListener("click", function () {
  navBar.forEach((t) => t.classList.remove("nav_bar--active"));
  document.querySelector(".nav_bar--2").classList.add("nav_bar--active");
});
