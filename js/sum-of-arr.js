/* 
I'm new to coding and now I want to get the sum of two arrays...
Actually the sum of all their elements. I'll appreciate for your help.
P.S. Each array includes only integer numbers. Output is a number too.
*/
// First Solution 
function arrayPlusArray(arr1, arr2) {
  const sumOfNumArr1 = arr1.reduce((acc, val) => acc + val, 0);
  const sumOfNumArr2 = arr2.reduce((acc, val) => acc + val, 0);
  return sumOfNumArr1 + sumOfNumArr2;
}
console.log(arrayPlusArray([1, 2], [3, 3]));

// Second Solution 
function arrayPlusArray1(arr11, arr22) {
  return arr11.concat(arr22).reduce((acc, val) => acc + val, 0);
}
console.log(arrayPlusArray1([1, 2], [1, 1]));

// Third Solution 
function arrayPlusArray2(arr111, arr222) {
  return [...arr111, ...arr222].reduce((acc, val) => acc + val, 0);
}
console.log(arrayPlusArray2([1, 1, 2], [1, 1, 2]));

// Forth Solution 
function arrayPlusArray3(arr1111, arr2222) {
  let sumOfNumArr1111 = 0;
  arr1111.forEach(num => {
    sumOfNumArr1111 += num;
  })
  let sumOfNumArr2222 = 0;
  arr2222.forEach(num => {
    sumOfNumArr2222 += num;
  })
  return sumOfNumArr1111 + sumOfNumArr2222;
}
console.log(arrayPlusArray2([1, 1], [1, 1]));