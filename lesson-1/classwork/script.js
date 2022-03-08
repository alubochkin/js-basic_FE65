/*
    Создать функцию с именем duplicate
    Функция должна принимать массив
    Функция должна возратить удвоенный массив
    Пример: [1,2,3] => [1,2,3,1,2,3] 
*/
const duplicate = (arr) => [...arr, ...arr];
console.log(duplicate([1, 3, 5]));

/*
    Создайте массив с 10 уникальными числами
    * для рандомного числа используйте Math.floor(Math.random() * 100)
*/
function random() {
  let arr = [];
  while (arr.length !== 10) {
    let num = Math.floor(Math.random() * 11);
    if (!arr.includes(num)) {
      arr.push(num);
    }
  }
  console.log(arr);
}
random();

/*
    Создать функцию с именем getBiggest
    Функция должна возвращать самое большое число из переданных параметров
    Функция должна уметь работать с разным количетвом параметров
*/
function getBiggest(...args) {
  let max = -Infinity;
  for (let i = 0; i < args.length; i++) {
    if (args[i] > max) {
      max = args[i];
    }
  }
  console.log(max);
}
getBiggest(1, 2, 3, 4, 12, 65, 890);
/*
   Создать функцию с именем isAnagram
   Написать код функции проверки анаграммы
   isAnagram('пасечник','песчинка'); // true
   isAnagram('xyz','xyzx'); // false
*/
function isAnagram(str1, str2) {
  if (str1.length != str2.length) {
    return false;
  }
  let str1Arr = str1.split("").sort().join();
  let str2Arr = str2.split("").sort().join();
  console.log(str1Arr, str2Arr);
  let result = str1Arr === str2Arr;
  return console.log(result);
}

isAnagram("helloy", "ohelld");

/*
    Создайте массив с десятью случайными элементами от 0 до 100;
    Создать функцию с именем replacer, которая будет заменять все “0” на строку “zero”;
    Функция должна возвращать новый массив
    Пример: ["1zero2", 53, "2zero", 18, 22, "1zerozero", 43, 57, "5zero", 1];

    * для рандомного числа используйте Math.floor(Math.random() * 100)
*/
function replacer() {
  const arr = [];
  while (arr.length !== 10) {
    let num = Math.floor(Math.random() * 100);
    if (!arr.includes(num)) {
      arr.push(num);
    }
  }
  console.log(arr);
  const newArr = arr.map((num) => {
    return num.toString().includes("0")
      ? num.toString().replace(/0/g, "zero")
      : num;
  });
  console.log(newArr);
  return newArr;
}
replacer();
