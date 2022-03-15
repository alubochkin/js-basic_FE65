/*
    Дан массив [1,2,3,1,2,3,5,4,6,7,3,2,1,2,3,5,3,3,1,2,3,4,1]
    Создать массив из уникальных элементов

    РЕШАТЬ ЧЕРЕЗ reduce
*/
const arr = [
  1, 2, 3, 1, 2, 3, 5, 4, 6, 7, 3, 2, 1, 2, 3, 5, 3, 3, 1, 2, 3, 4, 1,
];
const filterArr = (arr) => {
  const res = arr.reduce((acc, cur) => ({ ...acc, [cur]: cur }), {});
  console.log(Object.values(res));
};
filterArr(arr);

/*  
    Создать функцию с именем fromStringToObj
    Функция должна примать строку и возвращать объект
    'a.b.c.d.e.f.g.h.i' => { a: { b: { c: { d: { e: { f: { g: { h: { i: {} } } } } } } } } };
*/
const fromStringToObj = (str) => {
  const obj = str.split(".").reduceRight((acc, cur) => {
    return { [cur]: acc };
  }, {});
  console.log(obj);
};
fromStringToObj("a.b.c.d.e.f.g.h.i");
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
  title: "Hola!",
  description: null,
  completed: false,
};
const newTodo = {
  id: generateId(),
  title: "Buongiorno!",
  description: "greet",
  completed: false,
};

const todo = {
  list: [testTodo],
  getTodo(id) {
    return this.list.find((elem) => elem.id === id);
  },
  createTodo(title, description) {
    this.list.push({
      id: generateId(),
      title: `${title}`,
      description: `${description}`,
      completed: false,
    });
    console.log(this.list);
  },
  updateTodo(id, newTodo) {
    let tdIndex = this.list.findIndex((elem) => elem.id === id);
    this.list.splice(tdIndex, 1, newTodo);
  },
  deleteTodo(id) {
    this.list = this.list.filter((elem) => elem.id !== id);
  },
};

todo.getTodo(testTodo.id);
todo.createTodo("Hello", "greet");
todo.updateTodo(testTodo.id, newTodo);
todo.deleteTodo(testTodo.id);
