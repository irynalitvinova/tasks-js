// Build a function that returns an array of integers from n to 1 where n>0.
// Example : n=5 --> [5,4,3,2,1]

// First Solution
const reverseSeq = n => {
  return [...Array(n + 1).keys()].slice(1).reverse();
};

// Second Solution
const reverseSeq1 = n => {
  const arr = [];
  for (let i = n; i > 0; i--) {
    arr.push(i);
  }
  return arr;
};

// Third Solution
const reverseSeq2 = n => {
  return Array(n).fill(0).map((el, i) => n - i);
};
