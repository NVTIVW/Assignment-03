"use strict";
// variable
const inputPageSize = document.getElementById("input-page-size");
const inputCategory = document.getElementById("input-category");
const btnSubmit = document.getElementById("btn-submit");

// Save button: save properties pageSize and catelory to current user and array
btnSubmit.addEventListener("click", function () {
  const isValidate = validate();
  if (isValidate) {
    for (let i = 0; i < userArr.length; i++) {
      if (userArr[i].username == currentUser.username) {
        currentUser.catelory = inputCategory.value; // read value input and save to curent user
        currentUser.pageSize = inputPageSize.value;
        userArr[i] = currentUser;
        //userArr[i].pageSize = inputPageSize.value;
        //userArr[i].catelory = inputCategory.value;
      }
    }
  }
  saveToStorage("userArrStorage", userArr);
  saveToStorage("currentUser", currentUser);
  inputPageSize.textContent = inputPageSize.value;
});

inputPageSize.value = currentUser.pageSize; // show value of pageSize
inputCategory.value = currentUser.catelory;

// check input
function validate() {
  let validate = true;
  if (
    inputPageSize.value.trim() === "" ||
    parseInt(inputPageSize.value) > 100
  ) {
    validate = false;
    alert("News per page must not exceed 100");
  }
  return validate;
}
