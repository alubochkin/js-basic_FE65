/*
    Создать функцию timer(a, b)
    a - начало
    b - финиш
    каждую секунду число a должно увеличиваться на 1 и выводиться в console.log
    когда a === b в console.log вывести, что таймер остановился

    решить через рекурсию
    1. timer(a , b)
    2. сравнить a, b если === return
    3. setTimeout(() => { timer(a + 1, b) }, 1000)
*/
function timer(a, b) {
  if (a === b) {
    console.log("таймер остановился");
    return;
  }
  setTimeout(() => {
    console.log(a + 1);
    timer(a + 1, b);
  }, 1000);
}
// timer(0, 5);

/*
   Создать функцию с именем compact
   Функция должна очищать массив от значений: false, undefined, "", 0, null.
*/
const array = ["h", undefined, "e", null, "l", false, "l", 0, "", "o"];
function compact(arr) {
  const compactArr = array.filter((item) => Boolean(item));
  console.log(compactArr);
}
compact(array);
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
    clearKnowledge() {} очищает массив hobbies
    clearHobbies() {} очищает массив hobbies

    МЕТОДЫ ДОЛЖНЫ РАБОТАТЬ С this
*/
const user = {
  name: "Anna",
  lastName: "Gruzd",
  age: "24",
  knowledge: [],
  hobbies: [],
  showInfo() {
    console.group(`User ${this.name} info:`);
    console.log(`
    Name: ${this.name} ${this.lastName};
    Age: ${this.age};
    Knowledge: ${this.knowledge};
    Hobbies: ${this.hobbies}.
    `);
    console.groupEnd();
  },
  addKnowledge(...args) {
    this.knowledge.push(...args);
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
user.addKnowledge("HTML", "CSS");
user.addKnowledge("JavaScript");

user.addHobby("books");
user.addHobby("series");
user.addHobby("coding");

// user.clearHobbies();
// user.clearKnowledge();

user.showInfo();
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
    return this.list.find((elem) => elem.id === id);
  },
  findByName(name) {
    return this.list.find((elem) => elem.name === name);
  },
  filterById(id) {
    return (this.list = this.list.filter((elem) => elem.id !== id));
  },
  filterByName(name) {
    return (this.list = this.list.filter((elem) => elem.name !== name));
  },
  getAllNames() {
    return this.list.reduce((acc, cur) => [...acc, cur.name], []);
  },
  getAllIds() {
    return this.list.reduce((acc, cur) => [...acc, cur.id], []);
  },
};

console.log(users.findById(2));
console.log(users.findByName("Kate"));
console.log(users.filterById(1));
console.log(users.filterByName("Vlad"));
console.log(users.getAllNames());
console.log(users.getAllIds());
