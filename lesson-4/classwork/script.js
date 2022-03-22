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


Array.prototype.sum = function() {
  let a=0
  for (let i = 0; i < this.length; i++) {
    a += this[i]
  }
  return a
};

Array.prototype.multiply = function() {
  let a=1
  for (let i = 0; i < this.length; i++) {
    a *= this[i]
  }
  return a
};

Array.prototype.randomElem = function() {
    return this[Math.floor(Math.random() * this.length)]
};

const array = [1,2,3,4,5,6,7,8,9]
console.log(array.sum());
console.log(array.multiply());
console.log(array.randomElem());

const array1 = [1,1,1,2,3,3,3]

  Array.prototype.uniq = function() { 
    let res = this.reduce((total, cur) =>({...total, [cur]:cur}),{}) 
  return Object.values(res); 
  }

console.log(array1.uniq());
/*
    Добавить метод reverse в прототип объекта String

    Должны работать так:
        const string = 'some string'
        console.log(string.reverse()); gnirts emos
*/
const string = 'some string'

String.prototype.reverse = function() {
 return this.split('').reverse().join('')
}

console.log(string.reverse())


/*
    Создать input
    При перезагрузке страницы в инпуте должно быть последнее введённое значение
*/
const body = document.body
const input = document.createElement('input') 
body.prepend(input)
input.value = localStorage.getItem('value') ?? ''
input.addEventListener('input', (event) => {
  localStorage.setItem('value', (event.target.value))
})


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

const randomId = (x = 999) => Math.random() * x;

const todo = {
  list: [todoItem],
  getById(id) {
    const taskTodo = this.list.find((task) => task.id === id)
    return taskTodo
  },
  createTodo(newTodo, description) {
    const newTask = {
      id: randomId(),
      title: newTodo,
      description: description || null,
      completed: false,
    };
    this.list.push(newTask)
    return newTask
  },
  updateTodo(id, newTodo) {
    const findId = this.list.findIndex((task) => task.id === id);
    Object.assign(this.list[findId], newTodo);
  },
  deleteTodo(id) {
    this.list = this.list.filter((task) => task.id !== id)
  },
  sortByTitle() {
    return this.list.sort((a, b) => (a.title > b.title ? 1 : -1));
  },
  sortByDescription() {
    return this.list.sort((a, b) => ((a.description > b.description) ? 1 : -1));
  },
  searchByTitle(title) {
    const task = this.list.find((task) => task.title === title);
    return task
  },
  saveTodoList() {
    localStorage.setItem("ToDoList", JSON.stringify(this.list));
  },
};

console.log(todo.createTodo('home', '1'))
console.log(todo.createTodo('cooking', '5'))
console.log(todo.createTodo('washing', '69'))
console.log(todo.createTodo('walk', '15'))
console.log(todo.sortByTitle())
console.log(todo.sortByDescription())
todo.saveTodoList()
 