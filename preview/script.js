"use strict"
const btn = document.querySelector('button');

// btn.onclick = function() {
//   alert('click');
// };
// btn.onclick = function() { // спрацює лише другий код, тому краще не використовувати
//   alert('Second click');
// };
btn. addEventListener('mouseenter', (event) => { // mouseenter наведення мишки, event - подія, бовязковий перший з аргументів
  console.log(event);
  console.log(event.target); // target - одна з властивостей події, витягує елемнт на який ми навели
  event.target.remove(); // видаляємо елемент на який навели
  console.log('Hover');
});

btn. addEventListener('click', () => {
  alert('click');
});

btn. addEventListener('click', () => {  // виконається після першого ++
  alert('Second click');
});