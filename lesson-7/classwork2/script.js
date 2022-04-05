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
const headerEl = document.querySelector("header");
const rootEl = document.getElementById("root");
const tabsEl = document.getElementById("tabs");
const listEl = document.getElementById("list");

let posts = null;
let todos = null;
let users = null;

const renderLoading = () => {
  rootEl.innerHTML = '<p class="loader">Loading...</p>';
};

const renderError = () => {
  rootEl.innerHTML = '<p class="error">ERROR</p>';
};

const renderTabs = () => {
  const postsBtn = document.createElement("button");
  postsBtn.textContent = "Posts";
  postsBtn.classList.add("btn");
  postsBtn.classList.add("postsBtn");

  const todosBtn = document.createElement("button");
  todosBtn.textContent = "Todos";
  todosBtn.classList.add("btn");
  todosBtn.classList.add("todosBtn");

  const usersBtn = document.createElement("button");
  usersBtn.textContent = "Users";
  usersBtn.classList.add("btn");
  usersBtn.classList.add("usersBtn");

  tabsEl.append(postsBtn, todosBtn, usersBtn);
  postsBtn.onclick = () => {
    postsBtn.classList.add("active");
    todosBtn.classList.remove("active");
    usersBtn.classList.remove("active");
    renderPostsList(posts);
  };

  todosBtn.onclick = () => {
    todosBtn.classList.add("active");
    postsBtn.classList.remove("active");
    usersBtn.classList.remove("active");
    renderTodosList(todos);
  };

  usersBtn.onclick = () => {
    usersBtn.classList.add("active");
    todosBtn.classList.remove("active");
    postsBtn.classList.remove("active");
    renderUsersList(users);
  };
};
renderTabs();

const renderInput = () => {
  const searchInp = document.createElement("input");
  searchInp.classList.add("search");
  headerEl.append(searchInp);
};

const renderPostsList = (posts) => {
  listEl.innerHTML = "";

  // let postAmount = 5;
  // let currentPosts = posts.slice(0, `${postAmount}`);

  posts.forEach((item) => {
    const postEl = document.createElement("div");
    postEl.classList.add("post-element");

    const postTitle = document.createElement("h3");
    postTitle.classList.add("post-title");
    postTitle.textContent = item.title;

    const postBody = document.createElement("p");
    postBody.classList.add("post-body");
    postBody.textContent = item.body;

    const showCommentsBtn = document.createElement("button");
    showCommentsBtn.classList.add("btn", "comments-btn");
    showCommentsBtn.textContent = "Show comments";

    postEl.append(postTitle, postBody, showCommentsBtn);
    listEl.append(postEl);

    console.log(item);
  });

  const loadMoreBtn = document.createElement("button");
  loadMoreBtn.textContent = "Load more";
  loadMoreBtn.classList.add("btn");
  listEl.append(loadMoreBtn);

  // loadMoreBtn.addEventListener("click", () => {
  //   postAmount += 5;
  //   console.log("CLICK", postAmount);
  //   renderPostsList(posts);
  // });
};

const renderTodosList = (todos) => {
  listEl.innerHTML = "";
  todos.forEach((item) => {
    const todoEl = document.createElement("div");
    todoEl.classList.add("todo-element");
    todoEl.style = `background-color: ${
      item.completed ? "#BCEBCB" : "#DAB6C4"
    }`;

    const todoTitle = document.createElement("h3");
    todoTitle.classList.add("todo-title");
    todoTitle.textContent = item.title;

    const todoStatus = document.createElement("p");
    todoStatus.textContent = `Status: ${
      item.completed ? "Completed" : "Not completed yet"
    }`;

    todoEl.append(todoTitle, todoStatus);
    listEl.append(todoEl);

    console.log(item);
  });
};

const renderUsersList = (users) => {
  listEl.innerHTML = "";
  users.forEach((item) => {
    const usersEl = document.createElement("ul");
    usersEl.classList.add("users-container");

    const userLiEl = document.createElement("li");
    userLiEl.classList.add("user-element");

    const name = document.createElement("p");
    name.classList.add("user-name");
    name.textContent = `Name: ${item.name}`;

    const userName = document.createElement("p");
    userName.classList.add("user-name");
    userName.textContent = `Username: ${item.username}`;

    const userEmail = document.createElement("p");
    userEmail.classList.add("user-email");
    userEmail.textContent = `Email: ${item.email}`;

    const userAddress = document.createElement("p");
    userAddress.classList.add("user-address");
    userAddress.textContent = `Address: city - ${item.address.city}, street - ${item.address.street}`;

    const userWeb = document.createElement("p");
    userWeb.classList.add("user-web");
    userWeb.textContent = `Website: ${item.website}`;

    listEl.append(usersEl);
    usersEl.append(userLiEl);
    userLiEl.append(name, userName, userEmail, userAddress, userWeb);

    console.log(item);
  });
};

const promises = [
  fetch("https://jsonplaceholder.typicode.com/posts"),
  fetch("https://jsonplaceholder.typicode.com/todos"),
  fetch("https://jsonplaceholder.typicode.com/users"),
];

function fetchData(promises) {
  // renderLoading();

  Promise.allSettled(promises)
    .then((res) => Promise.all(res.map((item) => item.value.json())))
    .then((res) => {
      [posts, todos, users] = res;

      // renderTabs();
      // renderInput()
      // renderPostsList(posts);
      // renderTodosList(posts);
      // renderUsersList(posts);
    })
    .catch(() => {
      renderError();
    });
}
fetchData(promises);
