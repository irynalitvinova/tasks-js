// Smallest value of an array
/*
Write a function that can return the smallest value of an array or the index of that value. 
The function's 2nd parameter will tell whether it should return the value or the index.
Assume the first parameter will always be an array filled with at least 1 number and no duplicates. 
Assume the second parameter will be a string holding one of two values: 'value' and 'index'.
min([1,2,3,4,5], 'value') // => 1
min([1,2,3,4,5], 'index') // => 0
 */
// First Solution
function min(arr, toReturn) {
  if (toReturn === 'value') {
    return Math.min(...arr);
  } else {
    return arr.indexOf(Math.min(...arr));
  }
}
console.log(min([42, 54, 65, 87, 7], 'value'));
console.log(min([42, 54, 65, 87, 7], 'index'));

// Second Solution
function min(arr, toReturn) {
  let minValueOfArray = 0;
  let indexOfMinValueOfArray;
  minValueOfArray = Math.min(...arr);
  indexOfMinValueOfArray = arr.indexOf(minValueOfArray);

  if (toReturn === 'value') {
    return minValueOfArray;
  } else {
    return indexOfMinValueOfArray;
  }
}
console.log(min([42, 3, 65, 87, 6], 'value'));
console.log(min([42, 3, 65, 87, 6], 'index'));

