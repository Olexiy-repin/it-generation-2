'use strict';

/*
 * Конкатенація рядків, шаблонні рядки
 */

/*
  ? Запросіть у користувача ім'я з віком та виведіть у консоль повідомлення:
  ? Привіт ім'я_користувача, вам вік_користувача років.
*/
// const userFirstName = prompt('Ваше ім`я');
// const userAge = prompt('Ваш вік');

// const greetMessage = 'Привіт ' + userFirstName + ',' + ' вам ' + userAge + ' років.';

// console.log(greetMessage);

//? Виконайте завдання вище, використовуючи шаблонні рядки
// const userFirstName = prompt('Ваше ім`я');
// const userAge = prompt('Ваш вік');

// const greetMessage = `Привіт ${userFirstName}, вам ${userAge} років.`;

// console.log(greetMessage);

/*
 * Властивості і методи рядків
 */

//? Запитайте у користувача ім'я та дізнайтеся, зі скількох символів, воно складається.
// const userFirstName = prompt('Ваше ім`я');
// const lengthOfUserName = userFirstName.length;

// console.log(lengthOfUserName);

//? Попросіть користувача ввести email і переведіть у нижній регістр.
// let userEmail = prompt('Ваш email');
// userEmail = userEmail.toLowerCase();

// console.log(userEmail);

//? Попросіть користувача ввести email і переведіть у верхній регістр
// let userEmail = prompt('Ваш email');
// userEmail = userEmail.toUpperCase();

// console.log(userEmail);

/*
  ? Є рядок 'HTML, CSS, JS, PHP, React, Vue, Node.js, C, C++'.
  ? Дізнайтеся, чи є в цьому рядку мова: 'JavaScript', або 'JS'?
  ? Якщо є, дізнайтесь позицію на якій перебуває цей підрядок
*/
// const languages = 'HTML, CSS, JS, PHP, React, Vue, Node.js, C, C++';

//? У нас є рядок '23,4', замініть кому на крапку
// const str = '23,4'.replace(',', '.');
// const num = Number(str);

// console.log(num);

/*
  ? У нас є рядок:
  ? 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?'.
  ? Замініть усі входження dog на monkey.
*/
// let str = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';
// str = str.replaceAll('dog', 'monkey');

// console.log(str);

//? У нас є дата у форматі '12:05:21', замініть (:) на (.)
// const someDate = '12:05:21';
// const currentDate = someDate.replaceAll(':', '.');

// console.log(currentDate);
