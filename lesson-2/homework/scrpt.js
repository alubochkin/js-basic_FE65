/*
    Дан массив [1,2,3,1,2,3,5,4,6,7,3,2,1,2,3,5,3,3,1,2,3,4,1]
    Создать массив из уникальных элементов

    РЕШАТЬ ЧЕРЕЗ reduce
*/

const array = [1,2,3,1,2,3,5,4,6,7,3,2,1,2,3,5,3,3,1,2,3,4,1]
const res = array.reduce((acc,cur) => ({...acc, [cur] : cur}), {})
console.log(Object.values(res));
/*  
    Создать функцию с именем fromStringToObj
    Функция должна примать строку и возвращать объект
    'a.b.c.d.e.f.g.h.i' => { a: { b: { c: { d: { e: { f: { g: { h: { i: {} } } } } } } } } };
*/
const fromStringToObj = (str) => {
    return str.split('.').reduceRight((acc, cur) => {
      return {
        [cur]: {...acc}
      }
    }, {})

}
console.log(fromStringToObj('a.b.c.d.e.f.g.h.i'));

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
  id: generateId(),
  title: "Название задания",
  description: null,
  completed: false,
};

const todo = {
  list: [testTodo],
  getTodo(id) {},
  createTodo(title, description) {
  updateTodo(id, newTodo) {},
  deleteTodo(id) {},
};


console.log(testTodo);
console.log(todo);