// const restorantData = {
//     menu: [
//         {
//             name: 'Salad Caesar',
//             price: '14$'
//         },
//         {
//             name: 'Pizza Diavola',
//             price: '9$'
//         },
//         {
//             name: 'Beefsteak',
//             price: '17$'
//         },
//         {
//             name: 'Napoleon',
//             price: '7$'
//         }
//     ],
//     waitors: [
//         {name: 'Alice', age: 22}, {name: 'John', age: 24}
//     ],
//     averageLunchPrice: '20$',
//     openNow: true
// };

// function isOpen(prop) {
//     let answer = '';
//     prop ? answer = 'Открыто' : answer = 'Закрыто';

//     return answer;
// }

// console.log(isOpen(restorantData.openNow));

// function isAverageLunchPriceTrue(fDish, sDish, average) {
//     if (+fDish.price.slice(0, -1) + (+sDish.price.slice(0, -1)) < average.slice(0, -1)) {
//         return 'Цена ниже средней';
//     } else {
//         return 'Цена выше средней';
//     }
// }

// console.log(isAverageLunchPriceTrue(restorantData.menu[0], restorantData.menu[1], restorantData.averageLunchPrice));

// function transferWaitors(data) {
//     const copy = Object.assign({}, data);

//     copy.waitors = [{name: 'Mike', age: 32}];
//     return copy;
// }

// console.log(transferWaitors(restorantData));

// Задача на рекурсию n!


// function factorial (n) {
//     if (n <= 0) {
//         return 1;
//     }

//     if (!Number.isInteger(n) || n == '') {
//         return 'Введите целое число';
//     }

//     if (n === 1) {
//         return n;
//     } else {
//         return n * factorial(n - 1);
//     }
// }
// console.log(factorial(5));


// 1) Создайте функцию, которая принимает в себя целое число минут и возвращает время в нужном формате строки. 

// function getTimeFromMinutes(minutes) {
//     if (minutes < 0 || minutes !== parseInt(minutes)) {return 'Ошибка, проверьте данные';}

//     let hours = 0;
//     let mins = 0;
//     let res;

//     if (minutes <= 59) {
//         mins = minutes;
//     }

//     if (minutes > 100 || minutes > 59) {
//         hours = minutes / 60;
//         mins = Math.round(minutes % 60); 
//     }

//     if (hours > 5 || hours === 0) {
//         res = 'часов';
//     }

//     if (hours == 1) {
//         res = 'час';
//     }

//     if (hours > 1) {
//         res = 'часа';
//     }

//     return `Это ${Math.floor(hours)} ${res} и ${mins} минут`;
// }
// console.log(getTimeFromMinutes(120));


//2) Напишите функцию, которая принимает в себя 4 числа и возвращает самое большее из них. Если один из аргументов не является числом или их меньше 4 - возвращается 0. Дробные числа разрешены.


// function findMaxNumber(num1, num2, num3, num4) {
//     const test = [num1, num2, num3, num4];
//     for (let i = 0; i < test.length; i++) {
//         if (typeof test[i] === 'string' || typeof test[i] === 'undefined') {
//             return 0;
//         }
//     }

//     return Math.max(num1, num2, num3, num4);
// }
// console.log(findMaxNumber(1, 5, 12, 11));
