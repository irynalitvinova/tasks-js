// Messi goals function
/* 
Messi is a soccer player with goals in three leagues:
LaLiga
Copa del Rey
Champions
Complete the function to return his total number of goals in all three leagues.
Note: the input will always be valid.
For example:   5, 10, 2  -->  17   
*/

function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  let totalGoals = 0;
  for (let i = 0; i < arguments.length; i++) {
    totalGoals += arguments[i];
  }
  return totalGoals;
}

console.log(goals(5, 10, 3));
console.log(goals(1, 3, 10));