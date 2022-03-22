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

// Array.prototype.sum = function() {
//     let s = 0;
//     for (let i = 0; i < this.length; i++) {
//         s += this[i]
//     }
//     return s
// }

// Array.prototype.multiply = function() {
//     let s = 1;
//     for (let i = 0; i < this.length; i++) {
//         s *= this[i]
//     }
//     return s
// }

// Array.prototype.uniq = function() {
//     let res = this.reduce((total, cur) => ({...total, [cur]: cur }), {})
//     return Object.values(res);
// }

// Array.prototype.random = function() {
//     return this[Math.floor(Math.random() * this.length)];
// }

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// console.log(array.sum())
// console.log(array.multiply())
// console.log(array.uniq());
// console.log(array.random());
/*
    Добавить метод reverse в прототип объекта String

    Должны работать так:
        const string = 'some string'
        console.log(string.reverse()); gnirts emos
*/
// const string = 'some string'
// String.prototype.reverse = function() {
//     return this.split('').reverse().join('')
// }
// console.log(string.reverse());
// /*
//     Создать input
//     При перезагрузке страницы в инпуте должно быть последнее введённое значение
// */
// const body = document.body
// const input = document.createElement('input')
// input.value = localStorage.getItem('value') || '';
// body.prepend(input)

// input.addEventListener('input', (event) => {
//     localStorage.setItem('value', (event.target.value))
// })


/*
    lesson-3/homework Реализовать модель туду листа

    реллизовать сохранение todo.list в localStorage
    ** реализовать функцию конструктор которая будет возвращаться объект todo
*/
const form = document.querySelector("#form");
const todos = document.querySelector("#todo");
const inputText = document.querySelector("#text");
const inputDescription = document.querySelector("#description");
const btnSubmit = document.querySelector("#btnSubmit");
const btnReset = document.querySelector("#btnReset");
const btnsearchtitle = document.querySelector("#btnsearchtitle");
const btnsearcdescription = document.querySelector("#btnsearcdescription");

const generateId = (x = 999) => Math.random() * x;
const todoItem = {
    id: 1,
    title: "title",
    description: "description",
    completed: false,
};

const todo = {
    list: [todoItem],
    getById(id) {
        const getId = this.list.find(person => person.id === id)
        return getId
    },
    createTodo(newTodo) {
        this.list.push = {
            id: generateId(),
            title: `${newTodo}`,
            description: `${description}`,
            completed: false,
        }
    },
    updateTodo(id, newTodo) {
        this.list = this.list.map(todo => {
            if (todo === id) {
                return {...todo, ...newTodo }
            }
            return todo
        })
        return this.list
    },
    deleteTodo(id) {
        this.list = this.list.filter(person => person.id !== id)

    },
    sortByTitle() {
        const sortTitle = this.list.sort((a, b) => (a.title > b.title ? -1 : 1))
    },
    sortByDescription() {
        const sortDescription = this.list.sort((a, b) => (a.description > b.description ? -1 : 1))
    },
    searchByTitle(title) {
        const searchTitle = this.list.filter(element => element.title.includes(title))
        return searchTitle
    },
    saveLocalStorage() {
        localStorage.setItem('todo', JSON.stringify(newtodo))
    }
};