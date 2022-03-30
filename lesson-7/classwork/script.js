// отправить запрос на https://randomuser.me/api/?results=100 для получения списка юзеров
// 1. пока выполняется запрос должен отображаться лоадер (renderLoading)
// 2. при удачном выполнении запроса должен выводиться список юзеров (renderUsers)
// 3. запрос не отработал как надо, показываем ошибку (renderError)

const rootEl = document.querySelector(".root");
let res = 5;

const renderLoading = () => {
  rootEl.innerHTML = "<p>Loading ...</p>";
};
const renderError = () => {
  rootEl.innerHTML = "<p>ERROR</p>";
};

const renderUsers = (users) => {
  rootEl.innerHTML = "";
  const ul = document.createElement("ul");
  users.forEach((user) => {
    console.log(user.name);
    ul.innerHTML += `
    <li class = "user">
    <img class = "user-img" src="${user.picture.medium}">

    Name: ${user.name.title} ${user.name.first} ${user.name.last}
    <br>
    Gender: ${user.gender}
    <br>
    Email: ${user.email}
    </li>`;
  });
  const btn = document.createElement("button");
  btn.textContent = "Show more";
  rootEl.append(ul, btn);
  btn.addEventListener("click", () => {
    res += 5;
    fetchUsers(`https://randomuser.me/api/?results=${res}`);
  });
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

fetchUsers(`https://randomuser.me/api/?results=${res}`);
