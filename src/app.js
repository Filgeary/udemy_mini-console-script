'use strict';

const numberOfFilms = +prompt('How many movies have you watched?');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
};

const firstQuestionLastFilm = prompt('What the last movie have you watched?');
const firstQuestionRateFilm = prompt('How do you rate this film?');

const secondQuestionLastFilm = prompt('What the last movie have you watched?');
const secondQuestionRateFilm = prompt('How do you rate this film?');

personalMovieDB.movies[firstQuestionLastFilm] = firstQuestionRateFilm;
personalMovieDB.movies[secondQuestionLastFilm] = secondQuestionRateFilm;

console.log(personalMovieDB);
