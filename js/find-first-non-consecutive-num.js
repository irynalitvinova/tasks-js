// Find the first non-consecutive number
// https://www.codewars.com/kata/find-the-first-non-consecutive-number/train/javascript

function firstNonConsecutive(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] + 1 !== arr[i]) {
      return arr[i];
    }
  }
  return null;
}
console.log(firstNonConsecutive([1, 2, 3, 5, 6, 7])); // 5



