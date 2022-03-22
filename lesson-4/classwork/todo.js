const todoItem = {
    id: 1,
    title: "title",
    description: "description",
    completed: false,
  };
  
  const randomId = (x = 999) => Math.random() * x;
  
  const todo = {
    list: [todoItem],
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
      return newTask
    },
    updateTodo(id, newTodo) {
      const findId = this.list.findIndex((task) => task.id === id);
      Object.assign(this.list[findId], newTodo);
    },
    deleteTodo(id) {
      this.list = this.list.filter((task) => task.id !== id)
    },
    sortByTitle() {
      return this.list.sort((a, b) => (a.title > b.title ? 1 : -1));
    },
    sortByDescription() {
      return this.list.sort((a, b) => ((a.description > b.description) ? 1 : -1));
    },
    searchByTitle(title) {
      const task = this.list.find((task) => task.title === title);
      return task
    },
    saveTodoList() {
      localStorage.setItem("ToDoList", JSON.stringify(this.list));
    },
  };
  