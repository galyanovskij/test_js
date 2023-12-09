"use strict"

let str = 'same';
let strObj = new String(str); //старий метод краще не використовувати
console.log(typeof(str));
console.log(typeof(strObj));

console.dir([1, 2, 33]);

const soldier = {
  health: 400,
  arm: 100,
  sayHello: function() {
    console.log('Hello!');
  }
};

// const John = {     
//   health: 200
// };
const John = Object.create(soldier); //правильний запис створення обєкта за прототипом
// John.__proto__ = soldier; // старий варіант наслідування властивостей обєкта
Object.setPrototypeOf(John, soldier); // новий варіант наслідування обєкта - другим іде прототип, встановили прототип джона від солдата
console.log(John); // побачимо лише значенн методів даного обєкта
console.log(John.arm); // плбачимо знвчення методів обєкта, який наслідуємо
John.sayHello();





