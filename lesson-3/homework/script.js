/*
    Реализовать счётчик

    1. через ивент на каждую внопку
    2. через делегирование событий
*/
const actionBtns = document.querySelector("#actions");
const value = document.querySelector(".count");
let count = 0;

actionBtns.addEventListener("click", (e) => {
  if (e.target.classList.contains("minus")) {
    count--;
    value.textContent = count;
  } else if (e.target.classList.contains("plus")) {
    count++;
    value.textContent = count;
  } else {
    count = 0;
    value.textContent = count;
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
  const element = document.createElement(tagName);
  Object.assign(element, options);
  document.body.append(element);
  return element;
};
const h1 = createElement("h1", {
  className: "title",
  textContent: "Main title",
  style: "font-size: 48px; text-align: center; color: blue",
});

const div = createElement("div", {
  className: "container",
  textContent: "Lorem ipsum dolor sit amet.",
  style: "text-align: center; margin: 0 auto; border: 2px solid orange;",
});

/*
    Реализовать модель туду листа
*/

const todoItem = {
  id: 1,
  title: "title",
  description: "description",
  completed: false,
};
const generateId = (x = 999) => Math.floor(Math.random() * x);
const todo = {
  list: [todoItem],
  getById(id) {
    return this.list.find((elem) => elem.id === id);
  },
  createTodo(newTodo, description) {
    this.list.push({
      id: generateId(),
      title: `${newTodo}`,
      description: `${description}`,
      completed: false,
    });
    console.log(this.list);
  },
  updateTodo(id, newTodo, description) {
    let todoIndex = this.list.findIndex((elem) => elem.id === id);
    newTodo = {
      id: generateId(),
      title: `${newTodo}`,
      description: `${description}`,
      completed: false,
    };
    this.list.splice(todoIndex, 1, newTodo);
  },
  deleteTodo(id) {
    this.list = this.list.filter((elem) => elem.id !== id);
  },
  sortByTitle() {
    this.list.sort((a, b) => (a.title > b.title ? 1 : -1));
  },
  sortByDescription() {
    this.list.sort((a, b) => (a.description > b.description ? 1 : -1));
  },
  searchByTitle(title) {
    let elem = this.list.find((elem) => elem.title === title);
    console.log(elem);
  },
};

console.log(todo.getById(1));
todo.createTodo("apples", "apples description");
todo.createTodo("cucumbers", "cucumbers description");
todo.updateTodo(todoItem.id, "bananas", "bananas description");
todo.sortByTitle();
todo.sortByDescription();
todo.searchByTitle("bananas");
