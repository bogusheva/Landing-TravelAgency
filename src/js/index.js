const burger = document.querySelector(".js-burger-btn");
const header = document.querySelector(".js-header-menu");

burger.addEventListener("click", () => {
  header.classList.toggle("active");
});

window.onscroll = function () {
  myFunction();
};

var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
