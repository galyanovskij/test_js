/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */
/* Задания на урок: 2

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';
document.addEventListener('DOMContentLoaded', () => {


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
    movies = list_movies.querySelectorAll('li'),
    addForm = document.querySelector('form.add'),
    addInput = addForm.querySelector('.adding__input'),
    checkBox = addForm.querySelector('[type="checkbox"]');

addForm.addEventListener('submit', (event) =>{
    event.preventDefault(); // відміняємо стандартну поведінку браузера - перезавантаження сторінки після заповнення форми
    let newFilm = addInput.value; //беремо інформацію, яку користувач ввів в інпут
    const favorite = checkBox.checked; // відмічений чекбокс
    if (newFilm) {
        if (newFilm.length > 21) { //якщо назва фільму більша 21 символу
            newFilm = `${newFilm.substring(0, 22)}...`; //вирізаємо з 1-го по 21-й символ
        }
        if (favorite) {
            // console.log('Добавляем любимый фильм');
            alert('Добавляем любимый фильм');
        }
        movieDB.movies.push(newFilm); // додали назву фільму з інпута в обєкт
        sortingItem(movieDB.movies);
        createMovieList(movieDB.movies, list_movies);
    }

    // addForm.reset();
    // addForm.reset(); // очистка форми
    event.target.reset();// очиста форми через звернення до елемента
});
// promo__adv.remove();
// adv_img.forEach(item =>{
//     item.remove();
// })
//перепишемо на функцію
const deleteAdv = (arr) => {
    arr.forEach(item =>{
        item.remove();
    }); 
};
deleteAdv(adv_img); 

// adv_img.forEach(function (item) {
//     item.remove();
// })

// promo__genre.innerHTML = 'Драма'; 
// promo__bg.style.background = "url('img/bg.jpg')";
// // movies[1].style.backgroundColor = 'red';
// movieDB.movies.sort();
// movieDB.movies.forEach((item, i) =>{
//     movies[i].innerHTML = ` ${i + 1}. ${movieDB.movies[i]}`;
// });  
// переписуємо га функцію
const makeChanges = ()  => {
    promo__genre.innerHTML = 'Драма'; 
    promo__bg.style.backgroundImage = "url('img/bg.jpg')";
}

makeChanges();

// варіант віl Івана - він видаляє блок з переліком філььмів і записує туди нові елементи
// list_movies.innerHTML = ''; //записуючи пустоту ми видаляємо код html з блока list_movies

// movieDB.movies.forEach((film, i) => {
//     list_movies.innerHTML += `
//     <li class="promo__interactive-item">${i+1}. ${film}
//         <div class="delete"></div>
//     </li>`
// });
const sortingItem = (items) => {
    items.sort();
}
sortingItem(movieDB.movies);


function createMovieList(films, parent) {
    parent.innerHTML = '';
    sortingItem(films);
    films.forEach((film, i) => {
    parent.innerHTML += `
    <li class="promo__interactive-item">${i+1}. ${film}
        <div class="delete"></div>
    </li>`;
    });
    document.querySelectorAll('.delete').forEach((btn, i) => {
        btn.addEventListener('click', () =>{ // звертаємось до кожної корзинки і навішуємо колбек фунецію кліка 
            btn.parentElement.remove(); // звертаємось до батьківського елемнта і видаляємо на сторінці
            movieDB.movies.splice(i, 1); // видаляємо з обєкта
            createMovieList(films, parent);
        });
    });
}
createMovieList(movieDB.movies, list_movies);


});