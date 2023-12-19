'use strict';

    const box = document.querySelector('.box'),
          btn = document.querySelector('button');

    // const width = box.clientWidth; // ширина без полоси прокрутки
    // const height = box.clientHeight; // без полоси прокрутки
    // const width = box.offsetWidth;  // спывпадаэ з CSS
    // const height = box.offsetHeight;
    const width = box.scrollWidth;  // увесь контент поза блоком
    const height = box.scrollHeight;

    console.log(width, height);
    // навішуємо обробник події на кнопку
    btn.addEventListener('click', () => {
      // box.style.height = height + 'px';
      console.log(box.scrollTop); // відслідковуємо скільки користувач проскролив тексту зверху
    });

    // отримаємо всі координати елемента
    // bottom від верху вікна до низу елемента - top + height елемента
    // right - від лівого краю вікна до правого елемента
    console.log(box.getBoundingClientRect());
    console.log(box.getBoundingClientRect().top); //відступ зверху
    //щоб подивитись скомпільовані стилі елемнта box
    const style = window.getComputedStyle(box)
    // console.log(style); // всі властивості
    console.log(style.display);  // конкретна властивість - block

    // загальний скрол документа користувачем
    console.log(document.documentElement.clientWidth);
    console.log(document.documentElement.clientTop); //можна керувати в браузері
    // для керування в консолі
    window.scrollBy(0, 400)  // зміщення екрану на 400 px від поточного положення користувача
    window.scrollTop(0, 400)  // зміщення користувача на 400 px від верху екрану
