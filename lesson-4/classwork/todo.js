
const randomId = (x = 999) => Math.random() * x;

const todo = {
  list: [],
  getById(id) {
    const taskTodo = this.list.find((task) => task.id === id)
    return taskTodo
  },
  createTodo(newTodo, description) {
    const newTask = {
      id: randomId(),
      title: newTodo,
      description: description || null,
      completed: false,
    };
    this.list.push(newTask)
  },
  updateTodo(id, newTodo) {
    const findId = this.list.findIndex((task) => task.id === id);
    Object.assign(this.list[findId], newTodo);
  },
  deleteTodo(id) {
    this.list = this.list.filter((item) => item.id !== id);
  },
  sortByTitle() {
    this.list.sort((a, b) => (a.title > b.title ? 1 : -1));
  },
  sortByDescription() {
    this.list.sort((a, b) => ((a.description > b.description) ? 1 : -1));
  },
  searchByTitle(title) {
    if (!title.length) return this.list
    return this.list.filter(item => item.title.includes(title))
  },
  saveTodoList() {
    localStorage.setItem("ToDoList", JSON.stringify(this.list));
  },
};


const search = document.querySelector(".search")
const task = document.querySelector(".task")
const description = document.querySelector(".description");
const btnSubmit = document.querySelector("#btnSubmit");
const btnReset = document.querySelector("#btnReset");
const todotask = document.querySelector(".todo");
const form = document.querySelector(".form");
const ul = document.querySelector(".ulki");
const taskSpan = document.querySelector("#taskSpan");
const DescriptionSpan = document.querySelector("#DescriptionSpan");
const descriptionSpan1 = document.querySelector('.descriptionSpan')
const taskSpan1 = document.querySelector('.taskSpan')

const btnsearchtitle = document.querySelector("#btnsearchtitle");
const btnsearcdescription = document.querySelector("#btnsearcdescription");


const validation = (task, description) => {
  let error = {};
  if (task.length === 0) {
    error.task = 'Required'
  }
  if (description.length > 100) {
    error.description = 'Max length 100'
  }

  return Object.keys(error).length ? error : null

};

btnSubmit.addEventListener("click", (event) => {
  event.preventDefault();
  const err = validation(task.value, description.value)
  if (err?.task) {
    task.classList.add('errortask')
    taskSpan1.textContent = err.task;
    taskSpan1.hidden = false;
  }
  if (err?.description) {
    description.classList.add('errordescription')
    descriptionSpan1.textContent = err.description;
    descriptionSpan1.hidden = false
  }
  if (!err) {
    if (btnSubmit.hasAttribute('class')) {
    const currentItem = todo.list.find(i => btnSubmit.className == i.id)
    currentItem.title = task.value
    currentItem.description = description.value
    todo.updateTodo(currentItem.id, currentItem)
    btnSubmit.removeAttribute('class')
    } else {
    todo.createTodo(task.value, description.value)}
    todo.saveTodoList()
    task.value = ''
    description.value = ''
    descriptionSpan1.hidden = true
    taskSpan1.hidden = true;
    task.classList.remove('errortask')
    description.classList.remove('errordescription')
    renderTodoList(todo.list)
  } 
    
    
});
todo.list = JSON.parse(localStorage.getItem('ToDoList')) ?? []

const renderTodoList = (todotask) => {
  ul.innerHTML = '';
  todotask.forEach((card) => {
    const li = document.createElement('li')
    li.classList.add('lishka')

    const h3 = document.createElement('h3')
    h3.textContent = card.title
    
    const btnDelete = document.createElement('button')
    btnDelete.textContent = 'Delete'
    btnDelete.classList.add('btnDelete')
    btnDelete.addEventListener('click', (event) => {
      event.preventDefault()
      todo.deleteTodo(card.id)
      todo.saveTodoList()
      renderTodoList(todo.list)
    })

    const btnDone = document.createElement('button')
    btnDone.textContent = 'Done'
    btnDone.classList.add('btnDone')
    btnDone.addEventListener('click', (event) => {
      event.preventDefault()
      card.completed = !card.completed
      todo.saveTodoList()
      renderTodoList(todo.list)
    })


    const btnEdit = document.createElement('button')
    btnEdit.textContent = 'Edit'
    btnEdit.classList.add('btnEdit')
    btnEdit.addEventListener('click', () => {
      btnSubmit.classList.add(card.id)
      task.value = card.title
      if (card.description) {
        description.value = card.description
      }
     
    })

    const divButtons = document.createElement('div')
    divButtons.classList.add('divButtons')
    divButtons.append(btnDelete, btnDone, btnEdit)


    const divTitle = document.createElement('div')
    divTitle.classList.add('divTitle')
    divTitle.append(h3)

    if (card.description) {
      const p = document.createElement('p')
      p.textContent = card.description
      divTitle.append(p)
    }

    


    const divCompleted = document.createElement('div')
    divCompleted.classList.add('divCompleted')
    divCompleted.textContent = 'Completed'
    divCompleted.hidden = true
    
  
    li.append(divTitle)
    li.append(divCompleted)
    li.append(divButtons)
    ul.append(li)

    if (card.completed === true) {
      li.classList.remove('lishka')
      li.classList.add('lishka_done')
      divCompleted.hidden = false
      divButtons.innerHTML = ''
      divButtons.append(btnDelete)
    }
  })
}

renderTodoList(JSON.parse(localStorage.getItem('ToDoList')) ?? [])

btnsearchtitle.addEventListener("click", (event) => {
  event.preventDefault();
  todo.sortByTitle()
  renderTodoList(todo.list)
});

btnsearcdescription.addEventListener("click", (event) => {
  event.preventDefault();
  todo.sortByDescription()
  renderTodoList(todo.list)
});

search.addEventListener("input", (event) => {
  event.preventDefault();
  renderTodoList(todo.searchByTitle(event.target.value))
})

btnReset.addEventListener('click', (event) => {
  event.preventDefault()
  task.value = ''
  description.value = ''
})