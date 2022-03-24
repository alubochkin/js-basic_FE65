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


class Todo {
    constructor(initialList) {
        this.list = initialList;
    }
    get list() {
        return this._list
    }

    set list(value) {
        this._list = value;
        localStorage.setItem('todo-list', JSON.stringify(value))
    }

    getById(id) {
        return getId = this.list.find(person => person.id === id)
    }

    createTodo(newTodo) {
        this.list = [...this.list, { id: Math.random(), ...newTodo }]
    }
    deleteTodo(id) {
        this.list = this.list.filter(person => person.id !== id)
    }
    updateTodo(id, newTodo) {
        this.list = this.list.map(todo => {
            if (todo === id) {
                return {...todo, ...newTodo }
            }
            return todo
        })
    }
    searchByTitle(title) {
        return this.list.filter(todo =>
            todo.title.toLowerCase().includes(title.toLowerCase()))
    }

    sortByDescription() {
        this.list.sort((a, b) => (a.description > b.description ? -1 : 1))
    }
    sortByTitle(title) {
        this.list.sort((a, b) => (a.title > b.title ? -1 : 1))
    }
}




const todoList = new Todo([])
todoList.createTodo({ title: 'dasfsd' });