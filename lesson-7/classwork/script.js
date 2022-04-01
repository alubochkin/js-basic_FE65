// отправить запрос на https://randomuser.me/api/?results=100 для получения списка юзеров
// 1. пока выполняется запрос должен отображаться лоадер (renderLoading)
// 2. при удачном выполнении запроса должен выводиться список юзеров (renderUsers)
// 3. запрос не отработал как надо, показываем ошибку (renderError)

let divWrap = document.querySelector(".div-wrap");
let results = 5;
const renderLoading = () => {
  divWrap.innerHTML = '<p class="loading">Loading</p>';
};
const renderError = () => {
  divWrap.innerHTML = '<p class="error">Error</p>';
};
const renderUsers = (users) => {
  divWrap.innerHTML = "";
  const ul = document.createElement("ul");
  ul.className = "users";

  users.forEach((user) => {
    ul.innerHTML += `
    <li class="user"> 
    Name:${user.name.title} ${user.name.first} ${user.name.last} 
    <br>
    Email: ${user.email}
    <br>
    Gender: ${user.gender}</li>
    
    `;
  });
  const btnMore = document.createElement("button");
  btnMore.textContent = "Show More";
  btnMore.onclick = () => {
    results += 5;
    fetchUsers(`https://randomuser.me/api/?results=${results}`);
  };

  divWrap.append(ul, btnMore);
};

const fetchUsers = (url) => {
  renderLoading();

  fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
      renderUsers(data.results);
    })

    .catch(() => renderError());
};

fetchUsers(`https://randomuser.me/api/?results=${results}`);
async function fetchUsers(url) {
  renderLosding();
  try {
    const res = await fetch(url);
    const data = await res.json();
    renderUsers(data.results);
  } catch (err) {
    renderError();
  } finally {
    console.log("finally");
  }
}

/*async function asyncFunc() {
  try {
    const success = await successPromise();
    console.log(success); // success

    const err = await errorPromise(); // в errorPromise ошибка, код переходит в блок catch
    console.log(err);
  } catch (error) {
    console.log(error); // error
  } finally {
    console.log("finally");
  }
}*/
