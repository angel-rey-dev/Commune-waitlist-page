const burgerBtn = document.querySelector(".main-header__hamburger-btn");

burgerBtn.addEventListener("click", () => {
  burgerBtn.nextElementSibling.classList.toggle("active-menu");
  if (burgerBtn.nextElementSibling.classList.contains("active-menu")) {
    burgerBtn.classList.add("btn-active");
  } else {
    burgerBtn.classList.remove("btn-active");
  }
});
