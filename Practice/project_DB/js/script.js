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
        "Скотт Пилигрим против..."
    ]
};

const interactiveList = document.querySelectorAll('.promo__interactive-item');
document.querySelector('.promo__adv').remove();
document.querySelector('.promo__genre').textContent = 'Драмма';
document.querySelector('.promo__bg').style.background = 'url(img/bg.jpg)';
document.querySelector('.promo__interactive-list');

interactiveList.forEach((e, i) => {
    e.textContent = movieDB.movies.sort()[i];
    e.prepend(i + 1 + ' ');
});
