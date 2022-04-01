// отправить запрос на https://randomuser.me/api/?results=5 для получения списка юзеров
// 1. пока выполняется запрос должен отображаться лоадер (renderLoading)
// 2. при удачном выполнении запроса должен выводиться список юзеров (renderUsers)
// 3. запрос не отработал как надо, показываем ошибку (renderError)

const usersDiv = document.querySelector('.users')
let num = 10

const renderLoading = () => {
    usersDiv.textContent = 'Loading...'
}

const renderError = (txt) => {
    usersDiv.textContent = txt
}

const renderUsers = (users) => {
    usersDiv.innerHTML = ''
    console.log(users)
    users.forEach((item, index) => {
       usersDiv.innerHTML += 
       `
        <div class="users__card">
            <h1>№ ${index + 1}</h1>
            <p><b>Name:</b> ${item.name.last}</p>
            <p><b>Email:</b> ${item.email}</p>
            <p><b>Gender:</b> ${item.gender}</p>
        </div>
       `
    });
    const btn = document.createElement('button')
    usersDiv.append(btn)
    btn.textContent = 'Загрузить ещё 5 пользователей'  
    btn.addEventListener('click', () => {
        num += 5
        fetchUsers(`https://randomuser.me/api/?results=${num}`)
    })  
}

// const fetchUsers = (url) => {
//     renderLoading()

//     fetch(url)
//         .then((res) => res.json())
//         .then((data) => renderUsers(data.results))
//         .catch((error) => renderError(error))
//         .finally(() => loadingEl.textContent = '')
// }

async function fetchUsers(url) {
    renderLoading()
    
    try { 
        const res = await fetch(url)
        const data = await res.json()
        renderUsers(data.results)
    }
    catch (err) {
        renderError(err)
    }
    finally {
       console.log('Finish')
    }
}

fetchUsers(`https://randomuser.me/api/?results=${num}`)