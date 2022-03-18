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

const h3 = document.createElement("h3");
h3.className = "title-3";
h3.innerText = "Получить заряд энергии";

const p = document.createElement("p");
p.className = "textStyle";
p.innerText = "Гореть, чтобы не тлеть";


document.body.append(h3)
h3.after(p)

const ul = document.createElement("ul");
ul.className = "ulStyle";
ul.innerHTML = "<li>Первый</li> <li>Второй</li>";
h3.before(ul);

/*
    Создать кнопку
    При каждом нажатии кнопки она должна менять цвет
    цвет брать из массива colors
*/

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

const colors = ["#2656a3", "#611b94", "#9c1c7e", "#3f8a17", "#a31c1c"];


const button = document.createElement('button');
document.body.append(button)
button.innerText = "Click";
button.className = "btnStyle";
button.addEventListener("click", () => {
    button.style.backgroundColor = colors[getRandom(0, colors.length)]
  });

/*
    Создать параграф
    Класть в него информацию о положении курсора мыши Y:X
*/

const pointerCursor = document.createElement('p');
document.body.append(pointerCursor)
pointerCursor.className = "cursorStyle";
document.body.addEventListener("mousemove", (event) => {
    pointerCursor.textContent = `X =${event.offsetX} Y=${event.offsetY}`;
  });

/*
    Создать параграф с рандомным текстом
    При нажатии левой клавиши font-size должен увеличиваться на 2px
    При нажатии правой клавиши font-size должен уменьшаться на 2px

    Нужно чтобы context menu по умолчанию не открывался
*/

const pointerCursor2 = document.createElement('p');
document.body.append(pointerCursor2)
pointerCursor2.className = "cursorStyle2";
pointerCursor2.style.fontSize = '18px'
pointerCursor2.innerHTML = 'Привет! Поиграем?'
pointerCursor2.addEventListener("click", (event) => {
  event.currentTarget.style.fontSize = (parseInt(event.currentTarget.style.fontSize) + 2) + 'px'
});
pointerCursor2.addEventListener("contextmenu", (event) => {
  event.currentTarget.style.fontSize = (parseInt(event.currentTarget.style.fontSize) - 2) + 'px'
});

