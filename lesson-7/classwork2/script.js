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

const load = document.getElementById('load')
const wrapPost = document.getElementById('wrapPost')
const wrapTodos = document.getElementById('wrapTodos')
const wrapUsers = document.getElementById('wrapUsers')
const btnPlus = document.getElementById('btnPlus')
const btnPost = document.querySelector('.btnPost')
const btnTodo = document.querySelector('.btnTodo')
const btnUser = document.querySelector('.btnUser')
const search = document.querySelector('.inputSearch')
const btnAll = document.getElementById('btnAll')
const btnCompleted = document.getElementById('btnCompleted')
let currentPost = 5;
let currentTodo = 5;
let currentUser = 5;

const renderLoading = () => {
  load.innerHTML = '<p class="loader">Loading...</p>'
}
const cleanloading = () => {
  load.innerHTML = ''
}

const renderEror = () => {
  load.innerHTML = '<p class="loader">Eror...</p>'
}

const fetchPost = (path) => {
  renderLoading()
  fetch(path)
  .then(response => response.json())
  .then(items => {
    renderPostsList(items)
    cleanloading()
  }) 
  .catch((err) => {
    console.log(err); 
    renderEror()
  });
}

const fetchTodo = (path) => {
  renderLoading()
  fetch(path)
  .then(response => response.json())
  .then(items => {
    renderTodosList(items)
    cleanloading()
  }) 
  .catch((err) => {
    console.log(err); 
    renderEror()
  });
}

const fetchUser = (path) => {
  renderLoading()
  fetch(path)
  .then(response => response.json())
  .then(items => {
    renderUsersList(items)
    cleanloading()
  }) 
  .catch((err) => {
    console.log(err); 
    renderEror()
  })
}


const renderTabs = () => {

  btnPost.onclick = () => {
    btnPost.classList.add('active')
    btnTodo.classList.remove('active')
    btnUser.classList.remove('active')
    wrapPost.classList.add('open')
    wrapTodos.classList.remove('open')
    wrapUsers.classList.remove('open')
  }

  btnTodo.onclick = () => {
  btnPost.classList.remove('active')
  btnTodo.classList.add('active')
  btnUser.classList.remove('active')
  wrapPost.classList.remove('open')
  wrapTodos.classList.add('open')
  wrapUsers.classList.remove('open')
}

btnUser.onclick = () => {
  btnPost.classList.remove('active')
  btnTodo.classList.remove('active')
  btnUser.classList.add('active')
  wrapPost.classList.remove('open')
  wrapTodos.classList.remove('open')
  wrapUsers.classList.add('open')
}
}
renderTabs()

const renderInput = () => {
}

const renderPostsList = (posts) => {
  let render = ''
  posts.forEach(item => {
    render += `
    <li>
      ${item.id} - ${item.title}
    </li>
  `
  })
  wrapPost.innerHTML = render
}

const renderTodosList = (todos) => {
  let render = ''
  todos.forEach(item => {
    render += `
    <li>
      ${item.id} - ${item.title}
    </li>
  `
  })
  wrapTodos.innerHTML = render
}

const renderUsersList = (users) => {
  let render = ''
  users.forEach(item => {
    render += `
    <li>
      ${item.id} - ${item.name}
    </li>
  `
  })
  wrapUsers.innerHTML = render
}

let posts = null
let todos = null
let users = null

const promises = [
  fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${currentPost}`),
  fetch(`https://jsonplaceholder.typicode.com/todos?_limit=${currentTodo}`),
  fetch(`https://jsonplaceholder.typicode.com/users?_limit=${currentUser}`)
];

const fetchData = () => {
  renderLoading()
  
  Promise.allSettled(promises)
  .then((res) => {
    // console.log(res)
    return Promise.all(res.map(({value}) => {
      // console.log(value);
      return value.json()
    }))
  })
  .then(response => {
    // console.log(response);
    const postsData = response[0]
    const todosData = response[1]
    const usersData = response[2]
      posts = postsData;
      todos = todosData;
      users = usersData;

    renderPostsList(posts)
    renderTodosList(todos)
    renderUsersList(users)
      
    cleanloading()
  })
  .catch((err) => {
    console.log(err); 
    renderEror()
  });
}

btnPlus.addEventListener('click', () => {
  if(btnPost.classList.contains('active')) {
    currentPost += 5
    fetchPost(`https://jsonplaceholder.typicode.com/posts?_limit=${currentPost}`)
  } 
  if (btnTodo.classList.contains('active')) {
    currentTodo += 5
    fetchTodo(`https://jsonplaceholder.typicode.com/todos?_limit=${currentTodo}`)
  }
  if (btnUser.classList.contains('active')) {
    currentUser += 5
    fetchUser(`https://jsonplaceholder.typicode.com/users?_limit=${currentUser}`)
  }
})

search.addEventListener('input', (event) => {
  const {target} = event
  const {value} = target
  if(btnPost.classList.contains('active')) {
    if(value) {
     fetchPost(`https://jsonplaceholder.typicode.com/posts?title=${value}`)
    } else {
     fetchPost(`https://jsonplaceholder.typicode.com/posts?_limit=${currentPost}`)
    }
  } 
  if (btnTodo.classList.contains('active')) {
    if(value) {
    fetchTodo(`https://jsonplaceholder.typicode.com/todos?title=${value}`)
    } else {
      fetchTodo(`https://jsonplaceholder.typicode.com/todos?_limit=${currentTodo}`)
  }
}
  if (btnUser.classList.contains('active')) {
   if(value) {
    fetchUser(`https://jsonplaceholder.typicode.com/users?name=${value}`)
   } else {
     fetchUser(`https://jsonplaceholder.typicode.com/users?_limit=${currentUser}`)
   }
  }
})


btnCompleted.addEventListener('click', () => {
  if (btnTodo.classList.contains('active')) {
    fetchTodo(`https://jsonplaceholder.typicode.com/todos?completed=true`)
  } 
})

btnAll.addEventListener('click', () => {
  if(btnPost.classList.contains('active')) {
    fetchPost(`https://jsonplaceholder.typicode.com/posts`)
  } 
  if (btnTodo.classList.contains('active')) {
    fetchTodo(`https://jsonplaceholder.typicode.com/todos`)
  }
  if (btnUser.classList.contains('active')) {
    fetchUser(`https://jsonplaceholder.typicode.com/users`)
  }
})

fetchData()