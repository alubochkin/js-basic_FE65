#### Цели

1. [Промисы](#Promise)
2. [then, catch, finally](#Potrbiteli)
3. [Цепочка промисов](#Chaining)
4. [Promise API](#Api)
5. [Async/await](#Async)

---

```js
// попробуем угадать в каком порядке отработает console.log

setTimeout(() => {
  console.log("0");
}, 0);

const promise = new Promise((res, rej) => {
  console.log("1");

  return res();
});

Promise.resolve()
  .then(() => {
    console.log("2");
  })
  .then(() => {
    console.log("3");
  });

console.log("4");
```

---

#### <a href="Promise"></a> Peomises

`Promise` используется для отложенных и асинхронных вычислений

```js
const executer = (resolve, reject) => {
  setTimeout(() => {
    resolve("success");
  }, 1000);
};

new Promise(executer);
```

Функция, переданная в конструкцию `new Promise`, называется исполнитель (`executor`). Когда `Promise` создаётся, она запускается автоматически. Она должна содержать «создающий» код, который когда-нибудь создаст результат. Функция получает два аргумента:

1. `resolve(value)` вызывает успешное исполнение промиса.
2. `reject(value)` отклоняет его.

`Promise` может находиться в трёх состояниях:

1. ожидание (`pending`) - начальное состояние, не исполнен и не отклонён.
2. исполнено (`fulfilled`) - операция завершена успешно.
3. отклонено (`rejected`) - операция завершена с ошибкой.

При создании промис находится в ожидании (`pending`), а затем может стать исполненным (`fulfilled`), вернув полученный результат (значение), или отклонённым (`rejected`), вернув причину отказа. В любом из этих случаев вызывается обработчик, прикреплённый к промису методом `then`.

```js
const executer = (resolve, reject) => {
  // (2)
  const randomNumber = Math.floor(Math.random() * 10); // (3)

  setTimeout(() => {
    // (4)
    if (randomNumber % 2 === 0) {
      resolve("success");
    } else {
      reject("error");
    }
  }, 1000);
};

new Promise(executer).then(
  // (1)
  (res) => {
    // приходит из resolve("success");
    console.log(res); // (5)
  },
  (err) => {
    // приходит из reject("error");
    console.log(err); // (5)
  }
);
```

Что происходит в коде выше:

1. при вызове `new Promise` запускается функция `executer`
2. функция `executer` получает параметры `resolve` и `reject`
3. генерируем `randomNumber`
4. передаём в `setTimeout` колбек в котором проверяем является ли `randomNumber` чётным, если да, то запускаем `resolve("success")`, если нет, то `reject("error");`
5. в `then` обрабатываем результат промиса

---

### <a href="Potrbiteli"></a> Потребители: then, catch, finally

**then**

На примере ранее показано, что `then` принимает себе два аргумента:

1. функция, которая выполняется, когда промис переходит в состояние `fulfilled`, и получает результат.
2. функция, которая выполняется, когда промис переходит в состояние `rejected`, и получает ошибку.

```js
// успешно выполненный промис
new Promise((resolve, reject) => {
  setTimeout(() => resolve("success"), 1000);
}).then(
  (res) => {
    // отработает и выведет success
    console.log(res);
  },
  (err) => {
    // не отработает
    console.log(err);
  }
);

// промис выполненный с ошбибкой
new Promise((resolve, reject) => {
  setTimeout(() => reject("error"), 1000);
}).then(
  (res) => {
    // не отработает
    console.log(res);
  },
  (err) => {
    // отработает и выведет error
    console.log(err);
  }
);
```

**catch**

`catch` успрощает обработку ошибок для нас:

```js
// успешно выполненный промис
new Promise((resolve, reject) => {
  setTimeout(() => resolve("success"), 1000);
}).catch((err) => {
  // не отработает
  console.log(err);
});

// промис выполненный с ошбикбой
new Promise((resolve, reject) => {
  setTimeout(() => reject("error"), 1000);
}).catch((err) => {
  // отработает и выведет error
  console.log(err);
});
```

по сути вызов `catch(callback)` - это сокращённый вариант `then(null, callback)`.

`catch` не обязательно должен быть сразу после ошибки, он может быть далее, после одного или даже нескольких `then`

```js
new Promise((resolve, reject) => {
  setTimeout(() => reject("error"), 1000);
})
  .then(() => {
    // не отработает
    console.log("первый then");
  })
  .then(() => {
    // не отработает
    console.log("второй then");
  })
  .catch((err) => {
    // отработает и выведет error
    console.log(err);
  });
```

`catch` не останавливает выполнение `then`

```js
new Promise((resolve, reject) => {
  setTimeout(() => reject("error"), 1000);
})
  .catch((err) => {
    // отработает и выведет error
    console.log(err);
    return "text from error";
  })
  .then((resFromCatch) => {
    // отработает и выведет text from error
    console.log(resFromCatch);
  });
```

**finally**

В `finally` можно выполнять завершающие процедуры. `finally` не имеет аргументов, в `finnaly` мы не знаем как был завершён промис

```js
new Promise((resolve, reject) => {
  setTimeout(() => resolve("success"), 1000);
})
  .finally(() => {
    console.log("вызов перед then");
  })
  .then((res) => {
    console.log(res);
  })
  .finally(() => {
    console.log("вызов после then");
  });
```

---

#### <a href="Chaining"></a> Цепочка промисов

`promise.then` тоже возвращает промис, так что мы можем вызвать на нём следующий `then`.

```js
new Promise((resolve, reject) => {
  setTimeout(() => resolve(10), 1000);
})
  .then((res) => {
    return res + 10;
  })
  .then((res) => {
    return res + 10;
  })
  .then((res) => {
    return res + 10;
  })
  .then((res) => {
    console.log(res);
  });
```

Результат первого промиса передаётся по цепочке обработчиков `then`

Поток выполнения такой:

1. Начальный промис успешно выполняется через 1 секунду,
2. Затем вызывается обработчик в `then`.
3. Возвращаемое им значение передаётся дальше в следующий обработчик `then`
4. и тд...

`then(callback)` так же может вернуть новый `promise`, в таком случае дальнейшие обработчики ожидают, пока он выполнится, и затем получают его результат.

```js
new Promise((resolve, reject) => {
  setTimeout(() => resolve(10), 1000);
})
  .then((res) => {
    console.log(res);
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(1000), 1000);
    });
  })
  .then((res) => {
    console.log(res);
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(1000000), 1000);
    });
  })
  .then((res) => {
    console.log(res);
  });
```

---

### <a href="Api"></a> API

- `Promise.all(promiseArray)`
  Ожидает исполнения всех промисов или отклонения любого из них. Возвращает промис, который исполнится после исполнения всех ромисов. В случае, если любой из промисов будет отклонён, `Promise.all` будет также отклонён.

```js
const promises = [
  new Promise((res) => setTimeout(() => res(1000), 1000)),
  new Promise((res) => setTimeout(() => res(500), 500)),
  new Promise((res) => setTimeout(() => res(1500), 1500)),
  new Promise((res) => setTimeout(() => res(3000), 3000)),
];

Promise.all(promises).then((res) => {
  console.log(res); // [1000, 500, 1500, 3000]
});
```

```js
const promises = [
  new Promise((res) => setTimeout(() => res(1000), 1000)),
  new Promise((res) => setTimeout(() => res(500), 500)),
  new Promise((res) => setTimeout(() => res(1500), 1500)),
  new Promise((res, rej) => setTimeout(() => rej(3000), 3000)),
];

Promise.all(promises)
  .then((res) => {
    console.log(res); // не отработает
  })
  .catch((err) => {
    console.log(err); // 3000
  });
```

- `Promise.allSettled(promiseArray)`
  Ожидает завершения всех полученных промисов (как исполнения так и отклонения). Возвращает промис, который исполняется когда все полученные промисы завершены (исполнены или отклонены), содержащий массив результатов исполнения полученных промисов.

```js
const promises = [
  new Promise((res) => setTimeout(() => res(1000), 1000)),
  new Promise((res) => setTimeout(() => res(500), 500)),
  new Promise((res) => setTimeout(() => res(1500), 1500)),
  new Promise((res, rej) => setTimeout(() => rej(3000), 3000)),
];

Promise.allSettled(promises)
  .then((res) => {
    console.log(res);
    /*
          {status: "fulfilled", value: 1000}
          {status: "fulfilled", value: 500}
          {status: "fulfilled", value: 1500}
          {status: "rejected", reason: 3000}
        */
  })
  .catch((err) => {
    console.log(err); // не отработает
  });
```

- `Promise.race(promiseArray)`
  Ожидает исполнения или отклонения любого из полученных промисов. Возвращает промис, который будет исполнен или отклонён с результатом исполнения первого исполненного или отклонённого промиса.

```js
const promises = [
  new Promise((res) => setTimeout(() => res(1000), 1000)),
  new Promise((res) => setTimeout(() => res(500), 500)),
  new Promise((res) => setTimeout(() => res(1500), 1500)),
  new Promise((res, rej) => setTimeout(() => rej(3000), 3000)),
];

Promise.race(promises)
  .then((res) => {
    console.log(res); // 500
  })
  .catch((err) => {
    console.log(err); // не отработает
  });
```

- `Promise.reject(reason)`
  Возвращает промис, отклонённый из-за reason.

```js
Promise.reject("error")
  .then((res) => {
    console.log(res); // не отработает
  })
  .catch((err) => {
    console.log(err); // error
  });
```

- `Promise.resolve(value)`
  Возвращает промис, исполненный с результатом value.

```js
Promise.resolve("success")
  .then((res) => {
    console.log(res); // success
  })
  .catch((err) => {
    console.log(err); // не отработает
  });
```

---

#### <a href="Async"></a> Async / await

Начнём с ключевого слова `async`. Оно ставится перед функцией:

```js
const asyncArrowFunc = async () => {
  return "from asyncArrowFunc";
};

async function asyncFunc() {
  return "from asyncFunc";
}
```

`async` всегда взвращает `promise`

```js
const asyncArrowFunc = async () => {
  return "from asyncArrowFunc";
};

asyncArrowFunc().then((res) => console.log(res));

async function asyncFunc() {
  return "from asyncFunc";
}

asyncFunc().then((res) => console.log(res));
```

Ключевое слово `await` заставит интерпретатор `JavaScript` ждать до тех пор, пока `promise` справа от `await` не выполнится. После чего оно вернёт его результат, и выполнение кода продолжится

```js
const promise = () =>
  new Promise((res) => {
    setTimeout(() => res("success"), 3000);
  });

async function asyncFunc() {
  const res = await promise();

  return res;
}

asyncFunc().then((res) => console.log(res)); // success
```

Обработка ошибок внутри `async` функции реализуется с помощью `try/catch/finally`

```js
const successPromise = () =>
  new Promise((res) => {
    setTimeout(() => res("success"), 3000);
  });

const errorPromise = () =>
  new Promise((res, rej) => {
    setTimeout(() => rej("error"), 3000);
  });

async function asyncFunc() {
  try {
    const success = await successPromise();
    console.log(success); // success

    const err = await errorPromise(); // в errorPromise ошибка, код переходит в блок catch
    console.log(err);
  } catch (error) {
    console.log(error); // error
  } finally {
    console.log("finally");
  }
}

asyncFunc();
```

---

#### ДЗ

1. [Промисы](https://learn.javascript.ru/promise-basics)
2. [Цепочка промисов](https://learn.javascript.ru/promise-chaining)
3. [Обработка ошибок в промисах](https://learn.javascript.ru/promise-error-handling)
4. [PrmiseApi](https://learn.javascript.ru/promise-api)
5. [Event loop](https://learn.javascript.ru/event-loop)
6. [Микрозадачи](https://learn.javascript.ru/microtask-queue)
7. [У нас проблемы с промисами](https://habr.com/ru/company/vk/blog/269465/)

- [Видео про event loop](https://youtu.be/8aGhZQkoFbQ?t=1)
