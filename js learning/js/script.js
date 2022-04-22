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

// Первое консольное приложение 

// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', "");

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// const a = prompt('Один из последних просмотреных фильмов?', ''),
//       b = prompt('На сколько оцените его?', ''),
//       c = prompt('Один из последних просмотреных фильмов?', ''),
//       d = prompt('На сколько оцените его?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);

// Первое консольное приложение

// if (4 == 4) {   //if (1)
//     console.log('Ok!');
// } else {
//     console.log('Error');
// }

// const num = 50;

// if (num < 49) {
//     console.log('Error');
// } else if (num > 100) {
//     console.log('To much');
// } else {
//     console.log('Ok');
// }

// (num === 50) ? console.log('Ok') : console.log('Error');

// const num = 50;

// switch (num) {
//     case 49:
//         console.log('Wrong');
//         break;
//     case 100:
//         console.log('Wrong');
//         break;
//     case 50:
//         console.log('Right');
//         break;
//     default:
//         console.log('Not today');
//         break;
// }

// const hamburger = true;
// const fries = false;

// if (hamburger && fries) {
//     console.log('Я сыт!');
// } else {
//     console.log('Я голоден!');
// }

// console.log((hamburger && fries));

// const hamburger = 5;
// const fries = 0;

// if (hamburger && fries) {
//     console.log('Я сыт!');
// } else {
//     console.log('Я голоден!');
// }

// console.log((hamburger && fries));

// const hamburger = 3;
// const fries = 1;
// const cola = 0;

// if (hamburger === 3 && cola === 1 && fries) {
//     console.log('Все сыты!');
// } else {
//     console.log('Мы уходим!');
// }

// const hamburger = 3;
// const fries = 1;
// const cola = 0;

// console.log(hamburger === 3 && cola && fries);
// Оператор && выводит первое значение false или последнее значение truе в условии

// console.log(1 && 0);  // 0 потому что это значение false
// console.log(1 && 5); // 5 потому что это последнее значение true
// console.log(null && 5); // null это ничего и поэтому будет значение false (null в консоли)
// console.log(0 && 'qwqwqdqwdqw'); // 0 потому что 0 это не правда 

// && - это и, || - это или

// const hamburger = 3;
// const fries = 0;
// const cola = 0;

// if (hamburger || cola || fries) {
//     console.log('Все сыты!');
// } else {
//     console.log('Мы уходим!');
// }

// let johnReport, samReport, alexReport, mariaReport = 'done';

// console.log(johnReport || samReport || alexReport || mariaReport);

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;

// if (hamburger === 3 && cola === 2 || fries === 3 && nuggets) {
//     console.log('Все сыты!');
// } else {
//     console.log('Мы уходим!');
// }

// console.log(!0);

// let num = 50;

// while (num <= 55) {
//     console.log(num);
//     num++;
// }

// let num = 50;

// do {
//     console.log(num);
//     num++;
// }
// while (num < 55);

// for (let i = 1; i < 8; i++) {
//     if (i === 6) {
//         // break;
//         continue;
//     }

//     console.log(i);
// }

// for (let i = 0; i < 3; i++) {
//     console.log(i);
//     for ( let j = 0; j < 3; j++) {
//         console.log(j);
//     }
// }

// let result = '';
// const lenght = 7;

// for(let i = 1; i < lenght; i++) {

//     for(let j = 0; j < i; j++) {
//         result += '*';
//     }

//     result += '\n';
// }

// console.log(result);

// first: for (let i = 0; i < 3; i++) {
//     console.log(`First level: ${i}`);
//     for ( let j = 0; j < 3; j++) {
//         console.log(`Second level: ${j}`);
//         for ( let k = 0; k < 3; k++) {
//             if (k === 2) continue first;
//             console.log(`Third level: ${k}`);
//         }
//     }
// }

// Упражнения по написанию кода

function firstTask() {

    for (let i = 5; i < 11; i++) {

        console.log(i);
    }
}

firstTask();

function secondTask() {

    for (let i = 20; i >= 10; i--) {

        if (i === 13) {
            break;
        }
        console.log(i);
    }
}

secondTask();

function thirdTask() {

    for (let i = 2; i <= 10; i++) {

        if (i % 2 == 0) {
            console.log(i);
        }
    }
}

thirdTask();

function fourthTask() {
    let i = 2;

    while (i <= 16) {
        if (i % 2 === 0) {
            i++;
            continue;
        } else {
            console.log(i);
        }
        i++;
    }
}

fourthTask ();

fourthTask();

function fifthTask() {
    const arrayOfNumbers = [];

    for (let i = 5; i < 11; i++) {
        arrayOfNumbers[i - 5] = i;
    }

    console.log(arrayOfNumbers);
    return arrayOfNumbers;
}

fifthTask();

// Упражнения по написанию кода