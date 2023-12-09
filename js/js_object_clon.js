"use strict";

let a = 5,
    b = 10;
b = b + a;

console.log(b); // 15 так додаються звичайні змінні

const obj = {
  a : 5,
  b : 10
};

const copy = obj; // різниця між простими даними і обєктом в тому, що тут не записується значення масиву, а записується посилання на масив. Подальші дії над копією насправді відбуваються над основним обєктом
copy.a = 10;

console.log(copy);
console.log(obj);
//тому для копіювання обєкта використаємо кілька способів
// 1 - з допомогою цикла

function copy2(mainObj) {
  let objCopy = {};
  let key;
  for (key in mainObj){
    objCopy[key] = mainObj[key];
  }
  return objCopy;
}

const numbers = {
  a: 2,
  b: 5,
  c: {
    x: 4,
    y: 5 
  }
};

const newNumbers = copy2(numbers); // копіюємо обєкт numbers в newNumbers з допомогою функції copy2
  newNumbers.a = 10;
  newNumbers.c.x = 10; // в такому випадку ми зміними змінну Х в старому обєкті, так як тут спрацює знову посилання на внутрішній обєкт С і побачимо зміни в новому
  // { a: 10, b: 5, c: { x: 10, y: 5 } }
  // { a: 2, b: 5, c: { x: 10, y: 5 } }
console.log(newNumbers); // в новому обєкті значення а буден нове - 10, 
console.log(numbers); // в старому обєкті значення а залишиться без змін - 2, 

// 2 метод копіювання обєкту теж поверхневий - однорівневий Object.assign()

// додаємо обєкт до обєкта
const numbers_2 = {
  a: 2,
  b: 5,
  c: {
    x: 4,
    y: 5 
  }
};
const add = {
  d:7,
  e:15
};

console.log(Object.assign(numbers_2, add)); // ми отримали новий незалежний обєкт add { a: 2, b: 5, c: { x: 4, y: 5 }, d: 7, e: 15 }
// таким чином ми можемо додати існуючий обєкт до пустого - скопіювати
const clon = Object.assign({}, add);
clon.d = 44;
console.log(clon);

// 3 поверхнева копія масиву
const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray; // таким способом ми отримаємо в  новому масиві посилання на старий.....
const newArray = oldArray.slice(); // з допомого є функціє ми зробимо копію масиву
newArray[2] = 'jhdghdkfh';
console.log(oldArray);
console.log(newArray);

// 4 спосіб по стандартам   (ES6 - ES8  ) використаємо оператор розгортання структури спред

const video = ['youtube', 'tiktok', 'vimeo'],
      cms = ['prestashop', 'wordpress', 'jumla'],
      internet = [...video, ...cms, 'instagram', 'viber'];  
      console.log(internet);

function log (a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c);
}

const num = [2, 5, 7]; // передати в функцію масив ми не можему , її потрібні три різні значення для трьох аргументів
log(...num); // таким чином ми передамо сами три значення в функцію
// створюємо копію

const arr_1 = ['a', 'b'];
const cloneArr_2 = [...arr_1];
console.log(arr_1);
console.log(cloneArr_2);

// так само створюємо копіб обєкта

const obj_1 = {
  a:56,
  b:45,
  d:45
};

const cloneObj_2 = {...obj_1};
console.log(cloneObj_2);