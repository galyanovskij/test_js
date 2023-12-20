"use strict"

// const btns = document.querySelectorAll('button'),
//       wrapper = document.querySelector('.btn-block'),
//       btn = document.querySelector('.btn');
// let timerId4, i = 0;
//     //порста анімація
//     function myAnimation() {
//       const elem = document.querySelector('.box');
//       let pos = 0;
//       //функція, яка буде запускатись через певний час
//       const id = setInterval(frame, 10);
//       function frame() {
//         if (pos == 400){
//           clearInterval(id);
//           console.log('END');
//         } else {
//           pos++;
//           elem.style.top = pos +'px';
//           elem.style.left = pos +'px';
//         }
//       }
//     }
//     // трігер запуску функції буде клік
//     btn.addEventListener('click', myAnimation);

      // btn.addEventListener('click', () =>{
      //   // const timerId4 = setTimeout(logger, 2000);  
      //   timerId4 = setInterval(logger, 1000);  // використаємо глобальну змінну, щоб зупиняти таймер
      // });

      // function logger() {
      //   if (i == 3) {
      //     clearInterval(timerId4);
      //   }
      //   console.log("text 2000");
      //   i++;
      // }

    // рекурсивний виклик таймера
      // let id = setTimeout(function log(){
      //   if (i == 3) {
      //     console.log("END");
      //     return ('end');
      //   }
      //   console.log('Hello recurcion');
      //   id = setTimeout(log, 500);
      //   i++;
      // }, 500);   
  
  

// console.log(btns[0].classList.length); // дізнаємось кількість властивостей елемента
// console.log(btns[0].classList.item(0)); //item метод, що дозволяє отримати клас під пвним номером
// console.log(btns[0].classList.add('red', 'nonajk')); //додаємо певний клас або класи
// console.log(btns[0].classList.remove('blue')); //вирізаємо певний клас
// console.log(btns[0].classList.toggle('blue')); //нема - додаэ, э - вирызаэ
// console.log(btns[1].classList.add('red'));

// if (btns[1].classList.contains('red')) {
//   console.log('red yes');
// }


// btns[0].addEventListener('click', () =>{
//   if (btns[0].classList.contains('red')) {
//     btns[0].classList.remove('red');
//   } else {
//     btns[0].classList.add('red');
//   }
// });
// btns[1].addEventListener('click', () =>{
//   console.log(btns[1].classList.toggle('blue'));
// });

// wrapper.addEventListener('click', (event) => {
//   // console.dir(event.target); // показує дані по елементу на який ми клікнемо
//   // if (event.target && event.target.tagName == "BUTTON") {// дл всых кнопок з тегом BUTTON
//   if (event.target && event.target.classList.contains('red')) { // для кнопок з класом red
//     console.log('Hello button');
//   }

// });

// //додамо ще одну кнопку
// const btn = document.createElement('button'); // створили кнопку
// btn.classList.add('red'); // додали клас кнопці
// wrapper.append(btn); //додали кнопку в кінці блока wrapper

// btns.forEach(btn =>{  //метод перебору буде спрацьовувати лише на елемнтах, що існували до створення нових
//   btn.addEventListener('click', () =>{
//     console.log('Hello button');
//   })
// });

// wrapper.addEventListener('click', (event) => {
//   if (event.target && event.target.matches("button.blue")) { // перевірка на співпадіння з чимось
//     console.log('Hello button');
//   }

// });

//     // затримка викоику функції
//     const timerId1 = setTimeout(function() {
//       console.log('Hello 3000');

//     }, 3000); // затримка в мілісекундах
//     // та ж функція з аргументами
//     const timerId2 = setTimeout(function(text) {
//       console.log(text);

//     }, 3000, 'Hello 3000'); 
//     //через функцію
//     const timerId3 = setTimeout(logger, 2000);
// function logger() {
//   console.log("text 2000");
// }

// // працює і без змінної
// const timerId4 = setTimeout(logger, 2000);
// function logger() {
//   console.log("text 2000");
// }

    // працюємо з датою
    // let newDate = Date(0); //1970
    // let newDate = new Date(2023, 10, 18, 20);
    let newDate = new Date();
    // console.log(newDate.setHours(5)); //встановлюємо годиниж
    console.log(newDate);
    // console.log(newDate.getFullYear());
    // console.log(newDate.getMonth());
    // console.log(newDate.getDay());
    // console.log(newDate.getDate());
    // console.log(newDate.getHours());
    // console.log(newDate.getMinutes());
    // console.log(newDate.getSeconds());
    console.log(newDate.getTime()); //1702933827388

        // виміряємо час виконання цикла
        let start = new Date();
        for (let i = 1; i <= 100000; i++){
          let some = i ** 3; // підносимо до 3-го степеню
        }

        let end = new Date();
        console.log(`Час виконання циклу ${end-start}`);