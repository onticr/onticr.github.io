const menuButton = document.querySelector(".menu_button");
const menuOverlay = document.querySelector(".menu_overlay");
const bar = document.querySelectorAll(".bar");

menuButton.addEventListener("click", function() {
  menuOverlay.classList.toggle("open");
  bar.forEach(bar => bar.classList.toggle("close"));
}); 