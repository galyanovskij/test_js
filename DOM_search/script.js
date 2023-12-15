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
          }],
          semi: {   // дописали обєкт в обєкті і ітераційний метод його не опрацює, а рекурсія обчислить
            students:[{
              name: 'test',
              progress: 20
            }]
          }
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
    
    // console.log(getTotalProgressByIteration(students)); // написана під конкретний приклад даних
    // реалізація через рекурсію  - працює над різними типами даних з однаковою базо
    function getTotalProgressRecurcion(data) {
      if (Array.isArray(data)) {
        let total = 0;
        for (let i = 0; i < data.length; i++) {  //база рекурсії
          total += data[i].progress;
        }
        return [total, data.length];
      } else {
        let total = [0, 0];
        for (let subData of Object.values(data)) { // перебираємо значення  обєкта
          const subDataArr = getTotalProgressRecurcion(subData);
          total [0] += subDataArr[0];
          total [1] += subDataArr[1];

        }
        return total;
      }
    }
    const result = getTotalProgressRecurcion(students);
    console.log(result[0] / result[1]);


    // Напишите функцию, которая вычисляет факториал.

    // Задание простое, но нужно понимать что такое факториал вообще. Факториал  – это число, умноженное на "себя минус один", затем на "себя минус два", и так далее до 1. Факториал n обозначается как n!
    
    // Отсюда мы можем понять, что функция должна принимать 1 аргумент, который будет являться числом. Будет неплохо, если вы на собеседовании сразу напишите проверку на приходящее значение :) Поэтому, если в нашу функцию приходит дробное число или не число  - возвращается строка с любым сообщением на ваше усмотрение. Если 0 и меньше - возвращается число 1.
    
    // Сам же факториал с примерами выглядит вот так:
    
    // n! = n * (n - 1) * (n - 2) * ...*1 - это общая формула
    
    // Примеры значений для разных n:
    
    // 1! = 1
    // 2! = 2 * 1 = 2
    // 3! = 3 * 2 * 1 = 6
    // 4! = 4 * 3 * 2 * 1 = 24
    // 5! = 5 * 4 * 3 * 2 * 1 = 120
    // То есть, вызов нашей функции factorial(5) возвращает число 120
    
    // factorial(4) => 24

      function factorial(n) {
        if (n === 1) {
          return n;
        }
        if (n > 1){
          let res_it = 1;
            for (let i = n; i >= 1; i-- ) {
              res_it *= i;
            }
            return res_it;
          } 
  
          }
    console.log(factorial(1));

// код Івана через рекурсію
function factorial(n) {
  if (typeof(n) !== 'number' || !Number.isInteger(n)) {
      return "Ошибка, проверьте данные";
  }

  if (n >= 1) {
      return n * factorial(n - 1);
  } else {
      return 1;
  }

  ; // Более короткий вариант, который вы можете встретить
  ; // Но не учитывает отрицательные значения
  ; return n ? n * factorial(n - 1) : 1;
}
console.log(factorial(2));