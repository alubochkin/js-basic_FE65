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
switch(currentUser){
  case users[0].name:
    console.log(`name: ${users[0].username}, user email:${users[0].email}`);
    break
    case users[1].name:
    console.log(`name: ${users[1].username}, user email:${users[1].email}`);
    break
    case users[2].name:
    console.log(`name: ${users[2].username}, user email:${users[2].email}`);
    break
    default:
      console.log("I don't know who are you!");
}