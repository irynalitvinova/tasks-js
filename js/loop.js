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

