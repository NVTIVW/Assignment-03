"use strict";
// const navEL=document.getElementById('sidebar');
// navEL.addEventListener('click',function(){
//     this.classList.toggle('active');
// })

const userData = getFromStorage("userArrStorage") ?? [];
const userArr = userData.map((user) => parseUser(user));
const currentUser = getFromStorage("currentUser") ?? { username: "" };

function saveToStorage(key, value) {
  const jsonvalue = JSON.stringify(value);
  localStorage.setItem(key, jsonvalue);
}

function getFromStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

function parseUser(userData) {
  const user = new User(
    userData.firstname,
    userData.lastname,
    userData.username,
    userData.password,
    userData.pageSize,
    userData.catelory,
    userData.todolist
  );
  return user;
}
