/*
    Дан массив [1,2,3,1,2,3,5,4,6,7,3,2,1,2,3,5,3,3,1,2,3,4,1]
    Создать массив из уникальных элементов

    РЕШАТЬ ЧЕРЕЗ reduce
*/
const numbers = [1,2,3,1,2,3,5,4,6,7,3,2,1,2,3,5,3,3,1,2,3,4,1];

<<<<<<< HEAD

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


<<<<<<< HEAD
// array.reduce((index, item) => {
//     return index.includes(item) ? index : [...index, item];
// }, []);
// console.log();

=======
const uniqarr = numbers.reduce((acc, cur) => {
  acc.includes(cur) ? acc : [...acc, cur], []
}
console.log(uniqarr)
>>>>>>> 646fa09eba3636bba3e6e8ddc91695a877e33ecc
=======
>>>>>>> 781a7f7dc4ffe9ae3b75ff198fe0556fd84eb790
/*  
    Создать функцию с именем fromStringToObj
    Функция должна примать строку и возвращать объект
    'a.b.c.d.e.f.g.h.i' => { a: { b: { c: { d: { e: { f: { g: { h: { i: {} } } } } } } } } };
*/
const fromStringToObj = (string) => {
  const obj = string.split(".").reduceRight((acc, cur) => {
    return {
      [cur]: acc,
    };
  }, {});

<<<<<<< HEAD
<<<<<<< HEAD
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
=======
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
>>>>>>> 781a7f7dc4ffe9ae3b75ff198fe0556fd84eb790


=======
  return obj;
};

fromStringToObj(a.b.c.d.e.f.g.h.i)
>>>>>>> 646fa09eba3636bba3e6e8ddc91695a877e33ecc
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
        this.list = this.list.map(todo => {
            if (todo.id === id) {
                return {...todo, ...newTodo }
            }
            return todo
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