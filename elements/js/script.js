    'use strict';

    // const box = document.getElementById('box');
    // console.log(box);
    // const btns = document.getElementsByTagName('button');
    // console.log(btns); // отримаємо всі кнопки на сторінці - HTML колекцію
    // console.log(btns[0]); // отримаємо лише першу кнопку
    // const circles = document.getElementsByClassName('circle');
    // console.log(circles);
    // // відносно новий метод отримання даних зі сторінки Html
    // const hearts = document.querySelectorAll('.heart'); // можемо вибирати по CSS селектору
    // console.log(hearts);

    // hearts.forEach(item => { //перебираємо та виводимо всі елементи колекції по селектору
    //   console.log(item);
    // });

    // // цей метод виводить перший елемент по селектору CSS

    // const oneHeart = document.querySelector('.heart');
    // console.log(oneHeart); // отримаємо лише одне перше значення


    const box = document.getElementById('box'),
          btns = document.getElementsByTagName('button'),
          circles = document.getElementsByClassName('circle'),
          wrapper = document.querySelector('.wrapper'),
          hearts = wrapper.querySelectorAll('.heart'), // через попередній елемент
          // hearts = document.querySelectorAll('.heart'),
          oneHeart = document.querySelector('.heart');

    console.dir(box); // дивимось в консолі всі властивості та методи елемента
    box.style.backgroundColor = 'green'; // змінюємо inline стилі через style 
    box.style.width = '500px';
    //щоб змінити декілька стилей в одного елементу
    box.style.cssText = 'background-color:red; width:450px';

    btns[1].style.borderRadius = '100%';
    hearts[0].style.backgroundColor = 'pink';
    // для роботи з декількома елементами використаємо цикл
    for (let i=0 ; i <hearts.length ; i++) {
      hearts[i].style.backgroundColor = 'black';
    }
    // більш зручний спосіб
      hearts.forEach(item =>{
        item.style.backgroundColor = 'white';
      });

    // створюємо елементи сторінки на льоту
    const div = document.createElement('div');//створили елемент дише в коді js, на сторінці його ще немає
    // const text = document.createTextNode('текст вставлений js'); майже не використовується
    div.classList.add('black'); //додаємо існуючі стилі
    document.body.append(div); //виводимо нащш елемент в низ блока body
    // document.body.appendChild(div); //old
    // document.querySelector('.wrapper').append(div);//одночасно викликаємо блок за селектором .wrapper і в низ нього додаємо наш елеменнт div
    wrapper.append(div); //додаємо свій блок в змінну, яку витягнули раніше в кінці блоку
    wrapper.prepend(div); //додаємо свій блок в змінну, яку витягнули раніше на початку блока
    // роззміщуємо перед елементом
    hearts[1].before(div); //перед другим сердечком
    hearts[1].after(div); //після другого сердечка
    // wrapper.insertBefore(div, hearts[0]); // old два аргумента - кого і перед ким
    // видаляємо елемент з документа
    circles[0].remove(); //видаляємо перший круг овністю з кода
    // wrapper.removeChild(hearts[0]); //old видаляємо елемент в батьківському
    // заміна елемента
    hearts[1].replaceWith(circles[1]);   //спочатку вказуємо який хочемо замінити, потім яким. Перший зникне, а другий переміститься на його місце
    // wrapper.replaceChild(circles[1], hearts[1]);//old спочатку той що встапвляємо, потім той на місце якого вставляємо і все це в батьківському блоці
    // додаємо HTML в секредину нашого елемента
    div.innerHTML = '<h1>Привіт</h1>'; //якщо в ньому є дані, вони перезапишуться
    // div.textContent = 'привіт'; // другий спосіб лише текстовий
    //розміщуємо блоки HTML по відношенню до нашого елемента div
    div.insertAdjacentHTML('beforebegin', '<h2>Hello Oleg</h2>'); // пред блоком нашого елемента
    div.insertAdjacentHTML('beforeend', '<h2>Hello Oleg beforeend</h2>'); // в середині блока в кінці
    div.insertAdjacentHTML('afterbegin', '<h2>Hello Oleg afterbegin</h2>'); // в середині блока на початку
    div.insertAdjacentHTML('afterend', '<h2>Hello Oleg afterend</h2>'); // за блоком після нього