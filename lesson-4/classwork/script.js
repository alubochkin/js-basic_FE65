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
const array = [1,2,3,4,5,6,7,8,9]

Array.prototype.sum = function () {
  // return this.reduce((acc, cur) => acc + cur, 0);
  let res = 0;
  for (let i = 0; i < this.length; i++) {
    res += this[i]
  }
  return res
}
Array.prototype.multiply = function () {
  return this.reduce((acc, cur) => acc * cur, 1)
}
Array.prototype.randomElem = function() {
  const max = this.length
  const random = Math.floor(Math.random() * (max));
  return random
}

console.log(array)
console.log(array.sum()); 
console.log(array.multiply()); 
console.log(array.randomElem()); 

const array1 = [1,1,1,2,3,3,3]
Array.prototype.uniq = function () {
  const res = [];
  this.forEach((item) => res.includes(item) ? item : res.push(item))
  return res
}
console.log(array1.uniq()); 
/*
    Добавить метод reverse в прототип объекта String

    Должны работать так:
        const string = 'some string'
        console.log(string.reverse()); gnirts emos
*/

/*
    Создать input
    При перезагрузке страницы в инпуте должно быть последнее введённое значение
*/

/*
    lesson-3/homework Реализовать модель туду листа

    реллизовать сохранение todo.list в localStorage
    ** реализовать функцию конструктор которая будет возвращаться объект todo
*/

// const todoItem = {
//   id: 1,
//   title: "title",
//   description: "description",
//   completed: false,
// };

// const todo = {
//   list: [todoItem],
//   getById(id) {},
//   createTodo(newTodo) {},
//   updateTodo(id, newTodo) {},
//   deleteTodo(id) {},
//   sortByTitle() {},
//   sortByDescription() {},
//   searchByTitle(title) {},
// };

class Todo {
  constructor (initialList){
    this.list = initialList
  }

  get list() {
    return this._list;
  }

  set list(value){
    console.log("set");
    this._list = value;
    localStorage.setItem("todo-list", JSON.stringify(value));
  }

  createTodo(newTodo) {
    // this.list = this.list.concat({id: Math.random(), ...newTodo})
    this.list = [...this.list, {id: Math.random(), ...newTodo, completed: false}]
  }

  updateTodo(id, newTodo) {
      this.list = this.list.map((item) => 
         item.id === id ? {...todo, ...newTodo} : todo
    );
  }
  deleteTodo(id) {
    this.list = this.list.filter((todo) => todo.id !== id)
  }

  searchByTitle(title) {
    return this.list.filter((todo) => 
      todo.title.toLowerCase().includes(title.toLowerCase()))
  }
}
const todoList = new Todo([])
todoList.createTodo(["title"])
console.log(todoList);
