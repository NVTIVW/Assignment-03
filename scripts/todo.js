"use strict";
const inputTask = document.getElementById("input-task");
const btnAdd = document.getElementById("btn-add");
const todoList = document.getElementById("todo-list");
const allTodo = document.querySelectorAll(".class-li");
const todoArr = currentUser.todolist;
renderList();

btnAdd.addEventListener("click", function () {
  const todo = inputTask.value;
  todoArr.push(todo);
  currentUser.todolist = todoArr;
  saveToStorage("currentUser", currentUser);
  saveUser();
  renderList();
  clearInput();
});

function renderList() {
  todoList.innerHTML = "";
  for (let i = 0; i < todoArr.length; i++) {
    const todo = document.createElement("li");
    todo.innerHTML = `${todoArr[i]}<span class="close" onclick="deleteTodo('${todoArr[i]}')">x</span>`;

    todo.setAttribute("onclick", `done(this)`);
    todoList.appendChild(todo);
  }
}
function clearInput() {
  inputTask.value = "";
}
function saveUser() {
  for (let i = 0; i < userArr.length; i++) {
    if (userArr[i].username == currentUser.username) {
      userArr[i] = currentUser;
    }
  }
  saveToStorage("userArrStorage", userArr);
}
function deleteTodo(num) {
  for (let i = 0; i < todoArr.length; i++) {
    if (num == todoArr[i]) {
      todoArr.splice(i, 1);
      renderList();
      saveToStorage("currentUser", currentUser);
      saveUser();
    }
  }
}

function done(el) {
  el.classList.toggle("checked");
}
