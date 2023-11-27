// 1) Создайте функцию, которая принимает в себя целое число минут и возвращает время в нужном формате строки. (Смотри пример). Обратите внимание на окончание слова "час" - оно меняется в зависимости от цифры. Если вместо аргумента приходит не число, дробное или отрицательное число - функция возвращает строку "Ошибка, проверьте данные"

// Внимание! Давайте пока ограничимся максимум 600ю минутами (10 часов). Так как проверки на большие числа будут раздувать код (33 часа, 31 час, 11 часов и тд). Этого будет достаточно и код будет проверять именно этот промежуток (1 - 10 часов). Но вы можете реализовать и полный скрипт, он тоже должен проходить тесты.

// Пример:

// getTimeFromMinutes(150) => "Это 2 часа и 30 минут"

// getTimeFromMinutes(50) => "Это 0 часов и 50 минут"

// getTimeFromMinutes(0) => "Это 0 часов и 0 минут"

// getTimeFromMinutes(-150) => "Ошибка, проверьте данные"

// 2) Напишите функцию, которая принимает в себя 4 числа и возвращает самое большее из них. Если один из аргументов не является числом или их меньше 4 - возвращается 0. Дробные числа разрешены.

// Пример:

// findMaxNumber(1, 5, 6.6, 11); =>  11

// findMaxNumber(1, 5, '6', '10');  =>  0

function getTimeFromMinutes(minutes) {
  if (typeof (minutes) !== 'number' || minutes < 0 || !Number.isInteger(minutes)) {
    console.log("Ошибка, проверьте данные");
    return "Ошибка, проверьте данные";
  }
  let min = minutes%60;
  let houer = Math.floor(minutes/60);
  if (houer === 2 || houer === 3 || houer === 4){
    console.log(`Это ${houer} часа и ${min} минут`);
    return `Это ${houer} часа и ${min} минут`;
  } else if (houer === 1){
    console.log(`Это ${houer} час и ${min} минут`);
    return `Это ${houer} часов и ${min} минут`;
  } else {
    console.log(`Это ${houer} часов и ${min} минут`);
    return `Это ${houer} часов и ${min} минут`;
  }
}

getTimeFromMinutes(60);


function findMaxNumber(a, b, c, d) {
  if (a, b, c, d) {
    const arr = [a, b, c, d];
  console.log(typeof(a*b*c*d));
  let max = arr[0];
  if (typeof(a) == 'string' || typeof(b) == 'string' || typeof(c) == 'string' || typeof(d) == 'string' ) {
    console.log(0);
    return 0;
  }
    for (let i = 0; i < 4; i++) {
     if (max < arr[i+1]) {
      max = arr[i+1];
      } 
    }
    console.log(max);
    return max;
  } else {
    console.log('No');
    console.log(0);
    return 0;
  }
}
findMaxNumber(1, 5, '6', '10');

відповідь
function getTimeFromMinutes(minutesTotal) {
  if (typeof(minutesTotal) !== 'number' || minutesTotal < 0 || !Number.isInteger(minutesTotal)) {
      return "Ошибка, проверьте данные";
  }

  const hours = Math.floor(minutesTotal / 60);
  const minutes = minutesTotal % 60;

  let hoursStr = '';

  switch (hours) {
      case 0: 
          hoursStr = 'часов';
          break;
      case 1:
          hoursStr = 'час';
          break;
      case 2:
      case 3:
      case 4:
          hoursStr = 'часа';
          break;
      default:
          hoursStr = 'часов';
  }

  return `Это ${hours} ${hoursStr} и ${minutes} минут`;
}

getTimeFromMinutes(180)

function findMaxNumber(a, b ,c, d) {
  // Самое простое - это использовать Math.max :)
  // А оптимизировать такую проверку мы научимся совсем скоро
  if (typeof(a) !== 'number' ||
      typeof(b) !== 'number' ||
      typeof(c) !== 'number' ||
      typeof(d) !== 'number') {
      return 0;
  } else {
      return Math.max(a, b ,c, d);
  }
}

findMaxNumber(250);
findMaxNumber(1, 5, '6', '10');


function fib(k) {
  const arr[];
  for (i=2 ; i < k; i++) {
    arr[i] = arr[i-1] + arr[i-2];
    
  }
   console.log(arr); 
}
fib(10);