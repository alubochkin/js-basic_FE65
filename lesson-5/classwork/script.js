/*
    Реализовать класс ATM (банкомат)
    которй принимает на вход limit. например { 5000: 10, 1000: 15, 500: 20, 100: 30 }
    свойство limit внутри класса должно быть защищенным

    пример:
    const atm = new ATM({ 5000: 10, 1000: 15, 500: 20, 100: 30 });
    console.log(atm.getMoney(99900)); // столько денег нет
    console.log(atm.getMoney(29900)); // 5X5000 4X1000 1X500 4X100 
    console.log(atm.getMoney(11500)); // 2X5000 1X1000 1X500
    console.log(atm.getMoney(4500)); // 4X1000 1X500 
*/
const todo = {
    list: JSON.parse(localStorage.getItem("todoList")) || [],
    getById(id) {
        return this.list.find((item) => item.id === id);
    },
    createTodo(title, description) {
        this.list.push({
            id: Math.floor(Math.random() * 100),
            title,
            description,
            checked: false,
        });
    },
    updateTodo(id, newTodo) {
        this.list = this.list.filter((item) => item.id !== id);
        this.list = [...this.list, newTodo];
    },
    deleteTodo(id) {
        this.list = this.list.filter((item) => item.id !== id);
    },
    sortByTitle() {
        this.list.sort((a, b) => (a.title > b.title ? 1 : -1));
    },
    sortByDescription() {
        this.list.sort((a, b) => (a.description > b.description ? 1 : -1));
    },
    searchByTitle(title) {
        const elem = this.list.filter((item) => item.title.includes(title));
        console.log(elem);
        return elem
    },
    saveToDo() {
        localStorage.setItem("todoList", JSON.stringify(this.list));
    },
};

const task = document.querySelector('#text')
const textArea = document.querySelector('.description')
const btnSubmit = document.querySelector('#btnSubmit')
const btnReset = document.querySelector('#btnReset')
const ul = document.querySelector('.ulka')
const todList = document.querySelector('.todo')
const btnsearcdescription = document.querySelector('#btnsearcdescription')
const btnsearchtitle = document.querySelector('#btnsearchtitle')
const search = document.querySelector('.search')

const validation = (input, textArea) => {
    let error = {};
    if (input.length === 0) {
        error.input = 'required'
    }
    if (textArea.length > 100) {
        error.description = 'max length 100'
    }
    return Object.keys(error).length ? error : null
}

btnSubmit.addEventListener("click", (event) => {
    event.preventDefault();
    const err = validation(task.value, textArea.value)
    if (err?.input) {
        task.classList.add('errorinput')
        const span = document.querySelector('.inputSpan')
        span.hidden = false
    }
    if (err?.description) {
        textArea.classList.add('errordescription')
        const span = document.querySelector('.descriptionSpan')
        span.hidden = false
    }

    if(!err) {
    if(btnSubmit.hasAttribute('class')) {
    const currentItem = todo.list.find(i => btnSubmit.className == i.id)
    console.log(todo.list);
    console.log(btnSubmit.className);
    currentItem.title = task.value
    currentItem.description = textArea.value
    todo.updateTodo(currentItem.id, currentItem)
    btnSubmit.removeAttribute('class')
    } else {
    todo.createTodo(task.value, textArea.value) }
    todo.saveToDo()
    task.value = ''
    textArea.value = ''
    renderToDo(todo.list)
    }
})

const renderToDo = (todList) => {
    ul.innerHTML = '';
    todList.forEach((item) => {
        const li = document.createElement('li');
        li.classList.add('styleli')    
    
        const div = document.createElement('div')
        div.classList.add('wrapperH')

        const h3 = document.createElement('h3')
        h3.textContent = item.title;

        const divWrapper = document.createElement('div')
        divWrapper.classList.add('divWrapperButtons')


        const btnDelete = document.createElement('button')
        btnDelete.classList.add('btnDelete')
        btnDelete.innerText = 'x'

        btnDelete.addEventListener('click', (event) => {
            event.preventDefault()
            todo.deleteTodo(item.id)
            renderToDo(todo.list)
            
        })

        const btnUpdate = document.createElement('button')
        btnUpdate.classList.add('btnUpdate')
        btnUpdate.innerText = 'edit'

        btnUpdate.addEventListener('click', () => {
            btnSubmit.classList.add(item.id)
            task.value = item.title
            if(item.description) {
            textArea.value = item.description
            }
        })

        const checkbox = document.createElement("input");
        checkbox.classList.add('checkbox')
        checkbox.setAttribute("type", "checkbox");
        checkbox.checked = item.checked
        if(item.checked) {
            li.classList.add('checkboxLi')
        }

        checkbox.addEventListener('change', function(){
            todo.list = todo.list.map(elem => {
                if(elem.id === item.id) {
                    elem.checked = this.checked
                }
                return elem
            })
            renderToDo(todo.list)
        })


        li.append(div)
        div.append(h3)
        div.append(divWrapper)
        divWrapper.append(btnDelete, btnUpdate, checkbox)

        

        if(item.description) {
            const p = document.createElement('p')
            p.textContent = item.description    
            li.append(p)
        }
        ul.append(li)
        
    });
    localStorage.setItem('todoList', JSON.stringify(todo.list))
}
todo.list = JSON.parse(localStorage.getItem('todoList')) ?? []
renderToDo(JSON.parse(localStorage.getItem('todoList')) ?? [])

btnsearchtitle.addEventListener('click', (event) => {
    event.preventDefault()
    todo.sortByTitle()
    renderToDo(todo.list)
})

btnsearcdescription.addEventListener('click', (event) => {
    event.preventDefault()
    todo.sortByDescription()
    renderToDo(todo.list)
})

search.addEventListener('input', (event) => {
    event.preventDefault()
    renderToDo(todo.searchByTitle(event.target.value))
});

btnReset.addEventListener('click', (event) => {
    event.preventDefault()
    task.value = ''
    textArea.value = ''
})

