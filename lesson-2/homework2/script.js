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

const get = (obj, puth) => {
    let splitedPuth = puth.split('.')
    let result = obj
    for(let i = 0; i < splitedPuth.length; i++) {
        if(splitedPuth[i] in result) {
            result = result[splitedPuth[i]]
        } else {
            result = 'Значение не найдено...'
            break
        }
    }
    console.log(result)
}

get(obj, 'a.b.c')

/*
    Функция, которая будет переворачивать число

    reverseInt(15) === 51
    reverseInt(500) === 5
*/

const reverseInt = (num) => {
    return Number(String(num).split('').reverse().join('')) 
}

// console.log(reverseInt(102))

/* 
    Напишите Функции, которая возвращает новый массив из общих элементов двух массивов

    const a = [1,2,3,4,5];
    const b = [1,3,6,3,1,4,7];

    getCommonElements(a, b); //[1,3,4]
*/

const newArray = (array1, array2) => {
    const result = array1.filter(item => array2.includes(item))
    return result
}

// console.log(newArray([1,2,3,4,5], [1,3,6,3,1,4,7]))

/* 
    Напишите функцию которая работает таким образом

    const arr = [1, 2, 3, 4, 5];
    arr.forEach(cb(10)); // 11 12 13 14 15

*/

const arr = [1, 2, 3, 4, 5];

const cb = (num) => (item) => {
    console.log(num + item)
}

// arr.forEach(cb(10)); // 11 12 13 14 15

/*
    Функция, которая будет работать так

    add(1,2)  //3
    add(2)(4) //6
*/

const add = (a,b) => {
    if (b) {
        return a + b
    } else {
        return function (c) {
            return a + c
        }
    }
} 