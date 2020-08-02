'use strict';

/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство private. 
Если стоит в позиции false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных genres

P.S. Функции вызывать не обязательно*/

const numberOfFilms = +prompt(`How many movies have you watched?`);

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
};

start: for (let i = 1; i <= 3; i++) {
  let answerLastFilm = prompt(
    `Question 1.${i}
    What the last movie have you watched?`
  );
  let tryCount = 1;

  while (!answerLastFilm || answerLastFilm.length > 50) {
    answerLastFilm = prompt(
      `Please, fill out this field correctly!
      ${tryCount} Try of 3
      What the last movie have you watched?`
    );
    tryCount++;

    if (tryCount > 3) {
      alert(`Please, fill out fields correctly!`);
      break start;
    }
  }

  let answerRateFilm = +prompt(
    `Question 2.${i}
    How do you rate this film?`
  );
  tryCount = 1;

  while (!answerRateFilm) {
    answerRateFilm = +prompt(
      `Please, fill out this field correctly!
      ${tryCount} Try of 3
      How do you rate this film?`
    );
    tryCount++;

    if (tryCount > 3) {
      alert(`Please, fill out fields correctly!`);
      break start;
    }
  }

  personalMovieDB.movies[answerLastFilm] = answerRateFilm;
}

if (personalMovieDB.count < 10) {
  alert(`You watched so few movies`);
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
  alert(`You are ordinary person`);
} else if (personalMovieDB.count > 30) {
  alert(`You are a movie lover!`);
} else {
  alert(`ERROR`);
}

console.log(personalMovieDB);
