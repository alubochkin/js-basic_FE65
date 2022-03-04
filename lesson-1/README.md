### Цели:

1. [Область видимости переменных](#Scope)
2. [Функции](#Fucntions)
3. [Остаточные параметры, оператор расширения](#Rest)
4. [Стрелочные функции](#Arrow)
5. [Методы массивов (part 1)](#Arrays)
6. [Методы строк](#Strings)

#### <a href="Scope"></a> Область видимости переменных

`let` и `const` имеют блочную область видимости. Они видны в блоке в котором были инициализированы, и во всех его подблоках

В конструкциях `if, for, while` создается блочная область видимости

```js
if (true) {
  let firstBlock = "firstBlock";
  // переменные secondBlock, thirdBlock не доступны. firstBlock доступна
  if (true) {
    let secondBlock = "secondBlock";
    // переменные thirdBlock не доступна. firstBlock secondBlock доступны
    if (true) {
      const thirdBlock = "thirdBlock";
      // secondBlock, firstBlock, thirdBlock доступны
    }
  }
}

// переменные firstBlock, secondBlock, thirdBlock не доступны

for (let i = 0; i < 5; i++) {
  console.log(i); // 0, 1, 2, 3, 4
}
console.log(i); // ReferenceError: i is not defined

while (true) {
  const hello = "hello world";
  break;
}
console.log(hello); // ReferenceError: hello is not defined
```

`var` не имеет блочной области видимости

```js
var message = "a";
console.log(messageInBlock); // undefined

if (true) {
  var messageInBlock = "b";
}
console.log(message, messageInBlock); // a, b
```

---

#### <a href="Fucntions"></a> Функции

Функции являются основными «строительными блоками» программы. Они нужны для того чтобы не повторять один и тот же код во многих местах.
Примеры встроенных функций вы уже видели – это `alert(message), prompt(message, default), confirm(question)`

Объявление функции (Function Declaration, Function Expression) состоит из ключевого слова `function` и следующих частей:

- Имя функции: `showRandomNumber`
- Список параметров принимаемых параметров: `(max, min)`
- Тело функции: `console.log(Math.random() * (max - min) + min)`

```js
// Function Declaration
function showRandomNumber(max, min) {
  const randomNumber = Math.floor(Math.random() * (max - min) + min);
  console.log(randomNumber);
}
```

```js
// Function Expression
const showRandomNumber = function (max, min) {
  const randomNumber = Math.floor(Math.random() * (max - min) + min);
  console.log(randomNumber);
};
```

**_Function Declaration, создаются интерпретатором до выполнения кода._**

```js
showRandomNumber(30, 10); // Ошибки нету

function showRandomNumber(max, min) {
  const randomNumber = Math.floor(Math.random() * (max - min) + min);
  console.log(randomNumber);
}
```

```js
showRandomNumber(30, 10); // Cannot access 'showRandomNumber' before initialization

const showRandomNumber = function (max, min) {
  const randomNumber = Math.floor(Math.random() * (max - min) + min);
  console.log(randomNumber);
};
```

В JavaScript параметры функции по умолчанию имеют значение `undefined`.
Можно передать в функцию не все аргументы или слишком много аргументов (лишние аргументы будут проигнорированы).

```js
showRandomNumber(30); // (1)
showRandomNumber(30, 10, 100, 200, 300, 90); // (2)
// (1) NaN тк функция showRandomNumber ожижает два числа а приходит 30 и undefined
// (2) получим рандомное число, лишние аргументы игнорируются

function showRandomNumber(max, min) {
  console.log(max, min);
  const randomNumber = Math.floor(Math.random() * (max - min) + min);
  console.log(randomNumber);
}
```

Если мы хотим задать параметрам `max` и `min` значение по умолчанию, мы должны указать его после `=`:

```js
showRandomNumber(20, 10); // получим рандомное число в диапазоне от 10 до 20
showRandomNumber(); // получим рандомное число в диапазоне от 1 до 10

function showRandomNumber(max = 10, min = 1) {
  console.log(max, min);
  const randomNumber = Math.floor(Math.random() * (max - min) + min);
  console.log(randomNumber);
}
```

Функция может вернуть результат, который будет передан в вызвавший её код. Для этого используется директива `return`.

```js
const sum = function (a, b) {
  return a + b;
};

const res1 = sum(2, 8);
const res2 = sum(4, 1);
const res3 = sum(7, 5);
const res4 = sum(3, 9);

console.log(res1); // 10
console.log(res2); // 5
console.log(res3); // 12
console.log(res4); // 12
```

```js
// Помним, что объекты передаются по ссылке!!!!!!!!!!!!!!
const person = { name: "Vlad", age: 28 };
console.log(person); // {name: "Vlad", age: 28}

function updateUser(user) {
  user.isAdmin = true;
}

updateUser(person);
console.log(person); // {name: "Vlad", age: 28, isAdmin: true}

const nums = [1, 2, 3];
console.log(nums); // [1,2,3]

const pushRandomNum = function (array) {
  const randomNum = Math.random();
  array.push(randomNum);
};

pushRandomNum(nums);
console.log(nums); // [1,2,3,(some random number)]

const names = ["Vlad", "Vova"];

const returnArray = function (array) {
  return array;
};

const someArray = returnArray(names);
console.log(names === someArray); // true
```

Функции создают область видимости для всех переменных. (`var, const, let`).

```js
function sum() {
  let a = 10;
  const b = 20;
  var result = a + b;

  console.log(a, b, result); // 10, 20, 30
}

console.log(a, b, result); // ReferenceError
```

```js
const person = { name: "Vlad", age: 28 };

function updateUser(user) {
  const userData = user || { name: "Some name", age: 18 };
  userData.password = generatePassword(user.name);
  // Доступны переменные: person, user, userData, updateUser

  function generatePassword(userName) {
    const newPassword = `${userName}!${Math.floor(Math.random() * 10000)}`;

    // Доступны переменные: newPassword, userName, userData, user, person, updateUser
    return newPassword;
  }
}

updateUser(person);
```

Функцию можно получить в виде строки, это позволяет присвоить её другой переменной и вызвать по её имени.

```js
function sayHello(userName) {
  return `Hello ${userName}!`;
}

console.log(sayHello); // в консоли увидим тело функции
/*
    ƒ sayHello(userName) {
        return `Hello ${userName}!`
    }
    */

const someFunc = sayHello;

console.log(someFunc("Vlad")); // Hello Vlad!
console.log(sayHello("Vova")); // Hello Vova!
```

---

#### <a href="Rest"></a> Остаточные параметры

Как говорили ранее функцию можно вызывать с любым количеством параметров независимо от того, как она была определена. Существуют два варианта для просмотра всех переменных:

- Остаточные параметры могут быть обозначены через три точки `...`. Буквально это значит: «собери оставшиеся параметры и положи их в массив».

```js
const sumAllArgs = function (...args) {
  let res = 0;

  for (arg of args) {
    res += arg;
  }

  console.log(res);
};

sumAllArgs(2, 3, 4, 5); // 14
sumAllArgs(1, 2, 3, 4, 5, 6, 7, 8, 9); // 45

function sum(a, b, ...nums) {
  console.log(a, b, nums);
  return a + b;
}

const res = sum(1, 2, 3, 4, 5, 6, 7); // a = 1, b = 2, nums = [3,4,5,6,7]
console.log(res); // 3
```

- Аргументы функции находятся в псевдомассиве `arguments` под своими порядковыми номерами. (`arguments` похож на массив, и его тоже можно перебирать, это всё же не массив. Он не поддерживает методы массивов)

```js
const sumAllArgs = function () {
  let res = 0;

  for (arg of arguments) {
    res += arg;
  }

  console.log(res);
};

sumAllArgs(2, 3, 4, 5); // 14
sumAllArgs(1, 2, 3, 4, 5, 6, 7, 8, 9); // 45
```

**Оператор расширения**

Мы узнали, как получить массив из списка параметров c помозью _остаточного оператора_, но иногда нужно сделать в точности противоположное. Тут нам поможет оператор расширения. Он похож на остаточные параметры – тоже использует `...`, но делает совершенно противоположное.

```js
function sum(a, b, c, d) {
  return a + b + c + d;
}

const nums = [10, 20, 30, 40];

const sumNums = sum(...nums);
console.log(sumNums); // 100
```

---

#### <a href="Arrow"></a> Стрелочные функции

Существует более простой и краткий синтаксис для создания функций

```js
const sum = (a, b) => a + b;
console.log(sum(5, 5)); // 10
```

Основные различия **(это не полный список)**:

- Неявный `return`. Можно вызывать без фигурных скобок. `(...args) => expression` – правая сторона выражение: функция выполняет его и возвращает результат.

```js
const sum = (a, b) => a + b;
// тоже самое, что
const sum = (a, b) => {
  return a + b;
};
// тоже самое, что
function sum(a, b) {
  return a + b;
}
```

- В стрелочных функциях отсутствует специальное слово `arguments`.

---

#### <a name="Arrays"></a> Методы массивов

Для хранения упорядоченных коллекций существует особая структура данных, которая называется массив, **Array**.

```js
const nums = [1, 2, 3, 4, 5];
console.log(nums[1]); // 2

nums[1] = 999;
console.log(nums); // [1,999,3,4,5]

const nums2 = nums;
nums.push(6);
nums2.push(7);

console.log(nums); // [1,999,3,4,5,6,7]
console.log(nums2); // [1,999,3,4,5,6,7]
```

- Свойство **.length** возвращает длинну массива

```js
const nums = [1, 2, 3, 4, 5];
console.log(nums.length); // 5

nums.length = 0; // быстрая очистка массива
console.log(nums); // []

nums.length = 100; // теперь длинна нашего массива 100
console.log(nums); // [undefined, undefined, undefined, undefined, ...]

for (let i = 0; i < nums.length; i++) {
  console.log(nums[i]); // 1, 2, 3, 4, 5
}

for (const num of nums) {
  console.log(num); // 1, 2, 3, 4, 5
}
```

- Метод **.reverse()** разворачивает массив, первый элемент массива становится последним, а последний — первым

```js
const nums = [1, 2, 3, 4, 5];

const reversedNums = nums.reverse();

console.log(nums); // [5,4,3,2,1]
console.log(reversedNums); // [5,4,3,2,1]
```

- Методы **.push(elem, ...elemX)/.pop()**. **.push(elem, ...elemX)** добавляет элемент в конец массива, **pop()** удаляет последний элемент

```js
const nums = [1, 2, 3, 4, 5];

nums.push(6);
console.log(nums); // [1,2,3,4,5,6]

nums.pop();
console.log(nums); // [1,2,3,4,5]

nums.push(6, 7, 8, 9, 10);
console.log(nums); // [1,2,3,4,5,6,7,8,9,10]

const ten = nums.pop();
console.log(ten); // 10
console.log(nums); // [1,2,3,4,5,6,7,8,9]
```

- Методы **.unshift(elem, ...elemX)/shift()**. **.unshift(elem, ...elemX)** добоавляет элменты в начало массива, **.shift()** удаляет элемент первый элемент

```js
const nums = [5, 6, 7, 8, 9, 10];

nums.unshift(4);
console.log(nums); // [4,5,6,7,8,9,10]

nums.shift();
console.log(nums); // [5,6,7,8,9,10]

nums.unshift(1, 2, 3, 4);
console.log(nums); // [1,2,3,4,5,6,7,8,9,10]

const one = nums.shift();
console.log(one); // 1
console.log(nums); // [2,3,4,5,6,7,8,9,10]
```

- Методы **.includes(elem)/.indexOf(elem)**. **.includes(elem)** проверяет содержит ли массив элемент, возвращает boolean тип. **.indexOf(elem)** если элемент есть в массиве возвращает индекс элемента, если элемента нету возвращает -1

```js
const nums = [1, 2, 3, 4, 5];

console.log(nums.includes(1)); // true
console.log(nums.includes(6)); // false

console.log(nums.indexOf(3)); // 2
console.log(nums.indexOf(6)); // -1
```

---

#### <a name="Strings"></a> Методы строк

Строки используются для хранения текстовох данных

```js
const string1 = "some string";
const string2 = "some string";
const string3 = `some string`;

// конкатенация(объединение) строк
const longString1 = string1 + " " + string2 + " " + string3; // some string some string some string
const longString2 = `${string1} ${string2} ${string3}`; // some string some string some string

// ВАЖНО!!! при объединении строки и числа результатом будет строка
const num = 100;
const fakeNum = "100";
const result = num + fakeNum;
console.log(result); // '100100'
```

- Свойство **.length** возвращет длинну строки

```js
const string = "some string";
console.log(string.length); // 11

string.length = 0; // строке нельзя изменить длинну через свойство
console.log(string); // some string

string[0] = "S";
console.log(string); // some string

for (let i = 0; i < string.length; i++) {
  console.log(string[i]); // s, o, m, e, ....
}

for (const letter of string) {
  console.log(letter); // s, o, m, e, ....
}
```

- Методы **.toLowerCase()/.toUpperCase()** изменяют регистр символов

```js
const string = "SoMe StRiNg";
console.log(string.toLowerCase()); // some string
console.log(string.toUpperCase()); // SOME STRING
```

- Методы **.split(separator)/.join(separator)**. **.split(separator)** преобразует строку в массив, **.join(separator)** преобразует массив в строку

```js
const string = "some long string";

const arr1 = string.split("");
console.log(arr1); // ['s', '0', 'm', 'e', ' ', ....]

const arr2 = string.split(" ");
console.log(arr1); // ['some', 'long', 'string']

const string1 = arr1.join(""); // some long string
const string2 = arr1.join("-"); // s-o-m-e- -l-o-n-g- -s-t-r-i-n-g

const string3 = arr2.join(""); // somelongstring
const string4 = arr2.join(" "); // some long tring
const string5 = arr2.join("+"); // some+long+tring
```

- Методы **.includes(string)/.indexOf(string)/.startsWith(string)/.endsWith(string)** используются для поиска

```js
const string = "some string";

console.log(string.includes("s")); // true
console.log(string.includes("some")); // true
console.log(string.includes("Some")); // false

console.log(string.indexOf("s")); // 0
console.log(string.indexOf("s", 4)); // 5
console.log(string.indexOf("some")); // 0
console.log(string.indexOf("Some")); // -1

console.log(string.startsWith("s")); // true
console.log(string.startsWith("some")); // true
console.log(string.startsWith("Some")); // false

console.log(string.endsWith("g")); // true
console.log(string.endsWith("string")); // true
console.log(string.endsWith("stRiNg")); // false
```

---

### ДЗ

1. [Функции](https://learn.javascript.ru/function-basics)
2. [Function Expression](https://learn.javascript.ru/function-expressions)
3. [Стрелочные функции](https://learn.javascript.ru/arrow-functions-basics)
4. [Остаточные операторы и оператор расширения](https://learn.javascript.ru/rest-parameters-spread-operator)
5. [Подробнее об объетах](https://learn.javascript.ru/object)
6. [Подробнее о строках](https://learn.javascript.ru/string)
7. [Подробнее о массивах](https://learn.javascript.ru/array)

[Практика](homework/script.js)
