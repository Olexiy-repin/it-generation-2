/*
 * Математичні оператори (+, -, *, /, %, **)
 */

/*
 ? Дано два числа 20 та 10.
 ? Проведіть над цими числами математичні операції (+ - / * %).
*/
// const numA = 2;
// const numB = 5;

// const result = numA ** numB;
// console.log(result);

//? Перевірте чи парні числа 15, 20, 45, 30.
// const numA = 15;
// console.log(numA % 2);

// const numB = 20;
// console.log(numB % 2);

// const numC = 45;
// console.log(numC % 2);

// const numD = 30;
// console.log(numD % 2);

/*
  ? Дано 90 хвилин, дізнайтеся скільки в цьому числі міститься годин і хвилин.
  ? Результат виведіть у консоль.
*/
// const totalMinutes = 90;

// let hours = totalMinutes / 60;
// hours = Math.floor(hours);

// const minutes = totalMinutes % 60;

// console.log(hours);
// console.log(minutes);

/*
 * Number, Number.parseInt(), Number.parseFloat()
 */

/* 
  ? Попросіть користувача ввести число.
  ? Виведіть результат у консоль.
  ? Приведіть рядок до числа.
*/
// const num = Number(prompt('Введіть якесь число'));

// console.log(typeof num);
// console.log(num);

//? Даний рядок '24px', дістаньте з цього рядка ціле число.
// const str = Number.parseInt('24px');

// console.log(str);

//? Даний рядок '25.5%', дістаньте з цього рядка дробове число.
// const str = Number.parseFloat('25.5%');

// console.log(str);

//? Запросіть у користувача ввести два числа, складіть їх та виведіть результат у консоль.
// const firstNumber = Number(prompt('Введіть перше число'));
// const secondNumber = Number(prompt('Введіть друге число'));

// const result = firstNumber + secondNumber;

// console.log(typeof result);
// console.log(result);

/*
 * Math.floor, Math.ceil, Math.round, Math.max, Math.min, Math.pow(), Math.random().
 */

/*
  ? Дано число 23.5, застосуйте до нього різноманітні методи заокруглення.
  ? Протестуйте на числах, 23.3, 23.9
*/
// const number = 23.3;

// const result = Math.round(number);

// console.log(result);

/*
  ? Попросіть користувача ввести число та ступінь.
  ? Зведіть число до ступеня і виведіть результат у консоль.
*/
// const num = Number(prompt('Введіть якесь число'));
// const pow = Number(prompt('Введіть ступінь'));

// const result = Math.pow(num, pow);

// console.log(result);
