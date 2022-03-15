// /*
//     Создать функцию timer(a, b)
//     a - начало
//     b - финиш
//     каждую секунду число a должно увеличиваться на 1 и выводиться в console.log
//     когда a === b в console.log вывести, что таймер остановился
const timer = (a, b) => {
  if (a === b) {
    console.log("таймер завершен");
    return;
  }
  setTimeout(() => {
    console.log(a);
    timer(a + 1, b);
  }, 1000);
};
timer(1, 5);
//     решить через рекурсию
// */

// /*
//     1. timer(a , b)
//     2. сравнить a, b если === return
//     3. setTimeout(() => { timer(a + 1, b) }, 1000)
// */

// /*
//    Создать функцию с именем compact
//    Функция должна очищать массив от значений: false, undefined, "", 0, null.
// */
const compact = (arr) => {
   return arr.filter((item) => Boolean(item));
};
// /*
//     Создать объект user вида
//     {
//         name: 'SomeName',
//         lastName: 'SomeLastName',
//         age: 'SomeAge',
//         knowledge: [],
//         hobbies: [],
//     }
//     Добавить в него методы
//     showInfo() {} показывает информацию о usere
//     addKnowledge(newKnowledge) {} добавляет newKnowledge в конец массива knowledge
//     addHobby(newHobby) {} добавляет newHobby в начало массива hobies
//     clearKnowledge() {} очищает массив hobbies
//     clearHobbies() {} очищает массив hobbies

//     МЕТОДЫ ДОЛЖНЫ РАБОТАТЬ С this
// */

const user = {
  name: "Mary",
  lastName: "Zaiko",
  age: "27",
  knowledge: ["html", "css"],
  hobbies: ["books", "serials"],
  showInfo() {
    console.log(
      `My name ${this.name} ${this.lastName} and I'm ${this.age}. I know ${this.knowledge} and I like ${this.hobbies}.`
    );
  },
  addKnowledge(newKnowledge) {
    this.knowledge.push(newKnowledge);
  },
  addHobby(newHobby) {
    this.hobbies.unshift(newHobby);
  },
  clearKnowledge() {
    this.knowledge.splice(0, this.knowledge.length);
  },
  clearHobbies() {
    this.hobbies.splice(0, this.hobbies.length);
  },
};

console.log(user.clearKnowledge(), user.knowledge);

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
    let user = this.list.find((item) => item.id === id);
    console.log(user);
  },
  findByName(name) {
    let user = this.list.find((item) => item.name === name);
    console.log(user);
  },
  filterById(id) {
    let filterUsers = this.list.filter((item) => item.id !== id);
    console.log(filterUsers);
  },
  filterByName(name) {
    let filterUsers = this.list.filter((item) => item.name !== name);
    console.log(filterUsers);
  },
  getAllNames() {
    let allNames = this.list.reduce((acc, cur) => {
      
      acc.push(cur.name);
      return acc;
    }, []);
    console.log(allNames);
  },
  getAllIds() {
    let allId = this.list.reduce((acc, cur) => {
      
      acc.push(cur.id);
      return acc;
    }, []);
    console.log(allId);
  },
  
};
users.findById(2)
users.findByName('Vova')
users.filterById(1)
users.filterByName('Vova')
users.getAllNames()
users.getAllIds()