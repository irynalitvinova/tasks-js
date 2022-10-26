// Training JS #12: loop statement --for..in and for..of
/*
In lesson #11, we learned that the for loop can be used to traverse an array. 
If we want to traverse an object, we can use a variant of the for: for..in. 
This can traverse all the keys of the object. An example:
function showObjectKeys(obj){
  for (var key in obj){
    console.log(key);
  }
}
function showObjectValues(obj){
  for (var key in obj){
    console.log(obj[key]);
  }
}
var ob={item1:"This",item2:"is",item3:"an",item4:"example"};
console.log("keys of ob:")
showObjectKeys(ob);
console.log("values of ob:")
showObjectValues(ob);
*/
function giveMeFive(obj) {
  let arrayWithFives = [];
  for (let key in obj) {
    if (key.length === 5) arrayWithFives.push(key);
    if (obj[key].length === 5) arrayWithFives.push(obj[key]);
  }
  return arrayWithFives;
}
