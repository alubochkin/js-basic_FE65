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
// const body = document.querySelector('body');
// const title = document.createElement('h3');
// title.className = 'title';
// title.textContent = 'TODO';
// body.prepend(title)

// const p = document.createElement('p');
// p.className = 'description';
// p.textContent = 'important tasks';
// title.after(p)

// const list = document.createElement('ul');
// list.className = 'list';
// const task = document.createElement('li');
// task.textContent = 'homework'
// list.append(task);

// title.before(list)
/*
    Создать кнопку
    При каждом нажатии кнопки она должна менять цвет
    цвет брать из массива colors
*/
// const body = document.querySelector('body');
// const btn = document.createElement('button');
// btn.textContent = 'change color';
// body.prepend(btn)



function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

const colors = ["#2656a3", "#611b94", "#9c1c7e", "#3f8a17", "#a31c1c"];

/*
    Создать параграф
    Класть в него информацию о положении курсора мыши Y:X
*/
// const body = document.querySelector('body');
// const p = document.createElement('p');
// p.textContent = ''
// body.prepend(p);

// body.addEventListener('mousemove', (event) =>{
//     p.textContent = ` положение мыши ${event.clientX} : ${event.clientY}`
// })


/*
    Создать параграф с рандомным текстом
    При нажатии левой клавиши font-size должен увеличиваться на 2px
    При нажатии правой клавиши font-size должен уменьшаться на 2px

    Нужно чтобы context menu по умолчанию не открывался
*/

const body = document.querySelector('body');
const p = document.createElement('p');
p.textContent = 'Здесь текст для изменений'
body.prepend(p);

p.addEventListener('click', () => {
let fSize = parseFloat(getComputedStyle(p).fontSize) ;
p.style.fontSize = fSize + 2 + 'px'
})
p.addEventListener('contextmenu', (event) => {
    let fSize = parseFloat(getComputedStyle(p).fontSize) ;
    console.log(fSize);
    p.style.fontSize = fSize - 2 + 'px'
    event.preventDefault()
    })