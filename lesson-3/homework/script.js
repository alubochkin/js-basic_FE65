/*
    Реализовать счётчик

    1. через ивент на каждую внопку
    2. через делегирование событий
*/
const count = document.querySelector('.count')
const actions = document.querySelector('#actions')
const minus = document.querySelector('.minus')
const reset = document.querySelector('.reset')
const plus = document.querySelector('.plus')

let num = 0
actions.addEventListener('click', (event) => {
  if(event.target.className === 'minus'){
    count.textContent = --num
  }
  if(event.target.className === 'reset'){
    count.textContent = 0
  }
  if(event.target.className === 'plus'){
    count.textContent = ++num
  }
})


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
        style: "font-size: 48px; text-align: center",
    });

*/

const createElement = (tagName, options = {}) => {
  const res = document.createElement(tagName)
  if(options.className){
     res.className = options.className
  }
  if(options.textContent){
    res.textContent = options.textContent
  }
  if(options.style){
    res.style = options.style
  }
  return res
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
    return this.list.find(item => item.id === id)
  },
  createTodo(newTodo) {
    const task = {
      id: Math.random(),
      completed: false,
      ...newTodo,
    }
    this.list.push(task)
  },
  updateTodo(id, newTodo) {
    this.list = this.list.map(item => item.id === id ? newTodo : item)
  },
  deleteTodo(id) {
    const result = this.list.findIndex(item => item.id === id)
    this.list.slice(result, 1)
  },
  sortByTitle() {
    this.list = this.list.sort((a, b) => a.title > b.title ? 1 : -1)
  },
  sortByDescription() {
    this.list = this.list.sort((a, b) => a.description > b.description ? 1 : -1)
  },
  searchByTitle(title) {
    return this.list.filter(item => item.title.includes(title))
  },
};

console.log(todo.getById(1));
