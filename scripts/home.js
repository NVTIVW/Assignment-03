"use strict";
const loginmodal = document.getElementById("login-modal");
const maincontent = document.getElementById("main-content");
const welcomemessage = document.getElementById("welcome-message");
const btnLogout = document.getElementById("btn-logout");

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
