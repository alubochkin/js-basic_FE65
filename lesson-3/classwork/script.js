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
h3.textContent = "h333333";
h3.classList.add("h3");
document.body.append(h3);

const text = document.createElement("p");
text.textContent = "Lorem ipsum dolor";
text.classList.add("text");
document.body.append(text);

const list = document.createElement("ul");
list.innerHTML = `
    <li>liii</li>
    <li>liii</li>
    <li>liii</li>
`;
list.classList.add("list");
document.body.prepend(list);

/*
    Создать кнопку
    При каждом нажатии кнопки она должна менять цвет
    цвет брать из массива colors
*/

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

const colors = ["#2656a3", "#611b94", "#9c1c7e", "#3f8a17", "#a31c1c"];

const btn = document.createElement("button");
btn.textContent = "Click";
btn.classList.add("btn");
document.body.append(btn);

btn.onclick = () => {
  btn.style.backgroundColor = colors[getRandom(0, colors.length)];
};

/*
    Создать параграф
    Класть в него информацию о положении курсора мыши Y:X
*/

const p = document.createElement("p");
p.classList.add("p");
document.body.append(p);
document.body.onmousemove = (event) => {
  p.textContent = `${event.pageX}:${event.pageY}`;
};

/*
    Создать параграф с рандомным текстом
    При нажатии левой клавиши font-size должен увеличиваться на 2px
    При нажатии правой клавиши font-size должен уменьшаться на 2px

    Нужно чтобы context menu по умолчанию не открывался
*/

const paragraph = document.createElement("p");
paragraph.classList.add("p");
document.body.append(paragraph);
paragraph.textContent = "Random Text";
paragraph.style.fontSize = "18px";
let fz = parseInt(paragraph.style.fontSize);

paragraph.onmousedown = (event) => {
  event.which === 1
    ? (paragraph.style.fontSize = `${fz + 2}px`)
    : (paragraph.style.fontSize = `${fz - 2}px`);
};
