"use strict"

let str = 'same';
let strObj = new String(str); //старий метод краще не використовувати
console.log(typeof(str));
console.log(typeof(strObj));

console.dir([1, 2, 33]);

const soldier = {
  health: 400,
  arm: 100,
  sayHello: function() {
    console.log('Hello!');
  }
};

// const John = {     
//   health: 200
// };
const John = Object.create(soldier); //правильний запис створення обєкта за прототипом
// John.__proto__ = soldier; // старий варіант наслідування властивостей обєкта
Object.setPrototypeOf(John, soldier); // новий варіант наслідування обєкта - другим іде прототип, встановили прототип джона від солдата
console.log(John); // побачимо лише значенн методів даного обєкта
console.log(John.arm); // плбачимо знвчення методів обєкта, який наслідуємо
John.sayHello();

// з файла script_movies_function_DB беремо задачу і переписуємо
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

function showMyDB (hidden) {
  if (!hidden){
    console.log(personalMovieDB);
  }
}
function writeYourGenres(){
  for(let i = 1; i <= 3; i++ ){
    // const genre = prompt(`Ваш улюблений жанр під номером ${i}`);
    // personalMovieDB.genres[i-1] = genre;
    personalMovieDB.genres[i-1] = prompt(`Ваш улюблений жанр під номером ${i}`); // скорочений варыант
  }
}

/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

// з функції метод start переносимо в середину объекта personalMovieDB
const personalMovieDB = {
  count: 0, 
  movies: {},
  actors: {},
  genres: [],
  privat: false, 
  start: function() {
    personalMovieDB.count = +prompt('Скільки фільмів ви уже подивились?', '');
      while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(numberOfFpersonalMovieDB.countilms)){ 
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
    for(let i = 1; i <= 3; i++ ){
      let genre = prompt(`Ваш улюблений жанр під номером ${i}`); // promt завжди повертає тип даних стрічку
        if (genre === '' || genre == null) {
          console.log('ви ввели не коректні дані');
          i--; // повертаємось на один крок назад в циклі
        } else {
          personalMovieDB.genres[i-1] = genre; // скорочений варыант
        }
    }
    personalMovieDB.genres.forEach((item, i) =>{
      console.log(`Любимый жанр ${i + 1} - это ${item}`);
    });
  }
  
};

// перепишемо метод на введення даних через кому
writeYourGenres: function(){
  for(let i = 1; i < 2; i++ ){ //цикл запускаємо один раз

    let genres = prompt(`введіть ваші улюблені жанри через кому`).toLowerCase(); // переведемо в нижній регістр для правильного сортування
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