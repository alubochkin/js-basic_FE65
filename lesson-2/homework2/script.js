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

/*
    Функция, которая будет переворачивать число
    reverseInt(15) === 51
    reverseInt(500) === 5
*/
const rev = (num) => {
    return Number(String(num).split('').reverse().join(''))
}
console.log(rev(51));

/* 
    Напишите Функции, которая возвращает новый массив из общих элементов двух массивов

    const a = [1,2,3,4,5];
    const b = [1,3,6,3,1,4,7];

    getCommonElements(a, b); //[1,3,4]
*/
const getCommonElements = (arr1, arr2) => {
    const newArray = arr1.filter((item) => arr2(item))
    return newArray
}
console.log(getCommonElements([1,2,3,4,5],[1,3,6,3,1,4,7]));
/* 
    Напишите функцию которая работает таким образом

    const arr = [1, 2, 3, 4, 5];
    arr.forEach(cb(10)); // 11 12 13 14 15

*/

/*
    Функция, которая будет работать так

    add(1,2)  //3
    add(2)(4) //6
*/

