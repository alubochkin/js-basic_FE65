/*
    1)
    Дана строка 'sOMe sTrING in lOWERcaSE'
    Создать строку вида 'SoMe sTrInG In lOwErCaSe'
*/

const str = "sOMe sTrING in lOWERcaSE";
function replace(str) {
  let str2 = str.toLowerCase();
  str2 = str2.split("");
  const result = [];
  for (let i = 0; i < str.length; i++) {
    if (i % 2 == 0) {
      result.push(str[i].toUpperCase());
    } else {
      result.push(str[i].toLowerCase());
    }
  }
  return str;
}
//console.log(replace(str));

/*
    2)
    Дан массив [1,2,3,1,2,3,5,4,6,7,3,2,1,2,3,5,3,3,1,2,3,4,1]
    Создать массив из элементов которые встречаются только один раз
*/

let data = [
  1, 2, 3, 1, 2, 3, 5, 4, 6, 7, 3, 2, 1, 2, 3, 5, 3, 3, 1, 2, 3, 4, 1,
];

let newData = data.filter((el) => data.indexOf(el) === data.lastIndexOf(el));

//console.log(newData);

/*
    3)
    Создать функцию с именем isPalindrome
    Проверить является ли строка палиндромом
    Пример палиндромов: 'доход', 'шалаш'
*/
let palin = "доход";
function isPalindrome(palin) {
  palin = palin.toLowerCase();
  return palin === palin.split("").reverse().join("");
}
//console.log(isPalindrome(palin));
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

let yourName = +prompt("Введите имя пользователя", "");
getFun = (yourName) => {
  let lowerStr = `${yourName}`.toLowerCase();
  for (let item of users) {
    for (let key in item) {
      if (item[key] === lowerStr) {
        const res =
          lowerStr.includes("Leanne Graham") ||
          lowerStr.includes("Ervin Howell") ||
          lowerStr.includes("Clementine Bauch")
            ? console.log(
                `user name: ${item.username}, user email: ${item.email}`
              )
            : console.log("NO");
      }
    }
  }
};
getFun();
