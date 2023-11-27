/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

let numberOfFilms;
function start() {
  numberOfFilms = +prompt('Скільки фільмів ви уже подивились?', '');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){ // пуста стрічка - нпєимає ок || або відміняє дію null || або ввів не число isNaN
    numberOfFilms = +prompt('Скільки фільмів ви уже подивились?', '');
  }
}

// start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false //не приватне і консоль виведельтя за останньою перевіркою, а при true не виведеться
};

function rememberMyFilms() {
  for (let i=0; i<2; i++){
    // const a = prompt('Один з останні переглянутих фільмів?', ''),
    const a = prompt('Один з останні переглянутих фільмів?', '').trim(), // trim вирізає пробіли на початку та в кінці стрічки
    str.trim();
        b = +prompt('Яку оцінку поставите цьому фільму?', '');
        if (a != null && b != null && a != '' && b != '' && a.length < 50) { // null отримуємо коли користувач натискає кнопку відміна '' перевіряємо на пусте значення - коли енатискається кнопка ок без введеного значення
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
  }
}
// rememberMyFilms();

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log('Переглянули мало фільмів');
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count <30){
    console.log('ви класичний глядач');
  } else if (personalMovieDB.count >= 30) {
    console.log('ви кіноман');
  } else {
    console.log('Помилкові дані');
  } 
}

// detectPersonalLevel();

function showMyDB (hidden) {
  if (!hidden){
    console.log(personalMovieDB);
  }
}

showMyDB(personalMovieDB.privat); //передаємо в функцію значення змінної/аргументу privat обєкта personalMovieDB


function writeYourGenres(){
  for(let i = 1; i <= 3; i++ ){
    // const genre = prompt(`Ваш улюблений жанр під номером ${i}`);
    // personalMovieDB.genres[i-1] = genre;
    personalMovieDB.genres[i-1] = prompt(`Ваш улюблений жанр під номером ${i}`); // скорочений варыант
  }
}
writeYourGenres();