/*
Given an array of integers, return a new array with each value doubled.
For example:
[1, 2, 3] --> [2, 4, 6]
*/

// 1. Solution
function maps(x) {
  return x.map(item => item * 2);
}

// 2. Solution
function maps(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i] * 2);
  }
  return newArr;
}




