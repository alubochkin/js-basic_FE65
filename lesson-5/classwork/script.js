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

class ATM {

}

class Todo {
    constructor(initialList) {
        this.list = initialList
    }

    get list() {
        return this._list
    }

    set list(value) {
        this._list = value
        localStorage.setItem('todo-list', JSON.stringify(value))
    }

    getById(id) {
        return this.list.find(item => item.id === id)
    }

    createTodo(newTodo) {
        this.list = [...this.list, {
            id: Math.random(),
            ...newTodo,
            completed: false
        }]
    }

    updateTodo(id, newTodo) {
        this.list = this.list.map(item => item.id !== id ? item : {...item, ...newTodo})
    }

    deleteTodo(id) {
        this.list = this.list.filter(item => item.id !== id)
    }

    sortByTitle() {
        this.list.sort((a,b) => a.title > b.title ? 1 : -1)
    }

    sortByDescription() {
        this.list.sort((a,b) => a.description > b.description ? 1 : -1)
    }

    searchByTitle(title) {
        return this.list.filter(item => item.title.toLoweCase().includes(title.toLoweCase()))
    }
}

const todo = new Todo([])