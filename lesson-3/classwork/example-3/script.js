// console.log(document.body);

// setTimeout(() => {
//   document.body.innerHTML = "<h1>Изменили document.body из script.js</h1>";
// }, 2000);

// ------------------------------------------

// const todoList = document.getElementById("todo-list");

// setTimeout(() => {
//   todoList.outerHTML = "<h1>Изменили document.body из script.js</h1>";
// }, 2000);

// ------------------------------------------

const todoList = document.getElementById("todo-list");

console.log(todoList.outerHTML);
console.log(todoList.textContent);

const text = "<h1>Hello world</h1>";

const elem1 = document.getElementById("innerHTML");
const elem2 = document.getElementById("textContent");

elem1.innerHTML = text
elem2.textContent = text