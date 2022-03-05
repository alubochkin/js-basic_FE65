//-------------------------------------------------------------------------

/*
    Создать функцию с именем duplicate
    Функция должна принимать массив
    Функция должна возратить удвоенный массив
    Пример: [1,2,3] => [1,2,3,1,2,3] 
*/

const duplicate = (arr) => [...arr,...arr]

//-------------------------------------------------------------------------

/*
    Создайте массив с 10 уникальными числами
    * для рандомного числа используйте Math.floor(Math.random() * 100)
*/

const random = () => {
    const arrRandomNumbers = []
    while (arrRandomNumbers.length < 10) {
        let randNum = Math.floor(Math.random() * 15)
        if(!arrRandomNumbers.includes(randNum)) {
            arrRandomNumbers.push(randNum)
        }  
    }
    return arrRandomNumbers
}

//-------------------------------------------------------------------------    

/*
    Создать функцию с именем getBiggest
    Функция должна возвращать самое большое число из переданных параметров
    Функция должна уметь работать с разным количетвом параметров
*/

const getBiggest = (...numbers) => {
    // num.sort((a, b) => a > b ? 1 : -1)
    // return num[num.length - 1]
    let num = numbers[0]
    numbers.forEach(item => {
        if(item > num) {
            num = item
        }
    })
    return num;
}

//-------------------------------------------------------------------------

/*
   Создать функцию с именем isAnagram
   Написать код функции проверки анаграммы
   isAnagram('пасечник','песчинка'); // true
   isAnagram('xyz','xyzx'); // false
*/

const isAnagram = (arg1, arg2) => {

}

//-------------------------------------------------------------------------

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
            if (item.includes('0')) {
                return item
                .split('')
                .map(item => item === '0' ? 'Zero' : item)
                .join('') 
            } else {
                return Number(item)
            }  
        })      
}

console.log(replacer(random()))

//-------------------------------------------------------------------------