// Add Length
// https://www.codewars.com/kata/559d2284b5bb6799e9000047/train/javascript

function addLength(str) {
  const arrayOfElements = str.split(' ');
  return arrayOfElements.map(word => word + ' ' + word.length);
}