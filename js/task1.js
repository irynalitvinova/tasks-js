// Return Negative
// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
// makeNegative(1);    // return -1
// makeNegative(-5);   // return -5
// makeNegative(0);    // return 0
// makeNegative(0.12); // return -0.12


// First Solution
let num1;
function makeNegative(num) {
  if (num < 0) {
    return num;
  }
  if (num === 0) {
    return 0;
  }
  else {
    return num - (num * 2);
  }
}
console.log(makeNegative(1));
console.log(makeNegative(-5));
console.log(makeNegative(0));
console.log(makeNegative(0.12));


// Second Solution
let num;
function makeNegative(num) {
  if (num < 0) {
    return num;
  }
  if (num === 0) {
    return 0;
  }
  else {
    return -Math.abs(num);
  }
}
console.log(makeNegative(1));
console.log(makeNegative(-5));
console.log(makeNegative(0));
console.log(makeNegative(0.12));