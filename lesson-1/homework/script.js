/*
    1) Дана строка 'sOMe sTrING in lOWERcaSE'
    Создать строку вида 'SoMe sTrInG In lOwErCaSe'
   
*/
function replaceLetter(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    let c = str[i];
    result += c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase();
  }
  return result;
}
console.log(replaceLetter('sOMe sTrING in lOWERcaSE'))

/*    2)  Дан массив [1,2,3,1,2,3,5,4,6,7,3,2,1,2,3,5,3,3,1,2,3,4,1]
    Создать массив из элементов которые встречаются только один раз
*/
function getUniqueSymbols(arr) {
  let a = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i != j) {
        if (arr[i] == arr[j]) break;
        if (j == arr.length - 1)
          a.push(arr[i]);
      }
    }
  }
  return a;
}
console.log(getUniqueSymbols([1, 2, 3, 1, 2, 3, 5, 4, 6, 7, 3, 2, 1, 2, 3, 5, 3, 3, 1, 2, 3, 4, 1]))

/*    3)  Создать функцию с именем isPalindrome
    Проверить является ли строка палиндромом
    Пример палиндромов: 'доход', 'шалаш'
*/
function isPalindrome(str) {
  const arrayValues = str.split('');
  const reverseArrayValues = arrayValues.reverse();
  const reverseString = reverseArrayValues.join('');
  if (str === reverseString) {
    console.log('It is a palindrome');
  } else {
    console.log('It is not a palindrome');
  }
}
isPalindrome('доход');

/*    4)  Дан обьект users
    В  окно prompt необходимо ввести имя пользователя
    Если совпадения есть - вывести в console.log строку вида user name: USER_NAME, user email: USER_EMAIL
    * Добавить возможность поиска без учёта регистра
*/
function usersnames() {
  let a
  const inputname = prompt('Enter user name');
  for (let i = 0; i < users.length; i++) {
    if (inputname.toLowerCase() === users[i].name.toLowerCase()) {
      a = `User name: ${users[i].username}, user email: ${users[i].email}`
    }
  }
  if (a) {
    console.log(a)
  } else {
    console.log('We dont find this user')
  }
}



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
usersnames()