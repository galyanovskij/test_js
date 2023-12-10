"use strict"

const personalMovieDB = {
  count: 0, 
  movies: {},
  actors: {},
  genres: [],
  privat: false, 
  start: function() {
    personalMovieDB.count = +prompt('Скільки фільмів ви уже подивились?', '');
      while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)){ 
      personalMovieDB.count = +prompt('Скільки фільмів ви уже подивились?', '');
    }
  },
  rememberMyFilms: function() {
    for (let i=0; i<2; i++){
      const a = prompt('Один з останні переглянутих фільмів?', '').trim(), 
            b = +prompt('Яку оцінку поставите цьому фільму?', '');
          if (a != null && b != null && a != '' && b != '' && a.length < 50) { 
              personalMovieDB.movies[a] = b;
              console.log('done');
          } else {
              console.log('error');
              i--;
          }
        }
    },
  detectPersonalLevel: function() {
    if (personalMovieDB.count < 10) {
      console.log('Переглянули мало фільмів');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <30){
      console.log('ви класичний глядач');
    } else if (personalMovieDB.count >= 30) {
      console.log('ви кіноман');
    } else {
      console.log('Помилкові дані');
    } 
  },
  showMyDB: function(hidden) {
    if (!hidden){
      console.log(personalMovieDB);
    }
  },
  toggleVisibleMyDB: function() {
    if (personalMovieDB.privat) {
      personalMovieDB.privat = false;
    } else {
      personalMovieDB.privat = true;
    }
  },
  writeYourGenres: function(){
    for(let i = 1; i < 2; i++ ){ //цикл запускаємо один раз
  
      let genres = prompt(`введіть ваші улюблені жанри через кому з пробілом`).toLowerCase(); // promt завжди повертає тип даних стрічку
        if (genres === '' || genres == null) {
          console.log('ви ввели не коректні дані');
          i--; // повертаємось на один крок назад в циклі
        } else {
          personalMovieDB.genres = genres.split(', '); // бере стрічку і розбиває на певні елементе через заданий розділювач
          personalMovieDB.genres.sort(); // викликаємо метод сортування
        }
    }
    personalMovieDB.genres.forEach((item, i) =>{
      console.log(`Любимый жанр ${i + 1} - это ${item}`);
    });
  }
};