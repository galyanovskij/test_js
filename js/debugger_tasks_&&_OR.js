"use ctrict"

let number = 5; debugger

function LogNumber() {
  let number = 4; debugger
  console.log(number);
}

number = 6;
LogNumber(); debugger

лічильник

function createCounter() {
  counter = 0;
  const myFunction = function(){ debugger
    counter = counter + 1; debugger
    return counter; debugger
  }

  return myFunction;
}
debugger
const increment = createCounter();debugger
const c1 = increment(); debugger
const c2 = increment(); debugger
const c3 = increment();debugger
console.log(c1, c2, c3);

  Какое будет выведено значение: let x = 5; alert( x++ ); ? // 5 тому що спочатку значення а потівм дія ++х виведе 6
  * Чему равно такое выражение: [ ] + false - null + true ? // NaN не математичне значення/ додавання до пустої стрічки 
  * Что выведет этот код: let y = 1; let x = y = 2; alert(x); ? // 2 тому що дія іде з права на ліво. Послідовне присвоювання
  * Чему равна сумма [ ] + 1 + 2? // "12" стрічка -  конкатенація символів / стрічок
  * Что выведет этот код: alert( "1"[0] )? // "1" - так як ми звертаємось до 0-го елемента стрічки
  * Чему равно 2 && 1 && null && 0 && undefined ? // null тому що оператор && і зупиняється на першій брехні
  * Есть ли разница между выражениями? !!( a && b ) и (a && b)?
      console.log(!!( 1 && 2 ) === (1 && 2)); // false то му що !! перетворюють значення в boolean а воно не може бути рівне числу
  * Что выведет этот код: alert( null || 2 && 3 || 4 ); ? // 3 тому шо && має вищий приорітет і ми розглядаємо частину 2 && 3, так як обидва правда то отримаємо яе результат останнє значення. Далі визначаємо умови з оператором або, який зупиняється на правді і в обох умовах першою вийде 3
  * a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ? // не рівні, тому що різні масиви з однаковим набором даних
  * Что выведет этот код: alert( +"Infinity" ); ? // Infinity стрычка, але тип даних e;t number
  * Верно ли сравнение: "Ёжик" > "яблоко"? // false тому що порівняння посимвольне і йде по номеру юнікода букв
  * Чему равно 0 || "" || 2 || undefined || true || falsе ? // 2 тому що або зупиняється на першій правді


console.log(+"Infinity"); 