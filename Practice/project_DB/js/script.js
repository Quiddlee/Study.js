/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против...",
    ]
};
const adv = document.querySelectorAll('.promo__adv img');
const movieList = document.querySelector('.promo__interactive-list');
const genre = document.querySelector('.promo__genre');
const bg = document.querySelector('.promo__bg');

genre.textContent = 'Драма';

bg.style.backgroundImage = 'url("img/bg.jpg")';

adv.forEach(e => {
   e.remove(); 
});

movieDB.movies.sort();

movieList.innerHTML = '';

movieDB.movies.forEach((e, i) => {
    movieList.innerHTML += `
    <li class="promo__interactive-item">${i + 1} ${e}
        <div class="delete"></div>
    </li>
    `;
});

// movieList.forEach((e, i) => {
//     e.textContent = movieDB.movies.sort()[i];
//     e.prepend(i + 1 + ' ');
// });
