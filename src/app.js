'use strict';

const numberOfFilms = +prompt(`How many movies have you watched?`);

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
};

start: for (let i = 0; i < 3; i++) {
  let answerLastFilm = prompt(`What the last movie have you watched?`);
  let count = 0;

  while (!answerLastFilm || answerLastFilm.length > 50) {
    answerLastFilm = prompt(`Repeat: What the last movie have you watched?`);
    count++;

    if (count >= 3) {
      alert(`Begin from Start!`);
      break start;
    }
  }

  let answerRateFilm = prompt(`How do you rate this film?`);

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
