// Training JS #9: loop statement --while and do..while
// https://www.codewars.com/kata/57216d4bcdd71175d6000560/train/javascript

// First Solution
function padIt(str, n) {
  const symbol = '*';
  while (n > 0) {
    if (n % 2) {
      str = symbol + str;
    }
    else {
      str = str + symbol;
    }
    n--;
  }
  return str;
}

// Second Solution
function padIt(str, n) {
  const symbol = '*';
  while (n > 0) {
    return symbol.repeat((n + 1) / 2) + str + symbol.repeat(n / 2);
  }
}


// Training JS #10: loop statement --for
// https://www.codewars.com/kata/5721a78c283129e416000999/train/javascript

function pickIt(arr) {
  let odd = [], even = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2) {
      odd.push(arr[i]);
    }
    else {
      even.push(arr[i]);
    }
  }
  return [odd, even];
}


// Do something "n.times" (Simplifying "for" loops)
// https://www.codewars.com/kata/56e6a330715e7221d9000a3b/train/javascript

// First Solution
Number.prototype.times = function (f) {
  let i = 0;
  while (i < this) {
    f(i);
    i++
  }
}

// Second Solution
Number.prototype.times = function (f) {
  for (let i = 0; i < this; f(i++)) {
  }
}


// No Loops 2 - You only need one
// https://www.codewars.com/kata/57cc40b2f8392dbf2a0003ce/train/javascript

// First Solution
function check(a, x) {
  const foundCheckElement = a.find(element => element === x);
  if (foundCheckElement === x) {
    return true;
  }
  return false;
}

// Second Solution
function check(arr, x) {
  return arr.includes(x);
}


// Training JS #8: Conditional statement--switch
// https://www.codewars.com/kata/572059afc2f4612825000d8a

function howManydays(month) {
  let days;
  switch (month) {
    case 2:
      return 28;
    case 4:
    case 6:
    case 9:
    case 11:
      return 30;
    default:
      return 31;
  }
}


// Training JS #11: loop statement --break,continue
// https://www.codewars.com/kata/5721c189cdd71194c1000b9b/train/javascript

function grabDoll(dolls) {
  let bag = [];
  for (let i = 0; i < dolls.length; i++) {
    if (dolls[i] === "Hello Kitty" || dolls[i] === "Barbie doll") {
      bag.push(dolls[i]);
      if (bag.length >= 3) break
    } else continue;
  }
  return bag;
}


// Loop Array
// https://www.codewars.com/kata/5fd8aa5743b49e0012d43e50/train/javascript

function loopArr(arr, direction, steps) {
  let cutArr = [];
  let newArr = [];
  if (direction === 'left') {
    cutArr = arr.splice(0, steps);
    newArr = arr.concat(cutArr);
    return newArr;
  }
  if (direction === 'right') {
    cutArr = arr.splice((-steps), steps);
    newArr = cutArr.concat(arr);
    return newArr;
  }
}
console.log(loopArr([1, 5, 87, 45, 8, 8], 'left', 2));  // [87, 45, 8, 8, 1, 5]
console.log(loopArr([1, 5, 87, 45, 8, 8], 'right', 2)); // [8, 8, 1, 5, 87, 45]


// No Loops 1 - Small enough?
// https://www.codewars.com/kata/57cc4853fa9fc57a6a0002c2/train/javascript

// First Solution
function smallEnough(a, limit) {
  return a.every(element => element <= limit);
}

// Second Solution
function smallEnough(arr, limit) {
  let value = arr.find(element => element > limit);
  if (value > limit) {
    return false;
  }
  return true;
}


// Alternating Loops
// https://www.codewars.com/kata/55e529bf6c6497394a0000b5/train/javascript

function combine(...arr) {
  let objFromArr = {};
  let combineArray = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (objFromArr[j] = objFromArr[j]) {
        objFromArr[j] = objFromArr[j].concat(arr[i][j]);
      }
      else {
        objFromArr[j] = [arr[i][j]];
      }
    }
  }
  for (let key in objFromArr) {
    combineArray = combineArray.concat(objFromArr[key]);
  }
  return combineArray;
}
console.log(combine(['a', 'b', 'c'], [1, 2, 3])); // ['a', 1, 'b', 2, 'c', 3]


