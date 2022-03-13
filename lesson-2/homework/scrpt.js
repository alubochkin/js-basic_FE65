/*
    Дан массив [1,2,3,1,2,3,5,4,6,7,3,2,1,2,3,5,3,3,1,2,3,4,1]
    Создать массив из уникальных элементов

    РЕШАТЬ ЧЕРЕЗ reduce
*/


// let array = [1, 2, 3, 1, 2, 3, 5, 4, 6, 7, 3, 2, 1, 2, 3, 5, 3, 3, 1, 2, 3, 4, 1];

// let compact = (array) => {
//     return array.reduce((acc, item) => {
//         if (!acc.includes(item)) {
//             acc.push(item)
//         }
//         return acc
//     }, [])
// }
// console.log(compact(array));


/*  
    Создать функцию с именем fromStringToObj
    Функция должна примать строку и возвращать объект
    'a.b.c.d.e.f.g.h.i' => { a: { b: { c: { d: { e: { f: { g: { h: { i: {} } } } } } } } } };
*/

// let fromStringToObj = (string) => {
//     const strArr = string.split('.')
//     return strArr.reduceRight((acc, item) => {
//         acc = {
//             [item]: acc
//         }
//         return acc
//     }, {})
// }
// console.log(fromStringToObj('a.b.c.d.e.f.g.h.i'))


/*
    Реализовать CRUD для объекта todo
    в объекте todo есть поле list в котором должны храниться наши задания
      getTodo(id) возвращает задание по id
      createTodo(title, description) создаёт новое задание и добавлят в массив
      updateTodo(id, newTodo) редактирует задание по id
      deleteTodo(id) удаляет задание по id
*/

const generateId = (x = 999) => Math.random() * x;
const testTodo = {
    id: 1234,
    title: "Название задания",
    description: null,
    completed: false,
};

const todo = {
    list: [testTodo],
    getTodo(id) {
        const getId = this.list.find(person => person.id === id)
        return getId
    },
    createTodo(title, description) {
        const newElem = {
            id: generateId(),
            title: `${title}`,
            description: `${description}`,
            completed: false,
        }
        this.list.push(newElem)
        return newElem
    },
    updateTodo(id, newTodo) {
        this.list = this.list.map(person => {
            if (person.id === id) {
                return newTodo
            }
            return person
        })
        return this.list
    },
    deleteTodo(id) {
        const deleteId = this.list.filter(person => person.id !== id)
        return deleteId
    },
};
console.log(todo.getTodo(1234));
console.log(todo.createTodo('newTodo', 'asdf'));
console.log(todo.updateTodo(1234, { id: 826 }));
console.log(todo.updateTodo(826, { id: 827 }));
console.log(todo.updateTodo(1234, { id: 828 }));
console.log(todo.updateTodo(1234, { id: 823 }));