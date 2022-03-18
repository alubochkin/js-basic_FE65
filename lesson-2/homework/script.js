/*
    Дан массив [1,2,3,1,2,3,5,4,6,7,3,2,1,2,3,5,3,3,1,2,3,4,1]
    Создать массив из уникальных элементов

    РЕШАТЬ ЧЕРЕЗ reduce
*/
const numbers = [1,2,3,1,2,3,5,4,6,7,3,2,1,2,3,5,3,3,1,2,3,4,1];
const uniqarr = numbers.reduce((acc, cur) => {
 return acc.includes(cur) ? acc : [...acc, cur]}, [])
console.log(uniqarr)
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

  return obj;
};

console.log(fromStringToObj('a.b.c.d.e.f.g.h.i'))
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
  list: [],
  getTodo(id) {
    return this.list.find(item => id === item.id)
  },
  createTodo(title, description) {
    this.list.push({
      id: generateId(),
      title: `${title}`,
      description: `${description}`,
    })
  },
  updateTodo(id, newTodo) {
    const todoIndex = this.list.findIndex(item => id === item.id)
    this.list.splice(todoIndex, 1, newTodo)
  },
  deleteTodo(id) {
    this.list = this.list.filter(item => id !== item.id)
  },
};

todo.createTodo('помыть посуду', 'вечером')
todo.createTodo('вынести мусор', 'утром')
todo.createTodo('приготовить ужин', 'вечером')
todo.createTodo('сделать дз', 'в обед')
console.log(todo.list)