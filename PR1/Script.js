"use strict";

const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели");


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false,
};

// let a = prompt("Один из последних просмотренных фильмов?");
// let b = prompt("На сколько оцените его?");
// const c = prompt("Один из последних просмотренных фильмов?");
// const d = prompt("На сколько оцените его?");

let a;
let b;

for (let i = 0; i < 2; i++) {
    a += prompt("Один из последних просмотренных фильмов?");
    for (let j = 0; j <= i; j+=2){
    b += prompt("На сколько оцените его?");
    }
}


personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);



for( let f = 0; f < 4; f+=2) {
    console.log(f);
}
for(let b = 0; b < 4; b+=2) {
    console.log(b);
}
