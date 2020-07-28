'use strict';

/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

const numberOfFilms = +prompt('How many movies have you watched?');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
};

start: for (let i = 0; i < 3; i++) {
  let answerLastFilm = prompt('What the last movie have you watched?');
  let count = 0;

  while (!answerLastFilm || answerLastFilm.length > 50) {
    answerLastFilm = prompt('Repeat: What the last movie have you watched?');
    count++;

    if (count >= 3) {
      alert(`Begin from Start!`);
      break start;
    }
  }

  let answerRateFilm = prompt('How do you rate this film?');

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
