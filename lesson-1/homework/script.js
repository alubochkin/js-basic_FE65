/* 1) Дана строка   'sOMe sTrING in lOWERcaSE'
Создать строку вида 'SoMe sTrInG In lOwErCaSe'*/

// const someString = "sOMe sTrING in lOWERcaSE";

// function replace(string) {
//   let str = string
//     .toLowerCase()
//     .split(" ")
//     .map((item) => item.split(""));

//   str.map((item, index) => {
//     if (index % 2 === 0) {
//       return item.map((item, index) => {
//         index % 2 === 0 ? item.toUpperCase() : item;
//       });
//     }
//   });

//   console.log(str);
// }
// replace(someString);

/* 2) Дан массив [1,2,3,1,2,3,5,4,6,7,3,2,1,2,3,5,3,3,1,2,3,4,1]
Создать массив из элементов которые встречаются только один раз*/

const testArr = [
  1, 2, 3, 1, 2, 3, 5, 4, 6, 7, 3, 2, 1, 2, 3, 5, 3, 3, 1, 2, 3, 4, 1,
];

function sortArray(arr) {
  const newArr = [];
  arr.forEach((elem) => {
    !newArr.includes(elem) ? newArr.push(elem) : elem;
  });
  console.log(testArr);
  console.log(newArr);
  return newArr;
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
