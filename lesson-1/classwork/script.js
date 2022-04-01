/*
    Создать функцию с именем duplicate
    Функция должна принимать массив
    Функция должна возратить удвоенный массив
    Пример: [1,2,3] => [1,2,3,1,2,3] 
*/

// const duplicate = ([arr]) => {
//         let arrs = [...arr]
//         return arrs
//     }
// console.log(duplicate(arrs[1, 2]))


/*
    Создайте массив с 10 уникальными числами
    * для рандомного числа используйте Math.floor(Math.random() * 100)
*/

// let arr = []
// while (arr.length < 10) {
//     let numb = Math.floor(Math.random() * 100)
//     arr.push(numb)
// }
//console.log(arr)

/*
    Создать функцию с именем getBiggest
    Функция должна возвращать самое большое число из переданных параметров
    Функция должна уметь работать с разным количетвом параметров
*/

const getBiggest = (...args) => {
    let max = 0;
    for (let i = 0; i < args.length; i++) {
        if (max < args[i]) {
            max = args[i]
        }
    }
    return max
}
console.log(getBiggest(1, 50, 3, 100, 20))
    /*
       Создать функцию с именем isAnagram
       Написать код функции проверки анаграммы
       isAnagram('пасечник','песчинка'); // true
       isAnagram('xyz','xyzx'); // false
    */

let isAnagram = () => {

    }
    /*
        Создайте массив с десятью случайными элементами от 0 до 100;
        Создать функцию с именем replacer, которая будет заменять все “0” на строку “zero”;
        Функция должна возвращать новый массив
        Пример: ["1zero2", 53, "2zero", 18, 22, "1zerozero", 43, 57, "5zero", 1];

        * для рандомного числа используйте Math.floor(Math.random() * 100)
    */