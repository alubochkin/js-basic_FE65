#### Цели

1. [Классы в JavaScript](#Class)
2. [Наследование классов](#Extends)
3. [Флаги и дескрипторы свойств](#Descriptors)

---

#### <a href="Class"></a> Классы

Вспомним синтаксис функций конструкторов и сравним их с `class`

```js
// функция конструктор

function User(name, age, sex) {
  this.name = name;
  this.age = age;
  this.sex = sex;
}

User.prototype.showInfo = function () {
  return `name: ${this.name}, age: ${this.age}, sex: ${this.sex}`;
};

const vlad = new User("vlad", 28, "male");
console.log(vlad); // User {name: "vlad", age: 28, sex: "male"}
console.log(vlad.showInfo()); // name: vlad, age: 28, sex: male
```

```js
// class

class User {
  constructor(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
  }

  showInfo() {
    return `name: ${this.name}, age: ${this.age}, sex: ${this.sex}`;
  }
}

const vlad = new User("vlad", 28, "male");
console.log(vlad); // User {name: "vlad", age: 28, sex: "male"}
console.log(vlad.showInfo()); // name: vlad, age: 28, sex: male
```

При вызове `new User("vlad", 28, "male")`:

1. Создаётся объект
2. Запускается `constructor` с переданными параметрами и созраняет их в `this`
3. `showInfo` записывается в `User.prototype`

При записи `showInfo = () => { ... }`, `showInfo` не будет записно в `User.prototype`

```js
class User {
  constructor(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
  }

  showInfo = () => {
    return `name: ${this.name}, age: ${this.age}, sex: ${this.sex}`;
  };
}

const vlad = new User("vlad", 28, "male");
console.log(vlad); // User {name: "vlad", age: 28, sex: "male", showInfo: ƒ}
console.log(vlad.showInfo()); // name: vlad, age: 28, sex: male
```

**Свойства классов**

_Приватные свойства_ могут быть изменены или прочитаны только в рамках класса и не могут быть вызваны извне.

```js
class User {
  city = "Minsk"; // Публичное свойство
  #country = "Belarus"; // Приватное свойство

  constructor(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
  }

  showInfo() {
    return `name: ${this.name}, age: ${this.age}, sex: ${this.sex}`;
  }

  showAddress() {
    return `country:${this.#country} city:${this.city}`;
  }
}

const vlad = new User("vlad", 28, "male");
console.log(vlad.city); // Minsk
console.log(vlad.country); // undefined
console.log(vlad.showAddress()); // country:Belarus city:Minsk
```

**Геттер/Сеттер. get/set**

_Геттер_ - для чтения и _Сеттер_ - для записи. В классе они обозначаются `get` и `set`:

```js
class User {
  constructor(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
  }

  get age() {
    // срабатывает при чтении
    console.log("from get age");
    return this._age;
  }

  set age(value) {
    // срабатывает при записи
    if (value < 18) {
      console.log("слишком молод");
      return;
    }

    this._age = value;
  }
}

const vlad = new User("vlad", 28, "male");
console.log(vlad.age); // from get age // 28
vlad.age = 17; // слишком молод
console.log(vlad.age); // from get age // 28
```

В классе можно определить поля, принадлежащие самому классу: статические поля. Такие поля используются например для создания констант, хранящих нужную классу информацию.

Для создания статических полей используется ключевое слово `static` перед названием поля: `static minAge`.

```js
class User {
  static minAge = 18;

  constructor(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
  }

  get age() {
    console.log("from get age");
    return this._age;
  }

  set age(value) {
    // Для доступа к статическим полям используй имя класса и имя свойства
    if (value < User.minAge) {
      console.log("слишком молод");
      return;
    }

    this._age = value;
  }
}

const vlad = new User("vlad", 28, "male");
vlad.age = 17; // слишком молод

console.log(vlad.minAge); // undefined
// Для доступа к статическим полям используй имя класса и имя свойства
console.log(User.minAge); // 18
```

```js
class User {
  static forbiddenNames = ["vova", "peter"];

  static isForbiddenName(name) {
    return User.forbiddenNames.includes(name);
  }

  constructor(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
  }

  set name(value) {
    if (User.isForbiddenName(value)) {
      console.log("имя запрещено");
      return;
    }

    this.name = value;
  }
}

const vova = new User("vova"); // имя запрещено
```

---

#### <a href="Extends"></a> Наследование

Классы в `JavaScript` наследуются с помощью ключевого слова `extends`.

В выражении `class Child extends Parent { }` класс `Child` наследует от класса `Parent` конструктор, поля и методы.

Создадим дочерний класс `Admin`, расширяющий родительский класс `User`:

```js
class User {
  constructor(name) {
    this.name = name;
  }

  showInfo() {
    return `name: ${this.name}`;
  }
}

// наследуемся от User
class Admin extends User {
  isAdmin = true;

  constructor(name, role) {
    //  вызваем конструктор родительского класса в дочернем классе (1)
    super(name);

    this.role = role;
  }

  showInfo() {
    // вызываем метод родительского класса (2)
    const userInfo = super.showInfo();
    return `${userInfo} role: ${this.role} isAdmin: ${this.isAdmin}`;
  }
}

const vlad = new Admin("vlad", "admin");
console.log(vlad.showInfo()); // name: vlad role: admin isAdmin: true
```

1. Обратите внимание, что в дочернем конструкторе перед использованием ключевого слова `this` вызывается `super()`. Вызов `super()` «привязывает» родительский конструктор к экземпляру.
2. Для того, чтобы получить доступ к родительскому методу внутри дочернего класса, следует использовать специальное сокращение `super.methodName`

---

#### <a href="Descriptors"></a> Флаги, дескрипторы свойств

Как мы знаем, объекты могут содержать свойства.

До этого момента мы рассматривали свойство только как пару `key/value`. Но на самом деле свойство объекта гораздо мощнее и гибче.

Флаги:

- `writable` – если `true`, свойство можно изменить, иначе оно только для чтения.
- `enumerable` – если `true`, свойство перечисляется в циклах, в противном случае циклы его игнорируют.
- `configurable` – если `true`, свойство можно удалить, а эти атрибуты можно изменять, иначе этого делать нельзя.

Чтобы изменить флаги, мы можем использовать метод `Object.defineProperty` или `Object.defineProperties`

```js
// Object.defineProperty

const person = {
  name: "Vova",
  age: 28,
};

Object.defineProperty(person, "name", {
  value: "Vlad",
  writable: false, // свойство нельзя изменить
  enumerable: false, // игнорируем в циклах
  configurable: false, // свойство нельзя удалять
});

console.log(person.name); // Vlad
person.name = "Vova";
console.log(person.name); // Vlad

for (let key in person) {
  console.log(key); // age
}

delete person.name;
console.log(person.name); // Vlad
```

```js
// Object.defineProperties

const person = {
  name: "Vova",
  age: 28,
};

Object.defineProperties(person, {
  name: {
    value: "Vlad",
    writable: false, // свойство нельзя изменить
    enumerable: false, // игнорируем в циклах
    configurable: false, // свойство нельзя удалять
  },
  age: {
    value: 38,
    writable: false,
  },
});

console.log(person.age); // 38
person.age = 25;
console.log(person.age); // 38

for (let key in person) {
  console.log(key); // age
}
```

---

#### ДЗ

1. [Руководство по классам](https://habr.com/ru/post/518386/)
2. [Класс: базовый синтаксис](https://learn.javascript.ru/class)
3. [Наследование классов](https://learn.javascript.ru/class-inheritance)
4. [Статические свойства и методы](https://learn.javascript.ru/static-properties-methods)
5. [Приватные и защищённые методы и свойства](https://learn.javascript.ru/private-protected-properties-methods)
6. [ООП](https://habr.com/ru/post/463125/)

- [Флаги и дескрипторы свойств](https://learn.javascript.ru/property-descriptors)
- [Свойства - геттеры и сеттеры](https://learn.javascript.ru/property-accessors)
