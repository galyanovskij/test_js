"use strict"

    // // console.log(document.documentElement); // весь Html документ отримуємо
    // // console.log(document.head);
    // // console.log(document.body);
    // console.log(document.body.childNodes); //отримуэмо ноди та вузли, які є дітьми body
    // console.log(document.body.firstChild); //перший дочірній елемент - може бути і перенос стрічки
    // console.log(document.body.firstElementChild); //перший дочірній елемент 
    // console.log(document.body.lastChild); //остапнній дочірній елемент 

    // // вибираємо елемент за id
    // console.log(document.querySelector('#current'));
    // console.log(document.querySelector('#current').parentNode); // батьківський вузол
    // console.log(document.querySelector('#current').parentNode.parentNode); // надбатьківський вузол
    // console.log(document.querySelector('#current').parentElement); // надбатьківський елемент

    //     // дата атрибути в html
    //     // <li data-current="3">3</li>
    //     // <li data-current>3</li>  <==><li data-current=true>3</li> // завжди починаємо з data-
    //     console.log(document.querySelector('[data-current="3"]')); //витягуємо елемннт з  дада атрибутом -<li data-current>3</li>
    //     console.log(document.querySelector('[data-current="3"]').nextSibling); //наступний елемен
    //     console.log(document.querySelector('[data-current="3"]').previousSibling); //попередній елемен, але це може бути і перенос стрічки
    //     console.log(document.querySelector('[data-current="3"]').previousElementSibling); //так ми будемо рухатись чітко по елементам

      // console.log(document.body.childNodes); //щоб отримати лише елементи  -потрібний перебор. Тут не працює forEch...

      for (let node of document.body.childNodes) {
        if (node.nodeName == '#text') { // коли знаходимо #text перериваємось і ідемо шукати далі
          continue;
        }
        console.log(node);
      }

