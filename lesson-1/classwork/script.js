/*
    Создать функцию с именем duplicate
    Функция должна принимать массив
    Функция должна возратить удвоенный массив
    Пример: [1,2,3] => [1,2,3,1,2,3] 
*/
const duplicate = (arr) => {
    return [...arr,...arr]
}
console.log(duplicate([1,2]));
/*
    Создайте массив с 10 уникальными числами
    * для рандомного числа используйте Math.floor(Math.random() * 100)
*/

const randomArr = () => {
    const result = [];
    while(result.length < 10){
        const num = Math.floor(Math.random() * 100)
        if(!result.includes(num)){
            result.push(num)
        }
    }
    return result
}
console.log(randomArr());

/*
    Создать функцию с именем getBiggest
    Функция должна возвращать самое большое число из переданных параметров
    Функция должна уметь работать с разным количетвом параметров
*/

// const getBiggest = (...args) => {
//     const result = args.sort((a,b) => a > b ? 1 : -1)
//     return result[result.length -1]
// }
// console.log(getBiggest(1,999,3,333));

const getBiggest = (...args) => {
    let num = args[0]
    args.forEach(item => {
        if(item > num) {
            num = item
        }
    })
    return num
}
console.log(getBiggest(1,999,3,333));
/*
   Создать функцию с именем isAnagram
   Написать код функции проверки анаграммы
   isAnagram('пасечник','песчинка'); // true
   isAnagram('xyz','xyzx'); // false
*/
const isAnagram = (str1, str2) => {
    if (str1.length !== str2.length) return false
    const word1 = str1.split('').sort().join('')
    const word2 = str2.split('').sort().join('')
    return word1.toLowerCase() === word2.toLowerCase() ? true : false 
}
console.log(isAnagram('пасечник','песчинка'));
console.log(isAnagram('xyz','xyzx'));
/*
    Создайте массив с десятью случайными элементами от 0 до 100;
    Создать функцию с именем replacer, которая будет заменять все “0” на строку “zero”;
    Функция должна возвращать новый массив
    Пример: ["1zero2", 53, "2zero", 18, 22, "1zerozero", 43, 57, "5zero", 1];

    * для рандомного числа используйте Math.floor(Math.random() * 100)
*/

const replacer = (arr) => {
    return arr
        .map(item => `${item}`)
        .map(item => {
            return item.includes('0') ? item.split('').map(item => item === '0' ? 'zero' : item).join('') : Number(item)
        })
}
console.log(replacer(randomArr()));