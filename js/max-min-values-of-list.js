// Find Maximum and Minimum Values of a List
/*
Your task is to make two functions ( max and min) that receive a list of integers as input, 
and return the largest and lowest number in that list, respectively.
[4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
[-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
[42, 54, 65, 87, 0]             -> min = 0, max = 87
[5]                             -> min = 5, max = 5
 */

// First Solution
let min = function (list) {
  return Math.min(...list);
}

let max = function (list) {
  return Math.max(...list);
}
console.log(min([42, 54, 65, 87, 0]));
console.log(max([42, 54, 65, 87, 0]));

// If array too big we can use .apply and write first argument(null)
function min(list) {
  return Math.min.apply(null, list);
}

function max(list) {
  return Math.max.apply(null, list);
}


// Second solution
function minimum(arr) {
  let minValueOfArray = arr[0];
  for (let num of arr) {
    if (num < minValueOfArray) {
      minValueOfArray = num;
    }
  }
  return minValueOfArray;
}

function maximum(arr) {
  let maxValueOfArray = arr[0];
  for (let num of arr) {
    if (num > maxValueOfArray) {
      maxValueOfArray = num;
    }
  }
  return maxValueOfArray;
}




