// Form validation
const form = document.querySelector(".main-content__form");
let email = document.getElementById("email");
let emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

form.addEventListener("submit", (e) => {
  if (!email.value.match(emailPattern) || email.value === "") {
    e.preventDefault();
    email.classList.add("invalid");
    email.parentElement.nextElementSibling.classList.add("active-warning");
  } else {
    email.classList.remove("invalid");
    email.classList.add("valid");
    email.parentElement.nextElementSibling.classList.remove("active-warning");
  }
});

// Hamburger button
const burgerBtn = document.querySelector(".main-header__hamburger-btn");

burgerBtn.addEventListener("click", () => {
  burgerBtn.nextElementSibling.classList.toggle("active-menu");
  if (burgerBtn.nextElementSibling.classList.contains("active-menu")) {
    burgerBtn.classList.add("btn-active");
  } else {
    burgerBtn.classList.remove("btn-active");
  }
});
