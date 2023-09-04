"use strict";
//variable
const loginmodal = document.getElementById("login-modal");
const maincontent = document.getElementById("main-content");
const welcomemessage = document.getElementById("welcome-message");
const btnLogout = document.getElementById("btn-logout");

// have curent user or not / are you logged in?
if (currentUser.username == "") {
  maincontent.style.display = "none";
} else {
  loginmodal.style.display = "none";
  welcomemessage.textContent = `Welcome ${currentUser.lastname}`;
}
btnLogout.addEventListener("click", function () {
  localStorage.removeItem("currentUser");
  window.location.href = "../index.html";
});
