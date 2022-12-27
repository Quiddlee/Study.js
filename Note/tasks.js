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



//(**) Задача с собеседований на числа Фибоначчи

//Создайте функцию, которая будет принимать в себя один аргумент-целое положительное число. Она должна возвращать строку, в которой будут через пробел выведены числа Фибоначчи. Причем, их количество должно быть равно переданному аргументу. Если переданный аргумент не число - вернуть пустую строку. Решать без применения рекурсии.


// function fib(num) {
//     let res = '';
//     let sum = 0;
//     let wew = 1;
//     let check = 0;
//     for (let j = sum; j <= 1; j++) {
//         res += j;
//         sum++;
//         for (let k = wew; k <= 1; k++) {
//             res += k;
//             wew++;
//         }
//         check += sum + wew;
//         res += check;
//     }
//     return res;
// }
// console.log(fib(4));


// const films = [
//     {
//         name: 'Titanic',
//         rating: 9
//     },
//     {
//         name: 'Die hard 5',
//         rating: 5
//     },
//     {
//         name: 'Matrix',
//         rating: 8
//     },
//     {
//         name: 'Some bad film',
//         rating: 4
//     }
// ];

// function showGoodFilms(arr) {
//     return arr.filter(e => e.rating >= 8);
// }
// console.log(showGoodFilms(films));


// function showListOfFilms(arr) {
//     return arr.reduce((sum, current) => `${typeof(sum) === 'object' ? sum.name : sum}, ${current.name}`);
// }
// console.log(showListOfFilms(films));    


// function setFilmsIds(arr) {
//     const sortedArray = arr;
//     arr.map((e, i) => sortedArray[i].id = i);

//     return sortedArray;
// }
// // console.log(setFilmsIds(films));


// const tranformedArray = setFilmsIds(films);

// function checkFilms(arr) {
//     return arr.every(e => e.hasOwnProperty('id'));
// }
// console.log(checkFilms(tranformedArray));


// const funds = [
//     {amount: -1400},
//     {amount: 2400},
//     {amount: -1000},
//     {amount: 500},
//     {amount: 10400},
//     {amount: -11400}
// ];
//
// const getPositiveIncomeAmount = (data) => {
//     const filter = data.filter(e => e.amount > 0);
//
//
//     return filter.reduce((sum, curr) => {
//         if (typeof(sum) === 'object') return sum.amount + curr.amount;
//         if (typeof(sum) !== 'object') return sum + curr.amount;
//     });
// };
//
// const getTotalIncomeAmount = (data) => {
//     if (data.some(e => e.amount < 0)) {
//         return data.reduce((sum, curr) => {
//             if (typeof(sum) === 'object') return sum.amount + curr.amount;
//             if (typeof(sum) !== 'object') return sum + curr.amount;
//         });
//     }
//
//
//     if (data.every(e => e.amount > 0)) return getPositiveIncomeAmount(funds);
// };
// console.log(getTotalIncomeAmount(funds));

// const multiply20 = (price) => price * 20;
// const divide100 = (price) => price / 100;
// const normalizePrice = (price) => price.toFixed(2);
// const compose = (...functions) => (x) => {
//     return functions.reduceRight((previousValue, currentValue) => currentValue(previousValue), x);
// };
//
//
// // const discount = compose(normalizePrice, divide100, multiply20)(200);
// // console.log(discount);


const add1 = function(a){return a + 1}
const addAll3 = function(a,b,c){return a + b + c}
const composeWithArgs = (...args) => (...nums) => {
    return args.reduceRight((previousValue, currentValue) => {
        console.log(previousValue, currentValue, nums);
         return currentValue(previousValue)
    });
};
console.log(composeWithArgs(add1,addAll3)(1,2,3))
