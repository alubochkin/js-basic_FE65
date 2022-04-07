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

let activeTabs = null;

let posts = null;
let users = null;
let todos = null;

let postEnd = 5;
let userEnd = 5;
let todoEnd = 5;

let postsFilterValue = "";
let usersFilterValue = "";
let todosFilterValue = "";

let sortStatusTodo = "filterByAll";

let postsCommentsById = {};

const divTabs = document.getElementById("tabs");
const divSearchInput = document.getElementById("inputFilter");
const divFilterTodo = document.getElementById("btnFilterTodo");
const divList = document.getElementById("list");
const divLoadErr = document.getElementById("loadErr");
const divBtnLoadMore = document.getElementById("loadMore");

const renderLoading = () => {
  divLoadErr.innerHTML = '<span class="loading"> Loading...</span>';
};
const renderError = (err) => {
  divLoadErr.innerHTML = `<span class="err"> ${err}</span>`;
};
// TABS

const renderTabs = () => {
  const postsBtn = document.createElement("button");
  postsBtn.textContent = "POSTS";
  const todosBtn = document.createElement("button");
  todosBtn.textContent = "TODOS";
  const usersBtn = document.createElement("button");
  usersBtn.textContent = "USERS";
  divTabs.append(postsBtn, todosBtn, usersBtn);

  postsBtn.classList.add("btnActive");

  postsBtn.addEventListener("click", () => {
    postsBtn.classList.add("btnActive");
    todosBtn.classList.remove("btnActive");
    usersBtn.classList.remove("btnActive");
    renderPostList(posts);
    divFilterTodo.innerHTML = "";
    activeTabs = "posts";
  });
  todosBtn.addEventListener("click", () => {
    postsBtn.classList.remove("btnActive");
    todosBtn.classList.add("btnActive");
    usersBtn.classList.remove("btnActive");

    renderTodoList(todos);
    activeTabs = "todos";
  });
  usersBtn.addEventListener("click", () => {
    postsBtn.classList.remove("btnActive");
    todosBtn.classList.remove("btnActive");
    usersBtn.classList.add("btnActive");
    divFilterTodo.innerHTML = "";
    renderUsersList(users);
    activeTabs = "users";
  });
};

//INPUT

const renderInput = () => {
  const inputSearch = document.createElement("input");
  inputSearch.classList.add("inputSearch");
  divSearchInput.append(inputSearch);

  inputSearch.addEventListener("input", (event) => {
    if (activeTabs === "posts") {
      postsFilterValue = event.target.value;
      renderPostList(posts);
    }
    if (activeTabs === "users") {
      usersFilterValue = event.target.value;
      renderUsersList(users);
    }
    if (activeTabs === "todos") {
      todosFilterValue = event.target.value;
      renderTodoList(todos);
    }
  });
};

//LIST renderPost

const fetchCommentsById = (id) => {
  renderLoading();
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    .then((response) => response.json())
    .then((comments) => {
    
      postsCommentsById[id] = comments;
      renderPostList(posts);
      divLoadErr.innerHTML = "";

      // return postsCommentsById;
    })
    .catch((err) => {
      renderError(err);
    });
};

const renderComments = (data) => {
  console.log(data);

  data.forEach((item) => console.log(item.name));

  const divComments = document.createElement("div");

  data.forEach((item) => {
    const h3 = document.createElement("h3");
    h3.textContent = item.name;
    const p = document.createElement("p");
    p.textContent = item.body;
    divComments.append(h3, p);
    console.log(divComments);
    return divComments;
  });
};

const renderBtnComments = (data) => {
  const button = document.createElement("button");
  button.textContent = "show comments";

  button.addEventListener("click", () => {
    fetchCommentsById(data.id);
    console.log(postsCommentsById);

    // renderComments(postsCommentsById);
  });
  return button;
};

const renderPostList = (data) => {
  divList.innerHTML = "";

  const ul = document.createElement("ul");
  ul.classList = "posts-list";
  divList.append(ul);

  data
    .filter((post) =>
      post.title.toLowerCase().includes(postsFilterValue.toLowerCase())
    )
    .slice(0, postEnd)
    .forEach((post) => {
      const li = document.createElement("li");
      const h2 = document.createElement("h2");
      h2.textContent = post.title;
      const p = document.createElement("p");
      p.textContent = post.body;
      const divComments = document.createElement("div");

      if (postsCommentsById[post.id]) {
        divComments.append(renderComments(postsCommentsById[post.id]));
      } else {
        divComments.append(renderBtnComments(post));
      }

      li.append(h2, p, divComments);
      ul.append(li);
    });

  // console.log(data);
};

//LIST renderTodo

const renderFilterTodoList = (data) => {
  const ul = document.createElement("ul");
  ul.classList = "todo-list";
  divList.append(ul);

  data
    .filter((todo) => {
      if (sortStatusTodo === "filterByCompleted") {
        return (
          todo.completed &&
          todo.title.toLowerCase().includes(todosFilterValue.toLowerCase())
        );
      }
      if (sortStatusTodo === "filterByAll") {
        return todo.title
          .toLowerCase()
          .includes(todosFilterValue.toLowerCase());
      }
    })
    .slice(0, todoEnd)
    .forEach((todo) => {
      const li = document.createElement("li");
      const h2 = document.createElement("h2");
      h2.textContent = todo.title;
      const p = document.createElement("p");
      p.textContent = todo.completed ? "Done" : "Not done";
      li.append(h2, p);
      ul.append(li);
    });
};

const renderTodoList = (data) => {
  divList.innerHTML = "";

  const renderBtnFilterTodo = () => {
    divFilterTodo.innerHTML = "";

    const btnTodoAll = document.createElement("button");
    btnTodoAll.textContent = "All TODO";
    const btnTodoComplited = document.createElement("button");
    btnTodoComplited.textContent = "TODO Complited";

    divFilterTodo.append(btnTodoAll, btnTodoComplited);

    if (sortStatusTodo === "filterByAll") {
      btnTodoAll.classList.add("btnActive");
    } else {
      btnTodoComplited.classList.add("btnActive");
    }

    renderFilterTodoList(data);

    btnTodoAll.addEventListener("click", () => {
      btnTodoAll.classList.add("btnActive");
      btnTodoComplited.classList.remove("btnActive");

      divList.innerHTML = "";
      sortStatusTodo = "filterByAll";
      renderFilterTodoList(data);
    });

    btnTodoComplited.addEventListener("click", () => {
      btnTodoComplited.classList.add("btnActive");
      btnTodoAll.classList.remove("btnActive");

      divList.innerHTML = "";
      sortStatusTodo = "filterByCompleted";
      renderFilterTodoList(data);
    });
  };

  renderBtnFilterTodo();
  console.log(data);
};

//LIST renderUsers

const renderUsersList = (data) => {
  divList.innerHTML = "";

  const ul = document.createElement("ul");
  ul.classList = "users-list";
  divList.append(ul);

  data
    .filter((user) =>
      user.name.toLowerCase().includes(usersFilterValue.toLowerCase())
    )
    .slice(0, userEnd)
    .forEach((user) => {
      ul.innerHTML += `<li> <h2>${user.name}</h2> <p>${user.email}</p> <p>Address: ${user.address.city}</p> <p>Company: ${user.company.name}</p>  </li>`;
    });

  console.log(data);
};

//BtnLoadMore

const renderBtnLoadMore = () => {
  const btnLoadMore = document.createElement("button");
  btnLoadMore.textContent = "Load More";
  divBtnLoadMore.append(btnLoadMore);

  btnLoadMore.addEventListener("click", () => {
    if (activeTabs === "posts") {
      postEnd += 5;
      renderPostList(posts);
    }
    if (activeTabs === "users") {
      userEnd += 5;
      renderUsersList(users);
    }
    if (activeTabs === "todos") {
      todoEnd += 5;
      renderTodoList(todos);
    }
  });
};

//fetchData

const fetchData = () => {
  renderLoading();

  const fetchUrls = [
    fetch("https://jsonplaceholder.typicode.com/posts"),
    fetch("https://jsonplaceholder.typicode.com/todos"),
    fetch("https://jsonplaceholder.typicode.com/users"),
  ];

  Promise.allSettled(fetchUrls)
    .then((results) => {
      return Promise.all(results.map((result) => result.value.json()));
    })
    .then((res) => {
      posts = res[0];
      todos = res[1];
      users = res[2];

      activeTabs = "posts";

      renderTabs();
      renderInput();
      renderPostList(posts);

      renderBtnLoadMore();
      divLoadErr.innerHTML = "";
    })
    .catch((err) => {
      renderError(err);
    });
};

fetchData();
