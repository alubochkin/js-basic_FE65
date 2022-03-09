// /*
//     Создать функцию timer(a, b)
//     a - начало
//     b - финиш
//     каждую секунду число a должно увеличиваться на 1 и выводиться в console.log
//     когда a === b в console.log вывести, что таймер остановился
const timer = (a,b) =>{
    if(a === b){
        console.log('таймер завершен');
        return;
    }
    setTimeout(() =>{
        console.log(a);
        timer(a + 1, b)
    }, 1000)
}
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
const compact = (arr) =>{
arr = arr.filter((item) => Boolean(item))
return arr
}
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
  findById(id) {},
  findByName(name) {},
  filterById(id) {},
  filterByName(name) {},
  getAllNames() {},
  getAllIds() {},
};
