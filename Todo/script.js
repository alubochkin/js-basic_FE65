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
      return todo.id === id ? { ...todo, ...newTodo } : todo;
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
      todo.title.toLowerCase().includes(title.toLowerCase())
    );
    return task;
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
const btnSortTitle = document.querySelector(".btn-sort-title");
const btnSortDescription = document.querySelector(".btn-sort-description");
const inputSearch = document.querySelector(".input-search");

const taskBtns = document.querySelector(".task-btns");

let editId;

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

removeErrTitles = () => {
  spanTitle.hidden = true;
  spanDescription.hidden = true;
  inputTitle.classList.remove("err-input-title");
  textareaDescription.classList.remove("err-textarea-description");
  spanTitle.textContent = "";
  spanDescription.textContent = "";
};

const createTaskTitle = (todo) => {
  const taskTitle = document.createElement("div");
  const h2 = document.createElement("h2");
  h2.textContent = todo.title;

  const p = document.createElement("p");
  p.textContent = todo.description;
  taskTitle.append(h2, p);
  return taskTitle;
};
const createTaskBtns = (todo) => {
  const taskBtns = document.createElement("div");
  taskBtns.classList.add("task-btns");

  const btnDone = document.createElement("button");
  btnDone.textContent = "Done";
  btnDone.classList.add("btn-task-done");

  const btnUpDate = document.createElement("button");
  btnUpDate.textContent = "Update";
  btnUpDate.classList.add("btn-task-update");

  const btnDel = document.createElement("button");
  btnDel.textContent = "Delete";
  btnDel.classList.add("btn-task-delete");

  taskBtns.append(btnDone, btnUpDate, btnDel);

  if (todo.completed) {
    btnDone.setAttribute("disabled", true);
    btnUpDate.setAttribute("disabled", true);
  }
  return taskBtns;
};

btnSubmit.addEventListener("click", (event) => {
  event.preventDefault();

  const err = validation(inputTitle.value, textareaDescription.value);

  if (!err) {
    if (editId) {
      todo.updateTodo(editId, {
        title: inputTitle.value,
        description: textareaDescription.value,
      });
      editId = null;
    } else {
      todo.createTodo(inputTitle.value, textareaDescription.value);
    }
    todo.saveToDo();

    inputTitle.value = "";
    textareaDescription.value = "";
    removeErrTitles();

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
});

const renderTodoList = (list) => {
  todoList.innerHTML = "";

  list.forEach((task) => {
    const todoTask = document.createElement("div");
    todoTask.classList.add("todo-task");
    const taskTitle = createTaskTitle(task);
    const taskBtns = createTaskBtns(task);
    todoTask.append(taskTitle, taskBtns);
    todoList.append(todoTask);

    taskBtns.addEventListener("click", (event) => {
      switch (true) {
        case event.target.classList.contains("btn-task-done"):
          todo.updateTodo(task.id, { completed: true });
          renderTodoList(todo.list);
          break;
        case event.target.classList.contains("btn-task-delete"):
          todo.deleteTodo(task.id);
          renderTodoList(todo.list);
          break;
        case event.target.classList.contains("btn-task-update"):
          inputTitle.value = task.title;
          textareaDescription.value = task.description;
          editId = task.id;
      }
      todo.saveToDo();
    });
  });
};

btnSortTitle.addEventListener("click", () => {
  todo.sortByTitle();
  renderTodoList(todo.list);
});

btnSortDescription.addEventListener("click", () => {
  todo.sortByDescription();
  renderTodoList(todo.list);
});

inputSearch.addEventListener("input", (event) => {
  event.preventDefault();
  renderTodoList(todo.searchByTitle(event.target.value));
});

renderTodoList(JSON.parse(localStorage.getItem("todoList")) ?? []);
