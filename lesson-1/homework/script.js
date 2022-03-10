/* 1) Дана строка   'sOMe sTrING in lOWERcaSE'
Создать строку вида 'SoMe sTrInG In lOwErCaSe'*/

const string = "sOMe sTrING in lOWERcaSE";

function changeRegister(string) {
  let changedStr = "";
  for (let i = 0; i < string.length; i++) {
    i % 2 === 0
      ? (changedStr += string[i].toUpperCase())
      : (changedStr += string[i].toLowerCase());
  }
  console.log(changedStr);
}
changeRegister(string);

/* 2) Дан массив [1,2,3,1,2,3,5,4,6,7,3,2,1,2,3,5,3,3,1,2,3,4,1]
Создать массив из элементов которые встречаются только один раз*/

const testArr = [
  1, 2, 3, 1, 2, 3, 5, 4, 6, 7, 3, 2, 1, 2, 3, 5, 3, 3, 1, 2, 3, 4, 1,
];

function sortArray(arr) {
  const newArr = arr.reduce((acc, cur) => {
    return arr.indexOf(cur) !== arr.lastIndexOf(cur) ? acc : [...acc, cur];
  }, []);
  console.log(newArr);
}
sortArray(testArr);

/* 3) Создать функцию с именем isPalindrome
Проверить является ли строка палиндромом
Пример палиндромов: 'доход', 'шалаш'*/

function isPalindrome(str) {
  return str === str.split("").reverse().join("")
    ? console.log(str + " " + "is a palindrome")
    : console.log(str + " " + "is not a palindrome");
}
isPalindrome("доход");
isPalindrome("привет");

/*4) Дан обьект users
В  окно prompt необходимо ввести имя пользователя
Если совпадения есть - вывести в console.log строку вида user name: USER_NAME, user email: USER_EMAIL
* Добавить возможность поиска без учёта регистра*/

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

function checkUser(userName) {
  userName = prompt("Enter your username").toLowerCase();

  for (let key in users) {
    if (users[key].name.toLowerCase() === userName) {
      console.log(`
      user name: ${users[key].username}
      user email: ${users[key].email}
      `);
    }
  }
}
checkUser();
