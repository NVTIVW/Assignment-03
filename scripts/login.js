"use strict";
const inputUsername = document.getElementById("input-username");
const inputPassword = document.getElementById("input-password");
const btnSubmit = document.getElementById("btn-submit");

btnSubmit.addEventListener("click", function () {
  console.log(userArr);
  const validate = isValidate();
  if (validate) {
    // let user;
    // for (let i = 0; i < userArr.length; i++) {
    //   console.log(userArr[i].username);
    //   console.log(userArr[i].password);
    //   if (
    //     inputUsername.value === userArr[i].username &&
    //     inputPassword.value === userArr[i].password
    //   ) {
    //     user = userArr[i];
    //     break;
    //   }
    // }
    const user = userArr.find(
      (item) =>
        item.username === inputUsername.value &&
        item.password === inputPassword.value
    );
    if (user) {
      saveToStorage("currentUser", user);
      alert("Login Success");
      window.location.href = "../index.html";
    } else {
      alert("User or Password is incorrect");
    }
  }
});

function isValidate() {
  let validate = true;
  if (inputUsername.value.trim() == "") {
    validate = false;
    alert("Enter Username");
  }
  if (inputPassword.value.trim() == "") {
    validate = false;
    alert("Enter Password");
  }
  return validate;
}
