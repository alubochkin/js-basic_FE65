/*
    Реализовать счётчик

    1. через ивент на каждую внопку
    2. через делегирование событий
*/
let buttonPlus = document.querySelector(".plus")
let counterValue = document.querySelector('.count')
let buttonMinus = document.querySelector('.minus')
let buttonReset = document.querySelector('.reset')
let buttons = document.getElementById('actions')

// buttonPlus.onclick = function() {
//     counterValue.innerHTML = +counterValue.innerHTML + 1
// }

// buttonMinus.onclick = function() {
//     counterValue.innerHTML = +counterValue.innerHTML - 1
// }

// buttonReset.onclick = function() {
//     counterValue.innerHTML = 0
// }

buttons.addEventListener('click', (event) => {
        if (event.target.classList.value === "plus") {
            counterValue.innerHTML = +counterValue.innerHTML + 1
        } else if (event.target.classList.value === 'minus') {
            counterValue.innerHTML = +counterValue.innerHTML - 1
        } else if (event.target.classList.value === 'reset') {
            counterValue.innerHTML = 0
        }
    })
    /*
        Создать функцию createElement
        Она должна принимать первым параметром имя тега,  вторым объект с свойствами и методами для для элемента (textContent, innerHtml, className, ...и тд)

        Причина
        нам нужно избавиться от длинной записи типа

        const h1 = document.createElement('h1')
        h1.className = 'title'
        h1.textContent = 'Main title'
        h1.style.fontSize = '18px'

        нужно сделать так

        const h1 = createElement("h1", {
            className: "title",
            textContent: "Main title",
            style: "font-size: 48px, text-align: center",
        });

    */

let someObject = {
    className: "title",
    textContent: "Main title",
    style: "font-size: 48px, text-align: center",
}

const createElement = (tagName, object = {}) => {
    const tag = document.createElement(tagName)
    if (object.hasOwnProperty("className")) {
        tag.setAttribute('class', object.className)
    }
    if (object.hasOwnProperty('textContent')) {
        tag.setAttribute('text', object.textContent)
    }
    if (object.hasOwnProperty('style')) {
        tag.setAttribute('style', object.style)
    }
    return tag
};
console.log(createElement('h1', someObject))

/*
    Реализовать модель туду листа
*/

const todoItem = {
    id: 1,
    title: "title",
    description: "description",
    completed: false,
};

const todo = {
    list: [todoItem],
    getById(id) {},
    createTodo(newTodo) {},
    updateTodo(id, newTodo) {},
    deleteTodo(id) {},
    sortByTitle() {},
    sortByDescription() {},
    searchByTitle(title) {},
};