"use strict";
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

function getCount(str) {
    const res = str.match(/[aeiou]/gi, '');
    if (res == null) return 0;

    return res.length;
}
console.log(getCount("eeeebdd"));