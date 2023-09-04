"use strict";
const inputFirstname = document.getElementById("input-firstname");
const inputLastname = document.getElementById("input-lastname");
const inputUsername = document.getElementById("input-username");
const inputPassword = document.getElementById("input-password");
const inputPasswordCf = document.getElementById("input-password-confirm");
const btnSubmit = document.getElementById("btn-submit");

btnSubmit.addEventListener("click", function () {
  const user = new User(
    inputFirstname.value,
    inputLastname.value,
    inputUsername.value,
    inputPassword.value,
    5,
    "General",
    []
  );
  const validate = validateData(user);
  if (validate) {
    userArr.push(user);
    saveToStorage("userArrStorage", userArr);
    window.location.href = "../pages/login.html";
  }
});

function validateData(user) {
  let validate = true;
  if (user.firstname.trim() == "") {
    validate = false;
    alert("Enter First name");
  }
  if (user.lastname.trim() == "") {
    validate = false;
    alert("Enter Last name");
  }
  if (user.username.trim() == "") {
    validate = false;
    alert("Enter Username");
  }
  if (user.password.trim() == "") {
    validate = false;
    alert("Enter Password");
  }
  if (user.password.length < 8) {
    validate = false;
    alert("Password must least 8 characters");
  }
  //   if (inputPasswordCf.value.trim() == "") {
  //     validate = false;
  //     alert("Enter confirm password");
  //   }
  if (inputPasswordCf.value != user.password) {
    validate = false;
    alert("Password is not correct");
  }
  //   for (let i = 0; i < userArr.length; i++) {
  //     if (user.username === userArr[i].username) {
  //       alert("This user name was used");
  //       validate = false;
  //     }
  //   }
  if (
    !userArr.every((item) => (item.username == user.username ? false : true))
  ) {
    validate = false;
    alert("This Username was used");
  }
  return validate;
}
