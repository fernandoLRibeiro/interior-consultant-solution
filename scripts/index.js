const burgerMenu = document.getElementById("burger-menu-button");

const navLinks = document.getElementById("navigation-links");
const buttonIcon = document.getElementById("icon");

burgerMenu.addEventListener("click", () => {
  navLinks.classList.toggle("mobile-active");
  if (navLinks.classList.contains("mobile-active")) {
    buttonIcon.innerText = "close";
  } else {
    buttonIcon.innerText = "menu";
  }
});
