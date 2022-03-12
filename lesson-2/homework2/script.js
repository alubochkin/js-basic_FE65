/*
    Написать функцию которая первым параметром принимает обьект, вторым параметром путь к свойству
    * решить через цикл
    * решить через рекурсию

    const obj = {
        a: {
            b: {
                c: '1'
            }
        },
        x: {
            y: {
                z: '2'
            }
        }
    }

    get(obj, 'a.b.c') // 1
    get(obj, 'a.b') // { c: '1' }
    get(obj, 'x.y.z') // 2
    get(obj, 'x.b.z') // undefined
*/
const obj = {
  a: {
    b: {
      c: "1",
    },
  },
  x: {
    y: {
      z: "2",
    },
  },
};
function get(obj, path) {
  let sp = path.split(".");
  console.log(sp);
}
get(obj, "a.b.c");

/*
    Функция, которая будет переворачивать число

    reverseInt(15) === 51
    reverseInt(500) === 5
*/
function reverseInt(int) {
  return Number(int.toString().split("").reverse().join(""));
}
console.log(reverseInt(500));

/* 
    Напишите Функции, которая возвращает новый массив из общих элементов двух массивов

    const a = [1,2,3,4,5];
    const b = [1,3,6,3,1,4,7];

    getCommonElements(a, b); //[1,3,4]
*/
const a = [1, 2, 3, 4, 5];
const b = [1, 3, 6, 3, 1, 4, 7];

function getCommonElements(a, b) {
  let res = [];
  for (let i = 0; i < b.length; i++) {
    b.includes(a[i]) ? res.push(a[i]) : a[i];
  }
  return res;
}
console.log(getCommonElements(a, b));
/* 
    Напишите функцию которая работает таким образом

    const arr = [1, 2, 3, 4, 5];
    arr.forEach(cb(10)); // 11 12 13 14 15

*/
const arr = [1, 2, 3, 4, 5];

const cb = (num) => (item) => {
  console.log(num + item);
};

arr.forEach(cb(10));
/*
    Функция, которая будет работать так

    add(1,2)  //3
    add(2)(4) //6
*/
function add(a, b) {
  if (b) {
    return a + b;
  } else {
    return (c) => a + c;
  }
}
console.log(add(1, 2));
console.log(add(2)(4));
