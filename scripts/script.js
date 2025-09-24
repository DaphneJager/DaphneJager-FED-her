// JavaScript Document
console.log("hi");

let menuButton = document.querySelector("button")

menuButton.addEventListener("click", toggleButton)

function toggleButton() {
  menuButton.classList.toggle("is-open")
}