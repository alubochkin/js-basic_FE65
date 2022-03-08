/*
    1)
    Дана строка 'sOMe sTrING in lOWERcaSE'
    Создать строку вида 'SoMe sTrInG In lOwErCaSe'
*/

const strSome = "sOMe sTrING in lOWERcaSE";
let strSome1 = "";

for (let i = 0; i < str.length; i++) {
  if (i % 2 === 0) {
    strSome1 += strSome[i].toUpperCase();
  } else {
    strSome1 += strSome[i].toLowerCase();
  }
}

console.log(strSome1);

/*
    2)
    Дан массив [1,2,3,1,2,3,5,4,6,7,3,2,1,2,3,5,3,3,1,2,3,4,1]
    Создать массив из элементов которые встречаются только один раз
*/

const arrOnce = [1, 2, 3, 1, 2, 3, 5, 4, 6, 7, 3, 2, 1, 2, 3, 5, 3, 3, 1, 4];
let arrOnce1 = [];

for (let i = 0; i < arr.length; i++) {
  if (
    arrOnce.indexOf(arrOnce[i]) === i &&
    arrOnce.indexOf(arrOnce[i], i + 1) === -1
  ) {
    arrOnce1.push(arrOnce[i]);
  }
}

console.log(arrOnce1);

/*
    3)
    Создать функцию с именем isPalindrome
    Проверить является ли строка палиндромом
    Пример палиндромов: 'доход', 'шалаш'
*/

function isPalindrome(str) {
  str = str.toLowerCase();
  return str === str.split("").reverse().join("") ? true : false;
}

console.log(isPalindrome("доход"));

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

const searchUser = (someStr) => {
  let lowerStr = someStr.toLowerCase();
  for (let key in users) {
    if (users[key].name.toLowerCase().includes(lowerStr)) {
      console.log(`
        user name: ${users[key].name}
        user email: ${users[key].email}
      `);
    }
  }
};

searchUser(prompt("необходимо ввести имя пользователя"));
