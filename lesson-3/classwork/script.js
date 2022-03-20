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
h3.textContent = "Hello";
h3.classList.add("h3");
document.body.append(h3);

const par = document.createElement("p");
par.textContent = "bla - bla - bla";
par.classList.add("par");
h3.after(par);

const ul = document.createElement("ul");
ul.classList.add("ul");
h3.prepend(ul);
ul.innerHTML = `<li> First </li><li> Second </li><li> Third </li>`;
//ul.append(li);
//const li = li.classList.add("li");
/*
/*
    Создать кнопку
    При каждом нажатии кнопки она должна менять цвет
    цвет брать из массива colors
*/
const button = document.createElement("button");
document.body.append(button);
button.classList.add("button");

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

const colors = ["#2656a3", "#611b94", "#9c1c7e", "#3f8a17", "#a31c1c"];

button.addEventListener("click", function () {
  this.style.backgroundColor = colors[getRandom(0, colors.length)];
});
/*
    Создать параграф
    Класть в него информацию о положении курсора мыши Y:X
*/
const paragraph = document.createElement("p");
document.body.append(paragraph);
paragraph.classList.add("paragraph");

document.body.addEventListener("mousemove", (ev) => {
  paragraph.innerHTML = `X:${ev.clientX} , Y:${ev.clientY} `;
});
/*
    Создать параграф с рандомным текстом
    При нажатии левой клавиши font-size должен увеличиваться на 2px
    При нажатии правой клавиши font-size должен уменьшаться на 2px

    Нужно чтобы context menu по умолчанию не открывался
*/
const paragraphTwo = document.createElement("p");
document.body.append(paragraphTwo);
paragraphTwo.textContent = "Я увеличиваюсь и уменьшаюсь";
//const fontSize = paragraphTwo.classList("fontSize");
paragraph.fontSize = "12px";
paragraphTwo.addEventListener("click", (event) => {
  event.currentTarget.style.fontSize =
    event.currentTarget.style.fontSize.slice(0, -2) + 2 + "px";
});

paragraphTwo.addEventListener("contextmenu", (event) => {
  event.preventDefault();
  event.currentTarget.style.fontSize =
    event.currentTarget.style.fontSize.slice(0, -2) - 2 + "px";
});
