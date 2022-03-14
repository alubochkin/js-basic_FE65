/*
    Реализовать счётчик

    1. через ивент на каждую внопку
    2. через делегирование событий
*/

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
  getById(id) {},
  createTodo(newTodo) {},
  updateTodo(id, newTodo) {},
  deleteTodo(id) {},
  sortByTitle() {},
  sortByDescription() {},
  searchByTitle(title) {},
};
