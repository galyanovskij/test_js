// "use strict"
      // функції конструктори

      // function User(name, id) {
      //     this.name = name;
      //     this.id = id;
      //     this.human = true;
      //     this.hello = function(){
      //       console.log(`Hello ${name}`);
      //     }
      // }

      // //якщо доступу до функції немає, використовуємо прототип
      // User.prototype.exit = function() {
      //   console.log(`Користувач ${this.name} вийшов`);
      // };
     
      // const oleg = new User('Oleg', 45);
      // const anna = new User('Anna', 25);
      // oleg.exit();
      // oleg.hello();
      // anna.hello();
      // console.log(oleg);
      // console.log(anna);

//   // контекст виклику (людина впевному приміщенні)
//   // 1 виклик функції
//   // function showThis() {
//   //   console.log(this);
//   // }
//   // showThis();
//   //1 звичайна функція this = window, а при use strict - undefined
// //2 якщо метод знаходиться в середині обєкта то контекст виклика завжди буде посилатись на обєкт
// // const obj = {
// //   a: 20,
// //   b: 30,
// //   sum: function(){
// //     console.log(this);
// //   }
// // };

// // obj.sum();

// // 3 функції конструктори
// // this в конструкторах і класах  - новий екземпляр обєкта!!!
//     //  function User(name, id) {
//     //       this.name = name;
//     //       this.id = id;
//     //       this.human = true;
//     //       this.hello = function(){
//     //         console.log(`Hello ${name}`);
//     //       }
//     //   }
// //4 ручна привязка this - call, apply, bind
// // function sayName(surname) {
// //   console.log(this);
// //   console.log(this.name + surname);
// // }

// // const user = {
// //   name: 'Oleg'
// // }; 
// // // щоб повязати обєкт з функцією використаємо два метода
// // // встановлюємо контекст
// // sayName.call(user, 'Smith');
// // sayName.apply(user, ['Smith']);
// // // через створення нової функції
// // function count(num) {
// //   return this*num;
// // }
// // const double = count.bind(2); //функція подвоєння
// // console.log(double(3));
// // console.log(double(15));

// const btn = document.querySelector('button');

// btn.addEventListener('click', function(){
//   this.style.backgroundColor = 'red';
//   console.log(this);
// });

// // у стрілкових функцій немає виклику свого контексту виклику, вона завжди бере гого у батька

// const obj = {
//   number: 5,
//   sayNumber: function(){
//       const say = () =>{
//         console.log(this); //{number: 5, sayNumber: ƒ}
//         console.log(this.number); // 5
//       };
//       say();
//     }
// };

// obj.sayNumber();

// //класична стрілкова функція

// const double = (a) => {
//   return a*2;
// }
// // якщо тіло функції однострічне, то можна не використовувати фігурні дужки і без return
// const double = (a) => a*2;
// // якщо функція приймає один аргумен, можна писати його без круглих дужок
// const double = a => a*2;
// console.log(double(4));


// CLASS завжди з великої літери - шаблон

class Rectangle {
  constructor(width, height){
    this.width = width;
    this.height = height;
  }
  // методи
  calcArea() {
    return this.height * this.width;
  }
}

// створимо новий клас, який буде наслідувати extends попередній
class ColoredRectangleWithText extends Rectangle {
  constructor(width, height, text, bgColor){
    super(width, height); // автоматично бере конструктор батька this.width = width; this.height = height;, вписуємо властивості які нам потрібні
    this.text = text;
    this.bgColor = bgColor;
  }

  showMyProps(){
    console.log(`Текст: ${this.text}, колір ${this.bgColor}`);
  }
}
const div = new ColoredRectangleWithText(100, 200, 'Ytllo Oleg', 'red');

div.showMyProps();
console.log(div.calcArea());


const square = new Rectangle(100, 50);
console.log(square.calcArea());

      //REST

      const log = function(a, b, ...rest) {//rest може називатись як завгодно
        console.log(a, b, rest);
      }

      log('food', 'mother', 'sibligs', 'cat', ' dog', 'meal'); //food mother [ 'sibligs', 'cat', ' dog', 'meal' ]
      // зворотня дія - з масива ряд чисел Spread syntax (...)
      // Math.max. найбільше число зі списку
      let arr = [3, 5, 1];
      alert( Math.max(...arr) ); // 5 (оператор "раскрывает" массив в список аргументов)

      let arr1 = [1, -2, 3, 4];
      let arr2 = [8, 3, -8, 1];

      alert( Math.max(...arr1, ...arr2) ); // 8

      // оператор за замовчуванням
      function calcOrDouble (num, basis = 2) { //ES6  використвовує для замовчування = 2 
        // basis = basis || 2; // 2 буде використано, якщо у функцію не передати другий аргумент - старий варіант
        console.log(num * basis);
      }
      calcOrDouble(3);


      const person = {
        name: 'Oleg',
        age: 25,
        phone: '+80562586478'
      };
    //передаємо дані на сервер
      console.log(JSON.stringify(person));
      console.log(JSON.parse(JSON.stringify(person)));
    //парсимо дані з сервера
    console.log(JSON.parse('{"name":"Oleg","age":25,"phone":"+80562586478"}'));

    // робимо глибоку копію обєкта
    const persons = {
      name: 'Oleg',
      age: 25,
      phone: '+80562586478',
      parents: {
        mom: 'Olga',
        dad: 'Bob'
      }
    };

    const clone = JSON.parse(JSON.stringify(persons)); //отримуємо незалежний обєкт clone
    // console.log(clone);
    clone.parents.mom = 'Anna';
    console.log(persons);
    console.log(clone);
