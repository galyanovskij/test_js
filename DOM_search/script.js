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

    //   for (let node of document.body.childNodes) {
    //     if (node.nodeName == '#text') { // коли знаходимо #text перериваємось і ідемо шукати далі
    //       continue;
    //     }
    //     console.log(node);
    //   }

    // // функція піднгесення до степеня

    // function pow(x, n){
    //   let resalt = 1;
    //   for (i = 0; i < n ; i++) {
    //     resalt *= x;
    //   }
    //   return resalt;
    // }

    // console.log(pow(2, 2)); // 4

    // // код через рекурсію - ,база, шаг, глибина
    // function pow(x, n){
    //   if (n === 1) {
    //     return x;
    //   } else {
    //     return x * pow(x, n - 1);
    //   }
    // }

    // console.log(pow(2, 2));

    let students = {
        js:[{
          name: 'John',
          progress: 100
        }, {
          name: 'Oleg',
          progress: 80
        }],
        html: {
          basic:[{
            name: 'Olga',
            progress: 70
          }, {
            name: 'Anna',
            progress: 75
          }],
          pro: [{
            name: 'Ivan',
            progress: 90
          }, {
            name: 'Viki',
            progress: 95
          }]
        }
    };
    
  function getTotalProgressByIteration(data)  {
    let total = 0;
    let students = 0;
    for (let course of Object.values(data)) {
      if (Array.isArray(course)){ //перевірємо чи це у нас масив
        students += course.length;
        for (let i = 0; i < course.length; i++) {
          total += course[i].progress;
        }
        } else { // коли у нас не масив а обєкт
          for (let subCourse of Object.values(course)) {
            students += subCourse.length;
            for (let i = 0; i < subCourse.length; i++) {
              total += subCourse[i].progress;
            }
          }
        }
      }
    return total / students;
  }
    
    console.log(getTotalProgressByIteration(students));