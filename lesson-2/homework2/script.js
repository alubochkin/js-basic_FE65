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
const path2 = 'x.y.z'
const path3 = 'd.e.f'
const get = (obj, path) => {
    const result = path.split('.')
    return result.reduce((acc, cur) => {
        if (typeof acc === 'object') {
            acc = acc[cur]
        } else {
            acc = undefined
        }
        return acc
    }, obj)
}
console.log(get(obj, path2));
console.log(get(obj, path));
console.log(get(obj, path3));



/*
    Функция, которая будет переворачивать число

    reverseInt(15) === 51
    reverseInt(500) === 5
*/
const reverseFunc = (args) => {
    const reversed = +String(args).split('').reverse().join('')
    return reversed
}
console.log(reverseFunc(506000))
    /* 
        Напишите Функции, которая возвращает новый массив из общих элементов двух массивов

        const a = [1,2,3,4,5];
        const b = [1,3,6,3,1,4,7];

        getCommonElements(a, b); //[1,3,4]
    */
const a = [1, 2, 3, 4, 5];
const b = [1, 3, 6, 3, 1, 4, 7]

let compact = (a, b) => {
    let c = []
    for (let i = 0; i <= a.length; i++) {
        if (b.includes(a[i])) {
            c.push(a[i])
        }
    }
    return c
}
console.log(compact(a, b));
/* 
    Напишите функцию которая работает таким образом

    const arr = [1, 2, 3, 4, 5];
    arr.forEach(cb(10)); // 11 12 13 14 15

*/
const arr = [1, 2, 3, 4, 5];

const cb = (num) => (item) => {
    console.log(num + item);
}

const number = cb(10)
arr.forEach(cb(10)); // 11 12 13 14 15
/*
    Функция, которая будет работать так

    add(1,2)  //3
    add(2)(4) //6
*/

const sum = (a, b) => {
    if (!b) {
        return (z) => a + z
    }
    return a + b
}
console.log(sum(2)(7));