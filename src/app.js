'use strict';

/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство private. 
Если стоит в позиции false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных genres

P.S. Функции вызывать не обязательно*/

let numberOfFilms = prompt(`How many movies have you watched?`);

function getFilmsAmount() {
  while (!numberOfFilms || !isFinite(numberOfFilms)) {
    numberOfFilms = +prompt(`How many movies have you watched?`);
  }
}
getFilmsAmount();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
};

function getFilmsRatingList() {
  for (let i = 0; i < 2; i++) {
    const answerLastFilm = prompt(`What the last movie have you watched?`, ``);
    const answerRateFilm = prompt(`How do you rate this film?`, ``);

    if (answerLastFilm && answerLastFilm.length < 50 && answerRateFilm) {
      personalMovieDB.movies[answerLastFilm] = answerRateFilm;
      console.log(`done`);
    } else {
      console.log(`error`);
      i--;
    }
  }
}
getFilmsRatingList();

function showUserRating() {
  if (personalMovieDB.count < 10) {
    alert(`You watched so few movies`);
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    alert(`You are ordinary person`);
  } else if (personalMovieDB.count > 30) {
    alert(`You are a movie lover!`);
  } else {
    alert(`ERROR`);
  }
}
showUserRating();

console.log(personalMovieDB);
