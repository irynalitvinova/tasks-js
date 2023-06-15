// Contamination #1 -String
// https://www.codewars.com/kata/596fba44963025c878000039/train/javascript

// First Solution
function contamination(text, char) {
  const newText = Array.from(text);
  for (let i = 0; i < text.length; i++) {
    newText[i] = char;
  }
  return newText.join('');
}

// Second Solution
function contamination1(text, char) {
  return char.repeat(text.length);
}
