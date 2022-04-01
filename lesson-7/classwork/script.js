// отправить запрос на https://randomuser.me/api/?results=100 для получения списка юзеров
// 1. пока выполняется запрос должен отображаться лоадер (renderLoading)
// 2. при удачном выполнении запроса должен выводиться список юзеров (renderUsers)
// 3. запрос не отработал как надо, показываем ошибку (renderError)

const loading = document.querySelector('.loading')

const renderLoading = () => {
    loading.textContent = 'Loading...'
    loading.hidden = false
}

const renderError = () => {
    loading.textContent = 'ERROR'
}

const renderUsers = (users) => {
    loading.textContent = ''
    const ul = document.createElement('ul')
    ul.className = 'users'
    const divUsers = document.querySelector('.divUsers')
    
    users.forEach((user) => {
        ul.innerHTML += `<li class='lishka' >Info: ${user.name.title}. Name: ${user.name.first}. Lastname: ${user.name.last}
        <br>
        Email: ${user.email}.
        <br>
        Gender: ${user.gender}.</li>`
    });
    divUsers.append(ul)

}

const fetchUsers = (url) => {
    renderLoading()

    fetch(url)
    .then((res) => res.json())
    .then((data) => { renderUsers(data.results) })
    .catch(() => { renderError() })
}

fetchUsers('https://randomuser.me/api/?results=5')

const fetchUsers = (url) => {
    renderLoading()
try {
    const res = await fetch(url)
    const data = await res.json()
    renderUsers(data.results)
} catch (err)  { renderError() })
}

