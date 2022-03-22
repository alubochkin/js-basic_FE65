/*
    Реализовать счётчик

    1. через ивент на каждую внопку
    2. через делегирование событий
*/

const actions = document.getElementById("actions");
const minus = document.querySelector("minus");
const reset = document.querySelector("reset");
const plus = document.querySelector("plus");
const count = document.querySelector("p.count");


actions.addEventListener("click", (event) => {
  if (event.target.classList.contains("minus")) {
    count.textContent = +count.textContent - 1
  }

  if (event.target.classList.contains("reset")) {
    count.textContent = '0'
  }

  if (event.target.classList.contains("plus")) {
    count.textContent = +count.textContent + 1
  }
});

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

const createElement = (tagName, options = {}) => {

    const el = document.createElement(tagName)
    Object.assign(el, options)
    return el

};

const h1 = document.createElement("h1");
h1.className = "title";
h1.textContent = "Main title";
h1.style.fontSize = "48px";
h1.style.textAlign = "center";

document.body.append(h1);

const title = createElement("h1", {
  className: "title",
  textContent: "Main title",
  style: "font-size: 48px, text-align: center",
});


console.log(title)

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
  list: [todoItem],
  getById(id) {},
  createTodo(newTodo) {},
  updateTodo(id, newTodo) {},
  deleteTodo(id) {},
  sortByTitle() {},
  sortByDescription() {},
  searchByTitle(title) {},
};
