/*
    Создать функцию с именем duplicate
    Функция должна принимать массив
    Функция должна возратить удвоенный массив
    Пример: [1,2,3] => [1,2,3,1,2,3] 
*/
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
console.log(replacer())