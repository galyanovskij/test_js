  "use strict"

  // FILTER
  const names = ['Oleg', 'Ann', 'Francisco', 'Olga'];

  const sortNames = names.filter(function(name) {
        return name.length > 5;
  });

  console.log(sortNames);

  // MAP - дозволяє pмінювати елементи в масиві
  // на виході отримаємо новий масив зізміненими даними
  let answers = ['OlEh', 'AnnA', 'Hello'];
  const result = answers.map(item => item.toLocaleLowerCase());
  // const result = answers.map(item =>{
  //   return item.toLocaleLowerCase();
  // });
  console.log(result);

  // можемо і без введення змінної, ален краще вводити змінну, щоб зберегти початкові дані
  answers = answers.map(item => item.toLocaleLowerCase());
  console.log(answers);


  // EVERY / SOME - true or false

  const some = [4, 'sdjf', 'kjhfyfhik'];
  // перевіримо чи єхоча б одне число в мачсиві
  console.log(some.some(item => typeof(item) === 'number')); //true
  // чи всі елементи число
  console.log(some.every(item => typeof(item) === 'number')); //false

  // REDUCE - для схлопування смасиву в одне ціле
  const arr = [1, 5, 6, 9, 8, 7, 3, 4];
  //отримаємо суму всіх елементів
  const resSumArr = arr.reduce((sum, current) => sum + current );
  // const resSumArr = arr.reduce((sum, current) => sum + current, 3 );  // можна використовувати початкове значення  - приклад 3
  console.log(resSumArr);
  // приклад зі стрічками
  const arr_2 = ['apple', 'orange', 'strawberry', 'cherry'];
  //отримаємо суму всіх елементів через кому
  const resSumArr_2 = arr_2.reduce((sum, current) => sum + ', ' + current );
  console.log(resSumArr_2);

    // приклад
      const obj = {
        anna: 'people',
        viki: 'people',
        dog: 'animal',
        dcat: 'animal'
      };

    // перетворимо обєкт в матрицю - масив масивів
    const newArr = Object.entries(obj)
    .filter(item => item[1] === 'people' ) // отримаємо лише масиви, в яких другий елемент 'people'
    .map(item => item[0]);
    console.log(newArr);



