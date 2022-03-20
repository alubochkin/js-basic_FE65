/*
    Реализовать счётчик

    1. через ивент на каждую внопку
    2. через делегирование событий
*/

const actions = document.querySelector("#actions");
const count = document.querySelector(".count");

actions.addEventListener("click", (event) => {
  if (event.target.classList.contains("minus")) {
    count.textContent--;
  } else if (event.target.classList.contains("plus")) {
    count.textContent++;
  } else if (event.target.classList.contains("reset")) {
    count.textContent = 0;
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
  // your code
  const el = document.createElement(tagName);
  Object.assign(el, options);
  return el;
};

const h1 = document.createElement("h1");
h1.className = "title";
h1.textContent = "Main title";
h1.style.fontSize = "48px";
h1.style.textAlign = "center";

document.body.append(h1);

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
  getById(id) {
    return this.list.findIndex((item) => item.id === id);
  },
  createTodo(newTodo, description) {
    this.list.push({
      id: this.getById(),
      title: `${newTodo}`,
      description: `${description}`,
      completed: false,
    });
  },
  updateTodo(id, newTodo, description) {
    let toDoIndex = this.list.findIndex((item) => item.id === id);
    ///value тут будет
    newTodo = {
      id: this.getById(),
      title: `${newTodo}`,
      description: `${description}`,
      completed: false,
    };
    this.list.splice(toDoIndex, 1, newTodo);
  },
  deleteTodo(id) {
    let toDoIndex = this.list.findIndex((item) => item.id === id);
    if (toDoIndex !== -1) {
      this.list.splice(toDoIndex, 1);
    }
  },
  sortByTitle() {
    this.list.sort((a, b) => (a.title > b.title ? 1 : -1));
  },
  sortByDescription() {
    this.list.sort((a, b) => (a.description > b.description ? 1 : -1));
  },
  searchByTitle(title) {
    this.list.filter((item) => item.title === title);
  },
};
todo.getById();
todo.createTodo();
todo.updateTodo();
todo.deleteTodo();
todo.sortByTitle();
todo.sortByDescription();
todo.searchByTitle();
