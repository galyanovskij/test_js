      "use strict"
      const inputUah = document.querySelector('#uah'),
            inputUsd = document.querySelector('#usd');

      // обробник події
      inputUah.addEventListener('input', () =>{
        //створюємо екземпляр класу
        const request = new XMLHttpRequest();
        //метод open  збираємо налаштування які допомождуть зробити запит
        // request.open(method, url, async(за замовчуванням), login, pass)
        request.open('GET', 'js/current.json');
        // передаємо заголовки на сервер, щоб він розумів що ми передаємо
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8' );
        //робимо запит
        request.send();
        // розберемо вдастивості
        //status 404 / 500 / 200 
        // statusText  - ok, not foud
        // respons  - відповідь від сервера
        // readyState (0-4)
        // розберемо події обєкта XMLHttpRequest
        // відслідковує стaтус готовності нашого запиту в даний момент
        // request.addEventListener('readystatechange', () => {
        //   if (request.readyState === 4 && request.status === 200) {
        //     console.log(request.response);
        //     // переведемо обєкт json в зручний формат
        //     const data = JSON.parse(request.response);
        //     console.log(data);
        //     inputUsd.value = (+inputUah.value / data.current.usd).toFixed(2);
        //   } else {
        //     inputUsd.value = 'Щось пішло не так';

        //   }
        // });
        // частіше використовується
                request.addEventListener('load', () => {
          if (request.status === 200) {
            const data = JSON.parse(request.response);
            inputUsd.value = (+inputUah.value / data.current.usd).toFixed(2);
          } else {
            inputUsd.value = 'Щось пішло не так';
          }
        });

      });      