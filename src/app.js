/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство private. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

'use strict';

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  private: false,
  getFilmsAmount() {
    let numberOfFilms = prompt(`How many movies have you watched?`);

    while (!numberOfFilms || !isFinite(numberOfFilms)) {
      numberOfFilms = +prompt(`How many movies have you watched?`);
    }
    personalMovieDB.count = numberOfFilms;
  },
  getFilmsRatingList() {
    for (let i = 0; i < 2; i++) {
      const answerLastFilm = prompt(`What the last movie have you watched?`);
      const answerRateFilm = prompt(
        `How do you rate this film?`,
        `from 1 to 10`
      );

      if (answerLastFilm && answerLastFilm.length < 50 && answerRateFilm) {
        personalMovieDB.movies[answerLastFilm] = answerRateFilm;
        console.log(`done`);
      } else {
        console.log(`error`);
        i--;
      }
    }
  },
  getUserGenres() {
    for (let i = 0; i < 3; i++) {
      const favoriteUserGenre = prompt(
        `Your favorite genre by number ${i + 1}`
      );
      personalMovieDB.genres[i] = favoriteUserGenre;
    }
  },
  showUserRating() {
    if (personalMovieDB.count < 10) {
      alert(`You watched so few movies`);
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
      alert(`You are ordinary person`);
    } else if (personalMovieDB.count > 30) {
      alert(`You are a movie Fan!`);
    } else {
      alert(`ERROR`);
    }
  },
  showMyDB() {
    if (!personalMovieDB.private) {
      console.log(personalMovieDB);
    }
  },
};

personalMovieDB.getFilmsAmount();
personalMovieDB.getFilmsRatingList();
personalMovieDB.getUserGenres();
personalMovieDB.showUserRating();
personalMovieDB.showMyDB();
