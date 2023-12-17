"use strict"

const btns = document.querySelectorAll('button'),
      wrapper = document.querySelector('.btn-block');
console.log(btns[0].classList.length); // дізнаємось кількість властивостей елемента
console.log(btns[0].classList.item(0)); //item метод, що дозволяє отримати клас під пвним номером
console.log(btns[0].classList.add('red', 'nonajk')); //додаємо певний клас або класи
console.log(btns[0].classList.remove('blue')); //вирізаємо певний клас
console.log(btns[0].classList.toggle('blue')); //нема - додаэ, э - вирызаэ
console.log(btns[1].classList.add('red'));

if (btns[1].classList.contains('red')) {
  console.log('red yes');
}


btns[0].addEventListener('click', () =>{
  if (btns[0].classList.contains('red')) {
    btns[0].classList.remove('red');
  } else {
    btns[0].classList.add('red');
  }
});
btns[1].addEventListener('click', () =>{
  console.log(btns[1].classList.toggle('blue'));
});

wrapper.addEventListener('click', (event) => {
  // console.dir(event.target); // показує дані по елементу на який ми клікнемо
  // if (event.target && event.target.tagName == "BUTTON") {// дл всых кнопок з тегом BUTTON
  if (event.target && event.target.classList.contains('red')) { // для кнопок з класом red
    console.log('Hello button');
  }

});

//додамо ще одну кнопку
const btn = document.createElement('button'); // створили кнопку
btn.classList.add('red'); // додали клас кнопці
wrapper.append(btn); //додали кнопку в кінці блока wrapper

btns.forEach(btn =>{  //метод перебору буде спрацьовувати лише на елемнтах, що існували до створення нових
  btn.addEventListener('click', () =>{
    console.log('Hello button');
  })
});

wrapper.addEventListener('click', (event) => {
  if (event.target && event.target.matches("button.blue")) { // перевірка на співпадіння з чимось
    console.log('Hello button');
  }

});