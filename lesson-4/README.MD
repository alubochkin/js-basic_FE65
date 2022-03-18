#### Цели

1. [LocalStorage, sessionStorage](#Storages)
3. [Прототип объекта](#Proto)
4. [Конструкторы, создание объектов через "new"](#Constructor)
5. [Prototype](#Prototype)

---

#### <a href="Storages"></a> LocalStorage, sessionStorage

Объекты веб-хранилища `localStorage` и `sessionStorage` позволяют хранить пары `key/value` в браузере.

- `sessionStorage` сохраняет данные после обновления страницы
- `localStorage` сохраняет данные даже после перезапуска страницы

Объект `sessionStorage` используется гораздо реже, чем `localStorage`.

Свойства и методы такие же, но есть существенные ограничения:

- `sessionStorage` существует только в рамках текущей вкладки браузера. Другая вкладка с той же страницей будет иметь другое хранилище.
- Данные продолжают существовать после перезагрузки страницы, но не после закрытия/открытия вкладки.

Объекты хранилища `localStorage` и `sessionStorage` предоставляют одинаковые методы и свойства:

- `setItem(key, value)` - сохранить пару `key/value`.
- `getItem(key)` - получить данные по ключу `key`.
- `removeItem(key)` - удалить данные с ключом `key`.
- `clear()` - удалить всё.
- `key(index)` - получить ключ на заданной позиции.
- `length` - количество элементов в хранилище.

Важно помнить, что `key` и `value` должны быть строками.

Если мы используем любой другой тип, например `number` или `object`, то он автоматически преобразуется в строку

`JSON (JavaScript Object Notation)` – это общий формат для представления значений и объектов. Его описание задокументировано в стандарте RFC 4627. Первоначально он был создан для JavaScript, но многие другие языки также имеют библиотеки, которые могут работать с ним. Таким образом, JSON легко использовать для обмена данными, когда клиент использует `JavaScript`, а сервер написан на `Ruby/PHP/Java` или любом другом языке.

`JavaScript` предоставляет методы:

- `JSON.stringify` для преобразования объектов в `JSON`.
- `JSON.parse` для преобразования `JSON` обратно в объект.

```js
const object = {
  someProp: "someValue",
};

const stringifyObject = JSON.stringify(object);

console.log(stringifyObject); // {"someProp":"someValue"}
console.log(typeof stringifyObject); // string

const parsedObject = JSON.parse(stringifyObject);

console.log(parsedObject); // {"someProp":"someValue"}
console.log(typeof parsedObject); // object
```

Пример работы с `localStorage`

```js
const getFromStorageByKey = (key, defaultData = {}) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : defaultData;
};

const setToStorage = (key, value) => {
  const data = JSON.stringify(value);
  localStorage.setItem(key, data);
};

const removeByKey = (key) => {
  localStorage.removeItem(key);
};

const removeAll = () => {
  localStorage.clear();
};
```

#### <a href="Proto"></a> Прототипное наследование

В `JavaScript` свойства и методы для одного объекта можно наследовать из других объектов так, чтобы при отсутствии метода в первом объекте, искать данный метод в другом. Реализуется эта возможность с помощью свойства `__proto__`.

```js
const animal = {
  eats: true,
};

const rabbit = {
  jumps: true,
};

rabbit.__proto__ = animal; //

console.log(rabbit.eats); // true
console.log(rabbit.jumps); // true
```

**Внимание! В первую очередь поиск свойства будет реализован в первом объекте, и только при его отсутствии - в его прототипе.**

Прототипы никак не влияют на `this`. Неважно, где находится метод: в объекте или его прототипе. При вызове метода `this` - всегда объект перед точкой.

```js
const teacher = {
  knowledge: ["js", "react"],
  teach() {
    this.work = true;
  },
};

const person = {
  name: "Vlad",
  age: 28,
  __proto__: teacher,
};

console.log(person.knowledge); // ["js", "react"]

person.teach();

console.log(person.work); // true
console.log(teacher.work); // undefined
```

Цикл `for...in` сразу будет проходить по свойствам объекта, и по всем его прототипам. Приоритетными всегда будут свойства объекта, а не его прототипа.

При создании объекта `const obj = {}` или массива `const array = []`, у него по-умолчанию есть `__proto__`

Если по какой-то причине объект должен содержать только произвольные данные без методов, можно использовать конструкцию `const obj = Object.create(null);`. Такой объект будет содержать только пользовательские свойства и методы.

---

#### <a href="Constructor"></a> Функция конструктор

Для создания объектов в `JavaScript` принято использовать знак `{}`, но что делать, если в нашем приложении необходимо несколько однотипных объектов?

Это можно сделать при помощи функции-конструктора и оператора `new`

Функции-конструкторы являются обычными функциями. Но есть два соглашения:

- Имя функции-конструктора должно начинаться с большой буквы.
- Функция-конструктор должна вызываться при помощи оператора `new`.

```js
function User(name, age) {
  this.name = name;
  this.age = age;
}

const vlad = new User("Vlad", 28);
const peter = new User("Peter", 42);

console.log(vlad); // {name: "Vlad", age: 28}
console.log(peter); // {name: "Peter", age: 42}
```

Когда функция вызывается как `new User(...)`, происходит следующее:

1. Создаётся новый пустой объект, и он присваивается `this`.
2. Выполняется код функции. Обычно он модифицирует `this`, добавляет туда новые свойства.
3. Возвращается значение `this`.

Обычно конструкторы ничего не возвращают явно. Их задача – записать все необходимое в `this`, который в итоге станет результатом.

Но если return всё же есть, то применяется простое правило:

- При вызове `return` с объектом, будет возвращён объект, а не `this`.

```js
function User(name, age) {
  this.name = name;
  this.age = age;

  return { name: "Anton", age: 36 };
}

const vlad = new User("Vlad", 28);
console.log(vlad); // {name: "Anton", age: 36}
```

- При вызове `return` с примитивным значением, примитивное значение будет отброшено.

```js
function User(name, age) {
  this.name = name;
  this.age = age;

  return "+100500";
}

const vlad = new User("Vlad", 28);
console.log(vlad); // {name: "Vlad", age: 28}
```

Для добавления методов в конструктор можно можно описать их внутри конструктора, как и для метода объекта.

```js
function User(name, age) {
  this.name = name;
  this.age = age;

  this.showInfo = function () {
    return `${this.name} ${this.age}`;
  };
}

const vlad = new User("Vlad", 28);
console.log(vlad); // {name: "Vlad", age: 28, showInfo: ƒ}
console.log(vlad.showInfo()); // Vlad 28
```

---

#### <a href="Prototype"></a> Прототипы

- Свойство `F.prototype` устанавливает `[[Prototype]]` для новых объектов при вызове `new F()`.
- Значение `F.prototype` должно быть либо объектом, либо `null`. Другие значения не будут работать.
- Свойство `prototype` является особым, только когда оно назначено функции-конструктору, которая вызывается оператором `new`.

```js
function User(name, age) {
  this.name = name;
  this.age = age;
}

User.prototype.showInfo = function () {
  return `${this.name} ${this.age}`;
};

const vlad = new User("Vlad", 28);
console.log(vlad); // {name: "Vlad", age: 28}
console.log(vlad.showInfo()); // Vlad 28
```

**Изменение встроенных прототипов**

- Все встроенные объекты следуют одному шаблону:
  Методы хранятся в прототипах (`Array.prototype`, `Object.prototype`, `String.prototype` и т.д.).
- Сами объекты хранят только данные (элементы массивов, свойства объектов).

Встроенные прототипы можно изменять. Например, если добавить метод к `String.prototype`, метод становится доступен для всех строк:

```js
String.prototype.duplicate = function () {
  return `${this} ${this}`;
};

const someString = "some string".duplicate();
console.log(someString); // some string some string
```

**Наследование**

Наследование - это создание новых «классов» на основе существующих.

```js
function User(name, lastName) {
  this.name = name;
  this.lastName = lastName;
}

User.prototype.showInfo = function () {
  // записываем метод в prototype
  return `${this.name} ${this.lastName}`;
};

function Admin(name, lastName) {
  User.call(this, name, lastName); // наследование от User
  this.isAdmin = true;
}

Admin.prototype = Object.create(User.prototype);

Admin.prototype.showInfo = function () {
  // переопределяем метод showInfo
  const userInfo = User.prototype.showInfo.call(this);
  return `${userInfo} isAdmin: ${this.isAdmin}`;
};

const vlad = new User("Vlad", "Tarasov");
const vovaAdmin = new Admin("Vova", "Sidorov");

console.log(vlad.showInfo()); // Vlad Tarasov
console.log(vovaAdmin.showInfo()); // Vova Sidorov isAdmin: true
```

---

#### ДЗ

1. [LocalStorage, sessionStorage](https://learn.javascript.ru/localstorage)
2. [Формат JSON, метод toJSON](https://learn.javascript.ru/json)
3. [Конструкторы, создание объектов через "new"](https://learn.javascript.ru/constructor-new)
4. [F.prototype](https://learn.javascript.ru/function-prototype)
5. [Встроенные прототипы](https://learn.javascript.ru/native-prototypes)
6. [Ключевое слово this в javascript](https://habr.com/ru/post/149516/)
