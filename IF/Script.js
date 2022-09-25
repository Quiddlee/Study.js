"use strict";

// if (1) {
//     console.log("true");
// }else{
//     console.log("false");
// }if 

// const num = 50;

// if (1 == 50){
//     console.log("true");
// }else if (num > 100){
//     console.log("true");
// }else if(num === 1000){
//     console.log("true");
// }else{
//     console.log("all is lost");
// }





// const y = 20;

// (y === 20) ? console.log(""true"") : console.log("false"); //Тернарный оператор

// const a = 100;

// switch (a) {
//     case 50:
//         console.log("right");
//         break;
//     case 20:
//         console.log("right");
//         break;
//     case 10:
//         console.log("right");
//         break;
//     default:
//         console.log("not right");
//         break;
// }                                   //switch - альтернатива if else



// const ham = 4,
//       cola = 0;
//                                     //Логическая операция или ||
// if((ham||cola)){
//     console.log("vnature");
// }else {
//     console.log("ditch");
// }


// console.log( NaN || 2 || undefined );
// console.log( NaN && 2 && undefined );
// console.log( 1 && 2 && 3 );
// console.log( !1 && 2 || !3 );
// console.log( 25 || null && !3 );
// console.log( NaN || null || !3 || undefined || 5);
// console.log( NaN || null && !3 && undefined || 5);
// console.log( 5 === 5 && 3 > 1 || 5);

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;
 
// if (hamburger === 3 && cola || fries === 3 && nuggets) {
//    console.log('Done!')
// }

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;
 
// if (hamburger || cola || fries === 3 || nuggets) {
//    console.log('Done!')
// }

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;
 
// if (hamburger && cola || fries === 3 && nuggets) {
//    console.log('Done!')
// }




// for (let number = 1; number < 10; number++){
//     if(number == 10){
//         number++;
//         break;
//     }
//     console.log(number);
// }

// let result = "";
// const length = 7;

// for (let i = 1; i < length; i++){

//         for(let j = 0; j < i; j++){
//             result += "*";    
//         }
//         result += "\n"; 
// }

// console.log(result);



for (let i = 5; i <= 10; i++) {
    console.log(i);
} 

// При помощи цикла for вывести числа от 20 до 10 в консоль. В обратном порядке (20, 19, 18...).
//  Когда цикл дойдет до числа 13 - остановить весь цикл

for (let i = 20; 20 > 10; i-- ) {
    if(i == 12) {
        break;
    }
    console.log(i);
}

// При помощи цикла for выведите чётные числа от 2 до 10 включительно

for (let i = 2; i <= 10; i++) {
        if(i % 2 == 0){
            console.log(i);
        }
}



for(let k = 1; k <= 11; k++) {
    console.log(k);
}



// Перепишите цикл  for на вариант с while. Результат должен остаться точно таким же.
//  Не создайте бесконечный цикл! Иначе браузер может зависнуть.

for (let i = 2; i <= 16; i++) {
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
}


let a = 3;

while (a <= 15 ){
    a++; 
    if(a % 2 === 0){
        continue;
    }else{
        console.log(a);
    }
}

// Заполните массив цифрами от 5 до 10 включительно. Помните, что элементы массива 
// можно сформировать так же, как и обращаться к ним: arr[0]


// const array = [];

//     for (let i = 5; i < 11; i++) {
//         array[i - 5] = i;
//     }

//     console.log(array);
//     return array;

const arr = [3, 5, 8, 16, 20, 23, 50];
    const result = [];
    for (let i = 0; i < arr.length; i++ ) {
        result[i] = arr[i]; 
    }
    console.log(result);
    return arr;



    let numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
  numbers[i] *= 2;
  console.log(numbers);
}



const data = [5, 10, 'Shopping', 20, 'Homework'];

for (let i = 0; i < data.length; i++) {
    if(typeof(data[i]) === "number") {     
        data[i] = data[i] * 2;  
    }else if(typeof(data[i]) === "string") {
        data[i] = `${data[i]}-done`;
    }
}
console.log(data);
return data;




var arR = [5000, 2000, 4030, 1100];

for (var i = 0; i < arR.length; i++) {
    if (arR[i] >= 5000) {
        arR[i] = "senior";
    } else if (arR[i] >= 2000) {
        arR[i] = "mid"
    } else {
        arR[i] = "junior"
    }
}
console.log(arR);



const data = [5, 10, 'Shopping', 20, 'Homework'];

    for (let i = 0; i < data.length; i++) {
        if (typeof(data[i]) === 'number') {
            data[i] = data[i] * 2;
        } else if (typeof(data[i]) === 'string') {
            data[i] = `${data[i]}-done`;
        }
    }

    console.log(data);
    return data;


    const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];

    for(let i = 1; i < data.length; i++) {
        result[i - 1] = data[data.length - i];

    }
    console.log(result);
return result;


    const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];

    for (let i = 1; i <= data.length; i++) {
        result[i - 1] = data[data.length - i];
    }

    console.log(result);
    return result;
}

*
***
*****
*******
*********
***********


const lines = 13;
let result = '';

for (let i = 2; i < lines; i += 2) {
    for(k = 13; k > i; k -= 2) {
        result += " ";
    }
    for (let j = 1; j < i; j++) {
        result += "*";
        }   
result += "\n";
}
console.log(result);



