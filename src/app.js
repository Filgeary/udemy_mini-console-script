'use strict';

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  private: true,
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
      if (favoriteUserGenre && !isFinite(favoriteUserGenre)) {
        personalMovieDB.genres[i] = favoriteUserGenre;
        console.log(`done`);
      } else {
        console.log(`error`);
        i--;
      }
    }
    personalMovieDB.genres.forEach((item, index) =>
      console.log(`Favorite genre #${++index} - is ${item}`)
    );
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
  toggleVisibleMyDB() {
    if (this.private) {
      this.private = false;
    } else {
      this.private = true;
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
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB();
