let duplicate = (array) => {
    let a = [...array, ...array]
    return a
}
console.log(duplicate([23, 44]));

let random = () => {
    let arrayTwo = []
    while (arrayTwo.length < 10) {
        let abc = (Math.floor(Math.random() * 100))
        if (!arrayTwo.includes(abc))
            arrayTwo.push(abc)
    }
    return arrayTwo
}
console.log(random())

let getBiggest = (...array) => {
    let b = Math.max(...array)
    return b
}
console.log(getBiggest(23, 4, 12, 77, 223, 1))

let getBiggestTwo = (...array) => {
    let result = array[0]
    for (let i = 0; i < array.length; i++) {
        if (result < array[i]) {
            result = array[i]
        }
    }
    return result
}
console.log(getBiggestTwo(23, 4, 12, 77, 223, 1200, 2))

let isAnagram = (first, last) => {
    let one = first.split('').sort().join('')
    let two = last.split('').sort().join('')
    return one === two
}
console.log(isAnagram('кот', 'ток'))
console.log(isAnagram('коrgttrт', 'токsasd'))


let replacer = () => {
    let array = []
    while (array.length < 10) {
        let args = (Math.floor(Math.random() * 100))
        const result = `${args}`.replace(/0/g, 'zero')
        if (!array.includes(result) && !Number.isNaN(+result)) {
            array.push(+result)
        } else if (!array.includes(result)) {
            array.push(result)
        }
    }
    return array
}
console.log(replacer());

let lowers = (string) => {
    let result = ''
    let i = 0
    while (i < string.length) {
        const current = string[i];
        if ((i + 1) % 2 === 1) {
            result = `${result}${current.toUpperCase()}`;
        } else {
            result = `${result}${current.toLowerCase()}`;
        }
        i++
    }
    return result
}
console.log(lowers("sOMe sTrING in lOWERcaSE"));

let isPalindrome = (word) => {
    const result = word.split('').reverse().join('')
    if (word === result) {
        return true
    } else {
        return false
    }
};
console.log(isPalindrome('мир', 'шалаш'))
console.log(isPalindrome('доход', 'шалаш'))

let arrayThree = (args) => {
    let result = []
    for (let str of args) {
        if (!result.includes(str)) {
            result.push(str)
        }
    }
    return result
}

let array = [1, 2, 3, 1, 2, 3, 5, 4, 6, 7, 3, 2, 1, 2, 3, 5, 3, 3, 1, 2, 3, 4, 1]


console.log(arrayThree(array));

const users = [{
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
    },
    {
        id: 2,
        name: "Ervin Howell",
        username: "Antonette",
        email: "Shanna@melissa.tv",
    },
    {
        id: 3,
        name: "Clementine Bauch",
        username: "Samantha",
        email: "Nathan@yesenia.net",
    },
];

// const validation = (args) => {
//     let value;
//     value = prompt(`Введите ваше ${args}`);
//     while (!value) {
//         value = prompt(`Вы допустили ошибку в написании ${args}. Пожалуйста попробуйте снова`);
//     }
//     return value;
// }

// const showInfo = (names) => {
//     alert(`
//     User name: ${names.username}
//     User email: ${names.email} 
//     `);
// }

// const init = () => {
//     const names = validation('имя');
//     const user = users.find(i => names.toLocaleLowerCase() === i.name.toLocaleLowerCase())
//     if (user !== undefined) {
//         showInfo(user)
//     } else {
//         alert('user not found')
//     }
// }

// init();