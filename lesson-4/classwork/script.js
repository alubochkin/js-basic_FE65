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
    let s = 0;
    for (let i = 0; i < this.length; i++) {
        s += this[i]
    }
    return s
}

Array.prototype.multiply = function() {
    let s = 1;
    for (let i = 0; i < this.length; i++) {
        s *= this[i]
    }
    return s
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(array.sum())
console.log(array.multiply())
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