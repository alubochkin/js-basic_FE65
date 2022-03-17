/*
    Реализовать счётчик

    1. через ивент на каждую внопку
    2. через делегирование событий
*/

const btnMinus = document.querySelector('.minus')
const btnReset = document.querySelector('.reset')
const btnPlus = document.querySelector('.plus')
const modal = document.querySelector('.count')
const actions = document.querySelector('#actions')


const createCounter = (initialValue = 0) => {
  let privateValue = initialValue;

  const increment = () => {
    privateValue++;
  };

  const decrement = () => {
    privateValue--;
  };

  const getValue = () => {
    return privateValue;
  };

  const reset = () => {
    privateValue = initialValue
  }

  return {
    increment,
    decrement,
    getValue,
    reset,
  }
}

const counter = createCounter()

const render = () => {
  modal.textContent = `${counter.getValue()}`
}

// btnMinus.addEventListener('click', () => {
//   counter.decrement()
//   render()
// })

// btnPlus.addEventListener('click', () => {
//   counter.increment()
//   render()
// })

// btnReset.addEventListener('click', () => {
//   counter.reset()
//   render()
// })

actions.addEventListener('click', (event) => {
  if(event.target.className === 'minus') {
    counter.decrement()
    render()
  }
  if(event.target.className === 'reset') {
    counter.reset()
    render()
  }
  if(event.target.className === 'plus') {
    counter.increment()
    render()
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
        style: "font-size: 48px, text-align: center",
    });

*/

const createElement = (tagName, options = {}) => {
  const elem = document.createElement(tagName)
  if(options.className) {
    elem.className = options.className
  }
  if(options.textContent) {
    elem.textContent = options.textContent
  }
  if(options.style) {
    elem.style = options.style
  }
  return elem
};

const h1 = createElement("h1", {
  className: "title",
  textContent: "Main title",
  style: "font-size: 48px; text-align: center",
});

document.body.append(h1)

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
    this.list.find(item => item.id === id)
  },
  // createTodo(title, description) {
  //   this.list = [...this.list, {
  //     id: Math.random(),
  //     title,
  //     description,
  //     completed: false
  //   }]
  // },
  createTodo(newTodo) {
    this.list = [...this.list, {
      id: Math.random(),
      ...newTodo,
      completed: false
    }]
  },
  updateTodo(id, newTodo) {
    this.list = this.list.map(item => item.id !== id ? item : newTodo)
  },
  deleteTodo(id) {
    this.list = this.list.filter(item => item.id !== id)
  },
  sortByTitle() {
    
  },
  sortByDescription() {

  },
  searchByTitle(title) {
    return this.list.filter(item => item.title.includes(title)) // если нужны все элементы
    // return this.list.find(item => item.title.includes(title)) // если нужен один элемент
  },
};

todo.createTodo({title: 'home', description: 'description'})
todo.createTodo({title: 'work', description: 'description'})
todo.createTodo({title: 'hobby', description: 'description'})
todo.createTodo({title: 'car', description: 'description'})
todo.createTodo({title: 'friends', description: 'description'})

todo.updateTodo(1, {})
todo.deleteTodo(1)
console.log(todo.searchByTitle('ho')) 
// 0: {id: 0.11193313453387765, title: 'home', description: 'description', completed: false}
// 1: {id: 0.5104634981771623, title: 'hobby', description: 'description', completed: false}
console.log(todo.list)