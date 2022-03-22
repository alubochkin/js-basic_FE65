// const todoList = document.getElementById('todo-list')

// const li = document.createElement("li");
// li.className = "danger";
// li.textContent = "Important Task";

// todoList.append(li)

// ------------------------------------------

const todoList = document.getElementById("todo-list");

todoList.append("append"); // добавляет узлы или строки в конец node,
todoList.prepend("prepend"); // вставляет узлы или строки в начало node,
todoList.before("before"); // вставляет узлы или строки до node,
todoList.after("after"); // вставляет узлы или строки после node,

const paragraph = document.createElement('p')
paragraph.textContent = 'append!!!'
todoList.append(paragraph)

const li = document.createElement('li')
li.textContent = 'prepend!!!'
todoList.prepend(li)

// ------------------------------------------

// const todoList = document.getElementById("todo-list");

// const paragraph = document.createElement("p");
// paragraph.textContent = "paragraph";
// todoList.append(paragraph);

// setTimeout(() => {
//   paragraph.remove();
// }, 2000);
