let rangeEle = document.querySelector("#range");
let rangeValueEle = document.querySelector("#range-value");
let genPasswordBtnEle = document.querySelector("#gen-password-btn");
let passwordBox = document.querySelector("#password-box");
let uppercaseEle = document.querySelector("#uppercase");
let lowercaseEle = document.querySelector("#lowercase");
let symbolsEle = document.querySelector("#symbols");
let numbersEle = document.querySelector("#numbers");
let copyIconEle = document.querySelector("#copy-icon");

rangeValueEle.innerHTML = rangeEle.value;
rangeEle.addEventListener("input", () => {
  rangeValueEle.innerHTML = rangeEle.value;
});

genPasswordBtnEle.addEventListener("click", () => {
  passwordBox.value = generatePassword();
});
let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerChars = upperChars.toLocaleLowerCase();
let numbers = "0123456789";
let symbols = "@#$%^&*";

function generatePassword() {
  let allChars = "";
  let password = "";
  allChars += uppercaseEle.checked ? upperChars : "";
  allChars += lowercaseEle.checked ? lowerChars : "";
  allChars += symbolsEle.checked ? symbols : "";
  allChars += numbersEle.checked ? numbers : "";
  let i = 1;
  while (i <= rangeEle.value) {
    password += allChars.charAt(Math.floor(Math.random() * allChars.length));
    i++;
  }

  return password;
}
copyIconEle.addEventListener("click", () => {
  if (passwordBox.value != "") {
    navigator.clipboard.writeText(passwordBox.value);
    copyIconEle.innerHTML="check";
    copyIconEle.title = `Password Copied`;
    setTimeout(()=>{
      copyIconEle.innerHTML="content_copy";
    copyIconEle.title = ``;
    },2000);
  }
});
