// JavaScript Document
console.log("hi");

// Hamburger menu bron: les oefening hamburger menu en studentassistent

let menuButton = document.querySelector("nav button")
let deNav = document.querySelector("nav")

menuButton.addEventListener("click", toggleButton)

function toggleButton() {
  deNav.classList.toggle("is-open")
  menuButton.classList.toggle("is-open")
}