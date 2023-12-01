"use strict";

arr = [1, 2, 3, 4, 6, 8];

// arr.pop(); // видалає останній елемент масиву
// arr.push(10); // додаємо число 10 в кінець масиву
// console.log(arr);

// for (i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }
// ще один варіант перебору масиву

// for (let value of arr) {
//   console.log(value);
// }  
// третій варіант

arr.forEach(function(item, number, arr) { // три аргумента - значення елемента, його порядковий номер і посилання на масив
  console.log(`${number}: ${item} в середині масива ${arr}`);
});

    arr.sort(); // сортує за алфавітом як стрічки
    console.log(arr);
    // для сортцвання чисел масиву потрібно використати функцію
    function compareNum(a, b) {
      return a-b;
    }
    arr.sort(compareNum);  // так відсортуються числа масиву

        // перевожимо стрічку в масив через метод split
        const str = promt("", ""); // користувач вводить дані через кому і пробіл
        const products = str.split(", "); // розділювач кома з пробілом  
        console.log(products);
