/*
Complete the function that takes a non-negative integer n as input, 
and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ). 
*/
function powersOfTwo(n) {
  let listOfAllPowers = [];
  for (i = 0; i <= n; i++) {
    listOfAllPowers.push(Math.pow(2, i));
  }
  return listOfAllPowers;
}
console.log(powersOfTwo(2)); // [1, 2, 4]