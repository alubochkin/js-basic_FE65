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
// h3.className = 'title'
h3.classList.add('title')
h3.textContent = 'h3'
document.body.append(h3)


const p = document.createElement('p')
// h3.className = 'title'
p.classList.add('title')
p.textContent = 'p'
document.body.append(p)

const ul = document.createElement("ul")
ul.classList.add("list")
ul.textContent = "list"
document.body.prepend(ul)

const liOne = document.createElement("li")
const liTwo = document.createElement("li")
const liThree = document.createElement("li");
// liOne.textContent = 'ffnkd'
[liOne, liTwo, liThree].forEach(item => item.textContent = "njbbhb")
ul.append(liOne, liTwo, liThree)


/*
    Создать кнопку
    При каждом нажатии кнопки она должна менять цвет
    цвет брать из массива colors
*/

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

const colors = ["#2656a3", "#611b94", "#9c1c7e", "#3f8a17", "#a31c1c"];

const buttonOne = document.createElement("button")
document.body.append(buttonOne)
buttonOne.textContent = 'button'
buttonOne.addEventListener('click', () => {
    buttonOne.style.backgroundColor = colors[(getRandom(0,5))]
})

/*
    Создать параграф
    Класть в него информацию о положении кур`сора мыши Y:X
*/
const pTwo = document.createElement("p")
document.body.append(pTwo)
pTwo.textContent = 'pTwo'
pTwo.addEventListener('mousemove',(event) => {
    const cordinate = `${event.clientX} : ${event.clientY}`
    console.log('Ptwo')
    console.log(cordinate)
})
/*
    Создать параграф с рандомным текстом
    При нажатии левой клавиши font-size должен увеличиваться на 2px
    При нажатии правой клавиши font-size должен уменьшаться на 2px

    Нужно чтобы context menu по умолчанию не открывался
*/

const pThree = document.createElement("p")
document.body.append(pThree)
pThree.textContent = 'Random text'
pThree.style.fontSize = "16px"


pThree.addEventListener('click',() => {
    pThree.style.fontSize =+(pThree.style.fontSize).slice(0, -2) + 2 + 'px'
})
pThree.addEventListener('contextmenu', (event) => {
    event.preventDefault()
    pThree.style.fontSize =+(pThree.style.fontSize).slice(0, -2) - 2 + 'px'
})

