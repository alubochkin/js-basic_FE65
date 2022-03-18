/*
    Создайте элемент h3 с любым тестом
    Создать в css класс
    Добавите этот класс к элементу h3
    Добавьте элемент h3 в body 
    */


    const h3 = document.createElement("h3");
    h3.classList.add("red");
    document.body.append(h3);

    /*Создайте элемент p с любым тестом
    Создать в css класс
    Добавите этот класс к элементу p
    Добавьте элемент p после h3*/ 

    const p = document.createElement("p");
    p.classList.add("blue");
    document.body.append(p);


    /*Создайте элемент ul с любыми li
    Создать в css класс
    Добавите этот класс к элементу ul
    Добавьте элемент ul перед h3
*/
const ul = document.createElement("li");
ul.classList.add("yello");
document.body.prepend(ul);


/*
    Создать кнопку
    При каждом нажатии кнопки она должна менять цвет
    цвет брать из массива colors
*/
document.querySelector('button').onclick = function(){
    this.style.background = colors[getRandom(0,5)];
};

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

const colors = ["#2656a3", "#611b94", "#9c1c7e", "#3f8a17", "#a31c1c"];

/*
    Создать параграф
    Класть в него информацию о положении курсора мыши Y:X
*/
const body = document.querySelector("body");
const paragraph = document.createElement("p");
body.prepend(paragraph);

paragraph.addEventListener("click", (event) => {
    console.log(event);

document.querySelector(".info").innerHTML = `
<p>${event.type} </p>
<hr/>
<p>Координаты: ${event.clientX} : ${event.clientY}</p>
<hr/>
<p>${JSON.stringify(event, null, "\t")}</p>
`;
});
/*
    Создать параграф с рандомным текстом
    При нажатии левой клавиши font-size должен увеличиваться на 2px
    При нажатии правой клавиши font-size должен уменьшаться на 2px

    Нужно чтобы context menu по умолчанию не открывался
*/
const p2 = document.createElement("p2");
p2.textContent = 'Любой текст';
body.prepend(p2);

p2.addEventListener('click', () => {
    fSize += 2
    p2.style.fontSize = `${fSize}px`
});
p2.addEventListener('contextmenu', (e) => {
    e.preventDefault ()
    fSize -= 2
    p2.style.fontSize = `${fSize}px`
});