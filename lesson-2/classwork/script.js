/*
    Создать функцию timer(a, b)
    a - начало
    b - финиш
    каждую секунду число a должно увеличиваться на 1 и выводиться в console.log
    когда a === b в console.log вывести, что таймер остановился

    решить через рекурсию
*/

timer = (a, b) => {
  if (a === b) {
    console.log("stop");
    return;
  }
  setTimeout(() => {
    console.log(a + 1);

    timer(a + 1, b);
  }, 1000);
};

timer(1, 40);

/*
    1. timer(a , b)
    2. сравнить a, b если === return
    3. setTimeout(() => { timer(a + 1, b) }, 1000)
*/

/*
   Создать функцию с именем compact
   Функция должна очищать массив от значений: false, undefined, "", 0, null.
*/

let arr = [];
const compact = (arr) => {
  return arr.filter((el) => Boolean(el));
};

/*
    Создать объект user вида 
    {
        name: 'SomeName',
        lastName: 'SomeLastName',
        age: 'SomeAge',
        knowledge: [],
        hobbies: [],
    }
    Добавить в него методы
    showInfo() {} показывает информацию о usere
    addKnowledge(newKnowledge) {} добавляет newKnowledge в конец массива knowledge
    addHobby(newHobby) {} добавляет newHobby в начало массива hobies
    clearKnowledge() {} очищает массив knowledge
    clearHobbies() {} очищает массив hobbies

    МЕТОДЫ ДОЛЖНЫ РАБОТАТЬ С this
*/
const user = {
  name: "Olya",
  lastName: "Savchenko",
  age: "26",
  knowledge: ["so"],
  hobbies: ["dancing"],
  showInfo() {
    return ` name: ${this.name}
  lastName: ${this.lastName}
  age: ${this.age}
  knowledge: ${this.knowledge}
  hobbies: ${this.hobbies}
   `;
  },

  addKnowledge(newKnowledge) {
    this.knowledge.push(newKnowledge);
  },
  addHobby(newHobby) {
    this.hobbies.unshift(newHobby);
  },
  clearKnowledge() {
    this.knowledge = [];
  },

  clearHobbies() {
    this.hobbies = [];
  },
};

console.log(showInfo(user));

/*
    Дан объект users
    Реализовать методы:
     findById(id) возвращает элемент по id из массива users.list
     findByName(name) возвращает элемент по name из массива users.list
     filterById(id) удаляет элемент по id из массива users.list
     filterByName(name) удаляет элемент по name из массива users.list
     getAllNames() возвращет массив всех name из массива users.list
     getAllIds() возвращет массив всех id из массива users.list

    МЕТОДЫ ДОЛЖНЫ РАБОТАТЬ С this
*/

const users = {
  list: [
    { id: 0, name: "Vlad" },
    { id: 1, name: "Vova" },
    { id: 2, name: "Victor" },
    { id: 3, name: "Kate" },
  ],
  findById(id) {
    return this.list.find((el) => el.id === id);
  },
  findByName(name) {
    return this.list.find((el) => el.name === name);
  },
  filterById(id) {
    return (this.list = this.list.filter((el) => el.id !== id));
  },

  filterByName(name) {
    return (this.list = this.list.filter((el) => el.name !== name));
  },
  getAllNames() {
    return this.list.filter((el) => el.name);
  },
  getAllIds() {
    return this.list.filter((el) => el.id);
  },
};
