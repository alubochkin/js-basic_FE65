/*
    Создайте элемент h3 с любым тестом
    Создать в css класс
    Добавите этот класс к элементу h3
    Добавьте элемент h3 в body

    Создайте элемент p с любым тестом
    Создать в css класс
    Добавите этот класс к элементу p
    Добавьте элемент p после h3

    Создайте элемент ul с любыми li
    Создать в css класс
    Добавите этот класс к элементу ul
    Добавьте элемент ul перед h3
*/
const h3 = document.createElement('h3')
document.body.append(h3)
h3.innerText = "вот так";
h3.className = "title";

const p = document.createElement('p')
document.body.append(p)
p.innerText = "или так";
p.className = "text";

const ul = document.createElement('ul')
ul.className = "ul-ka"
ul.innerHTML = '<li>asdasdasd</li>'
h3.before(ul)


/*
    Создать кнопку
    При каждом нажатии кнопки она должна менять цвет
    цвет брать из массива colors
*/
const button = document.createElement('button')
document.body.append(button)
button.innerText = "button";
button.className = "button";



function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

const colors = ["#2656a3", "#611b94", "#9c1c7e", "#3f8a17", "#a31c1c"];

button.addEventListener('click', () => {
    button.style.backgroundColor = colors[getRandom(0, colors.length)]
})

/*
    Создать параграф
    Класть в него информацию о положении курсора мыши Y:X
*/
const cursor = document.createElement('p')
document.body.append(cursor)
cursor.className = 'cursors'

document.body.addEventListener("mousemove", (event) => {
    cursor.textContent = `X=${event.pageX} Y=${event.pageY}`
})

/*
    Создать параграф с рандомным текстом
    При нажатии левой клавиши font-size должен увеличиваться на 2px
    При нажатии правой клавиши font-size должен уменьшаться на 2px

    Нужно чтобы context menu по умолчанию не открывался
*/
const p2 = document.createElement("p")
p2.textContent = "здесь находится самый рандомный текст"
p2.className = 'p2'
let fontSize = 20
p2.style.fontSize = '16px'
document.body.append(p2)

p2.addEventListener('click', () => {
    fontSize += 10
    p2.style.fontSize = `${fontSize}px`
})

p2.addEventListener('contextmenu', (event) => {
    event.preventDefault()
    fontSize -= 10
    p2.style.fontSize = `${fontSize}px`
})