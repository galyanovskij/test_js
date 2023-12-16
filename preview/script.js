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

for (let i = 1; i < 2; i++) {
  const div = document.createElement('div');
  div.classList.add('box');
  document.body.append(div);
}

const boxesQuery = document.querySelectorAll('.box');
const boxesGet = document.getElementsByClassName('box'); //жива колекція і нею не можна керувати

// boxesQuery[0].remove();
// boxesGet[0].remove();

console.log(boxesQuery); // показує зліпок після виклику і не араховує видалення
console.log(boxesGet); // показує реальну картину

console.log(Array.from(boxesGet)); // переводимо rjktrws. в масив? zroj gjnhs,yj p ybv ghfw.dfnb

{/* <div class="box"></div>
		<div class="box this"></div>
		<div class="box"></div> */}

// знаходимо елемент по селектору this

boxesQuery.forEach(box => {
  if (box.matches('.this')) {
    console.log('This знайшли!');
    console.log(box); // виводимо елемент з класом this, який ми знайшли 
    box.style.backgroundColor = 'black';
  }
})

console.log(boxesQuery[0].closest('.wrapper')); // знайти найблищий елемент з классом .wrapper 
const mybody = document.querySelector('.wrapper');
console.log(mybody);

mybody.style.backgroundColor = 'gray';

// FOR in - FOR of

const arr = [1, 2, 3 , 4, 5] ;

for (let key in arr) {  // відразу отримуємо значення ключів/мтодів
  console.log(arr[key]);// значення методу уже лежить в змінінй циклу
}
for (let key of arr) {  // відразу отримуємо значення ключів/мтодів
  console.log(key);// значення методу уже лежить в змінінй циклу
}

const str = 'Hello Oleg' ;

for (let key in str) {  
  console.log(str[key]);
}
for (let key of str) {  
  console.log(key);
}

// для роботи з обєктом його потрібно зробити ітерабельним
// для цього в обєкт потрібно додати мктод ітерації, який потрібно самому створити

  const salaries = {
    Oleg: 100,
    Ann: 25,
    Viki: 75,
    Olga: 150,
    sayHello: function() {
      console.log('Hello Oleg');
    }
  }

  salaries[Symbol.iterator] = function() {
    return {
        current: this.Ann,
        last: this.Olga,
      next() {
        if (this.current < this.last) {
          this.current = this.current + 25;
          return {done: false, value: this.current}
        } else {
          return {done: true}
        }
      }
    }
  }

  for (let res of salaries) { 
    console.log(res); 
  }

  // в обєктах ключем не може бути масив чи функці і т п , тоиму використвоуємо map

  const shops = [
    {rice: 500},
    {oil: 300},
    {salt: 100}
  ]
// створюємо карту 
const mymap = new Map();

// mymap.set(shops[0], 5000);
// console.log(mymap);

// можна заповнити мар через цикл, а можнна через стрічку

mymap.set(shops[0], 5000)
.set(shops[1], 1000)
.set(shops[2], 15000);
console.log(mymap);
// console.log(mymap.get(shops[0]));
// console.log(mymap.has(shops[0])); //чи є такий обєкт в карті - true
//map.delete(key);
//map.clear();
//map.size

// методи перебору карт
// 1 вибираємо товари у всіх магазинах
const goods = [];
for (let shop of mymap.keys()) {
  goods.push(Object.keys(shop)[0]); // записуємо пеше значення ключів магазинів в масив goods - при тому що у нас один товар в магазині...
}
console.log(goods);

// 2 витягуємо значення
for (let price of mymap.values()) {
  console.log(price);
}

//3
for (let price of mymap.entries()) {
  console.log(price);
}
// це же спосіб деструктуризуємо
for (let [shop, price] of mymap.entries()) {
  console.log([shop, price]);
  console.log(price, shop); //можна і так
}

// 4 
mymap.forEach((value, key, map) => {
  console.log(key, value);
})

// створимо карту з обєкта

    // SET
    const arr = [1, 1, 8, 8, 2, 2, 5, 6, 9];
    const set = new Set(arr);
    set.add('Ivan').add('Oleg');
    // console.log(set);
    set.delete(2); // видаляємо значення яке є в масиві
    // set.has(value); // перевіряємо чи є таке значення
    console.log(set.size); // розмір на 1 менше ....

    for (value of set) console.log(value);
    set.forEach((value) => {
      // console.log(value);
    });

    // console.log(set.values());

    // функція помічника - переганяємо масив через set і тм самим унікалізуємо
    function unique(arr) {
      return Array.from(new Set(arr));
    }

    console.log(unique(arr));

    console.log(Number.MAX_SAFE_INTEGER);
    // 9007199254740991
    // const bigint = 76465897639847639487638497638976593876389n;
    const saveBigint = BigInt(76465897639847639487638497638976593876389n);
    // console.log(typeof(bigint));

    let bigint = 2n;
    let number = 1;

    console.log(bigint + BigInt(number)); // переводимо звичайне число в велике і додаємо два великих
    console.log(Number(saveBigint) + number); // переводимо велике число в звичайне і додаємо два звичайних - можемо обрізати число