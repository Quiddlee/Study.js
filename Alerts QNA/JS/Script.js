"use strict";

// alert("wassup");


// const QNA = confirm("How are you?");
// console.log(QNA);


const answers = [];

answers[0] = prompt("Назовите ваше имя", "");
answers[1] = prompt("Сколько вам лет?", "");
answers[2] = prompt("Какой ваш любимый фильм?", "");
answers[3] = prompt("Сколько у вас домашних животных?", "");

document.write(`Ваше имя: ${answers[0]} `);
document.write("   ");
document.write(`Ваш возраст: ${answers[1]} `);
document.write("   ");
document.write(`Ваш любимый фильм: ${answers[2]} `);
document.write("   ");
document.write(`У вас столько домашних животных: ${answers[3]} `);

console.log(answers);


let a = 10;

a++;
a++;
a++;
a++;

console.log(a);

