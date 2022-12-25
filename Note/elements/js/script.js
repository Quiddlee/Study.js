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


//                               Rest Оператор


//синтаксис как у спрэд оператора
const log = function(a, b, ...rest) {   //rest оператор, используется если мы не знаем точное кол-во параметров в функции, но все значения пережаные через него буду возвращены в массиве
    console.log(a, b, rest);
};
log('basic', 'rest', 'operator', 'usage');

function calcOrDouble(number, basis = 2) {  //новый метод
    // basis = basis || 2;                  старый метод присваивания пустому аргументу деффолтное значение, не работает с нулём, так как ноль - это false а оператор || запинается на true
    console.log(number * basis);
}

calcOrDouble(3, 0);


                                        //JSON 

//Объект JSON встроен во все браузеры, он имеет всего два метода, которые могут как конвертировать объект,
//1) JSON.stringify() - в понятный для сервера синтаксис (все сущности в таком случае должны быть строкой), 
//2) JSON.parse() - либо обратно конвертировать в удобный для нас синтаксис обычного объекта


//поверхностные копии объектов, это когда мы копирум весь объект, но ко внутри вложенным объектам мы доступа не имеем
const person = {
    name: 'Alex',
    tel: '+744444444',
    parents: {
        mom: 'Olga',
        dad: 'Mike'
    }
};

const clone = JSON.parse(JSON.stringify(person)); //Глубокая копия объектов, производится таким образом
clone.name = 'Bogdan';   //первоначальный объект в случае изменения данных в клоне, не будет мутироваться

console.log(person);
console.log(clone);
console.log(clone.parents.mom);




//                                      AJAX | работа с сервером

//AJAX = Asynchronous JavaScript And XML

//В кратце технология AJAX позволяет реализовывать веб приложения, в которых на действие пользователя,
//страница не будет перезагружаться  

const inputRub = document.querySelector('#rub');
const inputUsd = document.querySelector('#usd');

inputRub.addEventListener('input', () => {//событие input - срабатывает, когда пользователь что-то вводит в форму, когда с change - нужно нажать enter  
    const request = new XMLHttpRequest(); // XMLHttpRequest - встроеный объект в браузер, используется для взаимодействия с сервером

    //                                   request.open(method, url, async, login, pass); async стоит по деффолту - true
    //                                   метод open - собирает настройки, которые помогут в будущем сделать запрос

    request.open('GET', 'js/current.json'); // методы всегда записываются в верхнем регистре, путь пишем из файла html
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8'); // Заголовки помогают серверу понять, что за тип данных мы ему передаём. 
    request.send(); //Метод send - отправка запроса на сервер                    // выше - заголовок, который нужен для передачи JSON файлов на сервер


    // Свойства объекта XMLHttpRequest:

    // status - показывает нам статус нашего запроса. Например - 404, 0, 200, 403, etc.
    // statusText - это текстовое описание ответа от сервера. Например - Ok, not found, etc.
    // response - ответ от сервера, тоесть здесь будет находиться ответ, который нам задал backend разработчик
    // readyState - содержит текущее состояние нашего запроса


    // События, объекта XMLHttpRequest:

    request.addEventListener('readystatechange', () => { // событие отслеживает статус готовности нашего запроса в данный текущий момент. Оно следит за свойстом readyState
    //     if (request.status !== 200) {inputUsd.value = 'что-то пошло не так';} // никогда не оставлять пользователя в неведении, всегда оповещать его об ошибках

        
    //     if (request.readyState === 4 && request.status === 200) {
    //         console.log(request.response);
    //         const data = JSON.parse(request.response);
    //         inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
    //     }
    });
    
    request.addEventListener('load', () => { // load - срабатывает всего один раз, но это не значит, что запрос сработал успешно
        if (request.status !== 200) {inputUsd.value = 'что-то пошло не так';} 

        
        if (request.status === 200) {
            const data = JSON.parse(request.response);
            inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
        }
    });    
}); 


//                                  promise (ES6)


console.log('запрос данных...');
//                                                          мы создаем 'Обещание', которое помещаем в переменную req
const req = new Promise(function(resolve, reject) { // вместо этих параметров буду подставляться функции
    setTimeout(() => {                              // если всё выполнилось верно, то вызывем функцию - resolve
        console.log('подготовка данных...');        // в случае, если что-то пошло не по плану, то мы вызываем - reject
    
    
        const product = {
            name: 'TV',
            price: 2000
        };
        

        resolve(product);
    }, 2000);
});

req.then((product) => {    // .then принимает в себя аргумент функции resolve  
    return new Promise((resolve, reject) => {

        
        setTimeout(() => {
            product.status = 'order';


            resolve(product);
        }, 2000);
    }); 

}).then(data => {
    data.modify = true;
    return data;


}).then(data => {
    console.log(data); 


}).catch(() => {                        // срабатывает, в случае если что-то пошло не так
    console.error('произошла ошибка');


}).finally(() => {                      // finally - действие, которое происходит независимо от исхода, тоесть выполняется в любом случае - then или catch, неважно
    console.log('Finally');

    
});


const test = time => {
    return new Promise(resolve => { // есть возможность задать только один параметр resolve, в случае если reject не нужены
        setTimeout(() => resolve(), time);
    });
};


// test(1000).then(() => console.log('1000 ms'));
// test(2000).then(() => console.log('2000 ms'));


Promise.all([test(1000), test(2000)]).then(() => {  // Promise.all() - метод принимает массив с промисами,
    console.log('All');                             // метод служит для того, чтобы мы убедились, что все наши
    //                                                 промисы уже выполнились, в практике, метод ждет окончание всех промисов, которые были переданы в массив, только после этого он будет чтото выполнять 
});


Promise.race([test(1000), test(2000)]).then(() => { // метод дословно переводится как гонка, он определяет,
    console.log('All');                             //какой из промисов выполнится первым, и на основе этих данных работаем дальше 
});



//                                  Fetch API


//API - An application programming interface.

// Интерфейс программного обеспечения или приложения
// если по простому, то это набор данных и возожностей, которое нам предоставляет какое-то готовое решение

// то, что мы уже встречали - DOM API или Google maps API


fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({name: 'Alex'}),
    headers: {
        'Content-type': 'application/json'
    }
})                                                      // из этой конструкции возвращается промис, поэтому мы обрабатываем при помощи цепочки then
.then(response => response.json())
.then(json => console.log(json));  


//                          методы перебора массивов

// метод foreach - не возвращает новый массив, он не возвращает вообще ничего



//                      filter

// фильтрует массив по указаному сценарию

// const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemart'];

// const shortNames = names.filter(function (name) {
//     return name.length < 5;
// });

// console.log(shortNames);



//                      map

// возвращает значения, можно перезаписать массив с нужными изменениями

const answers = ['IvAn', 'AnnA', 'Hello'];

const res = answers.map(item => item.toLowerCase());

console.log(res);


// every/some


// some - если хотя-бы один элемент подходит по условию, метод вернёт true, если нет то false

// every - если все элементы внутри массива, подходят под условие, только в таком случае, наш метод вернет true, в обратном случае - false 

const some = [4, 'qwq', 'sweswe'];

console.log(some.some(item => typeof(item) === 'number'));

console.log(some.every(item => typeof(item) === 'number'));


// reduce 

// служит для того, чтобы соединят массив в одно целое, имеет ещё один параметр, в который можно поместить начальное значение

const arr = ['apple', 'pear', 'plum'];
const secRes = arr.reduce((sum, current) => `${sum}, ${current}`, 3);

console.log(secRes);

const object = {
    ivan: 'person', 
    ann: 'person',
    dog: 'animal',
    cat: 'animal'
};
//                                              когда мы делаем цепочку из методов - это называется chaining 
const newArr = Object.entries(object).filter(item => item[1] === 'person').map(item => item[0]); //Object.entries - делает из объектов матрицу

console.log(newArr);




const sum = filteredNames.reduce((a, b) => a + b);
console.log(sum);

//                                         деструктуризаци массива
const [myName, number, wassup] = names; // есть возможность задавать сколько угодно переменным значения в одной строке из массива или из файла
console.log(myName, number, wassup);



//                                   local storage


// localStorage - это глобальный объект


// localStorage.setItem('number', 5); // глобальный объект localStorage. метод setItem - 1 - ключ, 2 - значение
//
// localStorage.removeItem('number'); // removeItem - можем удалить данные, в скобочках передаём ключ
//
// localStorage.clear(); // clear - очищает хранилище
//
// console.log(localStorage.getItem('number')); // getItem - получить записанные данные

const checkbox = document.querySelector('#checkbox');
const form = document.querySelector('form');
const change = document.querySelector('#color');


if (localStorage.getItem('isChecked')) checkbox.checked = true;
if (localStorage.getItem('bg') === 'changed') form.style.backgroundColor = 'red';


checkbox.addEventListener('change', () => {
    localStorage.setItem('isChecked', true);
});


change.addEventListener('click', () => {
    if (localStorage.getItem('bg') === 'changed') {
        localStorage.removeItem('bg');
        form.style.backgroundColor = '#fff';
    } else {
        localStorage.setItem('bg', 'changed');
        form.style.backgroundColor = 'red';
    }

});


const person = {
    name: 'Alex',
    age: 25
};


// const serilizedPerson = JSON.stringify(person);
localStorage.setItem('alex', person); // если мы хотим поместить объект, мы должны сначала его перевести в строку с помощью JSON
                                      // иначе он запишется как [object Object]
console.log(localStorage.getItem('alex'));


//                                          regex


new RegExp('pattern', 'flags');
/pattern/f

const ans = prompt('Введите ваше число');

const reg = /\d/gi;
console.log(ans.match(reg)); // метод test - вернет true/false


// regexp classes
// \d - digits, означает, что мы ищем цифры
// \w - означает, что мы ищем все слова, буквы
// \s - spaces, означает, что мы ищем все пробелы


// flag i - если мы хотим что-то найти независимо от регистра
// flag g - global, если мы хотим, чтобы выражение не останавливалось на первом найденном паттерне, а нашло все, что есть в строке
// flag m - многострочный режим
console.log(ans.search(reg)); // метод search - всегда ищет только первое совпадение паттерна и возвращает его индекс

console.log(ans.match(reg)); // метод match - работает так же как и search, но возвращает массив со всеми данными

const pass = prompt('Password');

console.log(pass.replace(/\./g, "*"));  // /. - мы берём абсолютно все элементы, которые попадут в строку
                                                            // /\./ - такой записью мы - экранируем точку, чтобы он не воспринимал её как спец запись, а искал только сам символ '.'
                                                            //любые символы такие как: ., /, ^, &, etc - мы должны экранировать

console.log('12-34-56'.replace(/-/g, ':'));
//
const str = 'My name is R2D2';

// console.log(str.match(/\w\d\w\d/i)); // мы можем комбинировать классы таким образом
console.log(str.match(/\D/ig));  // ищем все символы, которые не являются цифрами

// reverse classes
// обратные классы, начинаются с большой буквы, их также нужно экранировать - /\D/
// \D - означает, что мы ищем не числа
// \W - означает, что мы ищем не буквы


//                                                  get/set


const person = {
    name: 'Alex',
    age: 25,

    get userAge() {         // геттер - используется для чтения свойств объекта
        return this.age;
    },

    set userAge(num) {      //сеттер - используется для записи свойств объекта
        this.age = num;
    },

    get personParams() {    //удобно для соединения параметров объекта в одну логику, например для вычислений
        return `${this.name} age ${this.age}`;
    },

    sayHello() {
        return `wassup ${this.name}`
    },
};

console.log(person.age = 30);
console.log(person.userAge);
console.log(person.personParams);   // ещё одно отличие от методов объекта, в том, что когда мы вызываем метод -
console.log(person.sayHello());     // ставим скобочки, в случе с геттерами и сеттерами не ставим


//                                              encapsulation

// инкапсуляция - это когда мы убираем возможность мутировать свойства объекта, то-есть создаём приватные свойства
// в javascript присутствует имитация инкапсуляции, но недавно был добавлен новый синтаксис - #private fields


function User(name, age) {
    this.name = name;
    let userAge = age;      // объявляя переменную внутри объекта, мы не имеем к ней доступа из вне вообще

    this.say = () => {
        console.log(`Имя пользователя: ${this.name}, возраст ${userAge}`);
    };

    this.getAge = () => {
        return userAge;
    };

    this.setAge = (age) => {
        if (typeof(age) === 'number' && age > 0 && age < 110) userAge = age
        else console.log('Недопустимое значение');
    };
}

const bogdan = new User('Bogdan', 18);
console.log(bogdan.name);
// console.log(bogdan.userAge); // переменную нельзя вызвать
console.log(bogdan.getAge());

// bogdan.userAge = 30;    // переменной нельзя менять свойства
bogdan.setAge(30);
bogdan.setAge(300);
console.log(bogdan.getAge());
bogdan.name = 'Alex';

bogdan.say();



class User {
    constructor(name, age) {
        this.name = name;
        this._age = age;    // в классах инкапсуляция записывается таким синтаксисом (это не является синтаксисом языка,
    }                       // а согласованный синтаксис между программистами)

    #surname = 'Scherbina';     // можно создавать свойства без конструктора, если они не будут меняться в будущем
                                // новый синтаксис для создания приватных свойств, нужно поставить перед свойством - #

    say = () => { // стрелочная функция всегда ссылается на своего родителя
        console.log(`Имя пользователя: ${this.name} ${this.#surname}, возраст ${this._age}`);
    };

    get age() {
        return this._age;
    }

    set age(age) {
        if (typeof(age) === 'number' && age > 0 && age < 110) this._age = age;
        else console.log('Недопустимое значение');
    }
}

const bogdan = new User('Bogdan', 18);
console.log(bogdan.surname); // приватное свойство, из вне к нему доступа нет
bogdan.say();


class UserMessage {
    constructor(name, message = 'user has no messages') {
        this.name = name;
        this.message = message
    }

    #moderator = 'Alex';

    get showMessage() {
        return `${this.message} by ${this.userName} (moderated by ${this.whosMod})`;
    }

    get whosMod() {
        return this.#moderator; // можем взаимодействовать с приватным полем только внутри класса
    }

    get userName() {
        return this.name;
    }

    set saySomething(message) {
        return this.message = message;
    }
}

const ivan = new UserMessage('Ivan', 'wassup');

console.log(ivan.whosMod);
console.log(ivan.moderator);

console.log(ivan.userName);
console.log(ivan.showMessage);

ivan.saySomething = 'sdwdasdasd';
console.log(ivan.showMessage);


//                                                          modules

// хорошо построенные модули должны быть самодостаточными и независимыми,
// то-есть их можно удалять или менять без последствий влияния на другой функционал


const app = '123';

const number = 1;

(function() {    // анонимная самовызывающаяся функция, устаревший способ применения модулей
    let number = 2;
    console.log(number);
    console.log(number + 3);
}());

console.log(number);

const user = (function(){
    const privat = function() {
        console.log('I am private!');
    };

    return {
        sayHello: privat
    };
}());

user.sayHello();


//                                              export ES6


export let one = 1;


let two = 2;        // можно экспортировать двумя способами:
export {two};       // 1

// export default - экспорт по умолчанию, может быть только один такой
export default function sayHi() {   // 2
    console.log('Hello');
}



import {one, two} from './main';
import {one as first} from './main';  // с помощью 'as' - мы можем переименовывать приходящие переменные
import * as data from './main';  // * импортировать всё что было передано
import sayHi from "./main";

console.log(first);
console.log(`${data.one} and ${data.two}`);

data.sayHi();

sayHi();
