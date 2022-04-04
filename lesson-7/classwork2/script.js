/*
  используя https://jsonplaceholder.typicode.com/ при первой загрузке выполнить 3 запроса
  1. за постами (https://jsonplaceholder.typicode.com/posts)
  2. за тудушками (https://jsonplaceholder.typicode.com/todos)
  3. за юзерами (https://jsonplaceholder.typicode.com/users)
  реализовать на странице табы с переключанием отображения между постами, тудушками и юзерами

  отображать первые пять элементов из массива
  реализовать ленивую загрузку, по кнопке отображать +5 элементов из массива

  добавить инпут для фильтрации постов по названию
  добавить инпут для фильтрации тудушками по названию
  добавить инпут для фильтрации юзеров по имени

  добавить в карточку с постом кнопку показать комментарии 
  отправлять за комментариями к посту (https://jsonplaceholder.typicode.com/posts/{{ id }}/comments)
*/

const fetchUrls = [
  fetch("https://jsonplaceholder.typicode.com/posts"),
  fetch("https://jsonplaceholder.typicode.com/todos"),
  fetch("https://jsonplaceholder.typicode.com/users"),
];

let posts = null;
let todos = null;
let users = null;

let postEnd = 5;
let userEnd = 5;
let todoEnd = 5;

const divTabs = document.getElementById("tabs");
const divSearchInput = document.getElementById("inputFilter");
const divFilterTodo = document.getElementById("btnFilterTodo");
const divList = document.getElementById("list");
const divLoadErr = document.getElementById("loadErr");

const renderLoading = () => {
  divLoadErr.innerHTML = '<span class="loading"> Loading...</span>';
};
const renderError = (err) => {
  divLoadErr.innerHTML = `<span class="err"> ${err}</span>`;
};
const renderTabs = () => {
  const postsBtn = document.createElement("button");
  postsBtn.textContent = "POSTS";
  const todosBtn = document.createElement("button");
  todosBtn.textContent = "TODOS";
  const usersBtn = document.createElement("button");
  usersBtn.textContent = "USERS";
  divTabs.append(postsBtn, todosBtn, usersBtn);

  postsBtn.classList.add("btnActive");
  renderPostList(posts);

  postsBtn.addEventListener("click", () => {
    postsBtn.classList.add("btnActive");
    todosBtn.classList.remove("btnActive");
    usersBtn.classList.remove("btnActive");
    renderPostList(posts);
    divFilterTodo.innerHTML = "";
  });
  todosBtn.addEventListener("click", () => {
    postsBtn.classList.remove("btnActive");
    todosBtn.classList.add("btnActive");
    usersBtn.classList.remove("btnActive");

    renderTodoList(todos);
  });
  usersBtn.addEventListener("click", () => {
    postsBtn.classList.remove("btnActive");
    todosBtn.classList.remove("btnActive");
    usersBtn.classList.add("btnActive");
    divFilterTodo.innerHTML = "";
    renderUsersList(users);
  });
};

const renderInput = () => {
  const inputSearch = document.createElement("input");
  inputSearch.classList.add("inputSearch");
  divSearchInput.append(inputSearch);
};

const renderPostList = (data) => {
  divList.innerHTML = "";

  let currentData = data.slice(0, `${postEnd}`);
  const ul = document.createElement("ul");
  ul.classList = "posts-list";
  divList.append(ul);

  currentData.forEach((post) => {
    ul.innerHTML += `<li> <h2>${post.title}</h2> <p>${post.body} </p> </li>`;
  });

  const btnLoadMorePosts = document.createElement("button");
  btnLoadMorePosts.textContent = "Load more";
  divList.append(btnLoadMorePosts);

  // btnLoadMorePosts.addEventListener("click", () => {
  //   postEnd += 5;
  //   fetchData();
  // });

  console.log(data);
};

const renderFilterTodoList = (data) => {
  const ul = document.createElement("ul");
  ul.classList = "todo-list";
  divList.append(ul);
  data.forEach((todo) => {
    const li = document.createElement("li");
    const h2 = document.createElement("h2");
    h2.textContent = todo.title;
    const p = document.createElement("p");
    p.textContent = todo.completed ? "Done" : "Not done";
    li.append(h2, p);
    ul.append(li);

    // ul.innerHTML += `<li><h2>Title: ${todo.title}</h2> <p> ${todo.completed} ? Done : none</p></li>`;
  });
};

const renderBtnLoadMoreTodos = () => {
  const btnLoadMoreTodos = document.createElement("button");
  btnLoadMoreTodos.textContent = "Load more";
  divList.append(btnLoadMoreTodos);
};

const renderTodoList = (data) => {
  divList.innerHTML = "";

  let currentData = data.slice(0, `${todoEnd}`);

  const renderBtnFilterTodo = () => {
    divFilterTodo.innerHTML = "";

    const btnTodoAll = document.createElement("button");
    btnTodoAll.textContent = "All TODO";
    const btnTodoComplited = document.createElement("button");
    btnTodoComplited.textContent = "TODO Complited";

    divFilterTodo.append(btnTodoAll, btnTodoComplited);
    btnTodoAll.classList.add("btnActive");
    renderFilterTodoList(currentData);
    renderBtnLoadMoreTodos();

    btnTodoAll.addEventListener("click", () => {
      btnTodoAll.classList.add("btnActive");
      btnTodoComplited.classList.remove("btnActive");

      divList.innerHTML = "";

      renderFilterTodoList(currentData);
      renderBtnLoadMoreTodos();
    });

    btnTodoComplited.addEventListener("click", () => {
      btnTodoComplited.classList.add("btnActive");
      btnTodoAll.classList.remove("btnActive");

      divList.innerHTML = "";

      let filterData = currentData.filter((todo) => todo.completed);
      renderFilterTodoList(filterData);
      renderBtnLoadMoreTodos();
    });
  };

  console.log(data);

  renderBtnFilterTodo();
};

const renderUsersList = (data) => {
  divList.innerHTML = "";

  let currentData = data.slice(0, `${userEnd}`);
  console.log(data);

  const ul = document.createElement("ul");
  ul.classList = "users-list";
  divList.append(ul);
  currentData.forEach((user) => {
    ul.innerHTML += `<li> <h2>${user.name}</h2> <p>${user.email}</p> <p>Address: ${user.address.city}</p> <p>Company: ${user.company.name}</p>  </li>`;
  });

  const btnLoadMoreUsers = document.createElement("button");
  btnLoadMoreUsers.textContent = "Load more";
  divList.append(btnLoadMoreUsers);

  btnLoadMoreUsers.addEventListener("click", () => {
    userEnd += 5;
    renderUsersList(currentData);
    btnLoadMoreUsers.classList.add("btnActive"); // не применяется стиль из-за renderUsersList(currentData)???

    console.log(currentData);
    console.log(userEnd);
  });

  console.log(data);
};

const fetchData = () => {
  renderLoading();

  Promise.allSettled(fetchUrls)
    .then((results) => {
      return Promise.all(results.map((result) => result.value.json()));
    })
    .then((res) => {
      posts = res[0];
      todos = res[1];
      users = res[2];

      renderTabs();
      renderInput();
      // renderPostList(posts);
      // renderUsersList(users);
      // renderTodoList(todos);

      console.log();
      divLoadErr.innerHTML = "";
    })
    .catch((err) => {
      renderError(err);
    });
};

fetchData();
