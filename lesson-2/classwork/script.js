//-----------------------------------------------------------------------------------

/*
    Создать функцию timer(a, b)
    a - начало
    b - финиш
    каждую секунду число a должно увеличиваться на 1 и выводиться в console.log
    когда a === b в console.log вывести, что таймер остановился

    решить через рекурсию
*/

const timer = (a, b) => {
    if(a === b) return
    setTimeout(() => {
        console.log(a)
        return timer(a + 1, b)
    },1000)
}

/*
    1. timer(a , b)
    2. сравнить a, b если === return
    3. setTimeout(() => { timer(a + 1, b) }, 1000)
*/

//-----------------------------------------------------------------------------------

/*
   Создать функцию с именем compact
   Функция должна очищать массив от значений: false, undefined, "", 0, null.
*/

const compact = (array) => {
    const res = array.filter(item => Boolean(item))
    return res
}

//-----------------------------------------------------------------------------------

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
    name: 'SomeName',
    lastName: 'SomeLastName',
    age: 'SomeAge',
    knowledge: [],
    hobbies: [],
    showInfo() {
        return `
        name: ${this.name}
        lastName: ${this.lastName}
        age: ${this.age}
        knowledge: ${this.knowledge.length > 0 ? this.knowledge : 'нет знаний'}
        hobbies: ${this.hobbies.length > 0 ? this.hobbies : 'нет хобби'}
        `
    },
    addKnowledge(newKnowledge) {
        this.knowledge.push(newKnowledge)
    },
    addHobby(newHobby) {
        this.hobbies.unshift(newHobby)
    },
    clearKnowledge() {
        this.knowledge = []
    },
    clearHobbies() {
        this.hobbies = []
    }, 
}

//-----------------------------------------------------------------------------------

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
      return this.list.find(item => item.id === id)
  },
  findByName(name) {
    return this.list.find(item => item.name === name)
  },
  filterById(id) {
    this.list = this.list.filter(item => item.id !== id)
  },
  filterByName(name) {
    this.list = this.list.filter(item => item.name !== name)
  },
  getAllNames() {
    // const result = []
    // this.list.forEach(item => result.push(item.name))
    // return result
    return this.list.reduce((acc, curr) => [...acc, curr.name], [])
  },
  getAllIds() {
    // const result = []
    // this.list.forEach(item => result.push(item.id))
    // return result 
    return this.list.reduce((acc, curr) => [...acc, curr.id], []) 
  },
};

//-----------------------------------------------------------------------------------