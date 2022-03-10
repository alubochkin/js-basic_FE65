/*
    Создать функцию timer(a, b)
    a - начало
    b - финиш
    каждую секунду число a должно увеличиваться на 1 и выводиться в console.log
    когда a === b в console.log вывести, что таймер остановился

    решить через рекурсию
*/

let timer = (a, b) => {
    if (a === b) {
        console.log('таймер остановился');
        return
    }
    setTimeout(() => {
        console.log(a)

        timer(a + 1, b);
    }, 1000)
}
timer(1, 5)


/*
    1. timer(a , b)
    2. сравнить a, b если === return
    3. setTimeout(() => { timer(a + 1, b) }, 1000)
*/

/*
   Создать функцию с именем compact
   Функция должна очищать массив от значений: false, undefined, "", 0, null.
*/
let compact = (args) => {
    let array = args.filter((item) => Boolean(item))
    return array
}

console.log(compact([null, 7, false, 3]));
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
    name: 'Artur',
    lastName: 'Kuchinski',
    age: '29',
    knowledge: [],
    hobbies: [],
    addKnowledge(newKnowledge) {
        this.knowledge.push(newKnowledge)
    },
    showKnowledge() {
        console.log(this.knowledge);
    },
    addHobby(newHobby) {
        this.hobbies.unshift(newHobby)
    },
    showHobby() {
        console.log(this.hobbies);
    },
    clearKnowledge() {
        this.knowledge = [];
    },
    clearHobbies() {
        this.hobbies = [];
    },
    showInfo() {
        const info = `${this.name} ${this.lastName} ${this.age} ${this.knowledge} ${this.hobbies}`
        console.log(info)
    },
}
user.showInfo()
user.addKnowledge("newKnowledge")
user.addKnowledge("newKnowledge2")
user.addKnowledge("newKnowledge3")
user.showKnowledge()
user.addHobby("newHobby")
user.addHobby("newHobby2")
user.addHobby("newHobby3")
user.showHobby()
user.clearKnowledge()
user.clearHobbies()


/*
    Дан объект user
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
    findById(id) {},
    findByName(name) {},
    filterById(id) {},
    filterByName(name) {},
    getAllNames() {},
    getAllIds() {},
};