/*
 *  Масиви: літерал масива, елементи, індексація, довжина
 */

// const arr = [2, 45, 3, 4566];

// console.log(arr);

// arr[0] = 'Hello';

// console.log(arr);

/*
? Створіть масив genres з елементами Jazz і Blues.
? Додайте "Rock&Roll" в кінець.
? Виведіть у консоль перший елемент масиву.
? Виведіть у консоль останній елемент масиву. Код має працювати для масиву довільної довжини.
? Видаліть перший елемент та виведіть його в консоль.
? Вставте «Country» та «Reggy» на початок масиву.
 */

// const genres = ['Jazz', 'Blues'];
// console.log(genres);

// genres.push('Rock&Roll');
// console.log(genres);

// console.log(genres[0]);

// console.log(genres[genres.length - 1]);

// const deletedElement = genres.shift();
// console.log(genres);
// console.log(deletedElement);

// genres.unshift('Country', 'Reggy');
// console.log(genres);

/*
 * Присвоєння за посиланням і за значенням
 */

/*
? Створіть змінну a = 10.
? Створіть та привласніть змінній b -> змінну a
? Виведіть до консолі обидві ці змінні
? Змініть значення змінної a і ще раз виведіть у консоль
*/
// let a = 10;
// const b = a;

// console.log('a: ', a);
// console.log('b: ', b);

// a = 20;

// console.log('a: ', a);
// console.log('b: ', b);

/*
? Створіть масив arr1 = [1, 2, 3].
? Створіть та привласніть масиву arr2 -> масив arr1
? Виведіть до консолі обидва цих масива
? Додайте елемент в масив arr1 і ще раз виведете обидва масиви в консоль
*/
// const arr1 = [1, 2, 3, 4, 5, 6, 7];
// const arr2 = arr1.slice();

// console.log('arr1: ', arr1);
// console.log('arr2: ', arr2);

// arr1.push(10);

// console.log('arr1: ', arr1);
// console.log('arr2: ', arr2);

/*
 * Перебор масива циклами for та for...of
 */
/*
? Напиши скрипт пошуку найменшого числа у масиві.
? Код має працювати для будь-якого масиву чисел.
? Використовуйте цикл для вирішення задачі.
*/
// 1 Варіант чере for
// const numbers = [2, 17, 94, 1, -20, -1, 23, -100, -40, 37, -50];
// let min = numbers[0];

// for (let i = 1; i < numbers.length; i += 1) {
//   if (numbers[i] < min) {
//     min = numbers[i];
//   }
// }

// console.log(min);

// 2 Варіант череч for...of
// const numbers = [2, 17, 94, 1, -20, -1, 23, -100, -40, 37, -50];
// let min = numbers[0];

// for (const num of numbers) {
//   if (num < min) {
//     min = num;
//   }
// }

// console.log(min);

/*
? У нас є масив із зарплатами працівників, потрібно порахувати загальну суму зарплат
*/
// 1 Варіант чере for
// const salaries = [200, 450, 600, 150, 300];
// let total = 0;

// for (let i = 0; i < salaries.length; i += 1) {
//   const item = salaries[i];

//   //   total = total + item;
//   total += item;
// }

// console.log(total);

// 2 Варіант через for...of
// const salaries = [200, 450, 600, 150, 300];
// let total = 0;

// for (const item of salaries) {
//   total += item;
// }

// console.log(total);

/*
 * Методи масивів
 */
/*
? У нас є масив співробітників, Співробітник Shaw звільнився, видаліть його з масиву
*/
// const employees = ['Dennis', 'Watkins', 'Shaw', 'Ray'];
// console.log(employees);

// const idxOfShaw = employees.indexOf('Shaw');

// employees.splice(idxOfShaw, 1);
// console.log(employees);

// //? Додайте нового співробітника Thornton, перед Watkins;
// const idxOfWatkins = employees.indexOf('Watkins');

// employees.splice(idxOfWatkins, 0, 'Thornton');
// console.log(employees);
