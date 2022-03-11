### Цели:

1. [Рекурсия и стек](#Recursion)
2. [Замыкание](#Closure)
3. [Методы массивов (part 2)](#Arrays)
4. [Объекты](#Objects)
5. [Копирование объекта и массивов](#Copy)
6. [Методы объекта. this для объекта](#Methods)
7. [Опциональная цепочка](#Chain)
8. [Привязка контекста call/apply/bind](#Bind)

---

#### <a href="Recursion"></a> Рекурсия и стек

**Рекурсия** – это приём программирования, полезный в ситуациях, когда задача может быть естественно разделена на несколько аналогичных, но более простых задач.
В процессе выполнения задачи в теле функции могут быть вызваны другие функции для выполнения подзадач. Частный случай подвызова – когда **функция вызывает сама себя**. Это как раз и называется **рекурсией**.

```js
// напишем функцию обратного отсчёта

function countdown(from, delay) {
  setTimeout(() => {
    console.log(from);

    countdown(from - 1, delay);
  }, delay);
}

countdown(10, 1000);
```

Необходимо принять во внимание при написании рекурсивной функции – это бесконечный цикл, т.е. когда функция вызывает саму себя… и никогда не может остановиться.
**Рекурсивная функция** всегда должна знать, когда ей нужно остановиться. В рекурсивной функции всегда есть два случая: **рекурсивный** и **граничный случаи**.

- **Рекурсивный случай** – когда функция вызывает саму себя.
- **Граничный случай** – когда функция перестает себя вызывать.

Наличие граничного случая и предотвращает зацикливание.

```js
function countdown(from, delay) {
  if (from < 0) {
    console.log("Граничный случай");
    return;
  }

  setTimeout(() => {
    console.log("Рекурсивный случай");
    console.log(from);

    countdown(from - 1, delay);
  }, delay);
}

countdown(10, 1000);
```

Рекурсивные функции используют так называемый **«Стек вызовов»**. Когда программа вызывает функцию, функция отправляется на верх стека вызовов. Это похоже на стопку книг, вы добавляете одну вещь за одни раз. Затем, когда вы готовы снять что-то обратно, вы всегда снимаете верхний элемент.

```js
// факториал через рекурсию
function factorial(num) {
  return num === 1 ? 1 : num * factorial(num - 1);
}

console.log(factorial(5)); // 120

/*
        factorial(5) num = 5 ->
        return num * factorial(num - 1); -> 
        factorial(4) num = 4 ->
        return num * factorial(num - 1); -> 
        factorial(3) num = 3 ->
        return num * factorial(num - 1); -> 
        factorial(2) num = 2 ->
        return num * factorial(num - 1); -> 
        factorial(1) num = 1 ->
        return 1

        1 * 2 * 3 * 4 * 5 = 120
    */
```

```js
// факториал через цикл
function factorial(num) {
  let res = 1;

  for (let i = 1; i <= 5; i++) {
    res *= i;
  }

  return res;
}

console.log(factorial(5)); // 120
```

Другим отличным применением рекурсии является рекурсивный обход.

```js
const obj = {
  number: 1,
  nextObj: {
    number: 2,
    nextObj: {
      number: 3,
      nextObj: {
        number: 4,
        nextObj: {
          number: 5,
          nextObj: null,
        },
      },
    },
  },
};

function showNumberRecursion(obj) {
  const next = obj.nextObj;

  console.log(obj.number);
  if (next) {
    showNumberRecursion(next);
  }
}

showNumberRecursion(obj);

console.log("-----");

function showNumberCycles(obj) {
  let next = obj;

  while (next) {
    console.log(next.number);
    next = next.nextObj;
  }
}

showNumberCycles(obj);
```

```js
// задача на собесах на рекурсию

const array = [1, [2, [3, [4, [5, [6], 7], 8], 9], 10], 11];

const toFlat = (array) => {
  const resultArray = array.reduce((acc, cur) => {
    if (Array.isArray(cur)) {
      return acc.concat(toFlat(cur));
    }

    return acc.concat(cur);
  }, []);

  return resultArray;
};

console.log(toFlat(array)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
```

---

#### <a href="Closure"></a> Замыкание

Функция может получить доступ к переменным из внешнего окружения.

Что произойдёт, когда внешние переменные изменятся? Функция получит последнее значение или то, которое существовало на момент создания функции?

Что произойдёт, когда функция переместится в другое место в коде и будет вызвана оттуда – получит ли она доступ к внешним переменным своего нового местоположения?

```js
const num = 10;

const showNum = () => {
  console.log(num);
};

showNum(); // ??

if (true) {
  const num = 20;
  showNum(); // ??
}

function doSomething(num) {
  showNum(); // ??
}

doSomething(30);
```

**Замыкания** - это комбинация функции и лексического окружения, в котором эта функция была объявлена. Это окружение состоит из произвольного количества локальных переменных, которые были в области действия функции во время создания замыкания. В `JavaScript` замыкания создаются каждый раз при создании функции, во время её создания.

```js
const num = 10;

const showNum = () => {
  console.log(num);
};

showNum(); // 10

if (true) {
  const num = 20;
  showNum(); // 10
}

function doSomething(num) {
  showNum(); // 10
}

doSomething(30);
```

Рассмотрим пример с функцией `createCounter`. В ней мы создаём единое окружение для трёх функций: `increment`, `decrement`, и `getValue`.

Единое окружение создаётся в теле функции `createCounter`. Это окружение содержит приватный элемент: переменную `privateValue`. `privateValue` не доступен напрямую, за пределами этой самой анонимной функции.

```js
const createCounter = (initialValue = 0) => {
  let privateValue = initialValue;

  const increment = () => {
    privateValue++;
  };

  const decrement = () => {
    privateValue--;
  };

  const getValue = () => {
    return privateValue;
  };

  return {
    increment,
    decrement,
    getValue,
  };
};

const counter = createCounter();

counter.increment();
console.log(counter.getValue()); // 1
counter.decrement();
console.log(counter.getValue()); // 0

console.log(privateValue); // ReferenceError: privateValue is not defined
```

**Каррирование** – продвинутая техника для работы с функциями. Она используется не только в `JavaScript`, но и в других языках.

Каррирование – это трансформация функций таким образом, чтобы они принимали аргументы не как `sum(a, b, c)`, а как `sum(a)(b)(c)`.

```js
function sum(a) {
  return function (b) {
    return function (c) {
      const result = a + b + c;
      return result;
    };
  };
}

console.log(sum(5)(10)(15)); // 30
```

или более короткая запись

```js
const sum = (a) => (b) => (c) => a + b + c;
console.log(sum(5)(10)(15));
```

---

#### <a href="Arrays"></a> Методы массивов (part 2)

- Метод `.slice(from, to)` возвращает новый массив, копирую исходных с позиции `from` до `to`

```js
const names = ["Vlad", "Kate", "Vova", "Victor", "Max"];

const names1 = names.slice();
console.log(names1); // ["Vlad", "Kate", "Vova", "Victor", "Max"]
console.log(names1 === names); // false

const names2 = names.slice(2);
console.log(names2); // ["Vova", "Victor", "Max"]

const names3 = names.slice(-2);
console.log(names3); // ["Victor", "Max"]

const names4 = names.slice(1, 3);
console.log(names4); // ["Kate", "Vova"]

const names5 = names.slice(1, -1);
console.log(names5); // ["Kate", "Vova", "Victor"]
```

Так же для копирования и объединения массивов можно использовать `...`

```js
const names = ["Vlad", "Kate", "Vova", "Victor", "Max"];

const names1 = [...names];
console.log(names1); // ["Vlad", "Kate", "Vova", "Victor", "Max"]

const names2 = [...names1, ...names];
console.log(names2); // ["Vlad", "Kate", "Vova", "Victor", "Max", "Vlad", "Kate", "Vova", "Victor", "Max"]
```

- Метод `.splice(index[, deleteCount, elem1, ..., elemN])` изменяет содержимое массива, удаляя существующие элементы и/или добавляя новые.

```js
const names = ["Vlad", "Kate", "Vova", "Victor", "Max"];

names.splice(1, 2);
console.log(names); // ["Vlad", "Victor", "Max"]
```

```js
const names = ["Vlad", "Kate", "Vova", "Victor", "Max"];

names.splice(1, 2, "JAMES", "DAVID", "ENDY");
console.log(names); // ["Vlad", "JAMES", "DAVID", "ENDY", "Victor", "Max"]
```

```js
const names = ["Vlad", "Kate", "Vova", "Victor", "Max"];

names.splice(3, 0, "JAMES", "DAVID", "ENDY");
console.log(names); // ["Vlad", "Kate", "Vova", "JAMES", "DAVID", "ENDY", "Victor", "Max"]
```

```js
const names = ["Vlad", "Kate", "Vova", "Victor", "Max"];

const deletedNames = names.splice(3, 2, "JAMES", "DAVID", "ENDY");
console.log(names); // ["Vlad", "Kate", "Vova", "JAMES", "DAVID", "ENDY"]
console.log(deletedNames); // ["Victor", "Max"]
```

- Метод `.concat(elem1, ...elemX)` создаёт новый массив, состоящий из массива, на котором он был вызван, соединённого с другими массивами и/или значениями, переданными в качестве аргументов.

```js
const names = ["Vlad", "Kate", "Vova", "Victor", "Max"];

const names1 = names.concat("DAVID", "JOHN");
console.log(names1); // ["Vlad", "Kate", "Vova", "Victor", "Max", "DAVID", "JOHN"]

const names2 = names.concat(["DAVID", "JOHN"]);
console.log(names2); // ["Vlad", "Kate", "Vova", "Victor", "Max", "DAVID", "JOHN"]

const names3 = names.concat(["DAVID"], ["JOHN"]);
console.log(names3); // ["Vlad", "Kate", "Vova", "Victor", "Max", "DAVID", "JOHN"]

// ИСХОДНЫЙ МАССИВ НЕ ИЗМЕНЯЕТСЯ!!!!
console.log(names); //["Vlad", "Kate", "Vova", "Victor", "Max"]

const names4 = names.concat([["DAVID"]]);
console.log(names4); // ["Vlad", "Kate", "Vova", "Victor", "Max", ["DAVID"]];
```

- Метод `.forEach(function callback(item, index, array) { // code })` выполняет указанную функцию `callback` один раз для каждого элемента в массиве. `item` - текущий обрабатываемый элемент в массиве, `index` - индекс текущего обрабатываемого элемента в массиве, `array` - массив, по которому осуществляется проход.

```js
const names = ["Vlad", "Kate", "Vova", "Victor", "Max"];

const showName = (item, index, array) => {
  console.log(`элемент ${item} в массиве [${array}] имеет позицию ${index}`);
};

names.forEach(showName);
/*
        элемент Vlad в массиве [Vlad,Kate,Vova,Victor,Max] имеет позицию 0
        элемент Kate в массиве [Vlad,Kate,Vova,Victor,Max] имеет позицию 1
        элемент Vova в массиве [Vlad,Kate,Vova,Victor,Max] имеет позицию 2
        элемент Victor в массиве [Vlad,Kate,Vova,Victor,Max] имеет позицию 3
        элемент Max в массиве [Vlad,Kate,Vova,Victor,Max] имеет позицию 4
    */

names.forEach((...args) => showName(...args));
/*
        элемент Vlad в массиве [Vlad,Kate,Vova,Victor,Max] имеет позицию 0
        элемент Kate в массиве [Vlad,Kate,Vova,Victor,Max] имеет позицию 1
        элемент Vova в массиве [Vlad,Kate,Vova,Victor,Max] имеет позицию 2
        элемент Victor в массиве [Vlad,Kate,Vova,Victor,Max] имеет позицию 3
        элемент Max в массиве [Vlad,Kate,Vova,Victor,Max] имеет позицию 4
    */

names.forEach((item, index, array) => {
  console.log(`элемент ${item} в массиве [${array}] имеет позицию ${index}`);
});
/*
        элемент Vlad в массиве [Vlad,Kate,Vova,Victor,Max] имеет позицию 0
        элемент Kate в массиве [Vlad,Kate,Vova,Victor,Max] имеет позицию 1
        элемент Vova в массиве [Vlad,Kate,Vova,Victor,Max] имеет позицию 2
        элемент Victor в массиве [Vlad,Kate,Vova,Victor,Max] имеет позицию 3
        элемент Max в массиве [Vlad,Kate,Vova,Victor,Max] имеет позицию 4
    */
```

- Метод `.find((item, index, array) => { // code })` возвращает значение первого найденного в массиве элемента, которое удовлетворяет условию переданному в `callback` функции. В противном случае возвращается `undefined`. `item` - текущий обрабатываемый элемент в массиве, `index` - индекс текущего обрабатываемого элемента в массиве, `array` - массив, по которому осуществляется проход.

```js
const names = ["Vlad", "Kate", "Vova", "Victor", "Max"];

const david = names.find((item) => item === "David");
console.log(david); // undefined

const vlad = names.find((item) => item === "Vlad");
console.log(vlad); // Vlad

// findIndex возвращает индекс элемента
const davidIndex = names.findIndex((item) => item === "David");
console.log(davidIndex); // -1

const vladIndex = names.findIndex((item) => item === "Vlad");
console.log(vladIndex); // 0

const victorIndex = names.findIndex((item) => item === "Victor");
console.log(victorIndex); // 3
```

- Метод `.filter((item, index, array) => { // code })` создаёт новый массив со всеми элементами, прошедшими проверку, задаваемую в передаваемой функции. `item` - текущий обрабатываемый элемент в массиве, `index` - индекс текущего обрабатываемого элемента в массиве, `array` - массив, по которому осуществляется проход.

```js
/*
    Вернётся новый массив с элементами, которые проходят тест, то есть callback вернёт true.
 */

const names = ["Vlad", "Kate", "Vova", "Victor", "Max"];

const filteredNames = names.filter((item) => item.toLowerCase().includes("v"));
console.log(filteredNames); // ["Vlad", "Vova", "Victor"]

const users = [
  { id: 0, name: "Vlad", age: 28 },
  { id: 1, name: "Victor", age: 19 },
  { id: 2, name: "Vova", age: 39 },
  { id: 3, name: "Max", age: 43 },
];

const youngUsers = users.filter((user) => user.age >= 18 && user.age < 30);
console.log(youngUsers);
/*
        [
            { id: 0, name: "Vlad", age: 28 },
            { id: 1, name: "Victor", age: 19 }
        ]
    */
```

- Метод `.map((item, index, array) => { // code })` создаёт новый массив с результатом вызова указанной функции для каждого элемента массива. `item` - текущий обрабатываемый элемент в массиве, `index` - индекс текущего обрабатываемого элемента в массиве, `array` - массив, по которому осуществляется проход.

```js
const names = ["Vlad", "Kate", "Vova", "Victor", "Max"];

const namesInUpperCase = names.map((item) => item.toUpperCase());
console.log(namesInUpperCase); // ["VLAD", "KATE", "VOVA", "VICTOR", "MAX"]

const users = [
  { id: 0, name: "Vlad", age: 28 },
  { id: 1, name: "Victor", age: 19 },
  { id: 2, name: "Vova", age: 39 },
  { id: 3, name: "Max", age: 43 },
];

const usersInfo = users.map(
  (user, i) =>
    `Пользователь с именем ${user.name} и возрастом ${user.age} по индексу ${i} в массиве users`
);
console.log(usersInfo);
/*
        [
            "Пользователь с именем Vlad и возрастом 28 по индексу 0 в массиве users", 
            "Пользователь с именем Victor и возрастом 19 по индексу 1 в массиве users", 
            "Пользователь с именем Vova и возрастом 39 по индексу 2 в массиве users", 
            "Пользователь с именем Max и возрастом 43 по индексу 3 в массиве users"
        ]
    */
```

- Метод `.sort((a, b) => { // code })` на месте сортирует элементы массива и возвращает отсортированный массив. Сортировка не обязательно устойчива. Порядок сортировки по умолчанию соответствует порядку кодовых точек `Unicode`. Важно, что копия массива не создаётся - массив сортируется на месте

```js
const fruits = ["арбузы", "бананы", "Вишня"];
fruits.sort();
console.log(fruits); // ['Вишня', 'арбузы', 'бананы']

const scores = [1, 2, 10, 21];
scores.sort();
console.log(scores); // [1, 10, 2, 21]

const things = ["слово", "Слово", "1 Слово", "2 Слова"];
things.sort();
console.log(things); // ['1 Слово', '2 Слова', 'Слово', 'слово']
/* 
        В Unicode, числа находятся перед буквами в верхнем регистре,
        а те, в свою очередь, перед буквами в нижнем регистре.
    */

const users = [
  { id: 0, name: "Vlad", age: 28 },
  { id: 1, name: "Victor", age: 19 },
  { id: 2, name: "Vova", age: 39 },
  { id: 3, name: "Max", age: 43 },
];

users.sort((a, b) => (a.age > b.age ? 1 : -1));
console.log(users);
/*
        [
            { id: 1, name: "Victor", age: 19 },
            { id: 0, name: "Vlad", age: 28 },
            { id: 2, name: "Vova", age: 39 },
            { id: 3, name: "Max", age: 43 },
        ]
    */

users.sort((a, b) => (a.age > b.age ? -1 : 1));
console.log(users);
/*
        [
            { id: 3, name: "Max", age: 43 },
            { id: 2, name: "Vova", age: 39 },
            { id: 0, name: "Vlad", age: 28 },
            { id: 1, name: "Victor", age: 19 },
        ]
    */
```

- Метод `.reduce((accumulator, currentValue, index, array) => { //code }, initialValue)` применяет функцию `callback` к каждому элементу массива (слева-направо), возвращая одно результирующее значение.
  `accumulator` - аккумулятор, аккумулирующий значение, которое возвращает функция `callback` после посещения очередного элемента, либо значение `initialValue`, если оно предоставлено.
  `currentValue` - текущий обрабатываемый элемент массива.
  `index` - индекс текущего обрабатываемого элемента массива.
  `array` - массив, для которого была вызвана функция reduce.

```js
const numbers = [10, 11, 12, 13, 14, 15];

const sumNumbers1 = numbers.reduce((acc, cur) => acc + cur);
console.log(sumNumbers1); // 75

const sumNumbers2 = numbers.reduce((acc, cur) => acc + cur, 100);
console.log(sumNumbers2); // 175

const multiNumbers1 = numbers.reduce((acc, cur) => acc * cur);
console.log(multiNumbers1); // 3603600

const multiNumbers2 = numbers.reduce((acc, cur) => acc * cur, 0);
console.log(multiNumbers2); // 0

const users = [
  { id: 0, name: "Vlad", age: 28 },
  { id: 1, name: "Victor", age: 19 },
  { id: 2, name: "Vova", age: 39 },
  { id: 3, name: "Max", age: 43 },
];

const usersMap = users.reduce((acc, cur) => {
  return {
    ...acc,
    [cur.id]: `${cur.name} / ${cur.age}`,
  };
}, {});
console.log(usersMap);
/*
    { 
        0: "Vlad / 28"
        1: "Victor / 19"
        2: "Vova / 39"
        3: "Max / 43"
    }
    */
```

#### <a href="Objects"></a> Объекты

Объекты используются для хранения коллекций различных значений и более сложных сущностей. В `JavaScript` объекты используются очень часто, это одна из основ языка.
Объект может быть создан с помощью фигурных скобок `{…}` с необязательным списком свойств. Свойство – это пара «ключ: значение», где ключ – это строка (также называемая «именем свойства»), а значение может быть чем угодно.

```js
const person = {
  name: "Vlad", // ключ name, значение Vlad
  lastName: "Tarasov", // ключ lastName, значение Tarasov
  age: 28, // ключ age, значение 28
  address: {
    // ключ address, значение { city: 'Minsk' }
    city: "Minsk",
  },
};
```

Чтобы обратиться к свойству можно:

- использовать запись «через точку»

```js
console.log(person.name); // Vlad
console.log(person.lastName); // Tarasov
console.log(person.age); // 28
console.log(person.address); // { city: 'Minsk' }
```

- использовать квадратные скобки

```js
console.log(person["name"]); // Vlad
console.log(person["lastName"]); // Tarasov
console.log(person["age"]); // 28
console.log(person["address"]); // { city: 'Minsk' }
```

Квадратные скобки также позволяют обратиться к свойству, имя которого может быть результатом выражения. Например, имя свойства может храниться в переменной:

```js
const propName = "lastName";
console.log(person[propName]); // Tarasov

const propName1 = "age";
console.log(person[propName1]); // 28

const propName12 = "name";
console.log(person[propName2]); // Vlad
```

Мы можем использовать квадратные скобки в литеральной нотации для создания свойства:

```js
const propName = "name";

const person = {
  [propName]: "Vlad",
};

console.log(person.name); // Vlad
console.log(person[propName]); // Vlad
```

В реальном коде часто нам необходимо использовать существующие переменные как значения для свойств с тем же именем:

```js
const name = "Vlad";
const lastName = "Tarasov";
const age = 28;

const person = { name, lastName, age };

console.log(person.name); // Vlad
console.log(person.lastName); // Tarasov
console.log(person.age); // 28
```

При обращении к свойству, которого нет, возвращается `undefined`. Это позволяет просто проверить существование свойства:

```js
const person = {};
console.log(person.name); // undefined

person.name = "Vlad";
console.log(person.name); // Vlad
```

Также существует специальный оператор `in` для проверки существования свойства в объекте.

```js
const person = {};
console.log("name" in person); // false

person.name = "Vlad";
console.log("name" in person); // true
```

Для удаления свойств используется директива `delete`

```js
const person = {
  name: "Vlad",
};
console.log(person.name); // Vlad

delete person.name;
console.log(person.name); // undefined
```

---

#### <a href="Copy"></a> Копирование объектов и массивов

Объекты присваиваются и копируются **по ссылке**. Переменная хранит **не «значение объекта»**, а **«ссылку»** на это значение. Поэтому копирование такой переменной или передача её в качестве аргумента функции приводит к копированию этой ссылки, а не самого объекта.

```js
const person = {
  name: "Vlad",
};

const aynPerson = person; // создаётся ещё одна ссылка на тот же самый объект
console.log(aynPerson === person); // true, ссылка на один и тот же объект

aynPerson.age = 35;
console.log(aynPerson.age); // 35
console.log(person.age); // 35

person.name = "Vova";
console.log(aynPerson.name); // Vova
console.log(person.name); // Vova
```

Для копирования и объединения объектов существует `Object.assign(dest, obj1, ...objN)`

- `dest` - целевой объект
- `objN` - исходные объекты

```js
const me = {
  name: "Vlad",
  lastName: "Tarasov",
  age: 28,
};

const anyPerson = {};

Object.assign(anyPerson, me);

console.log(anyPerson); // {name: 'Vlad', lastName: 'Tarasov'm age: 28}
console.log(me === anyPerson); // false

const someObj = {};

Object.assign(
  someObj,
  { name: "Vova" },
  { lastName: "Pupkin" },
  { age: 35 },
  { isAdmin: true }
);

console.log(someObj); // { name: "Vova", lastName: "Pupkin", age: 35, isAdmin: true }
```

Так же для копирования и объединения объектов можно использовать `...`

```js
const person = {
  name: "Vlad",
};

const adminRoles = {
  isAdmin: true,
};

const adminPerson = { ...person, ...adminRoles };
console.log(adminPerson); // { name: 'Vlad', isAdmin: true }
```

---

#### <a hred="Methods"></a> Методы объекта. `this` для объекта

Методы объекта определяют его поведение или действия, которые он производит. Методы представляют собой функции.

```js
const person = {
  name: "Vlad",
  lastName: "Tarasov",
  sayHi() {
    console.log("Hello");
  },
};

// можем использовать Function Expression
person.sayBye = function () {
  console.log("Good bye");
};

person.sayHi(); // Hello
person.sayBye(); // Good bye
```

Как правило, методу объекта необходим доступ к информации, которая хранится в объекте, чтобы выполнить с ней какие-либо действия (в соответствии с назначением метода).
Например, коду внутри `person.sayHi()` может понадобиться имя пользователя, которое хранится в объекте `person`.
Для доступа к информации внутри объекта метод может использовать ключевое слово `this`.
Значение `this` – это объект «перед точкой», который использовался для вызова метода.

```js
const person = {
  name: "Vlad",
  lastName: "Tarasov",
  showThis() {
    console.log(this);
  },
};

person.showThis();
/*
        lastName: "Tarasov"
        name: "Vlad"
        showThis: ƒ showThis()
    */
```

```js
const person = {
  name: "Vlad",
  lastName: "Tarasov",
  showInfo() {
    const info = `${this.name} ${this.lastName}`;
    console.log(info);
  },
};

person.showInfo(); // Vlad Tarasov
```

`this` не является фиксированным. Значение `this` вычисляется во время выполнения кода.

```js
const me = { name: "Vlad" };
const otherPerson = { name: "Vova" };

const showName = function () {
  console.log(this.name);
};

me.showName = showName;
otherPerson.showName = showName;

me.showName(); // Vlad
otherPerson.showName(); // Vova
```

Стрелочные функции особенные: у них нет своего «собственного» `this`. Если мы используем `this` внутри стрелочной функции, то его значение берётся из внешней «нормальной» функции.

```js
const me = { lastName: "Tarasov" };
const otherPerson = { lastName: "Pupkin" };

const showName = () => {
  console.log(this.lastName);
};

me.showName = showName;
otherPerson.showName = showName;

me.showName(); // undefined
otherPerson.showName(); // undefined
```

---

#### <a hred="Chain"></a> Опциональная цепочка

Оператор **опциональной последовательности ?.** позволяет получить значение свойства, находящегося на любом уровне вложенности в цепочке связанных между собой объектов, без необходимости проверять каждое из промежуточных свойств в ней на существование.

```js
const person = {};

console.log(person.address.city); // Cannot read property 'city' of undefined

// старая запись
const city = person && person.address && person.address.city;

// опциональная цепочка
const city = person?.address?.city ?? "Minsk";
```

Работа с методами

```js
const person = {
  name: "Vlad",
  lastName: "Tarasov",
  showInfo() {
    console.log(`${this.name} ${this.lastName}`);
  },
};

const person2 = {
  name: "Vova",
  lastName: "Pupkin",
};

person.showInfo?.(); // Vlad Tarsov
person2.showInfo?.(); //
```

Обращение к свойству через переменную

```js
const person = {
  name: "Vlad",
  lastName: "Tarasov",
  showInfo() {
    console.log(`${this.name} ${this.lastName}`);
  },
};

let key = "name";
console.log(person?.[key]); // Vlad

key = "age";
console.log(person?.[key]); // undefined

key = "showInfo";
console.log(person?.[key]?.()); // Vlad Tarsov
```

---

#### <a href="Bind"></a> Привязка контекста

Потеря `this`

```js
const person = {
  lastName: "Tarasov",
  age: 28,
  showInfo() {
    return `${this.lastName} ${this.age}`;
  },
};

console.log(person.showInfo()); // Tarasov 28

const showPersonInfo = person.showInfo;
console.log(showPersonInfo()); // undefined undefined
```

Методы `apply` и `call` позволяют задать контекст для выполняемой функции. Основная разница между `apply` и `cal`l в способе передачи параметров в функцию. Первый параметр обеих функций определяет контекст выполнения функции (то есть то, чему будет равен `this`).

```js
// Запись

someFunc.call(context, arg1, arg2, arg3, argX);
someFunc.apply(context, [arg1, arg2, arg3, argX]);
```

```js
const showInfo = function () {
  return `lastName: ${this.lastName}, age: ${this.age}`;
};

const person = {
  lastName: "Tarasov",
  age: 28,
};

console.log(showInfo()); // name: undefined, age: undefined
console.log(showInfo.call(person)); // name: Vlad, age: 28
console.log(showInfo.apply(person)); // name: Vlad, age: 28
```

```js
const person = {
  lastName: "Tarasov",
  age: 28,
};

function sayHi(name) {
  return `${this.lastName} говорит привет ${name}`;
}

console.log(sayHi()); // undefined говорит привет undefined
console.log(sayHi.call(person, "Мише")); // Vlad говорит привет Мише
console.log(sayHi.apply(person, ["Вите"])); // Vlad говорит привет Вите
```

Метод `bind`, который позволяет зафиксировать `this`.

```js
const person = {
  lastName: "Tarasov",
  age: 28,
};

function sayHi(name) {
  return `${this.lastName} говорит привет ${name}`;
}

const boundSayHi = sayHi.bind(person);

// some code

console.log(boundSayHi("Пете"));
```

**bind(this) Зафиксировать контекст можно только один раз**

```js
const person = {
  lastName: "Tarasov",
  age: 28,
};

const person1 = {
  lastName: "Some",
  age: 12,
};

const person2 = {
  lastName: "Any",
  age: 43,
};

function sayHi(name) {
  return `${this.lastName} говорит привет ${name}`;
}

let boundSayHi = sayHi.bind(person);
boundSayHi.bind(person1);
boundSayHi.bind(person2);

// some code

console.log(boundSayHi("Пете")); // Tarasov говорит привет Пете
```

С помощью `bind` можно привязывать не только `this`, но и аргументы

```js
const sum = (a, b, c, d) => {
  return a + b + c + d;
};

const boundSum = sum.bind(null, 5, 5);

console.log(boundSum(10, 10)); // 30
console.log(boundSum(5, 5)); // 20
```

---

---

### ДЗ

1. [Методы массивов](https://learn.javascript.ru/array-methods)
2. [Объекты](https://learn.javascript.ru/object)
3. [Копирование объектов и ссылки](https://learn.javascript.ru/object-copy)
4. [Методы объекта, "this"](https://learn.javascript.ru/object-methods)
5. [Опциональная цепочка](https://learn.javascript.ru/optional-chaining)
6. [Object.keys, values, entries](https://learn.javascript.ru/keys-values-entries)
7. [Деструктуризация](https://learn.javascript.ru/destructuring-assignment)
8. [call/apply](https://learn.javascript.ru/call-apply-decorators)
9. [Привязка контекста к функции bind](https://learn.javascript.ru/bind)
