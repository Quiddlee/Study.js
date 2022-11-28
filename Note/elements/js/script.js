'use strict';

const box = document.getElementById('box');
const btns = document.getElementsByTagName('button');
const circles = document.getElementsByClassName('circle'); //Достаём элементы со страницы, и записываем их в переменные
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
    e.style.backgroundColor = 'blue'; // document.qerySelectorAll() имеет метод ForEach 
});

const div = document.createElement('div'); //создание элемента в js
// const text = document.createTextNode('wassup');

div.classList.add('black'); // добавляет класс элементу

wrapper.append(div); // можно обращаться к родителю элементов
// wrapper.appendChild(div);

// wrapper.prepend(div);                                    //добавляет элемент ПЕРЕД указаным

// hearts[0].after(div);                                    //добавляет элемент ПОСЛЕ указаного

// wrapper.insertBefore(div, hearts[1]);

// circles[0].remove();                                      // убирает элемент со страницы
// wrapper.removeChild(hearts[1]);

// hearts[0].replaceWith(circles[0]);                        // замена элемента на указаный

// wrapper.replaceChild(circles[0], hearts[0]);

div.innerHTML = '<h1>Hello World</h1>'; // обращение к верстке *?*

// div.textContent = 'Hello';                                // поменять текст элемента

div.insertAdjacentHTML('afterend', '<h2>hello</h2>');



//event listener



const butns = document.querySelectorAll('button');
const overlay = document.querySelector('.overlay');

// btn.onclick = function () {
//     alert('wassup');
// };

// let i = 0;
const deleteElement = (e) => { // можно создать function expression
    console.log(e.currentTarget); // и использовать её в качетсве call back
    console.log(e.type);
    // i++;
    // if (i == 1) {
    //     btn.removeEventListener('click', deleteElement);
    // }
};

// btns.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);

butns.forEach(element => { //добавление eventListener к нескльким элементам
    element.addEventListener('click', deleteElement, {
        once: true
    }); //'название события', call back funct, object
});

const link = document.querySelector('a');

link.addEventListener('click', (event) => {
    event.preventDefault(); // preventDefault - отменить стандартное поведение браузера

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

for (const node of document.body.childNodes) { //цикл переберает все ноды и выводит только элементы
    if (node.nodeName == '#text') {
        continue;
    }

    console.log(node);
}



// recursion


function pow(x, n) {
    let result = 1;

    for (let i = 0; i < n; i++) {
        result *= x;
    }

    return result;
}

function pow(x, n) {
    if (n === 1) {
        return x;
    } else {
        return x * pow(x, n - 1);
    }
}

console.log(pow(2, 3)); // 4


const students = {
    js: [{
        name: 'John',
        progress: 100
    }, {
        name: 'Ivan',
        progress: 60
    }],

    html: {
        basic: [{
            name: 'Peter',
            progress: 20
        }, {
            name: 'Ann',
            progress: 18
        }],

        pro: [{
            name: 'Sam',
            progress: 10
        }]
    }
};

function getTotalProgressByIteration(data) {
    let total = 0;
    let students = 0;

    for (const course of Object.values(data)) {
        if (Array.isArray(course)) {
            students += course.length;

            for (let i = 0; i < course.length; i++) {
                total += course[i].progress;
            }
        } else {
            for (const subCourse of Object.values(course)) {
                students += subCourse.length;

                for (let i = 0; i < subCourse.length; i++) {
                    total += subCourse[i].progress;
                }
            }
        }
    }

    return total / students;
}
// console.log(getTotalProgressByIteration(students));

function getTotalProgressByRecursion(data) {
    if (Array.isArray(data)) {
        let total = 0;

        for (let i = 0; i < data.length; i++) {
            total += data[i].progress;
        }

        return [total, data.length];
    } else {
        let total = [0, 0];

        for (const subData of Object.values(data)) {
            const subDataArr = getTotalProgressByRecursion(subData);
            total[0] += subDataArr[0];
            total[1] += subDataArr[1];
        }

        return total;
    }
}

const result = getTotalProgressByRecursion(students);

console.log(result[0] / result[1]);


// события на мобильных устройствах

// 1. touchstart - касание на элеменет

// 2. touchmove - касание - удерживание и перемещение пальца по элементу

// 3. touchend - касание - срабатывает когда палец оторвался от элемента

// 4. touchenter - когда ведём пальцем по экрану и когда наскальзываем на элемент

// 5. touchleave - когда палец продожлий скользить за пределы элемента

// 6. touchcancel - срабатывает когда точка соприкосновения больше не регистрируется на поверхности (выход за пределы браузера) 


window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');

    box.addEventListener('touchstart', (e) => {
        e.preventDefault();

        console.log('start');
    });

    box.addEventListener('touchmove', (e) => {
        e.preventDefault();

        console.log('move');
        console.log(e.touches);
    });

    box.addEventListener('touchend', (e) => {
        e.preventDefault();

        console.log('end');
    });
});

//touches



// Nulish operator

//Оператор нулевого слияния - "??"
/* условно говоря это как оператор или ( || ), но если к нему попадает 0,
false или NaN, то он его использует, тоесть не запинается на нём
*/


/*  ОЧЕНЬ ВАЖНО
отличие DOM qerySelector от методов DOM getElement... - в том, что qery... создаёт псевдо-массив статичный,
тоесть если в процессе выполения кода удалить элементы полученые с помощью этого метода,
он не отследит их удаление, и список не обновится. Это свойство отслеживание изменений в DOM структуре
называется - живые коллекции
*/

/*
метод DOM .matches - ищет среди элементо указаный в скобочках класс

example

box.matches('.this')
*/

/*
метод closest
box.closest('.wrapper') - ищет класс в своём родителе

если не находит возвращает null
*/

const sym = Symbol('id');
const test = {
    name: 'John',
    surname: 'Miles',
};

delete test.name;
console.log(test);

// const test2 = {
//     name: 'John',
//     surname: 'Miles'
// };

// // console.log(Object.is(test, test2));
// console.log(Object.getOwnPropertyDescriptor(test, id));


// метод делегирования и classList


const btns = document.querySelectorAll('button');
const wrapper = document.querySelector('.btn-block');

// console.log(btns[0].classList.length);
// console.log(btns[0].classList.item(1));
// console.log(btns[0].classList.add('red', 'wussup'));
// console.log(btns[0].classList.remove('blue'));
// console.log(btns[0].classList.toggle('blue'));

// if (btns[0].classList.contains('red')) {
//     console.log('rqr');
// }

btns[0].addEventListener('click', () => {
    // if (!btns[1].classList.contains('red')) {
    //     btns[1].classList.add('red');
    // } else {
    //     btns[1].classList.remove('red');
    // }
    btns[1].classList.toggle('red');
});


// className - устаревший формат, возвращает строку всех классов
// console.log(btns[0].className); 

wrapper.addEventListener('click', (event) => { //event содержит всю информаци об элементе, на котором создаётся событие
    if (event.target && event.target.tagName == 'BUTTON') { //метод делегирования - применяет обработчик событий на все дочерние эллементы родителя 
        console.log('hello');
    }
});
event.target.matches('button.red'); //ещё один вариант метода event делегирования


const btn = document.createElement('button');

btn.classList.add('red');
wrapper.append(btn);



// setTimeot(), setInterval() && js animations
const btn = document.querySelector('.btn');
let timerId;
let i = 0;

function myAnimation() {
    const elem = document.querySelector('.box');
    let pos = 0;

    const id = setInterval(frame, 0);

    function frame() {
        if (pos == 300) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = `${pos}px`;
            elem.style.left = `${pos}px`;
        }
    }
}

btn.addEventListener('click', myAnimation);


// btn.addEventListener('click', () => {
//     // const timerId = setTimeout(someFunc, 2000); //Если присвоить таймер в переменную, запишеться его уникальный идентификатор, это нужно для того, что бы например очищать таймаут:
//     timerId = setInterval(someFunc, 500);
// });



// function someFunc () {
//     if (i === 3) {
//         clearInterval(timerId);                     //мы обращаемся к конкретному таймеру, и сбрасываем его
//     }
//     console.log('henlo');
//     i++;
// }



/*
рекурсивный вызов setTimeout() - условно говоря, он строго ждет пока функция выполнится,
только потом срабатывает таймаут, нужен например, если функция ресурсоёмкая,
и ей нужно время на выполнение
*/

// let id = setTimeout(function log () {
//     console.log('hello');
//     id = setTimeout(log, 500);
// }, 500);


//WeakMap && WeakSet


/*
WeakMap - теже свойства, что и у Map, но отличие в том, что если в Map будет ссылка на объект,
сборщик мусора его не удалит, в то время, как в WeakMap - удалит, при условии что ссылку будет содержать
ТОЛЬКО WeakMap. Ещё отличия в том, что в качестве ключа у WeakMap может быть только объект,
плюсом у WeakMap - есть только методы add, has, delete


WeakSet - отличия от обычного set - в том, что WeakSet, может содержать в себе только объекты, примитивы содержать не может
и аналогичная работа с памятью, и наличие методов как у weakmap, также WeakMap является неперебираемым
*/

let messages = [{
        text: 'Hello',
        from: 'John'
    },
    {
        text: 'World',
        from: 'Alex'
    },
    {
        text: '...',
        from: 'M'
    },
];

let readMessages = new WeakSet();

readMessages.add(messages[0]);
// readMessages.add(messages[1]);

readMessages.add(messages[0]);
messages.shift();
console.log(readMessages.has(messages[0]));

//Date object

const now = new Date(); // если передаем сюда год - то он должен быть всегда 4-х значным (2022) !(22)
/*
первая группа методов Date называется - получение компонентов даты.
В основном начинаются на get...
.getFullYear(), etc.
*/
// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());                     //метод возвращает текущее число
// console.log(now.getDay());                      //день недели по счету. Нумерация начинается с воскресенья, тоесть воскресенье - 0 день, 6 день недели - суббота
// console.log(now.getHours());                      
// console.log(now.getUTCHours());

console.log(now.getTimezoneOffset());
console.log(now.getTime());

/*
вторая группа методов Date - установка компонентов даты.
все теже методы что и выше, только начинаются на set.
.setDate(), etc
*/
console.log(now.setHours(18, 40, 12)); //можно утстанавливать не только часы, но и минуты и секунды    // если выводить дату в консоли вс кода, то она будет брать дату из UTC, в то время как браузер будет ориентироваться на локальную дату компьютера
console.log(now);

// new Date.parse('2022-11-24');

let start = new Date(); //засекаем за сколько отработает цикл. Первая Date - начало отсчета

for (let i = 0; i < 100000; i++) {
    let some = i ** 3; //**  - возведение в степень
}

let end = new Date(); // конец отсчета

console.log(`цикл отработал за ${end - start} миллисекунд`); // тут вычитаем разницу



//Параметры документа

// const box = document.querySelector('.box');
// const btn = document.querySelector('button');

// const width = box.clientWidth;
// const height = box.clientHeight;
// const width = box.offsetWidth;
// const height = box.offsetHeight;
const width = box.scrollWidth;
const height = box.scrollHeight;

console.log(width, height);

btn.addEventListener('click', () => {
    // box.style.height = `${box.scrollHeight}px`;
    console.log(Math.round(box.scrollTop));
});

console.log(box.getBoundingClientRect().top);

/*
window.getComputedStyle()

Смотрим какие стили уже пременены к элементу, особенность заключается в том, что мы видим все значения
в пикселях, даже если в css задано в процентах или других величинах.

Этот метод read only, с помощью него можно получить стили псевдо-элементов,
в js нельзя работаь с псевдо-элементами
*/
const style = window.getComputedStyle(box, before); //чтобы узнать стили псевдо-элементов, нужно записывать так

console.log(style.display);

console.log(document.documentElement.clientWidth); //параметры относительно документа
console.log(document.documentElement.scrollTop); //можно сделать стрелочку, которая скроллит вверх
console.log(window.scrollBy); //скролл на какое-то колличество пикселей, от текущего положения
console.log(window.scrollTo); //скролл на какое-то колличество пикселей, относительно всей страницы 


const box = document.querySelector('.box');

/*
contenteditable atribute
позволяет пользователю изменять элемент, добавлять текст внутри него

MutatuinObserver - наблюдает за изменениеями элементов
ResizeObserver - наблюдает за изменениями размеров элементов
*/

let observer = new MutationObserver(mutationRecords => {
    console.log(mutationRecords);
});

observer.observe(box, {
    childList: true
});

observer.disconnect();

//Функции-конструкторы
/*
по классификации данных, по сути функция - является объектом
*/

function User(name, id) {  //используется к примеру для создания слайдеров на странице, но можно изменять колличество слайдов
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = () => {
        console.log(`Hello ${this.name}`); //по сути эта функция является прототипом для всех последующих функуций, и они будут иметь те ж методы
    };
}

User.prototype.exit = function (name) {
    console.log(`Пользователь ${this.name} ушёл`); //свойство prototype, при помощи которого можно добавлять новый свойства в конструктор
};

const bogdan = new User('Bogdan', 18);  //конструкторы нужны для создания новых однотипных объектов
const alex = new User('Alex', 20);

bogdan.exit();

bogdan.hello();
alex.hello();

console.log(bogdan);
console.log(alex);



//Контекст вызова this


function showThis(a, b) {   //независимо где находится функция, контекст вызова this у неё будет одинаковый
    console.log(this);
    function sum() {
        console.log(this);
        return a + b;
    }
    
    console.log(sum());
}
showThis(4, 5);

const obj = {
    a: 20,
    b: 15,
    sum: function() {
        function shout() {
            console.log(this);
        }
        shout();
    }
};
obj.sum();

function User(name, id) {
    this.name = name;       //при создании объекта, вместо this. подставляется наш новый объект {bogdan.name, bogdan.id, etc} 
    this.id = id;
    this.human = true;
}
let bogdan = new User('Bogdan', 18);

function sayName(surname) {
    console.log(this);
    console.log(this.name + surname);
}

const user = {
    name:'John'
};

sayName.call(user, 'Smith');     //по сути обе функции делают одно и тоже, различия только в синтаксисе
sayName.apply(user, ['Smith']);  //в этом примере мы НЕ создавали новую функцию, а установили ей контекст  

function count(num) {
    return this * num; // 2 передаётся вместо this
}

const double = count.bind(2); // мы создали новую функцию, с жестко привязаным контекстом 2
console.log(double(3));
console.log(double(13)); // аргумент попадает на место num функции выше

/*
1) обычная функция: this = window, но если стоит 'use strict' - undefined
2) Контекст у методов объекта - сам объект 
3) this в конструкторах и классах - это новый экземпляр объекта
4) Ручная привязка this: call, apply, bind
*/

const btn = document.querySelector('button');

btn.addEventListener('click', function() { //если колл бэк функция - классическая, НЕ стрелочная - то this будет ссылаться на сам элемент, на котором навешено событие
    // console.log(this);
    this.style.backgroundColor = 'red';    //по сути работает как event target, но с учетом условия выше 
});

const obj = {
    num: 5,
    sayNumber: function() {         //опят таки, метод внутри объекта - всегда ссылается на сам объект (thiss)
        const say = () => {
            console.log(this.num);      // *** Важная особенность стрелочной функции - она ВСЕГДА ссылается на своего родителя
        };

        say();
    }
};

obj.sayNumber();

const double = a => a * 2;  //есть фозможность сократить стрелочную функцию до такого варианта,
console.log(double(4));     //при условии, что она содержит всего 1 параметр и условие помещается на одной строке


// Классы ES6
// Классы - это красивая обёртка функций конструкторов или синтаксический сахар


class Rectangle {   //при создании классов используется PascalCase
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    calcArea() {
        return this.height * this.width;
    }
}

const square = new Rectangle(10, 10);   //создаём новые объекты на основе нашего класса, но с другими свойствами
const long = new Rectangle(20, 100);


console.log(long.calcArea());
console.log(square.calcArea());

/*
Принципы ООП

1. Концепция - шаблон, по которому будут создаваться новые объекты, экземпляры - созданы на основе нашей концепции
2. Наследование - способность нашего объекта или класса базироваться на другом объекте или классе
*/

class ColoredRectangleWithText extends Rectangle {          //extends - наследование свойств одного класса другим  
    constructor(height, width, text, bgcolor) {             //*** ВАЖНО: super() - ВСЕГДА идёт первой строчкой 
        super(height, width);                               //super() - вызывает супер конструктор родителя, тоесть вызывает те свойства, которые были у родителя
        this.text = text;
        this.bgcolor = bgcolor;
    }

    showMyProps() {
        console.log(`Текст: ${this.text}, цвет: ${this.bgcolor}`);
    }
} 

const div = new ColoredRectangleWithText(25, 10, 'Hello World!', 'red');

div.showMyProps();
console.log(div.calcArea());



//возможные варианты перебора объектов

const myObj = {
    id: 2,
    human: true,
    name: 'John'
};

Object.keys(myObj).forEach(key => { //Object.values || .keys - возвращает массив, который мы можем перебрать с помощью метода forEach
    // console.log(key);
});

Object.values(myObj).forEach(val => { //к тому же мы можем в скобочки помещать объекты не в переменной, а просто {a: 12, b: 21, etc}, например такой объект может вернуть функция   
    // console.log(val);
});

for (const key of Object.keys(myObj)) {  //Мы можем указать const для переменной, потому что с каждой итерацией, будет создаваться новая переменная
    console.log(key);       //for in - перебирает ключи, for of - перебирает значения ключей
}

/*for of частично не работает на объектах, но может работать в случае выше*/