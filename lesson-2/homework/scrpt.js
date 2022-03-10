/*
    Дан массив [1,2,3,1,2,3,5,4,6,7,3,2,1,2,3,5,3,3,1,2,3,4,1]
    Создать массив из уникальных элементов

    РЕШАТЬ ЧЕРЕЗ reduce
*/


let array = [1, 2, 3, 1, 2, 3, 5, 4, 6, 7, 3, 2, 1, 2, 3, 5, 3, 3, 1, 2, 3, 4, 1];

let compact = (array) => {
    return array.reduce((acc, item) => {
        if (!acc.includes(item)) {
            acc.push(item)
        }
        return acc
    }, [])
}
console.log(compact(array));


// array.reduce((index, item) => {
//     return index.includes(item) ? index : [...index, item];
// }, []);
// console.log();

/*  
    Создать функцию с именем fromStringToObj
    Функция должна примать строку и возвращать объект
    'a.b.c.d.e.f.g.h.i' => { a: { b: { c: { d: { e: { f: { g: { h: { i: {} } } } } } } } } };
*/

let fromStringToObj = (string) => {
    const strArr = string.split('.')
    return strArr.reduceRight((acc, item) => {
        acc = {
            [item]: acc
        }
        return acc
    }, {})
}
console.log(fromStringToObj('a.b.c.d.e.f.g.h.i'))


/*
    Реализовать CRUD для объекта todo

    в объекте todo есть поле list в котором должны храниться наши задания
      getTodo(id) возвращает задание по id
      createTodo(title, description) создаёт новое задание и добавлят в массив
      updateTodo(id, newTodo) редактирует задание по id
      deleteTodo(id) удаляет задание по id
*/

// const generateId = (x = 999) => Math.random() * x;

// const testTodo = {
//     id: generateId(),
//     title: "Название задания",
//     description: null,
//     completed: false,
// };

// const todo = {
//     list: [testTodo],
//     getTodo(id) {},
//     createTodo(title, description) {},
//     updateTodo(id, newTodo) {},
//     deleteTodo(id) {},
// };