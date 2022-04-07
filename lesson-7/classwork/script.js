// отправить запрос на https://randomuser.me/api/?results=5 для получения списка юзеров
// 1. пока выполняется запрос должен отображаться лоадер (renderLoading)
// 2. при удачном выполнении запроса должен выводиться список юзеров (renderUsers)
// 3. запрос не отработал как надо, показываем ошибку (renderError)

const root = document.getElementById("root");
const load = document.querySelector(".loading");

let data = {};
let results = 5;

const renderLoading = () => {
  root.innerHTML = '<span class="loading"> Loading...</span>';
};
const renderError = () => {
  root.innerHTML = '<span class="err"> ERR</span>';
};
const renderFilterUsers = () => {
  const inputSearch = document.createElement("input");
  root.before(inputSearch);
};
const renderUsers = (users) => {
  root.innerHTML = "";
  const ul = document.createElement("ul");
  ul.classList = "users";
  root.append(ul);

  users.forEach((user) => {
    ul.innerHTML += `<li>${user.name.title} ${user.name.first} ${user.name.last}</li>`;
    console.log(user.name);
  });

  const btn = document.createElement("button");
  btn.textContent = "load more";
  root.append(btn);
  btn.addEventListener("click", () => {
    results += 5;
    fetchUsers(`https://randomuser.me/api/?results=${results}`);
  });
};
// const fetchUsers = (url) => {
//   renderLoading();
//   renderFilterUsers();
//   fetch(url)
//     .then((response) => response.json())
//     .then((res) => {
//       console.log(res);
//       renderUsers(res.results);
//     })
//     .catch(() => {
//       renderError();
//     });
// };
renderFilterUsers();
const fetchUsers = async (url) =>{
try{
  renderLoading();

  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
renderUsers(data.results)
} catch{
  renderError();
}
}

fetchUsers(`https://randomuser.me/api/?results=${results}`);
