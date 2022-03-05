 //-------------------------------------------------------------------------

// 1)
// Дана строка 'sOMe sTrING in lOWERcaSE'
// Создать строку вида 'SoMe sTrInG In lOwErCaSe'

const replacement = (someString) => {
  return someString
    .split(' ')
    .map(item => item.split(''))
    .map((arr, index) => {
      if(index % 2 === 0 || index === 0) {
        return arr.map((item,index) => index % 2 === 0 || index === 0 ? item.toUpperCase() : item.toLowerCase()).join('')
      } else {
        return arr.map((item,index) => index % 2 === 0 || index === 0 ? item.toLowerCase() : item.toUpperCase()).join('')
      }
    })
    .join(' ')
}

console.log(replacement('sOMe sTrING in lOWERcaSE'))

//-------------------------------------------------------------------------
// 2)
// Дан массив [1,2,3,1,2,3,5,4,6,7,3,2,1,2,3,5,3,3,1,2,3,4,1]
// Создать массив из элементов которые встречаются только один раз

const checkArray = (array) => {
  const result = []
  result.push(array[0])
  array.forEach(item => {
    if(!result.includes(item)) {
      result.push(item)
    }
  })
  return result;
}

console.log(checkArray([1,2,3,1,2,3,5,4,6,7,3,2,1,2,3,5,3,3,1,2,3,4,1]))

//-------------------------------------------------------------------------

// 3)
// Создать функцию с именем isPalindrome
// Проверить является ли строка палиндромом
// Пример палиндромов: 'доход', 'шалаш'

const isPalindrome = (someString) => {
  return someString === someString.split('').reverse().join('') ? true : false
}

console.log(isPalindrome('шалаш'))

//-------------------------------------------------------------------------

// 4)
// Дан обьект users
// В  окно prompt необходимо ввести имя пользователя
// Если совпадения есть - вывести в console.log строку вида user name: USER_NAME, user email: USER_EMAIL

// * Добавить возможность поиска без учёта регистра
 

const users = [
  {
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

const searchUser = (someString) => {
  let lowerString = someString.toLowerCase()
  for(let key in users) {
    if(users[key].name.toLowerCase().includes(lowerString)) {
      console.log(`
        user name: ${users[key].name}
        user email: ${users[key].email}
      `)
    } 
  }
}

searchUser(prompt('необходимо ввести имя пользователя','Clementine Bauch'))

//-------------------------------------------------------------------------