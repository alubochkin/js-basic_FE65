const todo = {
  list: JSON.parse(localStorage.getItem("todoList")) ?? [],
  getById(id) {
    return this.list.find((item) => item.id === id);
  },
  createTodo(title, description) {
    this.list = [
      ...this.list,
      {
        id: Math.floor(Math.random() * 100),
        title,
        description,
        completed: false,
      },
    ];
  },
  updateTodo(id, newTodo) {

    this.list = this.list.map((todo) => {
      todo.id === id ? { ...todo, newTodo } : todo;
    });
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
    let task = this.list.filter((todo) =>
      todo.title.toLowerCase.includes(title.toLowerCase())
    );
    return task
  },
  saveToDo() {
    localStorage.setItem("todoList", JSON.stringify(this.list));
  },
};




const btnSubmit = document.querySelector(".btn-submit");
const inputTitle = document.querySelector(".input-title");
const textareaDescription = document.querySelector(".textarea-description");
const spanTitle = document.querySelector(".err-span-title");
const spanDescription = document.querySelector(".err-span-description");
const todoList = document.querySelector(".todo-list");
const btnSortTitle = document.querySelector('.btn-sort-title');
const btnSortDescription = document.querySelector('.btn-sort-description');
const inputSearch = document.querySelector('.input-search');



const validation = (input, description) => {
  let error = {};

  if (input.length === 0) {
    error.input = "required";
  }
  if (description.length > 10) {
    error.description = "max length 100";
  }

  return Object.keys(error).length ? error : null;
};
btnSubmit.addEventListener("click", (event) => {
  event.preventDefault();

  const err = validation(inputTitle.value, textareaDescription.value);

  if (!err) {
    todo.createTodo(inputTitle.value, textareaDescription.value);
    todo.saveToDo();
    inputTitle.value = "";
    textareaDescription.value = "";
    spanTitle.hidden = true;
    spanDescription.hidden = true;
    inputTitle.classList.remove("err-input-title");
    textareaDescription.classList.remove("err-textarea-description");
    spanTitle.textContent = "";
    spanDescription.textContent = "";
    renderTodoList(todo.list);
  }
  if (err?.input) {
    inputTitle.classList.add("err-input-title");
    spanTitle.hidden = false;
    spanTitle.textContent = err.input;
  }
  if (err?.description) {
    textareaDescription.classList.add("err-textarea-description");
    spanDescription.hidden = false;
    spanDescription.textContent = err.description;
  }

  console.log(todo.list);
});
const createTaskTitle = (todo) => {
  const taskTitle = document.createElement("div");
  const h2 = document.createElement("h2");
  h2.textContent = todo.title;
  const p = document.createElement("p");
  p.textContent = todo.description;
  taskTitle.append(h2, p);
  return taskTitle;
};
const createTaskBtns = () => {
  const taskBtns = document.createElement("div");
  taskBtns.classList.add("task-btns");
  const btnDone = document.createElement("button");
  btnDone.textContent = "Done";
  btnDone.classList.add('btn-task-done');
  const btnUpDate = document.createElement("button");
  btnUpDate.textContent = "Update";
  btnUpDate.classList.add('btn-task-update');
  const btnDel = document.createElement("button");
  btnDel.textContent = "Delete";
  btnDel.classList.add('btn-task-delete');
  taskBtns.append(btnDone, btnUpDate, btnDel);
  return taskBtns;
};

const renderTodoList = (todo) => {
  todoList.innerHTML = "";

  todo.forEach((todo) => {
    const todoTask = document.createElement("div");
    todoTask.classList.add("todo-task");
    const taskTitle = createTaskTitle(todo);
    const taskBtns = createTaskBtns();
    todoTask.append(taskTitle, taskBtns);
    todoList.append(todoTask);
  });
};


// // const taskBtns = document.querySelector(".task-btns");
// const btnTaskDone = document.querySelector(".btn-task-done");
// const btnTaskUpdate = document.querySelector(".btn-task-update");
// const btnTaskDelete = document.querySelector(".btn-task-delete");


btnSortTitle.addEventListener('click', () =>{
todo.sortByTitle()
renderTodoList(todo.list)
})

btnSortDescription.addEventListener('click', () =>{
  todo.sortByDescription();
  renderTodoList(todo.list)
})

// inputSearch.addEventListener('input', (event) =>{
// event.preventDefault()
// renderTodoList(todo.searchByTitle(event.target.value))
// })



renderTodoList(JSON.parse(localStorage.getItem("todoList")) ?? []);
