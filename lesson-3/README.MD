### Цели

2. [Поиск элементова: getElement*, querySelector*](#Search)
3. [Свойства узлов: тип, тег и содержимое](#Inner)
4. [Изменение документа](#Documnet)
5. [Стили и классы](#Styles)
6. [Введение в браузерные события](#Events)
7. [Обработчики событий](#Handlers)
8. [Объект события](#Event)
9. [Всплытие и погружение](#Bubbling)
10. [Делегирование событий](#Delegation)
11. [Действия браузера по умолчанию](#Default)

---

#### <a href="Search"></a> Поиск элементова: getElement*, querySelector*

Для этого в _DOM_ есть методы поиска `document.getElement*` и `document.querySelector*`

```js
// lesson-7/classwork/example-2/script.js

const todoList = document.getElementById("todo-list");
const divContainer = document.getElementsByClassName("container");
const h1Title = document.getElementsByTagName("h1");
const pDescription = document.getElementsByName("description");

console.log(todoList);
console.log(divContainer);
console.log(h1Title);
console.log(pDescription);
```

`querySelector` возвращет первый найденный

```js
// lesson-7/classwork/example-2/script.js

const todoList = document.querySelector("#todo-list");
const divContainer = document.querySelector(".container");
const h1Title = document.querySelector("h1");
const pDescription = document.querySelector("[name=description]");

console.log(todoList);
console.log(divContainer);
console.log(h1Title);
console.log(pDescription);
```

`querySelectorAll` возвращет все найденные

```js
// lesson-7/classwork/example-2/script.js

const todoList = document.querySelectorAll("#todo-list");
const divContainer = document.querySelectorAll(".container");
const h1Title = document.querySelectorAll("h1");
const pDescription = document.querySelectorAll("[name=description]");

console.log(todoList);
console.log(divContainer);
console.log(h1Title);
console.log(pDescription);
```

Все методы `getElementsBy` возвращают **живую коллекцию**. Такие коллекции всегда отражают текущее состояние документа и автоматически обновляются при его изменении.

```js
// lesson-7/classwork/example-2/script.js

const todoList = document.getElementById("todo-list");
const getElementsLi = document.getElementsByTagName("li");
const querySelectorLi = document.querySelectorAll("li");

console.log(getElementsLi);
console.log(querySelectorLi);

todoList.innerHTML += `
        <li>some task</li>
    `;

console.log(getElementsLi);
console.log(querySelectorLi);
```

---

#### <a href="Inner"></a> Свойства узлов: тип, тег и содержимое

Свойство `innerHTML` позволяет получить HTML-содержимое элемента в виде строки. Мы также можем изменять его. Это один из самых мощных способов менять содержимое на странице.

Пример ниже показывает содержимое `document.body`, а затем через 2 секунды полностью заменяем

```js
// lesson-7/classwork/example-3/script.js

console.log(document.body);

setTimeout(() => {
  document.body.innerHTML = "<h1>Изменили document.body из script.js</h1>";
}, 2000);
```

Свойство `outerHTML` содержит HTML элемента целиком. Это как innerHTML плюс сам элемент.

```js
// lesson-7/classwork/example-3/script.js

const todoList = document.getElementById("todo-list");

setTimeout(() => {
  todoList.outerHTML = "<h1>Изменили document.body из script.js</h1>";
}, 2000);
```

Свойство `textContent` предоставляет доступ к тексту внутри элемента за вычетом всех `<тегов>`.

- С `innerHTML` вставка происходит «как HTML», со всеми HTML-тегами.
- С `textContent` вставка получается «как текст», все символы трактуются буквально.

```js
// lesson-7/classwork/example-3/script.js

const todoList = document.getElementById("todo-list");

console.log(todoList.outerHTML);
console.log(todoList.textContent);

const text = "<h1>Hello world</h1>";

const elem1 = document.getElementById("innerHTML");
const elem2 = document.getElementById("textContent");

elem1.innerHTML = text;
elem2.textContent = text;
```

---

#### <a herf="Documnet"></a> Изменение документа

- `document.createElement(tag)` создаёт новый элемент с тегом

```js
const div = document.createElement("tag");
const paragraph = document.createElement("p");
```

- `document.createTextNode(text)` создаёт новый текстовый узел с заданным текстом

```js
const text = document.createTextNode("Hello world");
```

Создание нового элемента

```js
// lesson-7/classwork/example-4/script.js

const todoList = document.getElementById("todo-list");

const li = document.createElement("li");
li.className = "danger";
li.textContent = "Important Task";

todoList.append(li);
```

Методы вставки

```js
// lesson-7/classwork/example-4/script.js

const todoList = document.getElementById("todo-list");

todoList.append("append"); // добавляет узлы или строки в конец node,
todoList.prepend("prepend"); // вставляет узлы или строки в начало node,
todoList.before("before"); // вставляет узлы или строки до node,
todoList.after("after"); // вставляет узлы или строки после node,

const paragraph = document.createElement("p");
paragraph.textContent = "append!!!";
todoList.append(paragraph);

const li = document.createElement("li");
li.textContent = "prepend!!!";
todoList.prepend(li);
```

Метод удаления

```js
// lesson-7/classwork/example-4/script.js

const todoList = document.getElementById("todo-list");

const paragraph = document.createElement("p");
paragraph.textContent = "paragraph";
todoList.append(paragraph);

setTimeout(() => {
  paragraph.remove();
}, 2000);
```

#### <a href="Styles"></a> Стили и классы

`className` и `classList`
Изменение класса является одним из наиболее часто используемых действий в скриптах.

Для классов было введено свойство `className`: `elem.className` соответствует атрибуту `class`.

В `JavaScript` существовало ограничение: зарезервированное слово типа `class` не могло быть свойством объекта.

```js
// lesson-7/classwork/example-5/script.js

const h1 = document.querySelector("h1");
console.log(h1.className); // title
```

`elem.classList` – это специальный объект с методами для добавления/удаления одного класса

- `elem.classList.add/remove("class")` – добавить/удалить класс.
- `elem.classList.toggle("class")` – добавить класс, если его нет, иначе удалить.
- `elem.classList.contains("class")` – проверка наличия класса, возвращает true/false.

```js
// lesson-7/classwork/example-5/script.js

const title = document.querySelector("h1");
console.log(title.className); // title

const changeTitleColor = () => {
  if (title.classList.contains("title_red")) {
    title.classList.remove("title_red");
    title.classList.add("title_green");
  } else {
    title.classList.add("title_red");
    title.classList.remove("title_green");
  }
};

setInterval(() => {
  changeTitleColor();
}, 1000);

const content = document.querySelector("p");
console.log(content.className); // content

const changeContentColor = () => {
  content.classList.toggle("content_blue");
};

setInterval(() => {
  changeContentColor();
}, 500);
```

### <a href="Events"></a> Введение в браузерные события

**Событие** - это сигнал от браузера о том, что что-то произошло. Все _DOM_-узлы подают такие сигналы.

**События мыши:**

- `click` - происходит, когда кликнули на элемент левой кнопкой мыши (на устройствах с сенсорными экранами оно происходит при касании).
- `contextmenu` - происходит, когда кликнули на элемент правой кнопкой мыши.
- `mouseover` -когда мышь наводится на элемент.
- `mouseout` - когда мышь покидает элемент.
- `mousedown` - когда нажали кнопку мыши на элементе.
- `mouseup` - когда отжали кнопку мыши на элементе.
- `mousemove` - при движении мыши.

**Клавиатурные события:**

- `keydown` - когда пользователь нажимает клавишу.
- `keyup` - когда пользователь отпускает клавишу.

**События на элементах ввода:**

- `change` - Событие срабатывает по окончании изменения элемента.
- `input` - Событие срабатывает каждый раз при изменении значения.

```js
// для демо перейти в lesson-8/example-1/script.js
```

---

#### <a href="Handlers"></a> Обработчики событий

Можно назначать обработчик, используя свойство DOM-элемента `on<имя_событие>`
Используя атрибуты можно навесить обработчки на элменты через `HTML, HTML + JS, JS`

- HTML

```html
// lesson-8/example-2/index.html

<button type="button" onclick="console.log('HTML')">
  Использование атрибута HTML, через index.html
</button>
```

- HTML + JS

```html
// lesson-8/example-2/index.html

<button type="button" onclick="showInfo()">
  Использование атрибута HTML, через index.html функция внутри script.js
</button>
```

```js
// lesson-8/example-2/script.js

showInfo = () => {
  console.log("HTML + JS");
};
```

- JS

```html
// lesson-8/example-2/index.html

<button id="btn" type="button">
  Использование атрибута HTML, через script.js
</button>
```

```js
// lesson-8/example-2/script.js.html

const button = document.querySelector("#btn");
button.onclick = () => {
  console.log("JS");
};
```

Главный недостаток описанных выше способов назначения обработчика - невозможность повесить несколько обработчиков на одно событие.

Мы хотим назначить два обработчика для этого. Но новое DOM-свойство перезапишет предыдущее:

```js
// lesson-8/example-3/script.js

const button = document.getElementById("btn");

button.onclick = () => {
  console.log("first click");
};

button.onclick = () => {
  console.log("second click");
};

// после нажатия в консоли увидим только 'second click'
```

Есть альтернативный способ назначения обработчиков при помощи специальных методов `addEventListener` и `removeEventListener`. Они свободны от указанного недостатка.

```js
    element.addEventListener(event, handler[, options]);
```

- `event` Имя события.
- `handler` Ссылка на функцию-обработчик.
- `options` Дополнительный объект со свойствами:
  1. `once`: если `true`, тогда обработчик будет автоматически удалён после выполнения.
  2. `capture`: фаза, на которой должен сработать обработчик, _всплытие или погружение_. Исторически сложилось, что `options` может быть `false/true`, это то же самое, что `{ capture: false/true }`.
  3. `passive`: если `true`, то указывает, что обработчик никогда не вызовет `preventDefault()`

Для удаления обработчика следует использовать `removeEventListener`

```js
    element.removeEventListener(event, handler[, options]);
```

```js
// lesson-8/example-3/script.js

const button2 = document.getElementById("btn2");

const showInfo = () => {
  console.log("first click");
};

button2.addEventListener("click", showInfo);
button2.addEventListener("click", () => {
  console.log("second click");
});
```

---

#### <a href="Event"></a> Объект события

Чтобы хорошо обработать событие, могут понадобиться детали того, что произошло. Не просто «клик» или «нажатие клавиши», а также – какие координаты указателя мыши, какая клавиша нажата и так далее.

Когда происходит событие, браузер создаёт объект события, записывает в него детали и передаёт его в качестве аргумента функции-обработчику.

```js
// lesson-8/example-4/script.js

const button = document.querySelector("button");

button.addEventListener("click", (event) => {
  console.log(event);

  document.querySelector(".info").innerHTML = `
            <p>${event.type} </p>
            <hr/>
            <p>Координаты: ${event.clientX} : ${event.clientY}</p>
            <hr/>
            <p>${JSON.stringify(event, null, "\t")}</p>
        `;
});
```

Внутри обработчика события `this` ссылается на текущий элемент, то есть на тот, на котором, как говорят, «висит» обработчик.

```js
// lesson-8/example-4/script.js

button.addEventListener("click", function (event) {
  console.log(this);
  console.log(event.currentTarget);

  console.log(event.currentTarget === this); // true
});
```

---

#### <a href="Bubbling"></a> Всплытие и погружение

**Принцип всплытия**
Когда на элементе происходит событие, обработчики сначала срабатывают на нём, потом на его родителе, затем выше и так далее, вверх по цепочке предков.

```html
<div class="border">
  div
  <section class="border">
    section
    <button class="border">button</button>
  </section>
</div>
```

```js
// lesson-8/example-5/script.js

const div = document.querySelector("div");
const section = document.querySelector("section");
const button = document.querySelector("button");

[div, section, button].forEach((element) => {
  element.addEventListener("click", (event) => {
    console.log(`currentTarget: ${event.currentTarget.tagName}`);
  });
});
```

При клике на `button` в консоли будет информация

```js
// currentTarget: BUTTON
// currentTarget: SECTION
// currentTarget: DIV
```

При клике на `section` в консоли будет информация

```js
// currentTarget: SECTION
// currentTarget: DIV
```

При клике на `div` в консоли будет информация

```js
// currentTarget: DIV
```

**Погружение**

Существует ещё одна фаза из жизненного цикла события – «погружение» (иногда её называют «перехват»). Она очень редко используется в реальном коде, однако тоже может быть полезной.

```js
// lesson-8/example-5/script.js

const div = document.querySelector("div");
const section = document.querySelector("section");
const button = document.querySelector("button");

[div, section, button].forEach((element) => {
  element.addEventListener(
    "click",
    (event) => {
      console.log(`currentTarget: ${event.currentTarget.tagName}`);
    },
    true
  );
});
```

При клике на `button` в консоли будет информация

```js
// currentTarget: DIV
// currentTarget: SECTION
// currentTarget: BUTTON
```

При клике на `section` в консоли будет информация

```js
// currentTarget: DIV
// currentTarget: SECTION
```

При клике на `div` в консоли будет информация

```js
// currentTarget: DIV
```

**event.target**
Всегда можно узнать, на каком конкретно элементе произошло событие.

Самый глубокий элемент, который вызывает событие, называется целевым элементом, и он доступен через `event.target`.

```js
// lesson-8/example-5/script.js

document.addEventListener("click", (event) => {
  console.log(`event.target: ${event.target.tagName()}`);
});
```

**Стандарт DOM Events описывает 3 фазы прохода события:**

1. Фаза погружения (capturing phase) – событие сначала идёт сверху вниз.
2. Фаза цели (target phase) – событие достигло целевого(исходного) элемента.
3. Фаза всплытия (bubbling stage) – событие начинает всплывать.

**event.stopImmediatePropagation() / event.stopPropagation()**

Всплытие идёт с «целевого» элемента прямо наверх. По умолчанию событие будет всплывать до элемента `<html>`, а затем до объекта `document`, а иногда даже до `window`, вызывая все обработчики на своём пути.

Но любой промежуточный обработчик может решить, что событие полностью обработано, и остановить всплытие.

Для этого нужно вызвать метод `event.stopPropagation()`.

```js
const div = document.querySelector("div");
const section = document.querySelector("section");
const button = document.querySelector("button");

[div, section, button].forEach((element) => {
  element.addEventListener("click", (event) => {
    event.stopPropagation();

    console.log(`currentTarget: ${event.currentTarget.tagName}`);
  });
});
```

Если несколько обработчиков прикреплены к одному и тому же элементу с одинаковым типом события, тогда они будут вызваны в порядке своего добавления. Если один из этих обработчиков вызовет `event.stopImmediatePropagation()` тогда события оставшихся обработчиков вызваны не будут.

```js
const div = document.querySelector("div");
const section = document.querySelector("section");
const button = document.querySelector("button");

[div, section, button].forEach((element) => {
  element.addEventListener("click", (event) => {
    event.stopPropagation();
    console.log(`currentTarget: ${event.currentTarget.tagName} - 1`);
  });

  element.addEventListener("click", (event) => {
    event.stopImmediatePropagation();
    console.log(`currentTarget: ${event.currentTarget.tagName} - 2`);
  });

  // этот обработчик никогда не выполнится
  element.addEventListener("click", (event) => {
    event.stopPropagation();
    console.log(`currentTarget: ${event.currentTarget.tagName} - 3`);
  });
});
```

---

#### <a href="Delegation"></a> Делегирование событий

**Делегирование событий** является полезным шаблоном, так как позволяет отслеживать события на множестве элементов с помощью только одного обработчика.

Для работы делегирования событий нужно 3 шага:

1. Определить родителя элементов для отслеживания событий
2. Прикрепить на него обработчик событий
3. Использовать `event.target` для выбора целевого элемента

```js
// lesson-8/example-6

const paragraph = document.querySelector("p.text");
const actions = document.getElementById("actions");

actions.addEventListener("click", (event) => {
  if (event.target.classList.contains("show-lower")) {
    paragraph.textContent = event.target.textContent;
  }

  if (event.target.classList.contains("show-upper")) {
    paragraph.textContent = event.target.textContent;
  }

  if (event.target.classList.contains("show-capitalize")) {
    paragraph.textContent = event.target.textContent;
  }
});
```

---

#### <a href="Default"></a> Действия браузера по умолчанию

Многие события автоматически влекут за собой действие браузера.

- Клик по ссылке инициирует переход на новый URL.
- Нажатие на кнопку «отправить» в форме – отсылку её на сервер.
- Зажатие кнопки мыши над текстом и её движение в таком состоянии – инициирует его выделение.
- Если мы обрабатываем событие в JavaScript, то зачастую такое действие браузера нам не нужно. К счастью, его можно отменить.

`event.preventDefault()` позволяет отменить действие браузера по умолчанию

```js
const form = document.getElementById("form");
const title = document.getElementById("title");
const description = document.getElementById("description");

const paragraph = document.querySelector("p");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!title.value.length || !description.value.length) {
    paragraph.textContent = "Заполни оба поля";
    return;
  }

  paragraph.innerHTML = `
            <strong>Название: ${title.value}</strong>
            <br/>
            <i>Описание: ${description.value}</i>
        `;
});
```

---

ДЗ

1. [DOM-дерево](https://learn.javascript.ru/dom-nodes)
2. [Навигация по DOM-элементам](https://learn.javascript.ru/dom-navigation)
3. [Поиск: getElement*, querySelector*](https://learn.javascript.ru/searching-elements-dom)
4. [Атрибуты и свойства](https://learn.javascript.ru/dom-attributes-and-properties)
5. [Свойства узлов: тип, тег и содержимое](https://learn.javascript.ru/basic-dom-node-properties)
6. [Изменение документа](https://learn.javascript.ru/modifying-document)
7. [Стили и классы](https://learn.javascript.ru/styles-and-classes)
8. [Браузерные события](https://learn.javascript.ru/introduction-browser-events)
9. [Всплытие и погружение](https://learn.javascript.ru/bubbling-and-capturing)
10. [Делегирование событий](https://learn.javascript.ru/event-delegation)
11. [Действия браузера по умолчанию](https://learn.javascript.ru/default-browser-action)
12. [События мыши](https://learn.javascript.ru/mouse-events-basics)
13. [Движение мыши](https://learn.javascript.ru/mousemove-mouseover-mouseout-mouseenter-mouseleave)
14. [События клавиатуры](https://learn.javascript.ru/keyboard-events)

- [Свойства и методы формы](https://learn.javascript.ru/form-elements)
- [События: change, input, cut, copy, paste](https://learn.javascript.ru/events-change-input)
- [Фокусировка: focus/blur](https://learn.javascript.ru/focus-blur)
- [События указателя](https://learn.javascript.ru/pointer-events)
- [Прокрутка](https://learn.javascript.ru/onscroll)
