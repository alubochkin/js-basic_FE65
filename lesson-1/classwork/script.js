/*
    Создать функцию с именем duplicate
    Функция должна принимать массив
    Функция должна возратить удвоенный массив
    Пример: [1,2,3] => [1,2,3,1,2,3] 
*/

function duplicate(args) {
  let res = [...args, ...args];

  console.log(res);
  return res;
}

duplicate([1, 2, 3]);

/*
    Создайте массив с 10 уникальными числами
    * для рандомного числа используйте Math.floor(Math.random() * 100)
*/

const array = [];

while (array.length < 10) {
  const randomNum = Math.floor(Math.random() * 100);
  if (!array.includes(randomNum)) {
    array.push(randomNum);
  }
}

console.log(array);

/*
    Создать функцию с именем getBiggest
    Функция должна возвращать самое большое число из переданных параметров
    Функция должна уметь работать с разным количетвом параметров
*/

function getBiggest(...args) {
  let biggest = -Infinity;
  for (let i = 0; i < args.length; i++) {
    if (args[i] > biggest) {
      biggest = args[i];
    }
  }

  console.log(biggest);
  return biggest;
}

getBiggest(1, 3, 6, 4, 9);

/* 
   Создать функцию с именем isAnagram
   Написать код функции проверки анаграммы
   isAnagram('пасечник','песчинка'); // true
   isAnagram('xyz','xyzx'); // false
*/

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  return (
    str1
      .split("")
      .sort((a, b) => a - b)
      .join("") ===
    str2
      .split("")
      .sort((a, b) => a - b)
      .join("")
  );
}

console.log(isAnagram());

/* 
    Создайте массив с десятью случайными элементами от 0 до 100;
    Создать функцию с именем replacer, которая будет заменять все “0” на строку “zero”;
    Функция должна возвращать новый массив
    Пример: ["1zero2", 53, "2zero", 18, 22, "1zerozero", 43, 57, "5zero", 1];

    * для рандомного числа используйте Math.floor(Math.random() * 100)
*/

const replacer = (arr) => {
  let array = [];

  const format = (str) => {
    let str1 = "";

    for (let i = 0; i < str.length; i++) {
      if (str[i] === "0") {
        str1 += "zero";
      } else {
        str1 += str[i];
      }
    }

    return str1;
  };

  arr.forEach((item) => {
    if (String(item).includes("0")) {
      array.push(format(String(item)));
    } else {
      array.push(item);
    }
  });

  return array;
};
