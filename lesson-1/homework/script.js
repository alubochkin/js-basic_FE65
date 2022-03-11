/*
    1)
    Дана строка 'sOMe sTrING in lOWERcaSE'
    Создать строку вида 'SoMe sTrInG In lOwErCaSe'
*/

const result = (str) => {
  return str
    .toLowerCase()
    .split(' ')
    .map((item, index) => {
      if (index % 2 === 0){
        return item
          .split('')
          .map((item,index) => {
            return index % 2 === 0 ? item.toUpperCase() : item
          })
          .join('')
      } else {
        return item
          .split('')
          .map((item,index) => {
            return index % 2 !== 0 ? item.toUpperCase() : item
          })
          .join('')
      }
    })
    .join(' ')
}
console.log(result('sOMe sTrING in lOWERcaSE'))
/*  2)
    Дан массив [1,2,3,1,2,3,5,4,6,7,3,2,1,2,3,5,3,3,1,2,3,4,1]
    Создать массив из элементов которые встречаются только один раз
*/
const array = [1,2,3,1,2,3,5,4,6,7,3,2,1,2,3,5,3,3,1,2,3,4,1]
const number =  (array) => {
  const result = []
  array.forEach(item => {
      if(array.indexOf(item) === array.lastIndexOf(item)){
        result.push(item)
      }
  })
  return result
}
console.log(number(array));
/*
    3)
    Создать функцию с именем isPalindrome
    Проверить является ли строка палиндромом
    Пример палиндромов: 'доход', 'шалаш'
*/

const isPalindrome = (string) => {
  return string.split('').reverse().join('') === string ? true : false
}
console.log(isPalindrome('шалаш'))

/*
    4)
    Дан обьект users
    В  окно prompt необходимо ввести имя пользователя
    Если совпадения есть - вывести в console.log строку вида user name: USER_NAME, user email: USER_EMAIL

    * Добавить возможность поиска без учёта регистра
*/

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

const search = (str) => {
  let b = str.toLowerCase()
  users.forEach(item => {
    item.name.toLowerCase().includes(str)
    return console.log(`
    user name: ${item.name}
    user email: ${item.email}
  `)
  })
  return search
}

search((prompt('Введите имя пользователя')))