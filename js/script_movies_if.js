/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';

const numberOfFilms = +prompt('Скільки фільмів ви уже подивились?', '');
const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

for (let i=0; i<2; i++){
    const a = prompt('Один з останні переглянутих фільмів?', ''),
        b = +prompt('Яку оцінку поставите цьому фільму?', '');
        if (a != null && b != null && a != '' && b != '' && a.length < 50) { // null отримуємо коли користувач натискає кнопку відміна '' перевіряємо на пусте значення - коли енатискається кнопка ок без введеного значення
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    
}

if (personalMovieDB.count < 10) {
    console.log('Переглянули мало фільмів');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <30){
    console.log('ви класичний глядач');
} else if (personalMovieDB.count >= 30) {
    console.log('ви кіноман');
} else {
    console.log('Помилковы дані');
} 

console.log(personalMovieDB);