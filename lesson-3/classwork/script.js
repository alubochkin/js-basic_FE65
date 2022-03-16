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

//------------------------------------------------------

const h3 = document.createElement('h3')
h3.classList.add('sss')
h3.textContent = 'Hello h3'
// h3.className = 'sss'
document.body.append(h3)

//------------------------------------------------------

const p = document.createElement('p')
p.classList.add('xxx')
p.textContent = 'Hello p'
document.body.append(p)

//------------------------------------------------------

const ul = document.createElement("ul");
const li1 = document.createElement("li");
const li2 = document.createElement("li");
const li3 = document.createElement("li");
const li4 = document.createElement("li");
const li5 = document.createElement("li");

[li1, li2, li3, li4, li5].forEach((item, index) => {
    item.textContent = `li № ${index + 1}`
});
ul.className = 'ul_class'

ul.append(li1, li2, li3, li4, li5)
h3.before(ul)

//------------------------------------------------------

/*
    Создать кнопку
    При каждом нажатии кнопки она должна менять цвет
    цвет брать из массива colors
*/

const btnRandomColor = document.createElement("button")
btnRandomColor.textContent = 'random color'
document.body.append(btnRandomColor)

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

const colors = ["#2656a3", "#611b94", "#9c1c7e", "#3f8a17", "#a31c1c"];

btnRandomColor.style.background = colors[getRandom(0,5)]

btnRandomColor.addEventListener('click', () => {
    btnRandomColor.style.background = colors[getRandom(0,5)]
})

//------------------------------------------------------

/*
    Создать параграф
    Класть в него информацию о положении курсора мыши Y:X
*/

const p1 = document.createElement("p")
document.body.append(p1)
p1.textContent = `
x:
y:
`

document.addEventListener('mouseover', (event) => {
    p1.textContent = `
    x: ${event.clientX}
    y: ${event.clientY}
    `
})

//------------------------------------------------------

/*
    Создать параграф с рандомным текстом
    При нажатии левой клавиши font-size должен увеличиваться на 2px
    При нажатии правой клавиши font-size должен уменьшаться на 2px

    Нужно чтобы context menu по умолчанию не открывался
*/

const p2 = document.createElement("p")
p2.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt labore numquam, pariatur sint qui debitis a itaque voluptate delectus quibusdam hic non saepe laudantium excepturi unde autem accusantium perspiciatis deleniti!"
p2.className = 'p2'
let fSize = 16
p2.style.fontSize = '16px'
document.body.append(p2)
console.log(p2.style)


// function test() {return false}
// p2.oncontextmenu = test;


p2.addEventListener('click', () => {
    fSize += 2
    p2.style.fontSize = `${fSize}px`
})

p2.addEventListener('contextmenu', (e) => {
    e.preventDefault()
    fSize -= 2
    p2.style.fontSize = `${fSize}px`
})

//------------------------------------------------------