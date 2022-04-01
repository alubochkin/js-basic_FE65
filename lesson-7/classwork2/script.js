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

const createElement = (tagName, options = {}) => {
  const elem = document.createElement(tagName)
  if(options.className) {
    elem.className = options.className
  }
  if(options.textContent) {
    elem.textContent = options.textContent
  }
  if(options.style) {
    elem.style = options.style
  }
  return elem
}

const links = [ fetch('https://jsonplaceholder.typicode.com/posts'), fetch('https://jsonplaceholder.typicode.com/todos'), fetch('https://jsonplaceholder.typicode.com/users'), ]

const container = document.querySelector('.container')
const btnsDiv = document.querySelector('.btnsDiv')
const inputDiv = document.querySelector('.inputDiv')
const contentDiv = document.querySelector('.contentDiv')



let posts = null
let todos = null
let users = null



const renderLoading = () => {
  const spanLoading = createElement('span', {className: 'loading', textContent: 'loading...'})
  container.prepend(spanLoading)
}

const renderError = (err) => {
  const spanError = createElement('span', {className: 'error', textContent: err})
  container.prepend(spanError)
}

const renderTabs = () => {
  const postsBtn = createElement('button', {textContent: 'POSTS', className: 'active'})
  const todosBtn = createElement('button', {textContent: 'TODOS'})
  const usersBtn = createElement('button', {textContent: 'USERS'})

  btnsDiv.append(postsBtn, todosBtn, usersBtn)


  // postsBtn.onclick = function() {
  //   console.log('hi')
  // }

  postsBtn.addEventListener('click', () => {
    postsBtn.classList.add('active')
    contentDiv.classList.add('posts')
    contentDiv.classList.remove('users')
    contentDiv.classList.remove('todos')
    todosBtn.classList.remove('active')
    usersBtn.classList.remove('active')
    renderPostList(posts)
  })

  todosBtn.addEventListener('click', () => {
    todosBtn.classList.add('active')
    contentDiv.classList.add('todos')
    contentDiv.classList.remove('posts')
    contentDiv.classList.remove('users')
    postsBtn.classList.remove('active')
    usersBtn.classList.remove('active')
    renderTodosList(todos)
  })

  usersBtn.addEventListener('click', () => {
    usersBtn.classList.add('active')
    contentDiv.classList.add('users')
    contentDiv.classList.remove('posts')
    contentDiv.classList.remove('todos')
    todosBtn.classList.remove('active')
    postsBtn.classList.remove('active')
    renderUsersList(users)
  })
}

const renderInput = () => {
  const inputEl = createElement('input')
  inputDiv.append(inputEl)
}

const renderPostList = (posts) => {
  contentDiv.innerHTML = ''
  contentDiv.classList.add('posts')
  posts.forEach(item => {
    const postEl = createElement('div', {className: 'post__item'})
    const titlePost = createElement('h3',  {textContent: item.title, className: 'post__item__title'})
    const infoPost = createElement('p',  {textContent: item.body, className: 'post__item__info'})
    const btnShowCommits = createElement('button', {textContent: 'See comments', className: 'post__item__btn'})
    postEl.append(titlePost, infoPost, btnShowCommits)
    contentDiv.append(postEl)

    console.log(item)
  })
}

const renderTodosList = (todos) => {
  contentDiv.innerHTML = ''
  todos.forEach(item => {
    console.log(item)
    const todoEl = createElement('div', {className: 'todo__item', style: `background-color: ${item.completed ? 'yellowgreen' : 'pink'}`})
    const todoNum = createElement('h3', {textContent: item.title, className: 'todo__item__title'})
    const todoTitle = createElement('p', {textContent: item.completed ? 'Done!' : 'Not done!'})
    todoEl.append(todoNum, todoTitle)
    contentDiv.append(todoEl)
  })
}

const renderUsersList = (users) => {
  contentDiv.innerHTML = ''
  users.forEach(item => {
    const userEl = createElement('div', {className: 'user__item'})
    const name = createElement('h3', {textContent: 'Info about ' + item.name, className: 'user__item__title'})
    const ul = createElement('ul')
    const liUserName = createElement('li', {textContent: 'Username: ' + item.username})
    const liEmail = createElement('li', {textContent: 'Email: ' + item.email})
    const liAddress = createElement('li', {textContent: `Address: City - ${item.address.city}, Street - ${item.address.street}`})
    const liWeb = createElement('li', {textContent: 'Website: ' + item.website})


    ul.append(liUserName, liEmail, liAddress, liWeb)
    userEl.append(name, ul)
    contentDiv.append(userEl)
  })

}

const fetchDatas = (links) => {
  renderLoading()

  Promise.allSettled(links)
    .then((res) => Promise.all(res.map(item => item.value.json())))
    .then(([postsData, todosData, usersData]) => {
      posts = postsData.map(item => {
        return {
          ...item,
          title: item.title.split('').map((item, index) => index === 0 ? item.toUpperCase() : item).join('')
        }
      })
      todos = todosData
      users = usersData
      
      renderTabs()
      renderInput()
      renderPostList(posts)
    })
    .catch((err) => {
      renderError(err)
    })
    .finally(() => {
      document.querySelector('.loading').remove()
    })
}

fetchDatas(links)