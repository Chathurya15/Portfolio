function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

const backToTop = document.getElementById("backToTop");

window.onscroll = function() {
  if (window.scrollY > 500) { // Shows arrow after scrolling 500px
    backToTop.style.display = "flex";
  } else {
    backToTop.style.display = "none";
  }
};
