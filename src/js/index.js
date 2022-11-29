const burger = document.querySelector(".js-burger-btn");
const header = document.querySelector(".js-header-menu");

burger.addEventListener("click", () => {
  header.classList.toggle("active");
});
