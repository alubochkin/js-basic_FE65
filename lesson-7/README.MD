#### Цели

1. [HTTP](#HTTP)
2. [Fetch](#FETCH)

---

#### <a href="HTTP"></a> HTTP

**HTTP** (HyperText Transfer Protocol) - протокол прикладного уровня передачи данных, изначально - в виде гипертекстовых документов в формате HTML, в настоящее время используется для передачи произвольных данных.

в _HTTP_ данные передаются в явном виде, если какой-то хакер захочет во время их отправки между клиентом и сервером или сервером и клиентом перехватить их, то он их получит в том же виде, что они уходили от сервера к клиенту или от клиента к серверу

**HTTPS** (HyperText Transfer Protocol Secure) - расширение протокола HTTP для поддержки шифрования в целях повышения безопасности

_HTTPS_ протокол использует 2 инструмента защиты

1. _TLC_(или устаревший _SSL_) который обеспечивает шифрование данных между клиентом и сервером или сервером и клиентом. Данные отправляются не в явном виде, если перехватить эти данные, то смысла от них будет мало
2. Подпись цифровым сертификатом. Два вида цифровых сертификатов _Public_ & _Private_:
   - _Public_ ключ сервера, который говорит нам о том, что он действительно является тем сервером к которому мы пришли
   - _Private_ ключ от сервера которым я буду подписывать свои сообщения, чтобы ты понимал, что это я к тебе прихожу со своими запросами. Этот приватный ключ имеет срок годности, чтобы устаревшие данные не могли бы использоваться злоумышленниками

Что происходит, когда вводишь адрес в браузер и нажимаешь **enter**?

1. Браузер анализирует введенный _URL_. Парсит _URL_ и извлекает имя *host*a
2. Сайт находящийся на одном домене может обслуживаться большим количетсвом машин, поэтому нужно определить конкретную машину к которой подключаться. Для этого используется систма _[DNS](https://ru.wikipedia.org/wiki/DNS)_ которая преобразует доменное имя в _IP_ адрес
3. После установления _IP_, бразуеру необходимо отправить запрос, для того, чтобы отправить запрос необходимо установить _[TCP](https://ru.wikipedia.org/wiki/Transmission_Control_Protocol)_ соединение. После того как _TCP_ соединение открыто есть два варианта:
   - если используем _HTTP_, то сразу отправляем запрос
   - если используем _HTTPS_, то поверх _TCP_ необходимо установить _[TLS](https://ru.wikipedia.org/wiki/TLS)_ соединение
4. Отправляем _HTTP_ запрос, ждём когда сервер ответит
5. Получаем данные, работаем с ними

_HTTP_ [методы](https://ru.wikipedia.org/wiki/HTTP#%D0%9C%D0%B5%D1%82%D0%BE%D0%B4%D1%8B):

- **GET** - для получение документа
- **POST** - для отправки данных на сервер
- **PUT** - для отправки документа на сервер
- **PATCH** - аналогично _PUT_, но применяется только к фрагменту ресурса.
- **DELETE** - ля удаления документа

_HTTP_ коды ответа:

- 1xx - информационные
- 2xx - успешно выполненные. 200 OK - запрос выполнен успешно
- 3хх - перенаправления
- 4хх - ошибка на стороне клиента. 400 Bad request - неправильный синтаксис запроса, 401 Unauthorized - требуется авторизация, 403 Forbidden - нет доступа, 404 Not Found - документ не найдеи
- 5хх - ошибка на стороне сервера. 500 Internal Server Error - неожиданная ошибка сервера

_HTTP_ [заголовки](https://ru.wikipedia.org/wiki/%D0%A1%D0%BF%D0%B8%D1%81%D0%BE%D0%BA_%D0%B7%D0%B0%D0%B3%D0%BE%D0%BB%D0%BE%D0%B2%D0%BA%D0%BE%D0%B2_HTTP#%D0%9B%D0%B5%D0%B3%D0%B5%D0%BD%D0%B4%D0%B0):

1. Общие:
   - Content-Type - [MIME](https://developer.mozilla.org/ru/docs/Glossary/MIME_type) тип документа. [Список](https://ru.wikipedia.org/wiki/%D0%A1%D0%BF%D0%B8%D1%81%D0%BE%D0%BA_MIME-%D1%82%D0%B8%D0%BF%D0%BE%D0%B2) MIME типов
   - Content-Length - длинна тела запроса или ответа
   - Content-Encoding - кодирование документа, например с помозью gzip
   - Transfer-Encoding - кодирование для передачи документа
   - Connection - управление соединением
   - Upgrade - смена протокола
2. Запроса:
   - Authorization - авторизация, токен, логин или пароль
   - Cookie - передача состояния на сервер
   - Referer - URI ресурса, после которого клиент сделал текущий запрос.
   - User-Agent - описание web-клиента
   - Accept-\* - согласование содержимого
3. Ответа:
   - Location - новый URL окумента при перенаправлениях
   - Set-Cookie - установки состояния в браузере
   - Date - дата на сервере, для согласования кешей
   - Server - описание web-сервера

---

#### <a href="FETCH"></a> Fetch

**Fetch** предоставляет интерфейс `JavaScript` для работы с запросами и ответами _HTTP_. Он также предоставляет глобальный метод `fetch()`, который позволяет легко и логично получать ресурсы по сети асинхронно.

Синтаксис `fetch`

```js
const promise = fetch(url, [options]);
```

- _url_ – URL для отправки запроса.
- _options_ – дополнительные параметры: метод, заголовки и так далее.

без _options_ выполняется _GET_ запрос

```js
const fetchSomething = (url) => {
  fetch(url)
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => console.log(error));
};
```

```js
const fetchSomething = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
```

Для отправки _POST_-запроса или запроса с другим методом(_PUT_, _PATCH_), нам необходимо использовать fetch параметры:

**method** – HTTP метод, например POST,
**body** – тело запроса

```js
fetch(url, {
  method: "POST", // PUT, PATCH
  body: JSON.stringify({
    title: "some todo",
    description: "some description",
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
```

При методе _DELETE_ тело запроса не указывается

```js
fetch(someUrl, {
  method: "DELETE",
});
```

---

#### ДЗ

1. [Fetch](https://learn.javascript.ru/fetch)
2. [FormData](https://learn.javascript.ru/formdata)
3. [Fetch API](https://learn.javascript.ru/fetch-api)
4. [AXIOS](https://habr.com/ru/company/ruvds/blog/477286/)
5. [URL](https://learn.javascript.ru/url)

- [CORS](https://habr.com/ru/company/macloud/blog/553826/)
- [XMLHttpRequest](https://learn.javascript.ru/xmlhttprequest#http-zagolovki)
