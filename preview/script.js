"use strict"
      const btns = document.querySelectorAll('button'),
            overlay = document.querySelector('.overlay');

// btn.onclick = function() {
//   alert('click');
// };
// btn.onclick = function() { // спрацює лише другий код, тому краще не використовувати
//   alert('Second click');
// };
// btn. addEventListener('click', () => {
//   alert('click');
// });

// btn. addEventListener('click', () => {  // виконається після першого ++
//   alert('Second click');
// });

// btn. addEventListener('mouseenter', (event) => { // mouseenter наведення мишки, event - подія, бовязковий перший з аргументів
//   console.log(event);
//   console.log(event.target); // target - одна з властивостей події, витягує елемнт на який ми навели
//   event.target.remove(); // видаляємо елемент на який навели
//   console.log('Hover');
// });



// винесемо функцію в окрему змінну
// let i = 0;
// const deleteElement = (e) => {
//   // e.target.remove();
//   console.log(e.target);
//   if (i == 1){
//     // потім видаляємо функцію з події
//     btn.removeEventListener('click', deleteElement); // функція без круглих дужок, ми не викликаємо функцію а лише посилаємось на неї
//   }
// };
// // спочатку ми призначаємо функцію на подію
// btn.addEventListener('click', deleteElement); // функція без круглих дужок, ми не викликаємо функцію а лише посилаємось на неї

    // спливання подій - від нижчого рівня на вищий відбувається
    const deleteElement = (e) => {
      // console.log(e.target);
      console.log(e.currentTarget);
      console.log(e.type);

    };
    // btn.addEventListener('click', deleteElement); 
    // overlay.addEventListener('click', deleteElement); 

    // якщо нам потрібно навісити подію на декілька схожих елементів (у нас кнопок) потріно їх перебирати уиклом
      btns.forEach(btn => {
        btn.addEventListener('click', deleteElement, {once:true}); //{once:true} третій аргумент, який говорить що обробник буде спрацьовувати лише раз
      });  
  



    // відміна стандартної поведінки браузера

    const link = document.querySelector('a');

    link.addEventListener('click', function(event) {
      event.preventDefault(); //браузер, зупинись, не потрібно виконувати перехід за посиланням
      console.log(event.target);
    })