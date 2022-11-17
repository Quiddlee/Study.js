'use strict';

const box = document.getElementById('box');
const btns = document.getElementsByTagName('button');
const circles = document.getElementsByClassName('circle');  //Достаём элементы со страницы, и записываем их в переменные
const wrapper = document.querySelector('.wrapper');
const hearts = wrapper.querySelectorAll('.heart');
const oneHeart = wrapper.querySelector('.heart');

box.style.backgroundColor = 'blue'; //меняем стили элементам
box.style.width = '500px';

box.style.cssText = 'background-color: blue; width: 500px';

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'blue';
// }

hearts.forEach(e => {
    e.style.backgroundColor = 'blue';                       // document.qerySelectorAll() имеет метод ForEach 
});

const div = document.createElement('div');                  //создание элемента в js
// const text = document.createTextNode('wassup');

div.classList.add('black');                                 // добавляет класс элементу

wrapper.append(div);                                        // можно обращаться к родителю элементов
// wrapper.appendChild(div);

// wrapper.prepend(div);                                    //добавляет элемент ПЕРЕД указаным

// hearts[0].after(div);                                    //добавляет элемент ПОСЛЕ указаного

// wrapper.insertBefore(div, hearts[1]);

// circles[0].remove();                                      // убирает элемент со страницы
// wrapper.removeChild(hearts[1]);

// hearts[0].replaceWith(circles[0]);                        // замена элемента на указаный

// wrapper.replaceChild(circles[0], hearts[0]);

div.innerHTML = '<h1>Hello World</h1>';                      // обращение к верстке *?*

// div.textContent = 'Hello';                                // поменять текст элемента

div.insertAdjacentHTML('afterend', '<h2>hello</h2>');



//event listener



const butns = document.querySelectorAll('button');
const overlay = document.querySelector('.overlay');

// btn.onclick = function () {
//     alert('wassup');
// };

// let i = 0;
const deleteElement = (e) => {                                      // можно создать декларируемую функцию
    console.log(e.currentTarget);                                   // и использовать её в качетсве call back
    console.log(e.type);
    // i++;
    // if (i == 1) {
    //     btn.removeEventListener('click', deleteElement);
    // }
};

// btns.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);

butns.forEach(element => {                                             //добавление eventListener к нескльким элементам
    element.addEventListener('click', deleteElement, {once: true});    //'название события', call back funct, object
});

const link = document.querySelector('a');

link.addEventListener('click', (event) => {
    event.preventDefault();                                           // preventDefault - отменить стандартное поведение браузера

    console.log(event.target);
});



//nodes & DOM elements


// console.log(document.head);
// console.log(document.documentElement);
// console.log(document.body.firstChild);
// console.log(document.body.firstElementChild);
// console.log(document.body.lastChild);                                        // каждый элемент и нод имеет родителя

// console.log(document.querySelector('#current').parentNode);                  // достаём ноды из DOM
// console.log(document.querySelector('#current').parentElement);               // все элементы являются нодами, но не все ноды являются элементами


// console.log(document.querySelector('[data-current="3"]').nextElementSibling);

for (const node of document.body.childNodes) {        //цикл переберает все ноды и выводит только элементы
    if (node.nodeName == '#text') {
        continue;
    }

    console.log(node);
}
