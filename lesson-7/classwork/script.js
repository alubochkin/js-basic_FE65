// отправить запрос на https://randomuser.me/api/?results=5 для получения списка юзеров
// 1. пока выполняется запрос должен отображаться лоадер (renderLoading)
// 2. при удачном выполнении запроса должен выводиться список юзеров (renderUsers)
// 3. запрос не отработал как надо, показываем ошибку (renderError)
<<<<<<< HEAD

const rootDiv = document.getElementById("root");

const renderLoading = () => {
    rootDiv.innerHTML = '<p class="loader">Loading...</p>';
};

const renderError = () => {
    rootDiv.innerHTML = '<p class="error">ERROR</p>';
};

const renderUsers = (users) => {
    rootDiv.innerHTML = "";
    const ul = document.createElement("ul");
    ul.className = "users";

    users.forEach((user) => {
        ul.innerHTML += `
=======
const rootDiv = document.getElementById("root");
let results = 5;

const renderLoading = () => {
  rootDiv.innerHTML = '<p class="loader">Loading...</p>';
};

const renderError = () => {
  rootDiv.innerHTML = '<p class="error">ERROR</p>';
};

const renderUsers = (users) => {
  rootDiv.innerHTML = "";
  const ul = document.createElement("ul");
  ul.className = "users";

  users.forEach((user) => {
    ul.innerHTML += `
>>>>>>> 9dcb483bf75ad628253d7be17cac5772fa3e7dd9
        <li class="user">
            info: ${user.name.title} ${user.name.first} ${user.name.last}
            <br>
            email: ${user.email}
            <br>
            gender: ${user.gender}
        </li>
    `;
<<<<<<< HEAD
    });

    rootDiv.append(ul);
};

const fetchUsers = (url) => {
    renderLoading();

    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            renderUsers(data.results);
        })
        .catch(() => {
            renderError();
        });
};

fetchUsers("https://randomuser.me/api/?results=5");
=======
  });

  const buttonShowMore = document.createElement("button");
  buttonShowMore.textContent = "Show More";
  buttonShowMore.onclick = () => {
    results += 5;
    fetchUsers(`https://randomuser.me/api/?results=${results}`);
  };

  rootDiv.append(ul, buttonShowMore);
};

const fetchUsers = (url) => {
  renderLoading();

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      renderUsers(data.results);
    })
    .catch(() => {
      renderError();
    });
};

fetchUsers(`https://randomuser.me/api/?results=${results}`);
>>>>>>> 9dcb483bf75ad628253d7be17cac5772fa3e7dd9
