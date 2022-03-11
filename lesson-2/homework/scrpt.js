//-----------------------------------------------------------------------------------

/*
    Дан массив [1,2,3,1,2,3,5,4,6,7,3,2,1,2,3,5,3,3,1,2,3,4,1]
    Создать массив из уникальных элементов

    РЕШАТЬ ЧЕРЕЗ reduce
*/

const uniqueNumbers = (array) => {
  return array.reduce((acc, curr) => {
    if(array.indexOf(curr) === array.lastIndexOf(curr)) {
      return [
        ...acc,
        curr
      ]
    } else {
      return acc
    }
  }, [])
}

// const uniqueNumbers = (array) => {
//   const result = []
//   array.forEach(item => {
//     if(array.indexOf(item) === array.lastIndexOf(item)) {
//       result.push(item)
//     }
//   })
//   return result
// }

console.log(uniqueNumbers([1,2,3,1,2,3,5,4,6,7,3,2,1,2,3,5,3,3,1,2,3,4,1]))

//-----------------------------------------------------------------------------------

/*  
    Создать функцию с именем fromStringToObj
    Функция должна примать строку и возвращать объект
    'a.b.c.d.e.f.g.h.i' => { a: { b: { c: { d: { e: { f: { g: { h: { i: {} } } } } } } } } };
*/

// const fromStringToObj = (string) => {
//   return string
//     .split('.')
//     .reduce((acc, curr) => {
//       return {...acc}
//     }, {curr: {},})
// }

const fromStringToObj = (string) => {
  return string
    .split('.')
    .reduceRight((acc, curr) => {
      return {[curr]: acc}
    }, {})
}

console.log(fromStringToObj('a.b.c.d.e.f.g.h.i'))

//-----------------------------------------------------------------------------------

/*
    Реализовать CRUD для объекта todo

    в объекте todo есть поле list в котором должны храниться наши задания
      getTodo(id) возвращает задание по id
      createTodo(title, description) создаёт новое задание и добавлят в массив
      updateTodo(id, newTodo) редактирует задание по id
      deleteTodo(id) удаляет задание по id
*/

const generateId = (x = 999) => Math.random() * x;

// const testTodo = {
//   id: generateId(),
//   title: "Название задания",
//   description: null,
//   completed: false,
// };

const todo = {
  list: [],
  getTodo(id) {
    return this.list.find(item => item.id === id)
  },
  createTodo(title, description) {
    this.list.push({
      id: generateId(),
      title: `${title}`,
      description: `${description}`,
      completed: false,
    })
  },
  updateTodo(id, newTodo) {
    const todoIndex = this.list.findIndex(item => item.id === id)
    this.list.splice(todoIndex, 1, newTodo)
  },
  deleteTodo(id) {
    this.list = this.list.filter(item => item.id !== id)
  },
};

//-----------------------------------------------------------------------------------
