let createAccountBtn = document.querySelector(".btnBox");
let fullName = document.querySelector("#name");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let displayErorMsgName = document.querySelector(".erorMsgName");
let displayErorMsgEmail = document.querySelector(".erorMsgEmail");
let displayErorMsgPassword = document.querySelector(".erorMsgPassword");

createAccountBtn.addEventListener("click", validation);
function validation(event) {
  event.preventDefault();
  if (validateName() && validateEmail() && validatePassword()) {
    alert(`Form submitted successfully`);
  }
}
function validateName() {
  if (fullName.value === "") {
    console.log(`name is required`);
    displayErorMsgName.innerText = "name is required";
    fullName.nextElementSibling.classList.add("fa-xmark");
    return false;
  }
  if (!fullName.value.match(/^[A-Za-z]{2,}( [A-Za-z]{2,})+$/)) {
    displayErorMsgName.innerText = "Write full name";
    fullName.nextElementSibling.classList.add("fa-xmark");
    return false;
  } else {
    fullName.nextElementSibling.classList.remove("fa-xmark");
    fullName.nextElementSibling.classList.add("fa-check");
    displayErorMsgName.innerText = "";
    return true;
  }
}
function validateEmail() {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email.value === "") {
    displayErorMsgEmail.innerText = "Email is required";
    email.nextElementSibling.classList.add("fa-xmark");
    return false;
  }
  if (!emailRegex.test(email.value)) {
    displayErorMsgEmail.innerText = "Invalid email format";
    email.nextElementSibling.classList.add("fa-xmark");
    return false;
  } else {
    displayErorMsgEmail.innerText = "";
    email.nextElementSibling.classList.remove("fa-xmark");
    email.nextElementSibling.classList.add("fa-check");
    return true;
  }
}
function validatePassword() {
  if (password.value === "") {
    displayErorMsgPassword.innerText = "Password is required";
    password.nextElementSibling.classList.add("fa-xmark");
    return false;
  }
  if (
    !password.value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/)
  ) {
    displayErorMsgPassword.innerText =
      "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character.";
    password.nextElementSibling.classList.add("fa-xmark");
    return false;
  } else {
    password.nextElementSibling.classList.remove("fa-xmark");
    password.nextElementSibling.classList.add("fa-check");
    return true;
  }
}
