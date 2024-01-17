"use strict"

function* generator() {
  yield 'S';
  yield 'c';
  yield 'r';
  yield 'i';
  yield 'p';
  yield 't';
}

const str = generator();

console.log(str.next().value);
console.log(str.next().value);
console.log(str.next().value);
console.log(str.next().value);
console.log(str.next().value);
console.log(str.next().value);

function* count(n) {
  for (let i=0; i<n; i++) {
    yield(i);
  }
}

// const item = count(5);


// console.log(item.next().value);
// console.log(item.next().value);
// console.log(item.next().value);

for (let k of count(5)) {
  console.log(k);
}