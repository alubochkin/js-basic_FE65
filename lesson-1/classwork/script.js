/*
    Создать функцию с именем duplicate
    Функция должна принимать массив
    Функция должна возратить удвоенный массив
    Пример: [1,2,3] => [1,2,3,1,2,3]
*/

const duplicate = (arr) => {
  let a = [...arr, ...arr];
  return a;
};
console.log(duplicate([1, 2, 3]));

/*
    Создайте массив с 10 уникальными числами
    * для рандомного числа используйте Math.floor(Math.random() * 100)
*/
let arr = [];
const randomNum = () => {
  while (arr.length < 10) {
    let num = Math.floor(Math.random() * 15);
    if (!arr.includes(num)) {
      arr.push(num);
    }
  }
  return arr;
};

console.log(randomNum());

/*
    Создать функцию с именем getBiggest
    Функция должна возвращать самое большое число из переданных параметров
    Функция должна уметь работать с разным количетвом параметров
*/
const getBiggest = (...arg) => {
  let num = Math.max(...arg);
  return num;
};
console.log(getBiggest(1, 2, 5, 8, 6, 44, 2, 5));

let getBiggestTwo = (...array) => {
  let result = array[0];
  for (let i = 0; i < array.length; i++) {
    if (result < array[i]) {
      result = array[i];
    }
  }
  return result;
};
console.log(getBiggestTwo(23, 4, 12, 77, 223, 1200, 2));
/*
   Создать функцию с именем isAnagram
   Написать код функции проверки анаграммы
   isAnagram('пасечник','песчинка'); // true
   isAnagram('xyz','xyzx'); // false
*/
const isAnagram = (first, second) => {
  if (!first.length === second.length) {
    return false;
  }

  return first.split("").sort().join("") === second.split("").sort().join("");
};
console.log(isAnagram("пасечник", "песчинка"));
/*
    Создайте массив с десятью случайными элементами от 0 до 100;
    Создать функцию с именем replacer, которая будет заменять все “0” на строку “zero”;
    Функция должна возвращать новый массив
    Пример: ["1zero2", 53, "2zero", 18, 22, "1zerozero", 43, 57, "5zero", 1];

    * для рандомного числа используйте Math.floor(Math.random() * 100)
*/
let randArr = [];
const randomNum1 = () => {
  while (randArr.length < 10) {
    let num = Math.floor(Math.random() * 100);
    if (!randArr.includes(num)) {
      randArr.push(num);
    }
  }
  return randArr;
};
randomNum1();
console.log(randArr);

const replacer = (arr) => {
  let replaceArr = arr.map((item) => {
    let itemString = String(item);
    let itemStrArr = itemString.split(" ");
    let newitemStrArr = itemStrArr.map((item) => {
      let itemArr = item.split("");
      let itemArrWithZero = itemArr.map((item) => {
        if (item === "0") {
          item = "zero";
        }
        return item;
      });
      let newItemStr = itemArrWithZero.join("");

      return newItemStr;
    });
    let strWithZero = newitemStrArr.join("");
    return strWithZero;
  });
  return replaceArr;
};
console.log(replacer(randArr));
