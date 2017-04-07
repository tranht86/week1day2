/*Write a program that takes a single parameter
from the command line, a number,
and rolls that many six-sided dice.

For example, the following is a sample output of the program.

node dice-roller.js 3
Rolled 3 dice: 2, 6, 5
*/

//Retrieve number of dice input


function diceroll(max, min) {
  var result = []
  for (var i = 0; i < dice; i++) {
    result[i] = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
  }
  return result
}

var dice = process.argv.slice(2)
console.log("Rolled " + dice + " dice: " + diceroll())
