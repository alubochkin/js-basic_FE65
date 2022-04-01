// отправить запрос на https://randomuser.me/api/?results=5 для получения списка юзеров
// 1. пока выполняется запрос должен отображаться лоадер (renderLoading)
// 2. при удачном выполнении запроса должен выводиться список юзеров (renderUsers)
// 3. запрос не отработал как надо, показываем ошибку (renderError)

const load = document.getElementById('wrapper')
let current = 5;

const renderLoading = () => {
    load.innerHTML = '<p class="loader">Loading...</p>'
}
const renderEror = () => {
    load.innerHTML = '<p class="loader">Eror...</p>'
}

const renderUser = (users) => {
    load.innerHTML = ''
    const ul = document.createElement('ul')
    ul.className = 'users'

    users.forEach((user) => {
        ul.innerHTML += `<li>
        info: ${user.name.first} ${user.name.last}
        <br>
        gender: ${user.gender} 
        <br>
        email: ${user.email}
        <br>
        </li>`
        console.log(user);
    });
    wrapper.append(ul)
        const btnSubmit = document.createElement('button')
        btnSubmit.textContent = 'btn';
        wrapper.append(btnSubmit)
        btnSubmit.addEventListener('click', () => {
        current += 5
        fetchUsers(`https://randomuser.me/api/?results=${current}`)
})
}

// const fetchUsers = (url) => {
//     renderLoading()

//     fetch(url)
//     .then((res) => res.json())
//     .then((data) => {
//         renderUser(data.results)
//     })
//     .catch(() => {
//         renderEror()
//     })
    
// };


const fetchUsers = async (url) => {
    renderLoading()
    try {
    

      const res = await fetch(url);
      const data = await res.json();

      renderUser(data.results)

    } catch (error) {
      renderEror()
  }
}
  
 
fetchUsers(`https://randomuser.me/api/?results=${current}`);
