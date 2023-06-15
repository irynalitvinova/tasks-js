// Multiple of index
// https://www.codewars.com/kata/5a34b80155519e1a00000009/train/javascript

function multipleOfIndex(array) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % i === 0) {
      result.push(array[i])
    }
  }
  return result;
}