/*
    Добавить методы sum, multiply, uniq, randomElem  в прототип объекта Array

    Должны работать так:
        const array = [1,2,3,4,5,6,7,8,9]
        console.log(array.sum()); // 45
        console.log(array.multiply()); // 362880
        console.log(array.randomElem()); // случайный элемент из массива

        const array1 = [1,1,1,2,3,3,3]\
        console.log(array1.uniq()); // [1,2,3]
*/
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// SUM
Array.prototype.sum = function () {
  return this.reduce((acc, cur) => acc + cur, 0);
};
console.log("sum", array.sum());
// MULTIPLY
Array.prototype.multiply = function () {
  return this.reduce((acc, cur) => acc * cur);
};
console.log("multiply", array.multiply());
// RANDOM
Array.prototype.randomElem = function () {
  let random = Math.floor(Math.random() * this.length);
  return this[random];
};
console.log("random", array.randomElem());
// UNIQ
arr = [5, 5, 2, 2, 1, 1];
Array.prototype.uniq = function () {
  let res = [];
  this.forEach((item) => {
    res.includes(item) ? item : res.push(item);
  });
  return res;
};
console.log("uniq", arr.uniq());
/*
    Добавить метод reverse в прототип объекта String

    Должны работать так:
        const string = 'some string'
        console.log(string.reverse()); gnirts emos
*/
const string = "some string";

String.prototype.reverse = function () {
  return this.split("").reverse().join("");
};
console.log(string.reverse());
/*
    Создать input
    При перезагрузке страницы в инпуте должно быть последнее введённое значение
*/
let input = document.createElement("input");
document.body.append(input);
input.value = localStorage.getItem("value") ?? "";
input.addEventListener("input", (e) => {
  localStorage.setItem("value", e.target.value);
});
/*
    lesson-3/homework Реализовать модель туду листа

    реллизовать сохранение todo.list в localStorage
    ** реализовать функцию конструктор которая будет возвращаться объект todo
*/

const generateId = (x = 999) => Math.floor(Math.random() * x);

// function Todo(title, description, completed) {
//   this.id = generateId();
//   this.title = title;
//   this.description = description;
//   this.completed = completed;
// }
// const firstItem = new Todo("first", "first description", false);
// const secondItem = new Todo("second", "second description", false);
const todoItem = {
  id: 1,
  title: "title",
  description: "description",
  completed: false,
};

const todo = {
  list: [todoItem],
  getById(id) {
    return this.list.find((elem) => elem.id === id);
  },
  createTodo(newTodo, description) {
    this.list.push({
      id: generateId(),
      title: `${newTodo}`,
      description: `${description}`,
      completed: false,
    });
    console.log(this.list);
  },
  updateTodo(id, newTodo) {
    let index = this.list.findIndex((elem) => elem.id === id);
    this.list[index] = { ...this.list[index], ...newTodo };
  },
  deleteTodo(id) {
    this.list = this.list.filter((elem) => elem.id !== id);
  },
  sortByTitle() {
    this.list.sort((a, b) => (a.title > b.title ? 1 : -1));
  },
  sortByDescription() {
    this.list.sort((a, b) => (a.description > b.description ? 1 : -1));
  },
  searchByTitle(title) {
    let elem = this.list.filter((elem) => elem.title.includes(title));
    console.log(elem);
  },
  saveTodoList() {
    localStorage.setItem("todoList", JSON.stringify(this.list));
  },
};
todo.createTodo("name", "name description");
todo.saveTodoList();
todo.updateTodo(todoItem.id, { completed: true });
