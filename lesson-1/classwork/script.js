/*
    2)
    Дан массив [1,2,3,1,2,3,5,4,6,7,3,2,1,2,3,5,3,3,1,2,3,4,1]
    Создать массив из элементов которые встречаются только один раз
    3)
    Создать функцию с именем isPalindrome
    Проверить является ли строка палиндромом
    Пример палиндромов: 'доход', 'шалаш'
    4)
    Дан обьект users
    В  окно prompt необходимо ввести имя пользователя
    Если совпадения есть - вывести в console.log строку вида user name: USER_NAME, user email: USER_EMAIL
    * Добавить возможность поиска без учёта регистра
*/
<<<<<<< HEAD

const users = [{
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
    },
    {
        id: 2,
        name: "Ervin Howell",
        username: "Antonette",
        email: "Shanna@melissa.tv",
    },
    {
        id: 3,
        name: "Clementine Bauch",
        username: "Samantha",
        email: "Nathan@yesenia.net",
    },
];
=======
function array2 (array) {
    let a = [...array,...array]
    return a
}
console.log(array2([2,3,4]))
/*
    Создайте массив с 10 уникальными числами
    * для рандомного числа используйте Math.floor(Math.random() * 100)
*/
function array3 () {
    let a =  []
    while (a.length < 10) {
        let number = Math.floor(Math.random() * 100);
        if (!a.includes(number))
        a.push(number)
      }
      return a
} 
console.log(array3())
/*
    Создать функцию с именем getBiggest
    Функция должна возвращать самое большое число из переданных параметров
    Функция должна уметь работать с разным количетвом параметров
*/
function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
  }
function getBiggest (...array) {
    array.sort(compareNumeric);
    return array[array.length-1]
 }

 console.log(getBiggest(5,3,85,34,21,75,43,12))

/*
   Создать функцию с именем isAnagram
   Написать код функции проверки анаграммы
   isAnagram('пасечник','песчинка'); // true
   isAnagram('xyz','xyzx'); // false
*/

function isAnagram (first, second) {
    let a = first.split('').sort().join('')
    let b = second.split('').sort().join('')
    let result = a === b;
    return result
}
console.log(isAnagram('пчела','чалпе'))
/*
    Создайте массив с десятью случайными элементами от 0 до 100;
    Создать функцию с именем replacer, которая будет заменять все “0” на строку “zero”;
    Функция должна возвращать новый массив
    Пример: ["1zero2", 53, "2zero", 18, 22, "1zerozero", 43, 57, "5zero", 1];

    * для рандомного числа используйте Math.floor(Math.random() * 100)
*/

function replacer () {
    let a =  []
    while (a.length < 100) {
        let number = Math.floor(Math.random() * 100);
        if (!a.includes(number))
        a.push(number)
      }
    let str = a.toString()
    let d = str.replace(/0/g, 'zero')
      
      return d
} 

>>>>>>> 646fa09eba3636bba3e6e8ddc91695a877e33ecc
