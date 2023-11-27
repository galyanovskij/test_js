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

// числа Фибоначчи, где первые два числа равны 0 и 1, а каждое последующее число равно сумме двух предыдущих чисел.

// Создайте функцию, которая будет принимать в себя один аргумент-целое положительное число. Она должна возвращать строку, в которой будут через пробел выведены числа Фибоначчи. Причем, их количество должно быть равно переданному аргументу.

// Если переданный аргумент не число - вернуть пустую строку. Решать без применения рекурсии.
// Пример:
// fib(4) => ''0 1 1 2"
// fib(7) => ''0 1 1 2 3 5 8"
// fib('7') => ''"
// fib(1) => "0"
// fib(0) => ''"

function fib(k) {
  if (typeof(k) !== 'number' || k <= 0 || !Number.isInteger(k)) {
    console.log('');
    return('');
  } else {
    switch (k) {
      case 0: 
      console.log('');
      return('');
      case 1:
        console.log('0');
        return('0');
    }
    const arr = [];
    arr[0] = 0;
    arr[1] = 1;
    for (let i=2 ; i < k; i++) {
      arr[i] = arr[i-1] + arr[i-2];
    }
     console.log(arr.join(' '));
     return(arr.join(' '));
  }
}
fib(0 1 1 2 3 5);

відповідь 
function fib(num) {
  if (typeof(num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
      return "";
  }

  let result = '';
  let first = 0;
  let second = 1;

  for (let i = 0; i < num; i++) {
      if (i + 1 === num) {
          result += `${first}`;
          // Без пробела в конце
      } else {
          result += `${first} `;
      }

      let third = first + second;
      first = second;
      second = third;
  }

  return result;
}

fib(5)