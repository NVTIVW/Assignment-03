"use strict";
// variable
const userData = getFromStorage("userArrStorage") ?? [];
const userArr = userData.map((user) => parseUser(user));
const currentUser = getFromStorage("currentUser") ?? { username: "" };

// function save data to storage
function saveToStorage(key, value) {
  const jsonvalue = JSON.stringify(value);
  localStorage.setItem(key, jsonvalue);
}

// function get data from storage
function getFromStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

// function create user
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
