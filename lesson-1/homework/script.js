// 1)
// Дана строка 'sOMe sTrING in lOWERcaSE'
// Создать строку вида 'SoMe sTrInG In lOwErCaSe'

let string = "sOMe sTrING in lOWERcaSE";
const getString = (str) => {
  let arr = str.split("");
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      arr[i] = arr[i].toUpperCase();
    } else {
      arr[i] = arr[i].toLowerCase();
    }
  }
  let newStr = arr.join("");
  return newStr;
};
console.log(getString(string));

// 2)
// Дан массив [1,2,3,1,2,3,5,4,6,7,3,2,1,2,3,5,3,3,1,2,3,4,1]
// Создать массив из элементов которые встречаются только один раз

const arr = [1,2,3,1,2,3,5,4,6,7,3,2,1,2,3,5,3,3,1,2,3,4,1]

const getUniqueNum = (arr) =>{
  let uniqueNum = [];

  for (let i = 0; i < arr.length; i++){
    if(arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])){
      uniqueNum.push(arr[i])
    }
  } console.log(uniqueNum);
  return uniqueNum
}
console.log(getUniqueNum(arr));
// 3)
// Создать функцию с именем isPalindrome
// Проверить является ли строка палиндромом
// Пример палиндромов: 'доход', 'шалаш'

const isPalindrome = (str) => {
  return str === str.split('').reverse().join('');
};
console.log(isPalindrome('доход'));

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

let currentUser = prompt('your name?')


const searchUser = (userName) => {
  let lowerString = userName.toLowerCase()
  for(let key in users) {
    if(users[key].name.toLowerCase().includes(lowerString)) {
      console.log(`
        user name: ${users[key].name}
        user email: ${users[key].email}
      `)
    } 
  }
}
searchUser(currentUser)