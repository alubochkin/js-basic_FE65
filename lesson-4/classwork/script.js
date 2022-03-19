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
  let sum = 0;
  for (let i = 0; i < this.length; i++){
sum += this[i]
  }
  return sum
}

Array.prototype.multiply = function(){
  let mult = 1;
  for (let i = 0; i < this.length; i++){
    mult *= this[i]
      }
      return mult
}

Array.prototype.uniq = function(){
  let res = this.reduce((total, cur) =>({...total, [cur]:cur}),{})
return Object.values(res);
}

Array.prototype.randomElem = function(){
  function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  let index = getRandom(0,this.length)
  return this[index]
}

const array = [1,2,3,4,5,6,7,8,9]
console.log(array.sum()); //45
console.log(array.multiply()); // 362880
console.log(array.randomElem()); // случайный элемент из массива
const array1 = [1,1,1,2,3,3,3];
console.log(array1.uniq()); // [1,2,3]


/*
    Добавить метод reverse в прототип объекта String

    Должны работать так:
        const string = 'some string'
        console.log(string.reverse()); gnirts emos
*/
String.prototype.reverse = function(){
 return this.split('').reverse().join('')
}

const string = 'some string'

console.log(string.reverse());// gnirts emos
/*
    Создать input
    При перезагрузке страницы в инпуте должно быть последнее введённое значение
*/
const body = document.body
const input = document.createElement('input')
input.value = localStorage.getItem('value') ?? '';
body.prepend(input)

input.addEventListener('input', (event) =>{
console.log(event);
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
