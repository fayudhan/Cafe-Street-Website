// Change Navbar BG When Scroll
const navbar = document.querySelector(".navbar");

function handleScroll() {
  if (window.scrollY > 0) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
}

window.addEventListener("scroll", handleScroll);

// Mobile Menu
function toggleMenu() {
  document.querySelector(".mobile-menu").classList.toggle("open");
}
function closeMenu() {
  document.querySelector(".mobile-menu").classList.remove("open");
}
