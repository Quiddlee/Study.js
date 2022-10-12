"use strict";


// let numberOfFilms;
// do {
//     numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?");
// } while (numberOfFilms.length == "" || numberOfFilms.length > "50" || numberOfFilms == null);

// let numberOfFilms;
// let i = 0;
// while (i < 1) {
//     numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?");
//     i++;
//     if (numberOfFilms !== null && numberOfFilms !== "" && numberOfFilms.length < 50) {
//         console.log("Done");
//     } else {
//         console.log("Error");
//         i--;
//     }
// }

// let numberOfFilms;
// for (let i = 0; i < 1; i++) {
//     numberOfFilms = +prompt("Сколько фильмо вы уже посмотрели");
//     if (numberOfFilms !== null && numberOfFilms !== "" && numberOfFilms < 50) {
//         console.log("Done");
//     } else {
//         console.log("Error");
//         i--;
//     }
// }


// function start() {
//     numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

//     while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
//     }
// }



const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    start: function () {
        while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели", "");
        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const a = prompt("Какой последний фильм вы посмотрели?", "").trim();
            const b = prompt("Как вы оцените его?", "");
            if (a != null && b != null && a != "" && b != "" && a.length < 50 && b.length < 50) {
                console.log("done");
            } else {
                console.log("error");
                i--;
            }
            personalMovieDB.movies[a] = b;
        }
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log("Просмотренно довольно мало фильмов");
        } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
            console.log("Вы классический зритель");
        } else if (personalMovieDB.count > 30) {
            console.log("Вы киноман");
        } else {
            console.log("Произошла ошибка");
        }
    },
    showMyDB: function () {
        if (!personalMovieDB.private) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`, "");
        }
    },
    toggleVisivleMyDB: function() {
        if (personalMovieDB.private === false) {
            personalMovieDB.private = true;
        } else {
            personalMovieDB.private = false;
        }
    }
};
// personalMovieDB.start();
// personalMovieDB.rememberMyFilms();
// personalMovieDB.detectPersonalLevel();
personalMovieDB.showMyDB();
// personalMovieDB.writeYourGenres();
personalMovieDB.toggleVisivleMyDB(); 
// let i = 0;
// while (i < 2) {
//     const a = prompt("Какой последний фильм вы посмотрели?");
//     const b = prompt("Как вы оцените его?");
//     i++;
//     if (a != null && b != null && a != "" && b != "" && a.length < 50 && b.length < 50) {
//         console.log("Done");
//     } else {
//         console.log("Error");
//         i--;
//     }
//     personalMovieDB.movies [a] = b;
// }

// let i = 0;
// do {
//     i++;
//     const a = prompt("Какой последний фильм вы посмотрели?");
//     const b = prompt("Как вы его оцените?");
//     if (a != null && b != null && a != "" && b != "" && a.length < 50 && b.length < 50) {
//                 console.log("Done");
//             } else {
//                 console.log("Error");
//                 i--;
//             }
//             personalMovieDB.movies [a] = b;
// } while (i < 2); 