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

let posts = null;
let todos = null;
let users = null;

let postsNum = 5;
let todosNum = 5;
let usersNum = 5;
let postsFilterValue = "";
let todosFilterValue = "";
let usersFilterValue = "";
let activeTab = "posts";

let postCommentsById = {
  1: [],
  2: [],
};

const loader = document.querySelector(".loader");
const input = document.querySelector(".input");
const btnFilter = document.querySelector(".btnFilter");
const list = document.querySelector(".list");

const btnMore = document.createElement("button");
btnMore.textContent = "More";
btnMore.classList.add("btn_more");
btnMore.addEventListener("click", () => {
  if (activeTab === "posts") {
    postsNum += 5;
    renderPostsList(posts);
  }
  if (activeTab === "todos") {
    postsNum += 5;
    renderTodosList(todos);
  }
  if (activeTab === "users") {
    postsNum += 5;
    renderUsersList(users);
  }
});

const renderLoading = () => {
  loader.innerHTML = '<p class="loader">Loading...</p>';
};
const renderError = () => {
  loader.innerHTML = '<p class="error" hidden = false>ERROR</p>';
};
const renderTabs = () => {
  const postsBtn = document.createElement("button");
  const todosBtn = document.createElement("button");
  const usersBtn = document.createElement("button");
  const tabs = document.querySelector(".tabs");
  postsBtn.textContent = "posts";
  todosBtn.textContent = "todos";
  usersBtn.textContent = "users";

  tabs.append(postsBtn, todosBtn, usersBtn, btnMore);

  postsBtn.onclick = () => {
    postsBtn.classList.add("active");
    todosBtn.classList.remove("active");
    usersBtn.classList.remove("active");
    renderPostsList(posts);
    btnFilter.innerHTML = "";
    activeTab = "posts";
  };
  todosBtn.onclick = () => {
    postsBtn.classList.remove("active");
    todosBtn.classList.add("active");
    usersBtn.classList.remove("active");
    renderTodosList(todos);
    activeTab = "todos";
  };
  usersBtn.onclick = () => {
    postsBtn.classList.remove("active");
    todosBtn.classList.remove("active");
    usersBtn.classList.add("active");
    renderUsersList(users);
    activeTab = "users";
  };
};
const renderInput = () => {
  const searchInput = document.createElement("input");
  input.append(searchInput);
  searchInput.classList.add("input");
  searchInput.oninput = (e) => {
    if (activeTab === "posts") {
      postsFilterValue = e.target.value;
      renderPostsList(posts);
    }
    if (activeTab === "todos") {
      todosFilterValue = e.target.value;
      renderTodosList(todos);
    }
    if (activeTab === "users") {
      usersFilterValue = e.target.value;
      renderUsersList(users);
    }
  };
};

/*const fetchCommentsById = (id) => {
  fetch(``).then((comments) => {
    postCommentsById[id] = comments;
    renderPostsList(posts);
  });
};*/

const renderPostsList = (posts) => {
  list.innerHTML = "";
  const ul = document.createElement("ul");
  ul.classList.add("ul");
  list.append(ul);
  posts
    .filter((post) => post.title.includes(postsFilterValue))
    .slice(0, postsNum)
    .forEach((post) => {
      ul.innerHTML += `
      <li><h3>${post.title}</h3></li>
      <li></p>${post.body}</p></li>`;
    });
};

const renderTodosList = (todos) => {
  list.innerHTML = "";
  const ul = document.createElement("ul");
  ul.classList.add("ul");
  list.append(ul);
  todos
    .filter((todo) => todo.title.includes(todosFilterValue))
    .slice(0, todosNum)
    .forEach((todo) => {
      ul.innerHTML += `
        <li><h3> ${todo.title}</h3> </li> 
        <li>${todo.completed}</li>`;
    });
};
const renderUsersList = (users) => {
  list.innerHTML = "";
  const ul = document.createElement("ul");
  ul.classList.add("ul");
  list.append(ul);
  users
    .filter((user) => user.name.includes(usersFilterValue))
    .slice(0, usersNum)
    .forEach(
      (user) =>
        (ul.innerHTML += `
        <li><h3> ${user.name}<h3> </li>  
        <li><p>${user.username}</p></li>`)
    );
};
const fetchs = [
  fetch("https://jsonplaceholder.typicode.com/posts"),
  fetch("https://jsonplaceholder.typicode.com/todos"),
  fetch("https://jsonplaceholder.typicode.com/users"),
];
const fetchDatas = async (url) => {
  Promise.allSettled(fetchs)
    .then((res) => Promise.all(res.map(({ value }) => value.json())))
    .then(([postsData, todosData, usersData]) => {
      posts = postsData;
      todos = todosData;
      users = usersData;
      renderTabs();
      renderInput();
      renderPostsList(posts);
      renderTodosList(todos);
      renderUsersList(users);
    })
    .catch(() => {
      renderError();
    });
};
fetchDatas();
