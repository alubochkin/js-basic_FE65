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

const h3 = document.createElement("h3")
h3.innerText = "Hello"
h3.className = "styleRed"
document.body.append(h3)

const p = document.createElement("p")
p.innerText = "World"
p.className = "addP"
document.body.append(p)

const ul = document.createElement("ul")
ul.className = "addUl"
const li1 = document.createElement("li")
const li2 = document.createElement("li")
const li3 = document.createElement("li")
li1.innerText = "first"
li2.innerText = "second"
li3.innerText = "third"
document.body.prepend(ul)
ul.append(li1, li2, li3)



/*
    Создать кнопку
    При каждом нажатии кнопки она должна менять цвет
    цвет брать из массива colors
*/

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

const colors = ["#2656a3", "#611b94", "#9c1c7e", "#3f8a17", "#a31c1c"];

/*
    Создать параграф
    Класть в него информацию о положении курсора мыши Y:X
*/

/*
    Создать параграф с рандомным текстом
    При нажатии левой клавиши font-size должен увеличиваться на 2px
    При нажатии правой клавиши font-size должен уменьшаться на 2px

    Нужно чтобы context menu по умолчанию не открывался
*/