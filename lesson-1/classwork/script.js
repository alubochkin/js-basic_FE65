/*Создать функцию с именем duplicate
Функция должна принимать массив
Функция должна возратить удвоенный массив
Пример: [1,2,3] => [1,2,3,1,2,3] 
*/
const duplicate = (arr) => [...arr, ...arr];
console.log(duplicate([1, 2, 3]));
/*
Создайте массив с 10 уникальными числами
* для рандомного числа используйте Math.floor(Math.random() * 100)
*/
function newRandom() {

    return (Math.floor(Math.random() * 100)).length < 10;
}
console.log(newRandom());
console.log(newRandom());
console.log(newRandom());
console.log(newRandom());
console.log(newRandom());
console.log(newRandom());
console.log(newRandom());
console.log(newRandom());
console.log(newRandom());
console.log(newRandom());
/*
Создать функцию с именем getBiggest
Функция должна возвращать самое большое число из переданных параметров
Функция должна уметь работать с разным количетвом параметров
*/
const getBiggest = (...args) => {
    let res = Math.max(...args);
    return res;
}
console.log(getBiggest(1, 2, 3, 105, 20));
/*
Создать функцию с именем isAnagram
Написать код функции проверки анаграммы
isAnagram('пасечник','песчинка'); // true
isAnagram('xyz','xyzx'); // false
*/
const isAnagram = (left, right) => {
    if (left.length === right.length) {
        return true
    } else {
        return false
    }
}
console.log(isAnagram('пасечник', 'песчинка'));
console.log(isAnagram('xyz', 'xyzx'));
/*
Создайте массив с десятью случайными элементами от 0 до 100;
Создать функцию с именем replacer, которая будет заменять все “0” на строку “zero”;
Функция должна возвращать новый массив
Пример: ["1zero2", 53, "2zero", 18, 22, "1zerozero", 43, 57, "5zero", 1];
* для рандомного числа используйте Math.floor(Math.random() * 100)
*/
let elementArr = [];
const newRandom = () => {
    while (elementArr.length < 10) {
        let element = Math.floor(Math.random() * 100);
        if (!elementArr.includes(element)) {
            elementArr.push(element);
        }
    }
    return elementArr;
};

const replacer = (number) => String(number).replaceAll('0', 'zero');
console.log(replacer([20, 0, 30]));

