    // touchstart 
    // touchmove
    // touchend  відрив від елемента
    // touchenter коли палець потрапляє на елемент з цією подією
    // touchleave палець вийшов за межі елемента
    // touchcancel точка дотику не реєструється на повенрхні (за межами браузера)

    window.addEventListener('DOMContentLoaded', () => {

      const box = document.querySelector('.box');
      box.addEventListener('touchstart', (e) => {
        e.preventDefault(); // відміняємо стапндартну поведінку браузера
        console.log('Start');
        // console.log(e.touches);
        console.log(e.targetTouches);
      });

      box.addEventListener('touchmove', (e) => {
        e.preventDefault(); // відміняємо стапндартну поведінку браузера
        // console.log('touchmo  ve');
        console.log(e.targetTouches[0].pageX); // показує координати при русі
      });

      // box.addEventListener('touchend', (e) => {
      //   e.preventDefault(); // відміняємо стапндартну поведінку браузера
      //   console.log('touch END');
      // });
      
    }); 

// // підключаємо скрипти черех скрипт
// function loadScript(src){
//   const script = document.createElement('script');//створюємо елемент на сторінці
//   script.src = src;
//   script.async = false; // відключаємо асинхронність
//   document.body.append(script); // розміщуємо в низу body
// }
// // підключаємо любу кількість скриптів, які будуть завантажуватись по черзі
// loadScript("js/test.js");
// loadScript("js/main.js");
