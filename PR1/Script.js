"use strict";


let numberOfFilms;
do {
    (numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?"));
} while (numberOfFilms.length == "" || numberOfFilms.length > "50");


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false,
};

let a;
let b;
for (let i = 0; i < 2; i++) {
    do {
     a = prompt("Какой последний фильм вы посмотрели?");
    } while (a == "" || a.length > "50");
    do {
     b = prompt("Как вы оцените его?");
    } while (b == "" || b.length > "50");
    personalMovieDB.movies[a] = b;
}

if(personalMovieDB.count < 10) {
    console.log("Просмотренно довольно мало фильмов");
} else if(personalMovieDB.count > 10 && personalMovieDB.count < 30){
    console.log("Вы классический зритель");
} else if(personalMovieDB.count > 30) {
    console.log("Вы киноман");
} else {
    console.log("Произошла ошибка");
}

console.log(personalMovieDB);