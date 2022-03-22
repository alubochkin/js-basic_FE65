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
Array.prototype.sum = function () {
  return this.reduce((acc, cur) => acc + cur, 0);
};
console.log(array.sum());

Array.prototype.multiply = function () {
  return this.reduce((acc, cur) => acc * cur, 1);
};
console.log(array.multiply());

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

Array.prototype.randomElem = function () {
  return this[getRandom(0, array.length)];
};
console.log(array.randomElem());

const array1 = [1, 1, 1, 2, 3, 3, 3];

Array.prototype.uniq = function () {
  const uniqArr = this.reduce((acc, item) => ({ ...acc, [item]: item }), {});
  const result = Object.values(uniqArr);
  return result;
};

console.log(array1.uniq());

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

const input = document.createElement("input");
document.body.append(input);
input.value = "ooooooo";
input.addEventListener("input", function () {
  EventTarget.value = localStorage.setItem("input");
});

/*
    lesson-3/homework Реализовать модель туду листа

    реллизовать сохранение todo.list в localStorage
    ** реализовать функцию конструктор которая будет возвращаться объект todo
*/

const todoItem = {
  id: 1,
  title: "title",
  description: "description",
  completed: false,
};

const todo = {
  list: [todoItem],
  getById(id) {
    return this.list.findIndex((item) => item.id === id);
  },
  createTodo(newTodo, description) {
    this.list.push({
      id: this.getById(),
      title: `${newTodo}`,
      description: `${description}`,
      completed: false,
    });
  },
  updateTodo(id, newTodo, description) {
    let toDoIndex = this.list.findIndex((item) => item.id === id);
    ///value тут будет
    newTodo = {
      id: this.getById(),
      title: `${newTodo}`,
      description: `${description}`,
      completed: false,
    };
    this.list.splice(toDoIndex, 1, newTodo);
  },
  deleteTodo(id) {
    let toDoIndex = this.list.findIndex((item) => item.id === id);
    if (toDoIndex !== -1) {
      this.list.splice(toDoIndex, 1);
    }
  },
  sortByTitle() {
    this.list.sort((a, b) => (a.title > b.title ? 1 : -1));
  },
  sortByDescription() {
    this.list.sort((a, b) => (a.description > b.description ? 1 : -1));
  },
  searchByTitle(title) {
    this.list.filter((item) => item.title === title);
  },
  saveTodo() {
    localStorage.setItem("Todo", this.list);
  },
};

todo.getById();
todo.createTodo();
todo.updateTodo();
todo.deleteTodo();
todo.sortByTitle();
todo.sortByDescription();
todo.searchByTitle();

function Todo(list) {
this.list = list;
}
Todo.prototype.getById = function (id) {
  return this.list.find((todo) => todo.id === id);
};
Todo.prototype.createTodo(newTodo, description){
  this.list.push({
    id: this.getById(),
    title: `${newTodo}`,
    description: `${description}`,
    completed: false,
  })
};
  Todo.prototype.updateTodo(id, newTodo, description) {
    let toDoIndex = this.list.findIndex((item) => item.id === id);
    newTodo = {
      id: this.getById(),
      title: `${newTodo}`,
      description: `${description}`,
      completed: false,
    };
    this.list.splice(toDoIndex, 1, newTodo);
  };
  Todo.prototype.deleteTodo(id) {
    let toDoIndex = this.list.findIndex((item) => item.id === id);
    if (toDoIndex !== -1) {
      this.list.splice(toDoIndex, 1);
    }
  };
  Todo.prototype.sortByTitle() {
    this.list.sort((a, b) => (a.title > b.title ? 1 : -1));
  }
  Todo.prototype.sortByDescription() {
    this.list.sort((a, b) => (a.description > b.description ? 1 : -1));
  }
  Todo.prototype.searchByTitle(title) {
     return this.list.filter((item) => item.title === title);
  }



const todo2 = new Todo(JSON.parse(localStorage.getItem("list")) ?? []);
