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

let numberOfFilms;
for (let i = 0; i < 1; i++) {
    numberOfFilms = prompt("Сколько фильмо вы уже посмотрели");
    if (numberOfFilms !== null && numberOfFilms !== "" && numberOfFilms < 50) {
        console.log("Done");
    } else {
        console.log("Error");
        i--;
    }
}

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false,
};

for (let i = 0; i < 2; i++) {
    const a = prompt("Какой последний фильм вы посмотрели?");
    const b = prompt("Как вы оцените его?");
    if (a != null && b != null && a != "" && b != "" && a.length < 50 && b.length < 50) {
        console.log("done");
    } else {
        console.log("error");
        i--;
    }
    personalMovieDB.movies[a] = b;
}

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

if (personalMovieDB.count < 10) {
    console.log("Просмотренно довольно мало фильмов");
} else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
} else if (personalMovieDB.count > 30) {
    console.log("Вы киноман");
} else {
    console.log("Произошла ошибка");
}
console.log(personalMovieDB);