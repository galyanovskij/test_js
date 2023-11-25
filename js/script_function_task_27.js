// Место для первой задачи
function sayHello(name) {
  return('Привет, ' + name);
}

// Место для второй задачи
function returnNeighboringNumbers(number) {
  const arr = [number - 1, number, number +1];
  return(arr);
}

// Место для третьей задачи 
  let result = '';
  function getMathResult(a, b) {
    if (isNaN(b) || b <= 0) {
      return(a);
    } else {
      for (let i = 1; i < b; i ++){
      result += (a*i + '---');
    }}
    return(result + a*b);
  }

  відповідь
  function sayHello(name) {
    return `Привет, ${name}!`;
}

sayHello('Alex');

function returnNeighboringNumbers(num) {
    return [num - 1, num, num + 1];
}

returnNeighboringNumbers(5);

function getMathResult(num, times) {
    if (typeof(times) !== 'number' || times <= 0) {
        return num;
    }

    let str = '';

    for (let i = 1; i <= times; i++) {
        if (i === times) {
            str += `${num * i}`;
            // Тут без черточек в конце
        } else {
            str += `${num * i}---`;
            // Это тоже самое, что и
            // str = str + num * i + "---"
        }
    }

    return str;
}

getMathResult(10, 5);