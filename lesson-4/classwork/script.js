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
const array1 = [1,1,1,2,3,3,3]

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

Array.prototype.sum = function() {
  return this.reduce((acc, cur) => acc + cur)
}

Array.prototype.multiply = function() {
  return this.reduce((acc, cur) => acc * cur)
}

Array.prototype.uniq = function() {
  const res = []
  this.forEach(item => res.includes(item) ? item : res.push(item))
  return res
}

Array.prototype.randomElem = function() {
  return this[getRandom(0, this.length)]
}

console.log(array)
console.log(array.sum())
console.log(array.multiply())
console.log(array1.uniq())
console.log(array.randomElem())

/*
    Добавить метод reverse в прототип объекта String

    Должны работать так:
        const string = 'some string'
        console.log(string.reverse()); gnirts emos
*/

String.prototype.reverse = function() {
  return this.split('').reverse().join('')
}

const string = 'some string'
console.log(string.reverse())

/*
    Создать input
    При перезагрузке страницы в инпуте должно быть последнее введённое значение
*/

const input = document.createElement('input')
document.body.append(input)
input.value = localStorage.getItem('inputValue')

input.addEventListener('input', (event) => {
  console.log(event.target.value)
  localStorage.setItem('inputValue', event.target.value)
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

const todo = {
  list: [todoItem],
  getById(id) {},
  createTodo(newTodo) {},
  updateTodo(id, newTodo) {},
  deleteTodo(id) {},
  sortByTitle() {},
  sortByDescription() {},
  searchByTitle(title) {},
};
