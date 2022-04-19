"use strict";

// let number = 5;
// const leftBorderWidth = 1;

// number = 10;
// console.log (number);

// const arr = [1, 2, 3];
// console.log(arr);

// const obj = {
//     Anna: 500,
//     Alice: 800
// };
// console.log(obj);

// alert('warning');

// const result = confirm('Are you here?');
// console.log(result);

// const answer = +prompt('Вам точно есть 18', "18");
// console.log(answer + 5);

// console.log(4%2);

// const isChecked = true,
//       isClose = false;

// console.log(isChecked || isClose);

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотреных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотреных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

