const menuClose = document.getElementById("menu-close");
const menuOpen = document.getElementById("menu-open");
const menu = document.getElementById("header-nav-bar");
const rating = document.querySelectorAll(".rating");
rating.forEach((e) => {
  const ratingValue = parseInt(e.getAttribute("data"));
  const newWidth = ratingValue * 20;
  e.style.width = `${newWidth}px`;
});
menuOpen.addEventListener("click", () => {
  menu.classList.add("active");
});
menuClose.addEventListener("click", () => {
  menu.classList.remove("active");
});
