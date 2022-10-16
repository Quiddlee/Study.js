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

// const slice = "yo nigga wassup";
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


// const newArray = ["nigga", "mamba", "shrek"];

// const array = newArray.slice(); // метод слайс условно говоря копирует один массив в другой

// array[0] = "chort";
// console.log(newArray);
// console.log(array);


// const video = ["youtube", "twitch", "Eugene"];
// const blogs = ["myBlog", "youtBlog", "ourBlog"]; //метод объеденения массивов "...спред" ёпта
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
