function remainder(n, m){
  if (n > m) {
    return n % m;
  }
  return m % n;
}

console.log(remainder(15, 7));
console.log(remainder(13, 72));

