/*
    Реализовать счётчик

    1. через ивент на каждую внопку
    2. через делегирование событий
*/
const minus = document.querySelector(".minus");
const reset = document.querySelector(".reset");
const plus = document.querySelector(".plus");
const count = document.querySelector(".count");

const actions = document.querySelector("#actions");

////1. через ивент на каждую внопку
// minus.addEventListener('click', () =>{
//   count.textContent -= 1;
// })
// reset.addEventListener('click', () =>{
//   count.textContent = 0;
// })
// plus.addEventListener('click', () =>{
//   count.textContent = +count.textContent + 1;
// })

////2. через делегирование событий
// actions.addEventListener('click', (event) =>{
//   if(event.target.classList.contains('minus')){
//     count.textContent -= 1;
//   } else if(event.target.classList.contains('reset')){
//     count.textContent = 0;
//   } else if (event.target.classList.contains('plus')){
//     count.textContent = +count.textContent + 1;
//   }
// })

/*
    Создать функцию createElement
    Она должна принимать первым параметром имя тега,  вторым объект с свойствами и методами для для элемента (textContent, innerHtml, className, ...и тд)

    Причина
    нам нужно избавиться от длинной записи типа

    const h1 = document.createElement('h1')
    h1.className = 'title'
    h1.textContent = 'Main title'
    h1.style.fontSize = '18px'

    нужно сделать так

    const h1 = createElement("h1", {
        className: "title",
        textContent: "Main title",
        style: "font-size: 48px, text-align: center",
    });

*/

// const createElement = (tagName, options = {}) => {
//   const elem = document.createElement(tagName);
//   Object.assign(elem, options);
//  return elem
// };

// const h1 = createElement("h1", {
//   className: "title",
//   textContent: "Main title",
//   style: "font-size: 48px, text-align: center",
// });

// const h1 = document.createElement("h1");
// h1.className = "title";
// h1.textContent = "Main title";
// h1.style.fontSize = "48px";
// h1.style.textAlign = "center";

// document.body.append(h1);

/*
    Реализовать модель туду листа
*/

const todoItem = {
  id: 1,
  title: "title",
  description: "description",
  completed: false,
};

const todo = {
  list: [],
  getById(id) {
    return this.list.find((item) => item.id === id);
  },
  createTodo(title, description) {
    this.list.push({
      id: Math.floor(Math.random(new Date()) * 100),
      title,
      description,
      completed: false,
    });
  },
  updateTodo(id, title, description) {
    let task = this.list.find((item) => item.id === id);
    task.title = title;
    task.description = description;
  },
  deleteTodo(id) {
    this.list = this.list.filter((item) => item.id !== id);
  },
  sortByTitle() {
    this.list.sort((a, b) => (a.title > b.title ? 1 : -1));
  },
  sortByDescription() {
    this.list.sort((a, b) => (a.description > b.description ? 1 : -1));
  },
  searchByTitle(title) {
    const elem = this.list.find((item) => item.title === title);
    console.log(elem);
  },
};


console.log(todo.list);
