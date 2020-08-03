'use strict';

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  private: false,
};

function getFilmsAmount() {
  let numberOfFilms = prompt(`How many movies have you watched?`);

  while (!numberOfFilms || !isFinite(numberOfFilms)) {
    numberOfFilms = +prompt(`How many movies have you watched?`);
  }
  personalMovieDB.count = numberOfFilms;
}
getFilmsAmount();

function getFilmsRatingList() {
  for (let i = 0; i < 2; i++) {
    const answerLastFilm = prompt(`What the last movie have you watched?`);
    const answerRateFilm = prompt(`How do you rate this film?`, `from 1 to 10`);

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

function getUserGenres() {
  for (let i = 0; i < 3; i++) {
    const favoriteUserGenre = prompt(`Your favorite genre by number ${i + 1}`);
    personalMovieDB.genres[i] = favoriteUserGenre;
  }
}
getUserGenres();

function showUserRating() {
  if (personalMovieDB.count < 10) {
    alert(`You watched so few movies`);
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    alert(`You are ordinary person`);
  } else if (personalMovieDB.count > 30) {
    alert(`You are a movie Fan!`);
  } else {
    alert(`ERROR`);
  }
}
showUserRating();

function showMyDB() {
  if (!personalMovieDB.private) {
    console.log(personalMovieDB);
  }
}
showMyDB();
