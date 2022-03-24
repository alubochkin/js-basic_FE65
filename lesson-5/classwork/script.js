/*
    Реализовать класс ATM (банкомат)
    которй принимает на вход limit. например { 5000: 10, 1000: 15, 500: 20, 100: 30 }
    свойство limit внутри класса должно быть защищенным

    пример:
    const atm = new ATM({ 5000: 10, 1000: 15, 500: 20, 100: 30 });
    console.log(atm.getMoney(99900)); // столько денег нет
    console.log(atm.getMoney(29900)); // 5X5000 4X1000 1X500 4X100 
    console.log(atm.getMoney(11500)); // 2X5000 1X1000 1X500
    console.log(atm.getMoney(4500)); // 4X1000 1X500 
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

function Todo(list) {
    this.list = list;
}

Todo.prototype.getById = function(id) {
    const getId = this.list.find(person => person.id === id)
    return getId
}

Todo.prototype.createTodo = function(newTodo) {
    this.list.push = {
        id: generateId(),
        title: `${newTodo}`,
        description: `${description}`,
        completed: false,
    }
}

Todo.prototype.updateTodo = function(id, newTodo) {
    this.list = this.list.map(todo => {
        if (todo === id) {
            return {...todo, ...newTodo }
        }
        return todo
    })
    return this.list
}

Todo.prototype.deleteTodo = function(id) {
    this.list = this.list.filter(person => person.id !== id)

}

Todo.prototype.sortByTitle = function() {
    const sortTitle = this.list.sort((a, b) => (a.title > b.title ? -1 : 1))
}

Todo.prototype.sortByDescription = function() {
    const sortDescription = this.list.sort((a, b) => (a.description > b.description ? -1 : 1))
}

Todo.prototype.searchByTitle = function(title) {
    const searchTitle = this.list.filter(element => element.title.includes(title))
    return searchTitle
}

Todo.prototype.saveLocalStorage = function() {
    localStorage.setItem('todo', JSON.stringify(newtodo))
}

function init() {
    this.btnSubmit.onclick = () => {
        this.todo.createTodo();
        console.log(this.todo.list);
    }
}

init()