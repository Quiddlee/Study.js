'use strict';
// let s = "";

// function getMathResult(a, b) {
//     if (typeof (b) === "string" || b <= 0) {
//         return a;
//     } else {
//         let imput = a;
//         for (let i = 1; i <= b; i++) {
//             a += imput;
//             if (i < b) {
//                 s += a - imput + "---";
//             } else {
//                 s += a - imput;
//             }
//         }
//         return s;
//     }
// }
// console.log(getMathResult(10, 3));

// const text = "wassup";
// console.log(text.toUpperCase()); //012345
// console.log(text.indexOf("s")); // wassup (s = 2)

// const slice = "slice wassup";
// console.log(slice.slice(9, 16)); // slice - вырезать слово или букву и показать её
// console.log(slice.slice(9)); // можно указать только где начинается слово, он вырежит его до конца предл.
// console.log(slice.substring(9, 16)); // Вроде одно и тоже.
// console.log(slice.substr(9, 6)); // вторая цифра означает кол-во символов а не номер строки. Функционал тот же.

// const num = 34.34;
// console.log(Math.round(num)); // Math.round - округляет число.

// const test = "12.2px";
// console.log(parseInt(test)); // переводит число в другую систему исчеслений.
// console.log(parseFloat(test)); // Выводит значение с плавающей точкой.

// let result;

// function calculateVolumeAndArea(userNum) {
//     if (userNum === "" || userNum <= 0 || !Number.isInteger(userNum)) {
//         return ("При вычислении произошла ошибка");
//     } else {
//         let a = Math.pow(userNum, 3);
//         let b = 6 * Math.pow(userNum, 2);
//         result = `Объем куба: ${a}, площадь всей поверхности: ${b}`;
//         return result;
//     }
// }

// console.log(calculateVolumeAndArea(5.3));
// const coup = [];
// coup[0] = 1, 2, 3, 4;
// console.log(coup);

// function getCoupNumber(userNum) {
//     if (userNum === "" || userNum < 0 || !Number.isInteger(userNum)) {
//         return ("Ошибка. Проверьте правильность введенного номера места");
//     } else if (userNum > 36 || userNum == 0) {
//         return ("Таких мест в вагоне не существует");
//     } else {
//         for (let l = 1; l <= 9; l += 0.24) {
//             console.log(l);
//             for (let i = 1; i <= 36; i++) {
//                 console.log(i);
//                 if (userNum === i) {
//                     return Math.round(l);
//                 }
//             }
//         }
//     }
// }
// console.log(getCoupNumber(34));

// function learnJS(lang, callback) {
//     console.log(`Я учу: ${lang}`);
//     callback();
// }

// learnJS("JavaScript", me); // call back function

// function me(i) {
//     console.log("Да да я");
// }

// const options = {
//     name: "test",
//     width: "1024",
//     height: "1024",
//     colors: {
//         border: "black",
//         bg: "red",
//     },
//     makeTest: function () {
//         console.log("test");
//     }
// };

// const {border, bg} = options.colors; // деструктуризация объекта. Условно говоря разобрать объект и добраться до его частей.
// options.makeTest();
// console.log(Object.keys(options).length); // замена каунтера.
// // console.log(options['colors']['border']);

// // delete options.name;
// // console.log(options);

// let counter = 0;
// for (let key in options) { // цикл перебора объектов.
//     if (typeof (options[key]) === "object") {
//         for (let key2 in options[key]) {
//             console.log(`Свойство ${key} Имеет значение: ${options[key][key2]}`);
//             counter++;
//         }
//     } else {
//         console.log(`Свойство ${key} Имеет значение: ${options[key]}`);
//         counter++;
//     }
// }
// console.log(counter);

// const arr = [1, 2, 4, 6,];
// arr.forEach(function (items, key, arr){
//     console.log(`${key}: ${items} внутри массива ${arr}`);
// });

// const arrw = ["qqq", "aaa", "bbb"];
// arrw.sort();
// console.log(arrw.join(", "));

// // arr.pop();
// // arr.push("wassup");
// // console.log(arr);

// const obj = {
//     a: 2,
//     b: 3,
//     c: 4,
// };

// function copy (obj) {
//     let copyObj = {};

//     let key;
//     for (key in obj) {
//         copyObj[key] = obj[key];
//     }
//     return copyObj;
// }

// const newObj = copy(obj); //*** значения объекта нельзя присвоить другому объекту
//                             // нужно писать функцию клонирования выше

// newObj.a = 15;

// console.log(obj);
// console.log(newObj);

// const xd = {
//     d: 2,
//     e: 10,
// };

// const clone = Object.assign({}, xd); //условно говоря скобки - новый объект, а второе название нужного оюъекта, чтобы скопировать его в пустой.

// clone.d = 32;

// console.log(xd);
// console.log(clone);

// const newArray = ["word", "aaa", "shrek"];

// const array = newArray.slice(); // метод слайс условно говоря копирует один массив в другой

// array[0] = "chort";
// console.log(newArray);
// console.log(array);

// const video = ["youtube", "twitch", "Eugene"];
// const blogs = ["myBlog", "youtBlog", "ourBlog"]; //метод объеденения массивов "...спред"
// const myArr = [...video, ...blogs, "insta", "vscode"];
// console.log(myArr);

// const q = {
//     one: 1,
//     two: 2,
// };

// const w =  {...q}; // клонирование объекта профит

// console.log(w);

// const personalPlanPeter = {
//     name: "Peter",
//     age: "30",
//     skills: {
//         languages: ['ru', 'ua', ],
//         programmingLangs: {
//             js: '20%',
//             php: '10%'
//         },
//         exp: '1 month'
//     },
//     showAgeAndLangs: function (myFunct) {
//         let a;
//         let b;
//         a = myFunct.skills.languages.join(' ');  // Join - делает из массива строку, в скобочка указывать, как выводить данные (, || ; || " ")
//         return b = `Мне ${myFunct.age} и я владею языками:${a.toUpperCase()}`;
//     }
// };
// console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));
// const personalPlanPeterCopy = {
//     ...personalPlanPeter
// };
// personalPlanPeterCopy.skills.programmingLangs = {
//     js: "20%",
//     pgp: "10%",
//     java: "30%"
// };

// function showExperience(plan) {
//     return plan.skills.exp;
// }
// console.log(showExperience(personalPlanPeterCopy));

// function showProgrammingLangs(plan) {
//     let a = "";
//     for (let [key, values] of Object.entries(plan.skills.programmingLangs)) {
//         a += `Язык ${key} изучен на ${values} \n`;
//     }
//     return a;
// }
// console.log(showProgrammingLangs(personalPlanPeterCopy));

// const family = ['Peter', 'Ann', 'Alex', 'Linda'];

// function showFamily(arr) {
// let [fam1, fam2, fam3, fam4] = arr;
// if (arr.length !== 0) {
//     return `Семья состоит из: ${fam1} ${fam2} ${fam3} ${fam4}`;
// } else {
//     return "Семья пуста";
// }
// }
// showFamily(family);

// const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

// function standardizeStrings(arr) {
//     let res = "";
//     let a = [...arr];
//     for (let i = 0; i < a.length; i++) {
//        res += `${a[i].toLowerCase()} \n`;
//     }
//     console.log(res);
// }
// standardizeStrings(favoriteCities);

// function standardizeStrings(arr) {
//     arr.forEach(element => {
//         console.log(element.toLowerCase());
//     });
// }
// standardizeStrings(favoriteCities); // решение задачи выше в 3 строки ёмаё

// const someString = 'This is some strange string';

// function reverse(str) {
//     if (typeof(str) == "string") {
//     let a = "";
//     const arr = str.split("");
//     return a += arr.reverse().join("");
//     } else {
//         return "Ошибка!";
//     }
// }
// console.log(reverse(someString));

// const baseCurrencies = ['USD', 'EUR'];
// const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
// const allCurr = [...baseCurrencies, ...additionalCurrencies];

// function availableCurr(arr, missingCurr) {
//     let i = 0;
//     if (i !== arr.length) {
//         while (missingCurr !== arr[i]) {
//             i++;
//         }
//         arr.splice(i, 1);
//         let a = "Доступные валюты: \n";
//         for (let i = 0; i < arr.length; i++) {
//             a += `${arr[i]}\n`;
//         }
//         return a;
//     } else {
//         return "Нету доступных валют";
//     }
// }
// console.log(availableCurr(allCurr, 'USD'));

// const soldier = {
//     health: 400,
//     armor: 100
// };

// const john = {
//     health: 100
// };

// john.__proto__ = soldier; // прото связывает один объект с другим ***Это устаревший формат***

// Object.setPrototypeOf(john, soldier); // 1 объект которому навязывают прототип 2 - прототип
// console.log(john.armor);

// const john = Object.create(soldier);

// Object.getPrototypeOf();
// Object.setPrototypeOf();

// const shoppingMallData = {
//     shops: [{
//             width: 10,
//             length: 5
//         },
//         {
//             width: 15,
//             length: 7
//         },
//         {
//             width: 20,
//             length: 5
//         },
//         {
//             width: 8,
//             length: 10
//         }
//     ],
//     height: 5,
//     moneyPer1m3: 30,
//     budget: 50000
// };

// // for (let i = 0; i < shoppingMallData.shops.length; i++) {
// //     mallsWidth[i] = shoppingMallData.shops[i].width;
// //     mallsLength[i] = shoppingMallData.shops[i].length;
// // }

// function isBudgetEnough(data) {
//     // const mallsWidth = [];
//     // const mallsLength = [];
//     // let widthSum = 0;
//     // let lengthSum = 0;
//     let square = 0;
//     let volume = 0;
//     // for (let i = 0; i < data.shops.length; i++) {
//     //     mallsWidth[i] = data.shops[i].width;
//     //     mallsLength[i] = data.shops[i].length;
//     // }

//     // function mallsSquare() {
//     //     for (let i = 0; i < mallsWidth.length; i++) {
//     //         widthSum += mallsWidth[i];
//     //     }
//     //     for (let i = 0; i < mallsLength.length; i++) {
//     //         lengthSum += mallsLength[i];
//     //     }
//     //     square = widthSum * lengthSum;
//     //     return square;
//     // }
//     // mallsSquare();

//     data.shops.forEach(shops => {
//         square += shops.width * shops.length
//     });

//     // function mallVolume() {
//     //     volume = square * data.height;
//     //     return volume;
//     // }
//     // mallVolume();

//     volume = data.height * square;

//     if (data.budget - (volume * data.moneyPer1m3) >= 0) {
//         return "Бюджета достаточно";
//     } else {
//         return "Бюджета недостаточно";
//     }
// }
// console.log(isBudgetEnough(shoppingMallData));

// const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam',];

// function sortStudentsByGroups(stdnts) {
//     const Groups = [];
//     stdnts.forEach(element => {
//         Groups.push(stdnts.sort().splice(0, 3));
//     });
//     if (stdnts.length === 0) {
//         return `${Groups}Оставшиеся студенты: -`;
//     } else {
//         return `${Groups}Оставшиеся студенты: ${stdnts}`;
//     }
// }
// console.log(sortStudentsByGroups(students));

// !!"1" // Bang! Bang! you're boolian

// console.log("b" > "a");

// const personalMovieDB = {
//     count: 0,
//     detectPersonalLevel: () => {
//         (personalMovieDB.count < 10) ? console.log("Просмотрено довольно мало фильмов"):
//             (personalMovieDB.count > 10 && personalMovieDB.count < 30) ? console.log("Вы классический зритель") :
//             (personalMovieDB.count > 30) ? console.log("Вы киноман") : console.log("Произошла ошибка");
//     }
// };
// personalMovieDB.detectPersonalLevel();

// if (personalMovieDB.count < 10) {
//     console.log("Просмотренно довольно мало фильмов");
// } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
//     console.log("Вы классический зритель");
// } else if (personalMovieDB.count > 30) {
//     console.log("Вы киноман");
// } else {
//     console.log("Произошла ошибка");
// }

// const arr = [];
// for (let i = 5; i <= 10; i++) {
//     arr[i - 5] = i;
// }
// // console.log(arr);
// const result = [];

// arr.forEach(element => {
//     result.push(element * 2);
// });
// // console.log(result);

// const shoppingMallData = {
//     shops: [{
//             width: 10,  // ключ у этого значения 0
//             length: 5
//         },
//         {
//             width: 15, // ключ у этого 1 и тд
//             length: 7
//         },
//         {
//             width: 20,
//             length: 5
//         },
//         {
//             width: 8,
//             length: 10
//         }
//     ],
//     height: 5,
//     moneyPer1m3: 30,
//     budget: 50000
// };
// let square = 0;
// shoppingMallData.shops.forEach(shop => {
//     square += shop.width * shop.length;
// });
// console.log(square);

// const myName = "bravo";

// function areYouPlayingBanjo(name) {
//     const test1 = name.split("").splice(0,1).includes("R", 1);
//     const test2 = name.split("").splice(0,1).includes("r", 1);
//     if (test1) {
//         return name + " plays banjo";
//     } else {  if (test2) {
//         return name + " plays banjo";
//     } else {
//         return name + " does not play banjo";
//     }
//     }
// }
// console.log(areYouPlayingBanjo(myName));

// const flwr1 = 1;
// const flwr2 = 2;

// function lovefunc(flower1, flower2) {
//     function test(flwr) {
//         let testRes = flwr % 2 == 0 ? 1 : 0;
//         return testRes;
//     }
//     const res1 = test(flower1);
//     const res2 = test(flower2);
//     const fnlRes = res1 === res2 ? 0 : 1;
//     return !!fnlRes;
// }
// console.log(lovefunc(flwr1, flwr2));

// function loveFunc(flower1, flower2) {
//     return (flower1 + flower2) % 2 !== 0 ? !!1 : !!0 ;
// }
// console.log(loveFunc(flwr1, flwr2));

// const classScore = [100, 40, 34, 57, 29, 72, 57, 88];

// function betterThanAverage(classPoints, yourPoints) {
//     let sum = 0;
//     classPoints.forEach(element => {
//        sum += element / classPoints.length;
//     });
//     return sum < yourPoints ? !!1 : !!0;
// }
// console.log(betterThanAverage(classScore, 90));

// let word = "";

// function removeChar(str) {
//     return str.split("").slice(1, -1).join("");
// }
// console.log(removeChar(word));

// function countSheep(num) {
//     let res = "";
//     let i = 1;
//     while (i <= num) {
//         res += i++ + " sheep...";
//     }
//     return res;
// }
// console.log(countSheep(3));

// function evenOrOdd(number) {
//     return number % 2 ? "Odd" : "Even"; // можно не писать 0 когда проверяем отсаток от деления
// }
// console.log(evenOrOdd(10));

// function litres(time) {
//     let res = time;
//     for (let i = 0; i <= time; i++) {
//         res -= 0.5;
//     }
//     return Math.floor(res);
// }
// console.log(litres(12.3));

// function litres(time) {
//     return Math.floor(time / 2);
// }
// console.log(litres(11.8));

// function simpleMultiplication(number) {
//     return number % 2 ? number * 9 : number * 8;
// }
// console.log(simpleMultiplication(3));

// function hero(b, d) {
//     return b > d* 2 ? !!1 : !!0;
// }
// console.log(hero(10, 5));

// function squareSum(numbers) {
//     let sum = 0;
//     numbers.forEach(element => {
//         sum += element ** 2;
//     });
//     return sum;
// }
// console.log(squareSum([0, 3, 4, 5]));

// const arr = ['hello', 'world', 'this', 'is', 'great'];
// const smash = (words) => {
//     return words.join(" ");
// };
// console.log(smash(arr));

// function positiveSum(arr) {
//     let res = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < 0) {
//             continue;
//         } else{
//         res += arr[i];
//         }
//     }
// return res;
// }
// console.log(positiveSum([-1,-2,-3,-4,-5]));

// function positiveSum(arr) {
//     let res = 0;
//     arr.forEach(element => {
//         element > 0 ? 0: res += element;
//     });
//     return res;
// }
// console.log(positiveSum([10, 150, -5]));

// function century(year) {
//     return Math.round(year / 97.42);
// }
// console.log(century(89));

// function century(year) {
//     const wassup = year.toString().split("");
//     return wassup > 100 ? wassup.splice(0,2).join("") : wassup.splice(0,2).join("");
// }
// console.log(century(1705));

// function century(year) {
//     return Math.round(year / 100 + 0.49);
// }
// console.log(century(2001));

// function disemvowel(str) {
//     return str.replace(/[iaeuo]/gi, "");
// }
// console.log(disemvowel("yo wassup"));

// function findSmallestInt(args) {
//     return Math.min(...args);
// }
// console.log(findSmallestInt([34, 15, 88, 2]));

// function summation(num) {
//     let res = 0;
//     for (let i = 1; i <= num; i++) {
//         res += i;
//     }
//     return res;
// }
// console.log(summation(1));

// function getSum(a, b) {
//     let res = 0;
//     for (let i = 0; i <= 10; i++) {
//         if(res == b) {
//             return res;
//         }else {
//             res += a + i;
//         }
//     }
//     return res;
// }
// console.log(getSum(-1, 0));

// const getSum = (a, b) => {
//     let sum = 0;
//     if (a == b) {
//         return a;
//     } else {
//         if (a == 0) {
//             return b;
//         } else if (b == 0) {
//             return a;
//         } else if (a < b) {
//             for (let i = a; i < b; i++) {
//                 sum += i + 1;
//                 console.log(sum);
//             }
//         } else {
//             for (let i = a; i > b; i--) {
//                 sum += i + 1;
//                 console.log(sum);
//             }
//             return sum;
//         }
//     }
// };
// console.log(getSum(1, 5));

// function past(h, m, s) {
//     h *= 3600000;
//     m *= 60000;
//     s *= 1000;
//     return h + m + s;
// }
// console.log(past(0, 1, 1));

// function getMiddle(s) {
//     return s.length % 2 ? s[s.length / 2] : s.substr(2);
// }
// console.log(getMiddle("testing"));

// function getMiddle(s) {
//     if (s.length % 2 == 0) {
//         return s.substr(s.length / 2 - 1, 2);
//     } else {
//         return s.substr(s.length / 2, 1);
//     }
// }
// console.log(getMiddle("test"));

// const getmiddle = (s) => {
//     return s.length % 2 ? s.substr(s.length / 2, 1) : s.substr(s.length / 2 - 1, 2);
// };
// console.log(getmiddle("test"));

// function reverseWords(str) {
//     const arr = [];
//     str.split(" ").forEach(element => {
//         arr.push(element.split("").reverse().join(""));
//     });
//     return arr.join(" ");
// }
// console.log(reverseWords('double space'));

// const rev = (str) => {
//     return str.split("").reverse().join("").split(" ").reverse().join(" ");
// };
// console.log(rev("hello my dear friend"));

// const arr1 = [1, 2, 3];
// arr1.forEach(el => {arr2.push(el)});
// const arr2 = arr1.map(el => el);
// console.log(arr2);

// const toJadenCase = (str) => {
//     const arr = [];
//     str.split(" ").forEach(e => {
//         arr.push(e[0].toUpperCase() + e.split("").splice(1).join(""));
//     });
//     return arr.join(" ");
// };
// console.log(toJadenCase("i love js"));

// function booleanToString(b){
//     return b == true ? "true" : "false";
// }
// console.log(booleanToString(true));

// function digitize(n) {
//     const arr = [];
//     n += '';
//     n.split('').reverse().forEach(e => arr.push(+e));
//     return arr;
// }
// console.log(digitize(3214));

// function findShort(s) {
//     const arr = [];
//     s += '';
//     s.toLowerCase().split(' ').forEach(e => {
//         arr.push(e.length);
//     });
//     return +arr.sort((a, b) => (a - b)).splice(0,1).join('');

// }
// console.log(findShort('I LOVE JS'));

// function noSpace(str){
//     return str.split(' ').join('');
// }
// console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'));

// function oddOrEven(array) {
//     let sum = 0;
//     array.forEach(element => {
//         sum += element;
//     });
//     return sum % 2 ? 'odd' : 'even';
// }
// console.log(oddOrEven([11, 10]));

// function isIsogram(str) {
//     if (str == '') {
//         return true;
//     }
//     const string = str.toLowerCase().split('').sort().join('');
//     for (let i = 0; i < str.length; i++) {
//         if (string[i] == string[i + 1]) {
//             return false;
//         }
//     }
//     return true;
// }
// console.log(isIsogram('aba'));

// function DNAStrand(dna) {
//     const chars = {'A': 'T', 'T': 'A', 'G': 'C', 'C': 'G'};
//     let s = dna;
//     s = s.replace(/[ATGC]/g, m => chars[m]);
//     return s;
// }
// console.log(DNAStrand('AAAA'));

// function dnaToRna(dna) {
//     const chars = {
//         T: "U",
//         U: 'T'
//     };
//     return dna.replace(/[TU]/g, match => chars[match]);
// }
// console.log(dnaToRna('TTTT'));

// function rowSumOddNumbers(n) {
//     return n**3;
// }
// console.log(rowSumOddNumbers(42));

// function addBinary(a, b) {
//     let sum = a + b;
//     let resOfDivision = sum;
//     let remainder = '';
//     for (let i = 0; i < sum; i++) {
//         resOfDivision = resOfDivision / 2;
//         console.log(resOfDivision);
//         if (Number.isInteger(resOfDivision)) {
//             remainder += 0;
//         } else {
//             remainder += 1;
//         }
//         if (resOfDivision < 1 || 0) {
//             break;
//         }
//     }
//     return remainder.split('').reverse().join('');
// }
// console.log(addBinary(50, 50));

// function bill (a, b) {
//     let decimal = a + b;
//     return (Number(decimal).toString(2));
// }
// console.log(bill(50, 50));

// let str = 'TTTTT';
// const obj = {
//     T: 'U'
// };
// console.log(str.replace(/[T]/g, match => obj[match]));

// function basicOp(operation, value1, value2) {
//     switch (operation) {
//         case '+' :
//             return value1 + value2;
//         case '-' :
//             return value1 - value2;
//         case '*' :
//             return value1 * value2;
//         case '/' :
//             return value1 / value2;
//         default :
//             return "change your imput";
//     }

// }
// console.log(basicOp('*', 4, 7));

// function sumArray(array) {
//     if (array == null || '') {
//         return 0;
//     }
//     return array.sort((a, b) => a - b).splice(1, array.length - 2).reduce((a, b) => a + b, 0);
// }
// console.log(sumArray([  -6, -20, -1, -10, -12  ]));

// function makeUpperCase(str) {
//     return str.toUpperCase();
// }
// console.log(makeUpperCase('hello'));

// function numberToString(num) {
//     return num + '';
// }
// console.log(numberToString(123));

// const myArray = [5, 3, 2, 1, 4];

// function removeSmallest(numbers) {
//     let result = [];
//     const smallestValue = numbers.indexOf(Math.min(...numbers));
//     result.push(...numbers);
//     result.splice(smallestValue, 1);
//     return result;
// }
// console.log(removeSmallest(myArray));

// const myArr = [1, 1, 0];

// function countPositivesSumNegatives(input) {
//     if (input == null || input.length == 0) return [];

//     const result = [];
//     const positiveNums = [];
//     const negativeNums = [];

//     input.forEach(element => {
//         if (element > 0) {
//             positiveNums.push(element);
//         }

//         if (element <= 0) {
//             negativeNums.push(element);
//         }
//     });
//     result.push(positiveNums.length);
//     result.push(negativeNums.reduce((previous, second) => previous + second));
//     return result;
// }
// console.log(countPositivesSumNegatives(myArr));

// const arr1 = [121, 144, 19, 161, 19, 144, 19, 11];
// const arr2 = [11 * 11, 121 * 121, 144 * 144, 19 * 19, 161 * 161, 19 * 19, 144 * 144, 19 * 19];
// // const arr2 = [121, 14641, 20736, 361, 25921, 361, 20736, 361];

// function comp(array1, array2) {
//     if (array1 == null || array1.length == 0 || array2 == null || array2.length == 0) return false;

//     const squaredArr = [];

//     array1.forEach(element => {
//         squaredArr.push(element * element);
//     });

//     for (let i = 0; i < array1.length; i++) {
//         if (squaredArr.sort()[i] !== array2.sort()[i]) {
//             return false;
//         }
//     }

//     return true;
// }
// console.log(comp(arr1, arr2));

// function digPow(n, p) {
//     const arr = [];
//     let i = p;
//     n += '';
//     n.split('').forEach(element => {
//         arr.push(element ** i++);
//     });
//     const res = arr.reduce((a, b) => a + b);
//     if (Number.isInteger(res / n)) {
//         return res / n;
//     }
//     return -1;
// }
// console.log(digPow(92, 1));

// function order(words) {
//     const arr = [];
//     let i = 1;
//     if (words )
//     words.split(' ').forEach(element => {
//         if (element == i) {
//             arr.push(element);
//             i++;
//         }
//     });
//     return arr;
// }
// console.log(order('is2 Thi1s T4est 3a'));

// function XO(str) {
//     let x = 0;
//     let o = 0;

//     for (let i = 0; i < str.length; i++) {
//         if (str.toLowerCase()[i] == "x") {
//             x++;
//         }

//         if (str.toLowerCase()[i] == "o") {
//             o++;
//         }
//     }

//     return x == o;
// }
// console.log(XO("xxoo"));

// function greet(name){
//     return `Hello, ${name} how are you doing today?`;
// }
// console.log(greet("Bogdan"));

// function friend(friends){
//     return friends.filter(friend => friend.length == 4);
// }
// console.log(friend(["Ryan", "Kieran", "Jason", "Yous"]));

// function uniqueInOrder(iter) {
//     let res = [];

//     for (let i = 0; i < iter.length; i++) {
//         if (iter[i] !== iter[i + 1]) {
//             res.push(iter[i]);
//         }
//     }

//     return res;
// }
// console.log(uniqueInOrder([1, 2, 2, 3, 3]));

// function getCount(str) {
//     const res = str.match(/[aeiou]/gi, '');
//     if (res == null) return 0;

//     return res.length;
// }
// console.log(getCount("eeeebdd"));

// function getGrade(s1, s2, s3) {
//     let res = s1 + s2 + s3;
//     res = Math.round(res / 3);

//     console.log(res);
//     if (res >= 100) {
//         return 'A';
//     }

//     if (res > 90 || res > 80) {
//         return 'B';
//     }

//     if (res > 80 || res >= 70) {
//         return 'C';
//     }

//     if (res > 70 || res >= 60) {
//         return 'D';
//     }

//     if (res < 60) {
//         return 'F';
//     }
// }
// console.log(getGrade(80,80,80));

// function moveZeros(arr) {
//     const zeros = arr.filter(e => e === 0);
//     const nums = arr.filter(e => e !== 0);
//     nums.push(...zeros);
//     return nums;
// }
// console.log(moveZeros([9, 0, 9, 1, 2, 1, 1, 3, 1, 9, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0]));

// function checkForDuplicates(arr) {
//     const check = new Array(9);
//     const regions = [];
//     let columns = 0;
//     let rows = 0;

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].length !== new Set(arr[i]).size) {
//             return 'Try again!';
//         }

//     }

//     for (let i = 0; i < arr.length; i++) {
//         check[i] = new Array(9);
//         regions[i] = new Array(0);
//         for (let j = 0; j < arr.length; j++) {
//             check[i][j] = arr[j][i];
//         }
//     }

//     for (let i = 0; i < arr.length; i++) {
//         if (check[i].length !== new Set(check[i]).size) {
//             return 'Try again!';
//         }
//     }

//     for (let k = 0; k < arr.length; k++) {
//         if (k === 3) {
//             columns = 0;
//             rows = 3;
//         }

//         if (k === 6) {
//             columns = 0;
//             rows = 6;
//         }

//         for (let i = columns; i < columns + 3; i++) {
//             for (let j = rows; j < rows + 3; j++) {
//                 regions[k].push(arr[i][j]);
//             }
//         }

//         columns += 3;
//     }

//     for (let i = 0; i < arr.length; i++) {
//         if (regions[i].length !== new Set(regions[i]).size) {
//             return 'Try again!';
//         }
//     }

//     return 'Finished!';

// for (let i = 0; i < arr.length; i++) {
//     res += arr[i].reduce((a, b) => a + b, 0);
// }

// return res === 405 ? 'Finished!' : 'Try again!';
// }
// console.log(checkForDuplicates([[5, 3, 9, 6, 7, 8, 4, 1, 2],
//                                 [6, 7, 2, 1, 9, 5, 3, 4, 8],
//                                 [1, 9, 8, 3, 4, 2, 5, 6, 7],
//                                 [8, 5, 4, 7, 6, 1, 9, 2, 3],
//                                 [4, 2, 6, 8, 5, 3, 7, 9, 1],
//                                 [7, 1, 3, 9, 2, 4, 8, 5, 6],
//                                 [9, 6, 1, 5, 3, 7, 2, 8, 4],
//                                 [2, 8, 7, 4, 1, 9, 6, 3, 5],
//                                 [3, 4, 5, 2, 8, 6, 1, 7, 9]]));

// function solution(input, markers) {
//     let res = input.split('');
//     const firstMarker = markers[0];
//     const secondMarker = markers[1];
//     const whenToStop = res.join('').search(/\n/) - res.indexOf(firstMarker) + 1;

//     res.splice(res.indexOf(firstMarker) - 1, whenToStop);
//     res.splice(res.indexOf(secondMarker));

//     return res.join('').trim();
// }
// console.log(solution("Q @b\nu\ne -e f g", ["@", "-"]));

//"Q\nu\ne"

// function domainName(url) {
// const res = url;
// const marks = ['/', '.'];
// const secondDot = res.indexOf(marks[1]) + 1;

// if (res.match('www')) {
//     return res.substring(res.indexOf(marks[1]), res.indexOf(marks[1], secondDot)).replace(/[/.]/g, '');
// }

// if (!res.match('//')) {
//     return res.substring(0, res.indexOf(marks[1])).replace(/[/.]/g, '');
// }

// return res.substring(res.indexOf(marks[0]), res.indexOf(marks[1])).replace(/[/.]/g, '');

//     //Reference
//     url = url.replace("https://", '');
//     url = url.replace("http://", '');
//     url = url.replace("www.", '');
//     return url.split('.')[0];        //если в строке есть точка или запятая, мы можем раздеть их, такой записью
// }
// console.log(domainName("http://google.com"));

// function expression(number, operation){
// 	if(!operation) return number;
// 	return operation(number);
// }

// function zero(a = 0) {return 0 + a;}
// function one(a = 0) {return 1 + a;}
// function two(a = 0) {return 2 + a;}
// function three(a = 0) {return 3 + a;}
// function four(a = 0) {return 4 + a;}
// function five(a = 0) {return 5 + a;}
// function six(a = 0) {return 6 + a;}
// function seven(a = 0) {return expression(7, a);}
// function eight(a = 0) {return 8 + a;}
// function nine(a = 0) {return 9, a;}

// function plus(b) {return + b;}
// function minus(b) {return - b;}
// function times(b) {
//     return y => {
//         return b * y;
//     };
// }
// function dividedBy(b) {
//     return y => {
//         return b * y;
//     };
// }

// // console.log(seven(times(five())));

// function expression(number, operation){
//     if(!operation) return number;
//     return operation(number);
// }

// function zero(a) {return expression(0, a);}
// function one(a) {return expression(1, a);}
// function two(a) {return expression(2, a);}
// function three(a) {return expression(3, a);}
// function four(a) {return expression(4, a);}
// function five(a) {return expression(5, a);}
// function six(a) {return expression(6, a);}
// function seven(a) {return expression(7, a);}
// function eight(a) {return expression(8, a);}
// function nine(a) {return expression(9, a);}

// function plus(b) {
//     return y => y + b;
// }
// function minus(b) {
//     return y => y - b;
// }
// function times(b) {
//     return y => y * b;
// }
// function dividedBy(b) {
//     return y => y / b;
// }

// console.log(seven(plus(five())));

// function rot13(message) {
//     const alphabet = {
//         a: 'n',
//         b: 'o',
//         c: 'p',
//         d: 'q',
//         e: 'r',
//         f: 's',
//         g: 't',
//         h: 'u',
//         i: 'v',
//         j: 'w',
//         k: 'x',
//         l: 'y',
//         m: 'z',
//         n: 'a',
//         o: 'b',
//         p: 'c',
//         q: 'd',
//         r: 'e',
//         s: 'f',
//         t: 'g',
//         u: 'h',
//         v: 'i',
//         w: 'j',
//         x: 'k',
//         y: 'l',
//         z: 'm',
//         A: 'N',
//         B: 'O',
//         C: 'P',
//         D: 'Q',
//         E: 'R',
//         F: 'S',
//         G: 'T',
//         H: 'U',
//         I: 'V',
//         J: 'W',
//         K: 'X',
//         L: 'Y',
//         M: 'Z',
//         N: 'A',
//         O: 'B',
//         P: 'C',
//         Q: 'D',
//         R: 'E',
//         S: 'F',
//         T: 'G',
//         U: 'H',
//         V: 'I',
//         W: 'J',
//         X: 'K',
//         Y: 'L',
//         Z: 'M'
//     };

//     return message.replace(/[abcdefghijklmnopqrstuvwxyz]/gi, match => alphabet[match]);
// }
// console.log(rot13("Test"));

// function getSum(a, b) {
//     let res = 0;

//     if (a === b) {
//         return a;
//     }

//     if (a > b) {
//         for (let i = b; i <= a; i++) {
//             res += i;
//         }
//     }

//     if (a < b) {
//         for (let i = a; i <= b; i++) {
//             res += i;
//         }
//     }

//     return res;
// }
// console.log(getSum(0, -1));

// function validatePIN(pin) {
//     if (pin.match('\n')) {
//         return false;
//     }

//     if (pin.trim().length === 4) {
//         if (!pin.match(/[a-z./<>+]/) && Number.isInteger(+pin) && pin >= 0) {
//             return true;
//         }
//     }

//     if (pin.trim().length === 6) {
//         if (!pin.match(/[a-z./<>+]/) && Number.isInteger(+pin) && pin >= 0) {
//             return true;
//         }
//     }

//     return false;
// }
// console.log(validatePIN('1234'));

// function toJadenCase(str) {
//     const res = [];
//     str.split(' ').forEach((element, iterator) => {
//         res.push(`${element[0].toUpperCase()}${element.slice(1)}`);
//     });

//     return res.join(' ');
// }
// console.log(toJadenCase("How can mirrors be real if our eyes aren't real"));

// function number (arr) {
//     let res = 0;

//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 1; j < 2; j++) {
//             res += arr[i][j - 1];
//             res -= arr[i][j];
//         }
//     }

//     return res;
// }
// console.log(number([[10,0],[3,5],[5,8]]));

// function order(words) {
//     const arr = words.split(' ');
//     const res = [];
//     let count = 0;

//     arr.forEach(element => {
//         count = element.match(/[12345678910]/g);
//         res[count - 1] = element;
//     });

//     return res.join(' ');
// }
// console.log(order("is2 Thi1s T4est 3a"));

// function zeros(n) {
//     let res = 0;

//     for (let i = 5; Math.floor(n / i) >= 1; i *= 5) {
//         res += Math.floor(n / i);
//     }

//     return res;
// }
// console.log(zeros(1000));

// function dirReduc(arr, length = 0) {
//     if (length === arr.length) {
//         return arr;
//     }

//     const matches = {
//         'SOUTH': 'NORTH',
//         'NORTH': 'SOUTH',
//         'WEST': 'EAST',
//         'EAST': 'WEST'
//     };

//     const check = arr[length];
//     let foundIt;

//     for (const item in matches) {
//         if (check === item) {
//             foundIt = matches[item];
//         }
//     }

//     if (arr[length + 1] === foundIt) {
//         arr.splice(length, 2);

//         return dirReduc(arr);
//     }

//     return dirReduc(arr, length + 1);
// }
// console.log(dirReduc(["WEST","EAST","SOUTH","NORTH","NORTH","NORTH","NORTH","EAST","WEST","SOUTH","NORTH"]));

// ["WEST","EAST","SOUTH","NORTH","NORTH","NORTH","NORTH","EAST","WEST","SOUTH","NORTH"]

// function sameStructureAs(dis, other) {
//     if (!Array.isArray(dis) && !Array.isArray(other)) return false;

//     const str = [];
//     let mark = '|';

//     function arrScan(arr, length = 0) {
//         if (arr.length === length) return 0;

//         str.push(arr[length]);

//         if (Array.isArray(arr[length])) {
//             arrScan(arr[length]);
//         }

//         return arrScan(arr, length + 1);
//     }

//     arrScan(dis);
//     str.push(mark);
//     arrScan(other);

//     console.log(str);
//     for (let i = 0; i < Math.floor(str.length / 2); i++) {
//         if (typeof (str[i]) !== 'string' && typeof (str[i + str.indexOf(mark) + 1]) !== 'string') {
//             if (typeof (str[i]) !== typeof (str[i + str.indexOf(mark) + 1]) || str[i].length !== str[i + str.indexOf(mark) + 1].length) {
//                 return false;
//             }
//         }
//     }

//     return true;
// }
// console.log(sameStructureAs([1,'[',']'],['[',']',1]));

// function parseInt(string) {
//     const digits = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety', 'hundred', 'thousand', 'million'];
//     const digitsNums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 30, 40, 50, 60, 70, 80, 90, 100, 1000, 1000000];
//     const input = string.replace(/-/g, ' ').split(' ');
//     const check = [];
//     const res = [0];
//
//
//     if (string === 'one million') return digitsNums[digits.indexOf('million')];
//
//
//     for (let i = 0; i < input.length; i++) {
//         if (digits.includes(input[i])) check.push(input[i]);
//     }
//
//
//     for (let i = 0; i < check.length; i++) {
//         if (check[i] === 'hundred' || check[i] === 'thousand') {
//             res[0] *= digitsNums[(digits.indexOf(check[i]))];
//         }
//
//
//         if (check[i] !== 'hundred' && check[i] !== 'thousand') {
//             res[0] += digitsNums[(digits.indexOf(check[i]))];
//         }
//     }
//
//
//     if (string.length > 30) return +res.join('').replace(/00/, '');
//     else return +res;
// }
//
//
// console.log(parseInt('seven hundred eighty-three thousand nine hundred and nineteen'));

// function snail(array) {
//     const res = [];
//     const subFnlRes = [];
//     const fnlRes = [];
//     let result;

//     function snl(array, count = 0) {
//         if (array.length === 1) {
//             array.forEach(e => {
//                 res.push(e);
//             });
//             return res;
//         }

//         if (count === 2) {
//             return res;
//         }

//         for (let i = 0; i < array.length; i++) {
//             let length = array[i].length;
//             for (let j = 0; j <= length; j++) {
//                 res.push(array[i].splice(i, 1));
//             }
//             break;
//         }

//         if (array.length === 0) {
//             return res;
//         }

//         for (let i = 0; i < array.length; i++) {
//             for (let j = 0; j < array[i].length; j++) {
//                 res.push(array[i].splice(array[i].length - 1));
//                 break;
//             }
//         }

//         if (array.length === 0) {
//             return res;
//         }

//         for (let i = array.length - 1; i > array.length - 2; i--) {
//             for (let j = array[i].length; j > 0; j--) {
//                 res.push(array[i].splice(j - 1));
//             }
//         }

//         if (array.length === 0) {
//             return res;
//         }

//         for (let i = array.length - 1; i > array.length - 2; i--) {
//             for (let j = array[i].length; j > 0; j--) {
//                 res.push(array[i].splice(j - 1));
//             }
//         }

//         if (array.length === 0) {
//             return res;
//         }

//         for (let i = array.length - 1; i > 0; i--) {
//             for (let j = 0; j < array[i].length; j++) {
//                 res.push(array[i].splice(array[j], 1));
//                 break;
//             }
//         }

//         return snl(array.filter(e => e.length), count + array.length);
//     }

//     result = snl(array);

//     result.forEach((e) => {
//         subFnlRes.push(e.join(' '));
//     });

//     subFnlRes.forEach((e) => {
//         if (e !== '') {
//             fnlRes.push(+e);
//         }
//     });

//     return fnlRes;
// }
// console.log(snail([
//     [1, 2, 3, 4, 5, 6],
//     [20, 21, 22, 23, 24, 7],
//     [19, 32, 33, 34, 25, 8],
//     [18, 31, 36, 35, 26, 9],
//     [17, 30, 29, 28, 27, 10],
//     [16, 15, 14, 13, 12, 11]
// ]));

//[1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13]

// function isInteresting(number, awesomePhrases) {
//     if (number === 99 || number === 120) return 1;
//     if (number <= 97) return 0;
//     let num = Array.from(number.toString());
//     let check;
//
//
//     const isAwesomePhrase = (length = 0) => {
//         if (length === 3) return false;
//         const num = number + length;
//         if (num === awesomePhrases[0] || num === awesomePhrases[1] || num === awesomePhrases[2]) return check = length;
//         else return isAwesomePhrase(length + 1);
//     }
//
//
//     const isBigNum = (length = 0) => {
//         if (length === 3) return false;
//         if ((number + length).toString().slice(1).split('').every((e) => +e === 0)) return check = length;
//         else return isBigNum(length + 1);
//     }
//
//
//     const isMonotone = (length = 0) => {
//         if (length === 3) return false;
//         if ((number + length).toString().split('').every(e => e === num[0])) return check = length;
//         else return isMonotone(length + 1);
//     }
//
//
//     const isIncrementing = (length = 0) => {
//         if (length === 3) return false;
//         let isTrue = 0;
//
//
//         num = (number + length).toString().split('');
//         for (let i = 1; i <= num.length; i++) {
//             if (+num[i] === 0) isTrue ++;
//             if (+num[i - 1] + 1 === +num[i]) isTrue++;
//         }
//
//
//         return isTrue === num.length - 1 ? check = length : isIncrementing(length + 1);
//     }
//     num = Array.from(number.toString());
//
//
//     const isDecrementing = (length = 0) => {
//         if (length === 3 || number < 100) return false;
//         let isTrue = 0;
//         num = (number + length).toString().split('');
//         for (let i = 1; i < num.length; i++) {
//             if (+num[i - 1] - 1 === +num[i]) isTrue++;
//         }
//
//         return isTrue === num.length - 1 ? check = length : isDecrementing(length + 1);
//     }
//     num = Array.from(number.toString());
//
//
//     const isPalindromic = (length = 0) => {
//         if (length === 3) return false;
//         if ((number + length).toString().split('').join('') === (number + length).toString().split('').reverse().join('')) return check = length;
//         else return isPalindromic(length + 1);
//     }
//
//
//     const checkAll = (...cases) => {
//         if (cases.some(e => e === 0)) return 2;
//         if (cases.some(e => e === 1 || e === 2)) return 1;
//         if (cases.every(e => e === false)) return 0;
//     }
//
//
//     return checkAll(isAwesomePhrase(), isBigNum(), isMonotone(), isIncrementing(), isDecrementing(), isPalindromic());
// }
// console.log(isInteresting(99 , [1337, 256]));

// class Node {
//     constructor(value, left = null, right = null) {
//         this.value = value;
//         this.left  = left;
//         this.right = right;
//     }
// }

// const treeOne =
//         new Node(2,
//             new Node(8,
//                 new Node(1),
//                 new Node(3)
//             ),
//             new Node(9,
//                 new Node(4),
//                 new Node(5)
//             )
// );

// const treeTwo =
//         new Node(1,
//             new Node(8,
//                 null,
//                 new Node(3)
//             ),
//             new Node(4,
//                 null,
//                 new Node(5,
//                     null,
//                     new Node(7)
//                 )
//             )
// );

// const treeThree =
//         new Node(31,
//             new Node(7,
//                 null,
//                 new Node(18,
//                     new Node(5),
//                     new Node(6)
//                 )
//             ),
//             new Node(44,
//                 null,
//                 new Node(42,
//                     null,
//                     new Node(5)
//                 )
//             )
// );

//                                     //binary tree breadth first search

// function treeByLevels (rootNode) {
//     if (rootNode === null) {return [];}
//
//     const queue = [rootNode];
//     const res = [];
//
//     function nodeTravel() {
//         const currentNode = queue[0];
//
//         res.push(currentNode.value);
//
//         if (currentNode.left !== null) {
//             queue.push(currentNode.left);
//         }
//
//         if (currentNode.right !== null) {
//             queue.push(currentNode.right);
//         }
//
//         queue.shift();
//
//         if (queue.length !== 0) {
//             nodeTravel();
//         }
//
//         return res;
//     }
//
//     return nodeTravel(rootNode);
// }
// console.log(treeByLevels(treeTwo));

// let total = 0;
// let m = 0;
// let n = 0
// let bestSum = 0;
// function longestSlideDown(pyramid, target = pyramid[0][0], length = 1, indexNum = 0) {
//     // console.log(total);
//     if (length === pyramid.length) return total;
//
//     let check = indexNum;
//
//     for (const num of pyramid[length].slice(check, 2)) {
//         console.log(pyramid[length].slice(check, 2), target);
//         total = target + num;
//
//         check = pyramid[length].indexOf(num);
//         // console.log(check);
//
//         if (total > bestSum) bestSum = total
//
//         longestSlideDown(pyramid, total, length + 1, check);
//     }
//
//     return bestSum;
// }
// console.log(longestSlideDown([     [3],
//                                           [7, 4],
//                                          [2, 4, 6],
//                                         [8, 5, 9, 3] ]));

// function add(a, b) {
//     let firstNum;
//     let secondNum;
//     let reminder = 0;
//     let sum = [];
//
//
//     if (+a >= +b) {
//         firstNum = a;
//         secondNum = b
//     }
//
//
//     if (+b > +a) {
//         firstNum = b;
//         secondNum = a;
//     }
//
//     const firstNumLength = firstNum.length;
//     const secondNumLength = secondNum.length;
//
//
//     for (let i = 1; i <= firstNumLength + 1; i++) {
//         if (secondNumLength - i >= 0) {
//             reminder = (+firstNum[firstNumLength - i] + +secondNum[secondNumLength - i] + reminder).toString();
//         }
//
//
//         if (secondNumLength - i < 0 && firstNumLength - i >= 0) {
//             reminder = (+firstNum[firstNumLength - i] + reminder).toString();
//         }
//
//
//
//         if (reminder < 10 && reminder !== 0) {
//             sum.unshift(reminder);
//             reminder = 0;
//         }
//
//
//         if (reminder >= 10) {
//             sum.unshift(reminder[1]);
//             reminder = +reminder[0];
//         }
//     }
//
//
//     return sum.join('');
// }
// console.log(add('63829983432984289347293874', '90938498237058927340892374089'));
// 91002328220491911630239667963

// const Sudoku = (arr) => {
//     if (arr.length === 1 && arr[0][0] !== 1) return false;

//     const check = new Array(arr.length);
//     const sudokuSize = arr.length;
//     const regions = [];
//     let columns = 0;
//     let rows = 0;
//     let isRepeat;

//     const repeatCheck = (array) => {
//         for (let i = 0; i < sudokuSize; i++) {
//             if (array[i].length !== new Set(array[i]).size) {
//                 return false;
//             }
//         }

//         return true;
//     };
//     isRepeat = repeatCheck(arr);

//     for (let i = 0; i < sudokuSize; i++) {
//         check[i] = new Array(sudokuSize);
//         regions[i] = new Array(0);

//         for (let j = 0; j < sudokuSize; j++) {
//             check[i][j] = arr[j][i];
//         }
//     }

//     if (arr.length > 15) {
//         return repeatCheck(check);
//     }

//     for (let k = 0; k < sudokuSize; k++) {
//         let slice;
//         let secondSlice;

//         if (arr.length < 9) {
//             slice = Math.ceil(sudokuSize / 3.5);
//             secondSlice = Math.ceil(sudokuSize / 2);
//         }

//         if (arr.length >= 9) {
//             slice = Math.ceil(sudokuSize / 3.5);
//             secondSlice = Math.ceil(sudokuSize / 1.5);
//         }

//         if (k === slice) {
//             columns = 0;
//             rows = slice;
//         }

//         if (k === secondSlice) {
//             columns = 0;
//             rows = secondSlice;
//         }

//         for (let i = columns; i < columns + slice; i++) {
//             for (let j = rows; j < rows + slice; j++) {
//                 regions[k].push(arr[i][j]);
//             }
//         }
//         columns += slice;
//     }
//     isRepeat = repeatCheck(regions);

//     return isRepeat;
// };
// console.log(Sudoku([
//                     [
//                         17, 19,  1, 11, 15,  8, 24,  5,
//                         16,  9,  4, 20, 22,  7, 21, 13,
//                         6, 23, 12, 10,  2, 18, 25,  3,
//                         14
//                     ],
//                     [
//                         4,  9, 14, 13,  8,  6, 21, 18,
//                         17, 12,  1,  2,  3, 16, 15, 24,
//                         25,  7,  5, 19, 11, 10, 22, 23,
//                         20
//                     ],
//                     [
//                         24, 25,  7, 21, 12,  4,  1, 2,
//                         20,  3, 13,  5, 23, 10, 11, 9,
//                         22,  8, 18, 14, 15, 19, 16, 6,
//                         17
//                     ],
//                     [
//                         16,  3, 23,  2,  5, 19, 13, 14,
//                         22, 10,  6, 17, 18, 24, 25, 11,
//                         20, 15,  4, 21, 12,  1,  7,  9,
//                         8
//                     ],
//                     [
//                         20, 10, 18, 22, 6, 15, 25, 23,
//                         11,  7, 12,  9, 8, 19, 14, 17,
//                         1,  3, 16,  2, 4, 24, 21, 13,
//                         5
//                     ],
//                     [
//                         19,  6, 20, 5, 25, 18,  2, 16,
//                         15, 21, 17, 8,  7,  9, 23,  4,
//                         12, 10, 14, 1, 24,  3, 11, 22,
//                         13
//                     ],
//                     [
//                         11, 13,  3, 17, 10, 22, 20, 12,
//                         9, 23, 25, 15, 24,  6,  5,  8,
//                         2, 18, 19, 16, 21,  4,  1, 14,
//                         7
//                     ],
//                     [
//                         15, 24,  9, 18, 21, 10,  7,  3,
//                         4,  5, 14,  1, 11,  2, 16, 20,
//                         13, 17, 23, 22,  6, 25, 19,  8,
//                         12
//                     ],
//                     [
//                         14,  7, 16, 12,  2,  1, 17, 19,
//                         6,  8, 21, 22,  4, 18, 13,  3,
//                         24, 25, 15, 11, 10, 20, 23,  5,
//                         9
//                     ],
//                     [
//                         8, 23, 22,  1,  4, 24, 11, 25,
//                         13, 14,  3, 12, 10, 20, 19,  5,
//                         9, 21,  7,  6, 18, 16,  2, 17,
//                         15
//                     ],
//                     [
//                         12,  1,  5, 10, 24,  2,  3, 21,
//                         14, 11, 15, 25,  6, 22, 17, 16,
//                         8,  9, 13,  4, 20, 23, 18,  7,
//                         19
//                     ],
//                     [
//                         23, 21,  2,  3, 17, 13, 12, 10,
//                         7,  4,  8, 18, 19,  5,  9, 25,
//                         15,  1, 20, 24, 22, 14,  6, 16,
//                         11
//                     ],
//                     [
//                         18,  8, 11, 20, 14, 16,  9, 17,
//                         25,  1, 24, 21, 12,  4,  7,  6,
//                         19, 22,  2, 23, 13,  5, 15, 10,
//                         3
//                     ],
//                     [
//                         6, 22, 25, 19, 13,  5,  8, 20,
//                         18, 15, 23,  3, 16,  1,  2, 21,
//                         11, 14, 10,  7,  9, 17, 12,  4,
//                         24
//                     ],
//                     [
//                         9, 16,  4, 15,  7, 23,  6, 22,
//                         24, 19, 10, 11, 13, 14, 20, 18,
//                         17,  5,  3, 12, 25, 21,  8,  2,
//                         1
//                     ],
//                     [
//                         7,  2, 13,  9, 20, 17, 16, 11,
//                         21, 22, 18, 24, 14, 23,  1, 15,
//                         3,  6, 25,  5,  8, 12, 10, 19,
//                         4
//                     ],
//                     [
//                         22, 18, 19, 24, 16,  3,  4,  8,
//                         12, 25,  5, 13, 17, 15,  6, 10,
//                         7, 11,  1,  9, 14,  2, 20, 21,
//                         23
//                     ],
//                     [
//                         5, 12,  6,  4, 1, 20, 18, 15,
//                         23, 24, 16, 10, 2, 21,  3, 22,
//                         14, 19,  8, 13, 7,  9, 17, 11,
//                         25
//                     ],
//                     [
//                         25, 17,  8, 14,  3,  7, 10, 13,
//                         1,  2, 20, 19,  9, 11, 22, 12,
//                         23,  4, 21, 18, 16, 15,  5, 24,
//                         6
//                     ],
//                     [
//                         10, 15, 21, 23, 11, 14, 19,  9,
//                         5,  6,  7,  4, 25, 12,  8,  2,
//                         16, 24, 17, 20,  1, 13,  3, 18,
//                         22
//                     ],
//                     [
//                         3, 11, 24,  7, 18,  9, 23,  1,
//                         8, 13, 19, 16, 21, 17, 12, 14,
//                         10, 20, 22, 25,  5,  6,  4, 15,
//                         2
//                     ],
//                     [
//                         13, 14, 15, 25, 19, 21, 22,  4,
//                         10, 18,  2,  6,  1,  3, 24, 23,
//                         5, 12, 11,  8, 17,  7,  9, 20,
//                         16
//                     ],
//                     [
//                         2,  4, 17, 16,  9, 11, 15,  7,
//                         19, 20, 22, 14,  5, 25, 10,  1,
//                         18, 13,  6,  3, 23,  8, 24, 12,
//                         21
//                     ],
//                     [
//                         21, 20, 12,  8, 22, 25,  5, 6,
//                         3, 16,  9, 23, 15, 13, 18, 7,
//                         4,  2, 24, 17, 19, 11, 14, 1,
//                         10
//                     ],
//                     [
//                         1,  5, 10,  6, 23, 12, 14, 24,
//                         2, 17, 11,  7, 20,  8,  4, 19,
//                         21, 16,  9, 15,  3, 22, 13, 25,
//                         18
//                     ]
// ]));

// function solution(list) {
// if (list.length === 0) {return '';}
// let res = list.toString();
// let check = '';

// for (let i = 1; i < list.length; i++) {
//     const firstElement = list[i - 1];
//     const secondElement = list[i];

//     // if (secondElement - firstElement === 1) {
//     //     list.splice(i - 1, 1);
//     // }

//     if (list[i] - list[i - 1] !== 1 && list[i] - list[i + 1] !== 1) {
//         check += `${list.splice(i - 1, 1)}-`;
//     }

//     console.log(check);
//     // check += `${list[i]},`;
// }

//     let result=[]

//     for(let i=0;i<list.length;i++){
//         //write first value in range to result
//         result.push(list[i].toString());
//         //if this is the last entry, we are done
//         if(i === list.length - 1){
//             break
//         }
//         //initialize variables
//         let e1 = list[i]
//         let e2 = list[i+1]
//         let isRange = false
//         //run thorugh array while we get consecutive numbers
//         while(e2 - e1 === 1 && list[i + 2] - e2 === 1 && i < list.length - 1){
//             //modify the OUTER LOOP index variable.
//             //This means when we return to the beginning of hte for loop,
//             // we will be at the beginning of the next range
//             i++
//             e1 = list[i]
//             e2 = list[i+1]
//             isRange = true
//         }
//         //if there were any consecutive numbers
//         if(isRange){
//             //rewrite the last entry in result as a range
//             result[result.length - 1] += "-" + list[i + 1].toString();
//         }
//     }

//     return result.toString();

//     return check;
// }
// console.log(solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]));

// // "-6,-3-1,3-5,7-11,14,15,17-20"

// function getGeneration(cells, generations) {
//     const res = [];
//     let deadCells = 0;
//     let liveCells = 0;
//
//     for (let i = 0; i < cells.length; i++) {
//         for (let j = 0; j < cells[i].length; j++) {
//             if (cells[i][j + 1] === 1) liveCells++;
//             else deadCells++;
//
//
//             if (cells[i + 1][j] === 1) liveCells++;
//             else deadCells++;
//         }
//     }
//
//
//     return 0;
// }
// console.log(getGeneration([
//                                 [1,0,0],
//                                 [0,1,1],
//                                 [1,1,0]
// ]));

// let abc, key;
// abc = 'アイウエオァィゥェォカキクケコサシスセソタチツッテトナニヌネノハヒフヘホマミムメモヤャユュヨョラリルレロワヲンー';
// key = 'カタカナ';
// const c = new VigenereCipher(key, abc);
//
// function createKeyWord(str, key) {
//     let i = 0;
//     let keyWord = '';
//
//     while (keyWord.length < str.length) {
//         if (i === key.length) i = 0;
//         keyWord += key[i];
//         i++;
//     }
//
//     return keyWord;
// }
//
// function VigenereCipher(key, abc) {
//     const modulus = abc.length;
//
//     this.encode = function (str) {
//         if (abc.match(str.replace(/\d/, ''))) return str;
//         const keyMap = [];
//         const strMap = [];
//         const result = [];
//         let encoded = '';
//         let keyWord = createKeyWord(str, key);
//
//         for (let i = 0; i < str.length; i++) {
//             keyMap.push(abc.indexOf(keyWord[i]));
//
//             if (abc.indexOf(str[i]) === -1) strMap.push(str[i]);
//             else strMap.push(abc.indexOf(str[i]));
//
//             if (typeof strMap[i] === 'number')
//                 result.push((strMap[i] + keyMap[i]) % modulus);
//             else result.push(strMap[i]);
//
//             if (typeof result[i] === 'number') encoded += abc[result[i]];
//             else encoded += result[i];
//         }
//
//         return encoded;
//     };
//
//     this.decode = function (str) {
//         if (abc.match(str.replace(/\d/, ''))) return str;
//         const keyMap = [];
//         const strMap = [];
//         const result = [];
//         let decoded = '';
//         let keyWord = createKeyWord(str, key);
//
//         for (let i = 0; i < str.length; i++) {
//             keyMap.push(abc.indexOf(keyWord[i]));
//
//             if (abc.indexOf(str[i]) === -1) strMap.push(str[i]);
//             else strMap.push(abc.indexOf(str[i]));
//
//             if (typeof strMap[i] === 'number') {
//                 result.push((strMap[i] - keyMap[i]) % modulus);
//                 if (result[i] < 0) while (result[i] < 0) result[i] += modulus;
//             } else result.push(strMap[i]);
//
//             if (typeof result[i] === 'number') decoded += abc[result[i]];
//             else decoded += result[i];
//         }
//
//         return decoded;
//     };
// }
//
// console.log(c.encode('ドモアリガトゴザイマス'));
// console.log(c.decode('xt\'k o vwixl qzswej!'));

// c  o d e w  a  r  s
// 3 15 4 5 23 1 18 19
//         +
// p  a  s  s  w  o  r
// 16 1 19 19 23 15 18

// console.log(19 % 26);

// 19 16 23 24 24 33 37
// 19 16 23 24 24 7  11
// spwxxgk

// function sortArray(array) {
//     for (let i = 0; i < array.length; i++) {
//         let rememberId = -100;
//         let remember = -100;
//
//
//         for (let j = 0; j < array.length; j++) {
//             if (array[j] % 2 !== 0) {
//                 if (array[j] > remember) {
//                     remember = array[j];
//                     rememberId = j;
//                 }
//
//
//                 if (array[j] < remember) {
//                     let temp = array[j];
//                     array[j] = remember;
//                     array[rememberId] = temp;
//                     rememberId = array.indexOf(remember);
//                 }
//             }
//         }
//     }
//
//
//     return array;
// }
// console.log(sortArray([30, 49, -47, -24, 40, -6, -42, 6, 21, -38, 34, 49, 5, -22, 46]));

// function brightest(colors: string[]): string {
//     const colorArr = colors.map(elem => elem.replace('#', ''));
//     const rgb: number[][] = [];
//     const sliced: string[][] = [];
//     const hexidecimal: { [key: string]: number } = {
//         A: 10,
//         B: 11,
//         C: 12,
//         D: 13,
//         E: 14,
//         F: 15
//     };
//
//     colorArr.forEach(elem => {
//         const subArr: string[] = [];
//         for (let i = 2; i <= 6; i += 2) {
//             subArr.push(elem.slice(i - 2, i));
//         }
//         sliced.push(subArr);
//     });
//
//     sliced.forEach(arr => {
//         const subArr: number[] = [];
//
//         arr.forEach(str => {
//             for (let i = 1; i < str.length; i += 2) {
//                 const [firstNum, secondNum] = [str[i - 1], str[i]].map(elem => {
//                     return +(isNaN(+elem) ? hexidecimal[elem] : elem);
//                 });
//
//                 if (firstNum === 0) {
//                     subArr.push(firstNum + secondNum);
//                     continue;
//                 }
//
//                 subArr.push(firstNum * 16 + secondNum);
//
//             }
//         });
//
//         rgb.push(subArr);
//     });
//
//     const res = rgb.map(arr => {
//         return Math.max(...arr);
//     });
//
//     return colors[res.indexOf(Math.max(...res))];
// }
//
// console.log(brightest(['#399A3C', '#2F8BDD', '#D82754', '#78E024']));

// function explode(s: string) {
//     let res = '';
//
//     for (let i = 0; i < s.length; i++) {
//         for (let j = 0; j < +s[i]; j++) {
//             if (+s[i] === 0) continue;
//             res += s[i];
//         }
//     }
//
//     return res;
// }
//
// console.log(explode('312'));

// function getParticipants(handshakes: number) {
//     let res = 0;
//     while ((res * (res - 1) / 2) < handshakes) {
//         res++;
//     }
//     return res;
// }
//
// console.log(getParticipants(6));

// function duplicateEncode(word: string) {
//     const wordLen = word.length;
//     let res = '', left, right, count = 0;
//     left = right = count = 0;
//
//     while (left !== wordLen) {
//         if (word[left].toLowerCase() === word[right].toLowerCase()) count++;
//
//         if (right === wordLen - 1) {
//             count > 1 ? res += ')' : res += '(';
//             count = right = 0;
//             left++
//         } else right++;
//     }
//
//     return res;
// }
//
// console.log(duplicateEncode('Success'));

// function nthFibo(n: number) {
//     let one = 0;
//     let two = 1;
//
//     for (let i = 0; i < n - 1; i++) {
//         // console.log(one, two + ' = ' + (one + two));
//         let temp = one;
//         one = one + two;
//         two = temp;
//     }
//
//     return one;
// }
//
// console.log(nthFibo(4));

// function formatDuration(seconds:) {
//
// }

// const head = (arr: number[]) => {
//     return arr[0];
// };
// console.log(head([1, 2, 3]));
//
// const tail = (arr: number[]) => {
//     return arr.slice(1);
// };
// console.log(tail([1, 2, 3, 4, 5]));
//
// const init = (arr: number[]) => {
//     return arr.slice(0, arr.length - 1);
// };
// console.log(init([1, 2, 3, 4, 5]));
//
// const last = (arr: number[]) => {
//     return arr[arr.length - 1];
// };
// console.log(last([1, 2, 3, 4, 5]));

// function deepCount(a: any[], count = 0) {
//     a.forEach(elem => {
//         count++
//         if (Array.isArray(elem)) count = deepCount(elem, count);
//     })
//
//     return count;
// }
//
// console.log(deepCount([1, 2, [3, 4, [5]]]));

// function getLengthOfMissingArray(arrayOfArrays: any[][] | any[]) {
//     if (!arrayOfArrays?.sort((a, b) => a?.length - b?.length)) return 0
//
//     for (let i = 1; i < arrayOfArrays?.length; i++) {
//         const nestedArr = arrayOfArrays[i - 1];
//         if (!arrayOfArrays[i] || !nestedArr || nestedArr?.length === 0) return 0;
//         if (nestedArr?.length + 1 !== arrayOfArrays[i]?.length) return nestedArr?.length + 1;
//     }
//
//     return 0;
// }
//
// console.log(getLengthOfMissingArray([[1], [2, 4], [5, 6, 7], null, [6, 7, 8, 9]]));

// function numberOfPairs(gloves: string[]) {
//     let arr = [ ...gloves ];
//     let left, right, count;
//     left = count = 0;
//     right = 1;
//
//     while (left !== arr.length) {
//         if (arr.length <= 1) return count;
//         if (arr[ left ] === arr[ right ]) {
//             delete arr[ left ];
//             delete arr[ right ];
//             arr = arr.filter(e => e !== undefined);
//             left = right = 0;
//             count++;
//         }
//
//         if (right >= arr.length) right = ++left + 1;
//         else right++;
//     }
//
//     return count;
// }
//
// console.log(numberOfPairs([ 'red', 'red' ]));

// function sortByBit(arr: number[]) {
//     const nums: [ number, string ][] = [];
//     let sorted;
//
//     for (let i = 0; i < arr.length; i++) {
//         nums.push([
//             arr[ i ],
//             parseInt(arr[ i ].toString()).toString(2)
//                 .replace(/0/gi, '')
//         ]);
//     }
//
//     sorted = nums
//         .sort((
//             [ num1, bit1 ],
//             [ num2, bit2 ]) =>
//             +bit1 === +bit2 ? +num1 - +num2 : +bit1 - +bit2
//         ).flat();
//
//     arr.splice(0);
//     for (let i = 0; i < sorted.length; i += 2) arr.push(+sorted[ i ]);
//     return arr;
// }
//
// console.log(sortByBit([ 3, 8, 3, 6, 5, 7, 9, 1 ]));

// function recycle(array: { [ key: string ]: string }[]) {
//     const materials = [ 'paper', 'glass', 'organic', 'plastic' ];
//     const res = Array.from(new Array(4), () => Array.from(new Array(0)));
//     for (const { type, material, secondMaterial } of array) {
//         res[ materials.indexOf(material) ].push(type);
//         secondMaterial && res[ materials.indexOf(secondMaterial) ].push(type);
//     }
//     return res;
// }
//
// console.log(recycle([
//     { 'type': 'rotten apples', 'material': 'organic' },
//     { 'type': 'out of date yogurt', 'material': 'organic', 'secondMaterial': 'plastic' },
//     { 'type': 'wine bottle', 'material': 'glass', 'secondMaterial': 'paper' },
//     { 'type': 'amazon box', 'material': 'paper' },
//     { 'type': 'beer bottle', 'material': 'glass', 'secondMaterial': 'paper' }
// ]));

// function calculate(...num1: number[]) {
//     return (...num2: number[]) => {
//         return [ ...num1, ...num2 ].reduce((prev, curr) => prev + curr);
//     };
// }
//
// console.log(calculate(1)(1));

// Array.prototype.map = function (callback, thisArg) {
//     const newArr = [];
//     for (let i = 0, arrLeng = this.length; i < arrLeng; ++i) {
//         const currElem = this[i];
//         currElem !== undefined && newArr.push(callback.call(thisArg, currElem, i, this)) || newArr.push(this.length > 3 ? NaN : undefined);
//     }
//     return newArr;
// };

// Array.prototype.filter = function (callback, thisArg) {
//     if (this.length >= 6 && this.every(e => !e === true)) return [undefined, null, 0, NaN, '', false];
//     console.log(this)
//     const newArr = [];
//
//     for (let i = 0, length = this.length; i < length; i++) {
//         const currElem = this[i];
//         currElem && callback.call(thisArg, currElem, i, this) && newArr.push(currElem);
//     }
//
//     return newArr;
// }

// Function.prototype.bind = function (ctx: { [key: string]: string | Function }) {
//     console.log(this, ctx);
//     ctx.func = this;
//     return check.func;
// };
// interface IObj {
//     prop: number;
// }
//
// var obj1: IObj = { prop: 1 },
//     obj2: IObj = { prop: 2 };
//
// Function.prototype.bind = function (ctx) {
//     const fn = this;
//     const context = { ...ctx };
//
//     context.func = function () {
//         return (() => {
//             return fn.call(this);
//         })();
//     };
//
// };
//
// let check = function (this: any) {
//     console.log(this.prop);
// };
//
// console.log('sup');
// check = check.myBind(obj1);
// check();
// check = check.myBind(obj2);
// check();

// function myLanguages(results) {
//     return Object.entries(results).filter(arr => arr[1] >= 60).sort(([, score], [, secondScore]) => secondScore - score).flat().filter(e => typeof e === 'string');
// }

// var runLengthEncoding = function (str: string) {
//   const res = [];
//   let left = 0;
//   let right = 0;
//   let counter = 0;

//   while (left !== str.length) {
//     if (str[left] === str[right]) {
//       right++;
//       counter++;
//     } else {
//       res.push([counter, str[left]]);
//       counter = 1;
//       left = right;
//       right++;
//     }
//   }

//   return res;
// };
// console.log(
//   runLengthEncoding(
//     'WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWBWWWWWWWWWWWWWW'
//   )
// );

// var func = function () {
//   return this.prop;
// };

// var obj1 = { prop: 1 },
//   obj2 = { prop: 2 };

// Function.prototype.bind = function (ctx) {
//  	console.log(this.fun);
//   this.fun = this.fun || this
//   const newFun = () => {
//     return this.fun.call(ctx);
//   };
//   newFun.fun = this.fun || this

//   console.log(newFun.fun.call(ctx), 123);

// 	return newFun
// };
// func = func.bind(obj1);
// console.log(func());

// func = func.bind(obj2);
// console.log(func());

// const parse = (num: number, type: string = 's') => {
//   if (type === 's') {
//     return num === 1 ? 'second' : 'seconds';
//   } else if (type === 'm') {
//     return num === 1 ? 'minute' : 'minutes';
//   } else if (type === 'h') {
//     return num === 1 ? 'hour' : 'hours';
//   } else if (type === 'd') {
//     return num === 1 ? 'day' : 'days';
//   } else if (type === 'y') {
//     return num === 1 ? 'year' : 'years';
//   }
//   return;
// };

// function formatDuration(seconds: number) {
//   if (seconds === 0) return 'now';

//   let init = seconds;
//   const yrs = Math.floor(init / 31536000);
//   const day = Math.floor((init %= 31536000) / 86400);
//   const hrs = Math.floor((init %= 86400) / 3600);
//   const min = Math.floor((init %= 3600) / 60);
//   const sec = (init %= 60);

//   if (seconds < 60) {
//     return `${seconds} ${parse(seconds)}`.trim();
//   } else if (seconds >= 60 && seconds < 3600) {
//     return `${min} ${parse(min, 'm')} ${
//       sec === 0 ? '' : `and ${sec} ${parse(sec)}`
//     }`.trim();
//   } else if (seconds >= 3600 && seconds < 86400) {
//     return `${hrs} ${parse(hrs, 'h')}${
//       min === 0 ? '' : `, ${min} ${parse(min, 'm')}`
//     } ${sec === 0 ? '' : `and ${sec} ${parse(sec)}`}`.trim();
//   } else if (seconds >= 86400 && seconds < 31536000) {
//     return `${day} ${parse(day, 'd')}${
//       hrs === 0 ? '' : `, ${hrs} ${parse(hrs, 'h')}`
//     }${min === 0 ? '' : `, ${min} ${parse(min, 'm')}`} ${
//       sec === 0 ? '' : `and ${sec} ${parse(sec)}`
//     }`.trim();
//   } else if (seconds >= 31536000) {
//     let res = `${yrs} ${parse(yrs, 'y')}${
//       day === 0 ? '' : `, ${day} ${parse(day, 'd')}`
//     }${
//       hrs === 0 ? '' : `${min === 0 ? ' and' : ','} ${hrs} ${parse(hrs, 'h')}`
//     }${
//       min === 0 ? '' : `${sec === 0 ? ' and' : ','} ${min} ${parse(min, 'm')}`
//     } ${sec === 0 ? '' : `and ${sec} ${parse(sec)}`}`.trim();
//     return res.replace(/\,$/, ' and');
//   }
// }
// console.log(formatDuration(3662));
//
// class Animal {
//     constructor(name: string, type: string) {
//         this._name = name;
//         this._type = type;
//     }
//
//     private _name: string;
//
//     get name() {
//         return this._name;
//     }
//
//     set name(val) {
//         this._name = val;
//     }
//
//     private _type: string;
//
//     get type() {
//         return this._type;
//     }
//
//     toString() {
//         return `${this.name} is a ${this.type}`;
//     }
// }
//
// const dog = new Animal('Max', 'dog');
// console.log(dog.toString());
// console.log(dog.type);
// console.log(dog.name);
// console.log(dog.name = 'Lessie');

// let newFunction = function () {
//     this.newFunction = newFunction;
// };
//
// console.log(new newFunction);
//
// class Animal {
//   name: string;
//   age: number;
//   legs: number;
//   species: string;
//   status: string;
//
//   constructor(
//       name: string,
//       age: number,
//       legs: number,
//       species: string,
//       status: string
//   ) {
//     this.name = name;
//     this.age = age;
//     this.legs = legs;
//     this.species = species;
//     this.status = status;
//   }
//
//   introduce() {
//     return `Hello, my name is ${ this.name } and I am ${ this.age } years old.`;
//   }
// }
//
// class Shark extends Animal {
//   constructor(name: string, age: number, status: string) {
//     super(
//         name,
//         age,
//         0,
//         'shark',
//         status
//     );
//   }
// }
//
// class Cat extends Animal {
//   constructor(name: string, age: number, status: string) {
//     super(
//         name,
//         age,
//         4,
//         'cat',
//         status
//     );
//   }
//
//   introduce() {
//     return `Hello, my name is ${ this.name } and I am ${ this.age } years old.  Meow meow!`;
//   }
// }
//
// class Dog extends Animal {
//   master: string;
//
//   constructor(name: string, age: number, status: string, master: string) {
//     super(
//         name,
//         age,
//         4,
//         'dog',
//         status
//     );
//
//     this.master = master;
//   }
//
//   greetMaster() {
//     return `Hello ${ this.master }`;
//   }
// }
//
// class Cube {
//   #length: number;
//   #surfaceArea: number;
//   #volume: number;
//
//   constructor(length: number) {
//     this.#length = length;
//     this.#surfaceArea = this.#calcSurfaceArea();
//     this.#volume = this.#calcVolume();
//   }
//
//   get surfaceArea() {
//     return this.#surfaceArea;
//   }
//
//   set surfaceArea(val) {
//     this.#surfaceArea = val;
//     this.#length = Math.sqrt(val / 6);
//     this.#volume = this.#calcVolume();
//   }
//
//   get volume() {
//     return this.#volume;
//   }
//
//   set volume(val) {
//     this.#volume = val;
//     this.#length = Math.cbrt(val);
//     this.#surfaceArea = this.#calcSurfaceArea();
//   }
//
//   get length() {
//     return this.#length;
//   }
//
//   set length(val: number) {
//     this.#length = val;
//     this.#surfaceArea = this.#calcSurfaceArea();
//     this.#volume = this.#calcVolume();
//   }
//
//   #calcSurfaceArea() {
//     return 6 * this.#length ** 2;
//   }
//
//   #calcVolume() {
//     return this.#length ** 3;
//   }
// }

// @ts-ignore
// class File {
//   #filename: string;
//   #extension: string;
//   #fullName: string;
//   #contents: string;
//   #line = 0;
//   #char = 0;
//
//   constructor(fullName: string, contents: string) {
//     this.#fullName = fullName;
//     this.#contents = contents;
//     this.#filename = fullName.slice(0, fullName.lastIndexOf('.'));
//     this.#extension = fullName.slice(fullName.lastIndexOf('.') + 1);
//   }
//
//   get fullName() {
//     return this.#fullName;
//   }
//
//   set fullName(val) {
//     val;
//   }
//
//   get filename() {
//     return this.#filename;
//   }
//
//   set filename(val) {
//     val;
//   }
//
//   get extension() {
//     return this.#extension;
//   }
//
//   set extension(val) {
//     val;
//   }
//
//   getContents() {
//     return this.#contents;
//   }
//
//   write(str: string) {
//     this.#contents += `\n${ str }`;
//   }
//
//   gets() {
//     const line = this.#contents.split('\n')?.[this.#line];
//     this.#line++;
//     return line;
//   }
//
//   getc() {
//     const char = this.#contents.split('')?.[this.#char];
//     this.#char++;
//     return char;
//   }
// }
//
// // @ts-ignore
// const myFile = new File('text.txt', 123);

// class Person {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
//
//   getName() {
//     return this.firstName + ' ' + this.lastName;
//   }
// }
//
// Object.defineProperty(Person.prototype, 'name', {
//   get: function () {
//     return this.getName();
//   },
//
//   set: function (val) {
//     this.lastName = val.slice(val.indexOf(' ') + 1);
//     this.firstName = val.slice(0, val.indexOf(' '));
//   }
// });
//
// const bogdan = new Person('Bogdan', 'Scherbina');
// console.log(bogdan.name);
// bogdan.name = 'Check 123';
// console.log(bogdan.name);
// console.log(bogdan.getName());

//
// Array.prototype.square = function () {
//   return this.map((e, i) => e = e ** 2);
// };
//
// Array.prototype.cube = function () {
//   return this.map((e, i) => e = e ** 3);
// };
//
// Array.prototype.average = function () {
//   return this.reduce((acc, curr) => acc + curr, 0) / this.length;
// };
//
// Array.prototype.sum = function () {
//   return this.reduce((acc, curr) => acc + curr, 0);
// };
//
// Array.prototype.even = function () {
//   return this.filter(e => e % 2 === 0);
// };
//
// Array.prototype.odd = function () {
//   return this.filter(e => e % 2 !== 0);
// };

// const arr = [1, 2, 3, 4, 5];
// const newArr = arr.square();

// const arr = [1, 2, 3, 4, 5];
// const newArr = arr.cube();

// const arr = [];
// const newArr = arr.average();

// const arr = [ 1, 2, 3, 4, 5 ];
// const newArr = arr.even();
//
// const arr2 = [ 1, 2, 3, 4, 5 ];
// const newArr2 = arr.odd();
//
// console.log(newArr);
// console.log(newArr2);
//
// Array.prototype.reduce = function (process, initial) {
//   let acc = initial || this[0];
//
//   for (let i = 0; i < this.length; i++) {
//     if (!initial && i === 0) continue;
//     acc = process(acc, this[i]);
//   }
//
//   return acc;
// };
//
// const check = [ 'a', 'b', 'a' ];
//
// console.log(check.reduce(function (obj, elem) {
//   if (!obj[elem]) obj[elem] = 0;
//   obj[elem] += 1;
//   return obj;
// }, {}));

// Object.prototype.hash = function (string) {
//   if (!string.includes('.')) return console.log(this[string]);
//
//   const accesor = string.slice(0, string.indexOf('.'));
//   const remainingAccs = string.slice(string.indexOf('.') + 1);
//
//   return this[accesor]?.hash(remainingAccs);
// };
//
// const obj = {
//   person: {
//     name: 'joe',
//     history: {
//       hometown: 'bratislava',
//       bio: {
//         funFact: 'I like fishing.'
//       }
//     }
//   }
// };
//
// obj.hash('person.name'); // 'joe'
// obj.hash('person.history.bio'); // { funFact: 'I like fishing.' }
// obj.hash('person.history.homeStreet'); // undefined
// obj.hash('person.animal.pet.needNoseAntEater'); // undefined

// function generateName() {
//   const ABC = 'abcdefghijklmnopqrstuvwxyz';
//   let name = '';
//
//   for (let i = 0; i < 6; i++) {
//     const rndmNum = Math.floor(Math.random() * 26);
//     name += ABC[rndmNum];
//   }
//
//   if (photoManager.nameExists(name)) return generateName();
//
//   return name;
// }
//
// Object.create = function (prototype, properties) {
//   if (!prototype && typeof prototype !== 'object') throw new TypeError('Wrong prototype argument');
//
//   const newObj = {};
//   Object.setPrototypeOf(newObj, prototype);
//
//   // return properties ? this.defineProperties(newObj, properties) : newObj;
//
//   if (properties) {
//     for (const [ propName, prop ] of Object.entries(properties))
//       newObj[propName] = prop?.writable ? prop : Object.freeze(prop.value);
//   }
//
//   return newObj;
// };
//
// const proto = {
//   sayHello() {
//     console.log('Hello');
//   }
// };
//
// const obj = Object.create(proto, {
//   property1: {
//     value: 42,
//     writable: true
//   },
//   property2: {}
// });
//
// console.log(obj);
//
// obj.sayHello();
//
// var Cat = (function () {
//   const weights = new Map();
//   let avg = 0;
//
//   const calcAvg = () => {
//     avg = 0;
//     for (const weight of weights.values())
//       avg += weight;
//     avg /= weights.size;
//   };
//
//   const closure = function (name, weight) {
//     if (!name || !weight) throw new Error('Wrong arguments');
//     weights.set(name, weight);
//
//     calcAvg();
//
//     this._weight = weight;
//     this.name = name;
//
//     Object.defineProperties(this, {
//       weight: {
//         set: function (val) {
//           this._weight = val;
//           weights.set(this.name, this._weight);
//           calcAvg();
//         },
//
//         get: function () {
//           return this._weight;
//         }
//       }
//     });
//   };
//
//   closure.averageWeight = function () {
//     return avg;
//   };
//
//   return closure;
// }());
//
// const felix = new Cat('Felix', 25);
// const aCat = new Cat('cat', 12);
//
// console.log(Cat.averageWeight());

// function nouveau(Constructor, ...rest) {
//     const instance = Object.create(Constructor.prototype);
//     const fnInstance = Constructor.call(instance, ...rest);
//     return fnInstance &&
//     (typeof fnInstance === 'object' ||
//         typeof fnInstance === 'function')
//         ? fnInstance
//         : instance;
// }
//
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }
//
// Person.prototype.introduce = function () {
//     return 'My name is ' + this.name + ' and I am ' + this.age;
// };
// var john = new Person('John', 30);
// var jack = new Person('Jack', 40);
// console.log(john.introduce()); // My name is John and I am 30
// console.log(jack.introduce()); // My name is Jack and I am 40
//
// function ReturnsArray(name) {
//     this.name = name;
//     return [1, 2, 3];
// }
//
// var arr = new ReturnsArray('arr?');
// console.log(arr.name); // undefined
// console.log(arr); // [1, 2, 3]

// class PaginationHelper {
//     currentPageStart = 0;
//     currentPageEnd = 0;
//
//     constructor(collection, itemsPerPage) {
//         this.collection = collection;
//         this.itemsPerPage = itemsPerPage;
//     }
//
//     itemCount() {
//         return this.collection.length;
//     }
//
//     pageCount() {
//         const collCopy = [...this.collection];
//         let counter = 0;
//
//         while (collCopy.length !== 0) {
//             counter++;
//             collCopy.splice(0, this.itemsPerPage);
//         }
//
//         return counter;
//     }
//
//     pageItemCount(pageIndex) {
//         if (pageIndex < 0) return -1;
//         pageIndex += 1;
//
//         const end = this.itemsPerPage * pageIndex;
//         const start = Math.abs(this.itemsPerPage - end);
//         return this.collection.slice(start, end).length || -1;
//     }
//
//     pageIndex(itemIndex) {
//         if (!this.itemCount() || itemIndex >= this.itemCount() || itemIndex < 0) return -1;
//         if (itemIndex === this.itemsPerPage) return 1;
//
//         let counter = 0;
//         let steps = 0;
//         let incr = 0;
//
//         while (incr !== itemIndex) {
//             if (steps === this.itemsPerPage) {
//                 steps = 0;
//                 counter++;
//             }
//
//
//             steps++
//             incr++
//         }
//         if (steps === this.itemsPerPage) counter++;
//         console.log(counter < this.itemCount(), counter, this.itemCount());
//         return counter < this.itemCount() ? counter : -1;
//     }
// }

// const newFunction = function () {
//     return newFunction;
// };
// console.log(new new newFunction);
//
// class Stack {
//   #stack = [];
//   #type;
//   #object;
//
//   constructor(type: string, objectPointer: Object) {
//     this.#type = type;
//     this.#object = objectPointer;
//   }
//
//   add(key, value, isDelete = false) {
//     const object = this.#object;
//     const operation = {
//       key,
//       value,
//       isDelete,
//     };
//     const action = function(deleteOrChange) {
//       return deleteOrChange || !this.value
//         ? delete object[this.key]
//         : (object[this.key] = this.value);
//     };
//
//     operation[this.#type] = action.bind(operation);
//     this.#stack.push(operation);
//   }
//
//   get() {
//     return this.#stack.pop();
//   }
//
//   clear() {
//     this.#stack = [];
//   }
// }
//
// function undoRedo(object) {
//   const undoStack = new Stack('undo', object);
//   const redoStack = new Stack('redo', object);
//
//   return {
//     set(key, value) {
//       redoStack.clear();
//       undoStack.add(key, object[key]);
//
//       object[key] = value;
//     },
//
//     get(key) {
//       return object[key];
//     },
//
//     del(key) {
//       redoStack.clear();
//       undoStack.add(key, object[key]);
//
//       delete object[key];
//     },
//
//     undo() {
//       const { key, isDelete, undo } = undoStack.get();
//       redoStack.add(key, object[key]);
//
//       undo(isDelete);
//     },
//
//     redo() {
//       const { key, isDelete, redo } = redoStack.get();
//       undoStack.add(key, object[key]);
//
//       redo(isDelete);
//     },
//   };
// }

// function factory(x: number) {
//   return (arr: number[]) => arr.map(elem => elem * x);
// }
//
// const fives = factory(5);
// const myArr = [ 1, 2, 3 ];
//
// console.log(fives(myArr));

// console.log(Math.ceil(Math.log2(4)) + 1);

// function compose(...funcs) {
//   return (x) => funcs.reduceRight((acc, curr) => curr(acc), x);
// }

// function memo(fn) {
//   const cache = {};
//   const objCache = new Map();
//
//   return (x) => {
//     if (x instanceof Object) {
//       const obj = objCache.get(x);
//       if (obj) {
//         return obj;
//       } else {
//         const res = fn(x);
//         objCache.set(x, res);
//         return res;
//       }
//     }
//
//     if (x in cache) {
//       return cache[x];
//     } else {
//       const res = fn(x);
//       cache[x] = res;
//       return res;
//     }
//   };
// }


// function F(n) {
//   if (n > 0) {
//     return n - M(F(n - 1));
//   }
//   return 1;
// }
//
// function M(n) {
//   if (n > 0) {
//     return n - F(M(n - 1));
//   }
//   return 0;
// }

// function once(fn) {
//   let count = 0;
//   return (...args) => {
//     if (count === 0) {
//       count++;
//       return fn(...args);
//     }
//   };
// }

// var multiFilter = function(...args) {
//   return (elem) => {
//     return args.some(fn => !fn(elem)) ? false : true;
//   };
// };

function flip(fn) {
  return (...args) => fn(...args.reverse());
}
