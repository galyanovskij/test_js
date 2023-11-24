"use strict";

let num = 50;

while (num <=55) {
  console.log(num);
  num++;
}

do {
  console.log(num);
  num++;
} while (num < 55);

for (let i = 1; i<10; i++ ) {
  if (i === 5) {
    // break; зупмняє цикл
    continue; // вирізає частину з циклу
  }
  console.log(i);
}

// *
// **
// ***
// ****
// *****
let star = '*';
let a = [];
for (let i = 1; i<7; i++) {
  for (let j = 0; j<i; j++) {
    a[j] = star;
  }
  // myVar = a.toString();
  console.log(a.join(''));
}

let result = '';
for (let i=1; i<7; i++) {
  for (let j=0; j<i; j++) {
    result += '*';
  }
  result += '\n';
}
console.log(result);

first: for (let i = 1; i<3; i++){
  console.log(`Firs level: ${i}`);
  for (let j = 1; j<3; j++){
    console.log(`Second level: ${j}`);
    for (let k = 1; k<5; k++){
      if (k === 3) break first;
      console.log(`Third level: ${k}`);
    }
  }
}

for (let i=5; i<11; i++) {
  console.log(i);
}

for (let i=20; i>9; i--) {
  if (i===13) break;
  console.log(i);
}

for (let i=2; i<11; i++) {
  if (i%2!=0) continue;
  console.log(i);
}

for (let i = 2; i <= 16; i++) {
  if (i % 2 === 0) {
      continue;
  } else {
      console.log(i);
  }
}

let i = 2
while (i >= 2 && i <= 16  ) {
    if (i % 2 === 0) {
      continue;
  } else {
      console.log(i);
  }
  i++;
}