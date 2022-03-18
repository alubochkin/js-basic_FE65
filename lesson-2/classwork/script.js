/*
    Создать функцию timer(a, b)
    a - начало
    b - финиш
    каждую секунду число a должно увеличиваться на 1 и выводиться в console.log
    когда a === b в console.log вывести, что таймер остановился

    решить через рекурсию
*/
function timer(a, b) {
    if (a === b) {
      console.log("Таймер остановился");
      return;
    }
  
    setTimeout(() => {
      console.log(a);
  
      timer(a + 1, b);
    }, 1000);
  }
  
/*
    1. timer(a , b)
    2. сравнить a, b если === return
    3. setTimeout(() => { timer(a + 1, b) }, 1000)
*/

/*
   Создать функцию с именем compact
   Функция должна очищать массив от значений: false, undefined, "", 0, null.
*/

function compact(arr) {
    let a = arr.filter((item => Boolean(item)))
    console.log(a)
}

compact([false, 2, 0, 54, undefined])
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
let user = {
  name: 'Valentin',
  lastName: 'Daskevich',
  age: '27',
  knowledge: [],
  hobbies: [],
  
  showInfo() {
    const info = `User name: ${this.name}, User lastname: ${this.lastName}, User age: ${this.age}, User's skills: ${this.knowledge}, User's hobbies: ${this.hobbies}`
    console.log(info)
}, 
  addKnowledge(newKnowledge) {
      this.knowledge.push(newKnowledge);
      console.log(this.knowledge);
  },
  addHobby(newHobby) {
      this.hobbies.unshift(newHobby);
      console.log(this.hobbies);
  },
  clearKnowledge() {
      this.knowledge = [];
  },
  clearHobbies() {
      this.hobbies = [];
  },
}
user.showInfo()
user.addKnowledge("Frontend")
user.addHobby("gym")
user.showInfo()
user.clearKnowledge()
user.clearHobbies()
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
  return console.log(this.list.find(item => id === item.id))
},
findByName(name) {
  return console.log(this.list.find(item => name === item.name))
},
filterById(id) {
  console.log(this.list = this.list.filter(item => id !== item.id))
},
filterByName(name) {
  console.log(this.list = this.list.filter(item => name !== item.name))
},
getAllNames() {
  return console.log(this.list.reduce((acc, curr) => [...acc, curr.name], []))
},
getAllIds() { 
  return console.log(this.list.reduce((acc, curr) => [...acc, curr.id], [])) 
},
};

users.findById(3)
users.findByName('Vova')
users.filterById(2)
users.filterByName('Vova')
users.getAllNames()
users.getAllIds()