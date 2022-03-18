// /*
//     Дан массив [1,2,3,1,2,3,5,4,6,7,3,2,1,2,3,5,3,3,1,2,3,4,1]
//     Создать массив из уникальных элементов

//     РЕШАТЬ ЧЕРЕЗ reduce
// */
const arr = [1,2,3,1,2,3,5,4,6,7,3,2,1,2,3,5,3,3,1,2,3,4,1]
// let reducedArr = arr.reduce((total, cur) =>{
//   if(arr.indexOf(cur) === arr.lastIndexOf(cur)){
//     total.push(cur)
//     // return total
//   } return total
// }, [])
// console.log(reducedArr);

let res = arr.reduce((total, cur) =>({...total, [cur]:cur}),{})
console.log(Object.values(res));

// /*
//     Создать функцию с именем fromStringToObj
//     Функция должна примать строку и возвращать объект
//     'a.b.c.d.e.f.g.h.i' => { a: { b: { c: { d: { e: { f: { g: { h: { i: {} } } } } } } } } };
// */
const string = 'a.b.c.d.e.f.g.h.i';
const fromStringToObj = (str) =>{
  let arr = str.split('.')
  let newArr = arr.reduceRight((acc,cur) => {
return {

  [cur]:acc

}
  }, {})
return newArr
}

console.log(fromStringToObj(string));
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
    let task = this.list.find((item) => item.id === id);
   console.log(task);
  },
  createTodo(title, description) {
    let task = { ...testTodo };
    task.id = Math.random();
    task.title = title;
    task.description = description;
    this.list.push(task);
  },
  updateTodo(id, newTodo) {
    let task = this.list.find((item) => item.id === id);
    task.title = newTodo;
    return task;
  },
  deleteTodo(id) {
    this.list = this.list.filter((item) => item.id !== id)

  
  },
};
todo.createTodo('1', "задание 1", "описание задания 1");
todo.createTodo('2', "задание 2", "описание задания 2");
todo.getTodo('2')
todo.updateTodo("1", "task");
todo.deleteTodo('2')
console.log(todo.list);
