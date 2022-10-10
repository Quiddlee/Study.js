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

// ;


const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
const allCurr = [...baseCurrencies, ...additionalCurrencies];

function availableCurr(arr, missingCurr) {
    let i = 0;
    if (i !== arr.length) {
        while (missingCurr !== arr[i]) {
            i++;
        }
        arr.splice(i, 1);
        console.log("Доступные валюты:");
        return arr.forEach(element => {
            console.log(element);
        });
    } else {
        console.log("Нету доступных валют");
    }
}
availableCurr(allCurr, 'RUB');