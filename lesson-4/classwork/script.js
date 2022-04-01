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
// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// const array1 = [1, 1, 1, 2, 3, 3, 3]
// Array.prototype.sum = function() {
//     let res = 0
//     for (let i = 0; i < this.length; i++) {
//         res += this[i];
//     }
//     return res;
// }
// Array.prototype.multiply = function() {
//     let res = 1
//     for (let i = 0; i < this.length; i++) {
//         res *= this[i];
//     }
//     return res;
// }
// Array.prototype.randomElem = function() {
//     function getRandom(array) {
//         return Math.floor(Math.random() * array.length);
//     }

//     this[getRandom]

// }


// console.log(array.sum());
// console.log(array1.sum());
// console.log(array.multiply());
// console.log(array.randomElem());
// //console.log(array.uniq());
// /*
//     Добавить метод reverse в прототип объекта String

//     Должны работать так:
//         const string = 'some string'
//         console.log(string.reverse()); gnirts emos
// */

// /*
//     Создать input
//     При перезагрузке страницы в инпуте должно быть последнее введённое значение
// */

// /*
//     lesson-3/homework Реализовать модель туду листа

//     реллизовать сохранение todo.list в localStorage
//     ** реализовать функцию конструктор которая будет возвращаться объект todo
// */

// const todoItem = {
//     id: 1,
//     title: "title",
//     description: "description",
//     completed: false,
// };

// const todo = {
//     list: [todoItem],
//     getById(id) {},
//     createTodo(newTodo) {},
//     updateTodo(id, newTodo) {},
//     deleteTodo(id) {},
//     sortByTitle() {},
//     sortByDescription() {},
//     searchByTitle(title) {},
// };

// function arrayRandElement(arr) {
//     var rand = Math.floor(Math.random() * arr.length);
//     return arr[rand];
// }

// // Определяем массив
// var arr = ['PHP', 'JavaScript', 'Python', 'Perl', 'Ruby', 'Go', 'Java'];

// console.log(arrayRandElement(arr));

class todo {
    constructor(initialist) {
        this.list = initialist;
    }
    get list() {
        return this._list
    }
    set list(value) {
        console.log(value)
        this._list = value
        localStorage.setItem("todo-list", JSON.stringify(value))
    }
    createTodo(newTodo) {
        this.list = [...this.list, { id: Math.random(), ...newTodo }]
    }
    updateTodo(id, newTodo) {
        this.list = this.list.map((todo) => todo.id === id ? {...todo, ...newTodo } : todo)
    }
    geleteTodo(id) {
        this.list = this.list.filter(todo => todo.id !== id)
    }
    searchByTitle(title) {
        return this.list.filter((todo) => todo.title.toLowerCase().includes(title.toLowerCase()))
    }

    saveToLocal() {
        list()
    }
}
const todoList = new todo([])
console.log(todoList.list)
console.log(todoList)


//валидация
const input = document.querySelector("input")
const textArea = document.querySelector("description")
const button = document.querySelector("button")
const ul = document.querySelector("ul")

const validation = (input, description) => {
    let error = {}
    if (input.length === 0) {
        error.input = "required"
    }
    if (description.length > 100) {
        error.description = "max length 100"
    }
    return Object.keys(error).length ? error : null
};

button.onclick = (e) => {
        e.preventDefault();
        const err = validation(input.value, description.value)

        if (err.input) {
            input.classList.add("error")
            const span = document.createElement("span")
            span.textContent = err.input
            span.className = "error"
            input.after(span)
        }
        if (!err) {
            todo.createTodo(input.value, description.value)
        }
    }
    //const renderTodoItemActions = (todo) => {}

const renderTodoList = (todoList) => {
    ul.innerHTML = "";
    todoList.forEach((todo) => {
        const li = document.createElement("li")
        li.textContent = todo.title

        // const actions = renderTodoItemActions(todo)
        // li.append(actions)
        ul.append(li)
    });
}
renderTodoList(JSON.parse(localStorage.getItem("todo")))