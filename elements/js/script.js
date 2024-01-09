"use strict";

const person = {
  name: 'Alex',
  age: 25,
  old: {
    name: 'Oleg',
    age: 40
  },
  get userAge() {
    return this.age;
  },
  set userAge(num) {
    this.age = num;
  }

};

console.log(person.userAge); //25 використали get
console.log(person.userAge = 40); //використали set
console.log(person.userAge); //40
console.log(person.old.name); //40

// інкапсуляція - захист даних
// function User(name, age) {
//   this.name = name;
//   this.age = age;

//   this.say = function() {
//     console.log(`Імя користувача: ${name}, вік користувача: ${age}`);
//   };
// }

// const oleg = new User('Oleg', 45);
// console.log(oleg.name);
// console.log(oleg.age);

// oleg.name = 'Alex';
// oleg.age = 25;

// oleg.say();
// інкапсулюємо доступ ззовні
function User(name, age) {
  this.name = name;
  let userAge = age;

  this.say = function() {
    console.log(`Імя користувача: ${this.name}, вік користувача: ${userAge}`);
  };

  this.getAge  = function() {
    return userAge;
  }
  this.setAge  = function(age) {
    if (typeof age === 'number' && age > 0 && age < 110){
      userAge = age;
    } else {
      console.log('Хибне значення');
    }
    
  };

}

const oleg = new User('Oleg', 45);
console.log(oleg.name);
console.log(oleg.getAge());

// oleg.name = 'Alex';
oleg.setAge(25);
oleg.setAge(250);
console.log(oleg.getAge());
oleg.say();

// перепишемо на class

class User {
    constructor(name, age) {
      this.name = name;
      this._age = age;
    }

  say() {
    console.log(`Імя користувача: ${this.name}, вік користувача: ${this._age}`);
  }

  get age() {
    return this._age;
  }
  set age(age) {
    if (typeof age === 'number' && age > 0 && age < 110){
      this._age = age;
    } else {
      console.log('Хибне значення');
    }
    
  }

}

const oleg = new User('Oleg', 45);
console.log(oleg.age);
oleg.age = 99;
console.log(oleg.age);
oleg.say();

// роболта з модулями
// анонімна самовизивна функція
const number = 1;

(function(){
  // створюємо васну область бачення
  let number = 2;
  console.log(number);
  console.log(number +3);
}())

console.log(number);

// створення обєктного інтерфейсу
const user = (function(){
  const privat = function(){
    console.log('i am private');;
  };
  return {
    seyHello: privat
  };

}());

user.seyHello();  