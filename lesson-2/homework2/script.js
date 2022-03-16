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
            c: '1'
        }
    },
    x: {
        y: {
            z: '2'
        }
    }
}
const path = 'a.b.c'
const get = (obj, path) => {
    const splitterPath = path.split('.')
    return result.reduce((acc, cur) => {
        if (typeof acc === 'object') {
            acc = acc[cur]
        } else {
            acc = undefined
        }
        return acc
    }, obj)
}

console.log(get(obj, path))
/*
    Функция, которая будет переворачивать число

    reverseInt(15) === 51
    reverseInt(500) === 5
*/

const reverseInt = (arg) => {
    const revers = +String(arg).split('').reverse().join('')
    return revers
}

console.log(reverseInt(500))

/* 
    Напишите Функции, которая возвращает новый массив из общих элементов двух массивов

    const a = [1,2,3,4,5];
    const b = [1,3,6,3,1,4,7];

    getCommonElements(a, b); //[1,3,4]
*/
const a = [1,2,3,4,5];
const b = [1,3,6,3,1,4,7];

const getCommonElements = (a,b) => {
    let c = []
    for (let i = 0; i < a.length; i++) {
        if (b.includes(a[i])) {
            c.push(a[i])
        }
    }
    return c
}

console.log(getCommonElements(a, b))

/* 
    Напишите функцию которая работает таким образом

    const arr = [1, 2, 3, 4, 5];
    arr.forEach(cb(10)); // 11 12 13 14 15

*/
const arr = [1, 2, 3, 4, 5]

const cb = (num) => (item) => {
    console.log(num + item)
}

const _cb = cb(10)

arr.forEach(cb(10))

/*
    Функция, которая будет работать так

    add(1,2)  //3
    add(2)(4) //6
*/
function add(a, b) {
    if (b) {
        const result1 = a + b;
        return result1;
    } 

    return function (x) {
        const result2 = a + x;
        return result2;
    };
  }
  
  console.log(add(1,5));