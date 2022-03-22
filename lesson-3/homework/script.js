/*
    Реализовать счётчик

    1. через ивент на каждую внопку
    2. через делегирование событий
*/
const btnMinus = document.querySelector(".minus");
const btnReset = document.querySelector(".reset");
const btnPlus = document.querySelector(".plus");

const btns = document.getElementById("actions");
const count = document.querySelector(".count");

// btns.addEventListener("click", (event) => {
//   if (event.target.classList.value === "plus") {
//       count.innerHTML = +count.innerHTML + 1;
//   } else if (event.target.classList.value === 'minus') {
//       count.innerHTML = +count.innerHTML - 1;
//   } else if (event.target.classList.value === 'reset') {
//       count.innerHTML = 0;
//   }
// });

btnMinus.onclick = function () {
  count.innerHTML = +count.innerHTML - 1;
};
btnPlus.onclick = function () {
  count.innerHTML = +count.innerHTML + 1;
};
btnReset.onclick = function () {
  count.innerHTML = 0;
};

/*
    Создать функцию createElement
    Она должна принимать первым параметром имя тега,  вторым объект 
    с свойствами и методами для для элемента 
    (textContent, innerHtml, className, ...и тд)

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
  const tag = document.createElement(tagName);
  if(options.className) {
    tag.className = options.className
  };
  if(options.textContent) {
    tag.textContent = options.textContent
  };
  if(options.style) {
    tag.style = options.style
  };
  return tag
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
