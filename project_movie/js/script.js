/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости777",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

// const promo__adv = document.querySelector('.promo__adv'),
 const adv_img = document.querySelectorAll('.promo__adv img'),
    promo__genre = document.querySelector('.promo__genre'),
    promo__bg = document.querySelector('.promo__bg'),
    list_movies = document.querySelector('.promo__interactive-list'),
    movies = list_movies.querySelectorAll('li');
// promo__adv.remove();
adv_img.forEach(item =>{
    item.remove();
})
// adv_img.forEach(function (item) {
//     item.remove();
// })

promo__genre.innerHTML = 'Драма'; 
promo__bg.style.background = "url('img/bg.jpg')";
movies[1].style.backgroundColor = 'red';
movieDB.movies.sort();
movieDB.movies.forEach((item, i) =>{
    movies[i].innerHTML = ` ${i + 1}. ${movieDB.movies[i]}`;
});  

// варіант ві Івана - він видаляє блок з переліком філььмів і записує туди нові елементи
list_movies.innerHTML = ''; //записуючи пустоту ми видаляємо код html з блока list_movies

movieDB.movies.forEach((film, i) => {
    list_movies.innerHTML += `
    <li class="promo__interactive-item">${i+1}. ${film}
        <div class="delete"></div>
    </li>
    
    `
});