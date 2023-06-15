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


