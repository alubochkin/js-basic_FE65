/*
    Дан массив [1,2,3,1,2,3,5,4,6,7,3,2,1,2,3,5,3,3,1,2,3,4,1]
    Создать массив из уникальных элементов

    РЕШАТЬ ЧЕРЕЗ reduce
*/

let startArr = [
  1, 2, 3, 1, 2, 3, 5, 4, 6, 7, 3, 2, 1, 2, 3, 5, 3, 3, 1, 2, 3, 4, 1,
];

const unique = (arr) => {
  const uniqueArr = arr.reduce((acc, item) => ({ ...acc, [item]: item }), {});

  const result = Object.values(uniqueArr);

  return result;
};

console.log(unique(startArr));

/*  reduceRight
    Создать функцию с именем fromStringToObj
    Функция должна примать строку и возвращать объект
    'a.b.c.d.e.f.g.h.i' => { a: { b: { c: { d: { e: { f: { g: { h: { i: {} } } } } } } } } };
*/
let str = "a.b.c.d.e.f.g.h.i";
const fromStringToObj = (str) => {
  const obj = str.split(".").reduceRight((acc, cur) => {
    return { [cur]: acc };
  }, {});
  return obj;
};

//console.log();

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
  getTodo(id) {
    return this.list.find((el) => el.id === id);
  },
  createTodo(title, description) {
    this.list.push({
      id: generateId(),
      title: `${title}`,
      description: `${description}`,
      completed: `${completed}`,
    });
  },
  updateTodo(id, newTodo) {
    const changeTodoId = this.list.findIndex((el) => el.id === id);
    this.list.splice(changeTodoId, 1, newTodo);
  },
  deleteTodo(id) {
    this.list = this.list.filter((el) => el.id !== id);
  },
};
//console.log ();
