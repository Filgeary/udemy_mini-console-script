'use strict';

const numberOfFilms = +prompt('How many movies have you watched?');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
};

const firstAnswerLastFilm = prompt('What the last movie have you watched?');
const firstAnswerRateFilm = prompt('How do you rate this film?');

const secondAnswerLastFilm = prompt('What the last movie have you watched?');
const secondAnswerRateFilm = prompt('How do you rate this film?');

personalMovieDB.movies[firstAnswerLastFilm] = firstAnswerRateFilm;
personalMovieDB.movies[secondAnswerLastFilm] = secondAnswerRateFilm;
