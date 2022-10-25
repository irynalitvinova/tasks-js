// Convert a string to an array
// Write a function to split a string and convert it into an array of words.
// "Robin Singh" ==> ["Robin", "Singh"]

// First Solution
function stringToArray(string) {
  let arrayForWords = [];
  arrayForWords = string.split(' ');
  return arrayForWords;
}
console.log(stringToArray("Robin Singh"));
console.log(stringToArray("I love arrays they are my favorite"));

// Second Solution
function stringToArray(string) {
  return string.split(' ');
}

// Third Solution without .split()
function stringToArray(string) {
  let words = [''];
  for (const letter of string) {
    if (letter !== ' ') {
      words[words.length - 1] += letter;
    }
    else {
      words.push('');
    }
  }
  return words;
}
stringToArray();





