// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * in counter1 let has a function scope, whereas in coutner2 let has a global scope.
 * 2. Which of the two uses a closure? How can you tell?
 * counter2 uses closure becuase it is referencing a let variable that is created in the outer scope
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 * counter1 would be preferred when you are creating a game and you want to increment the score. You could set the function = to another variable which would allow you to use it for several different games at once.
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
    count++;
    return count;
  }
}
const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(max){
  return Math.floor(Math.random() * Math.floor(max));
}
console.log(inning(3));

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 


function finalScore(callback, numberOfInnings){
  return {'Home': callback(numberOfInnings),
          'Away': callback(numberOfInnings),
         } 
}
console.log(finalScore(inning, 9))

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(2) A number of innings

and returns the score at each pont in the game, like so:

1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam

Final Score: awayTeam - homeTeam */

let getInningScore = ''

function scoreboard(cbInningScore, cbInning, numInnings){
  let awayTeamScore = 0;
  let homeTeamScore = 0;
  for(i = 1; i < numInnings; i ++) {
    cbInningScore = `${i} Inning: ${awayTeamScore} - ${homeTeamScore}`;
    console.log(cbInningScore);
    awayTeamScore = cbInning();
    homeTeamScore = cbInning();
  } // for loop

  function cbInning(max){
    return Math.floor(Math.random() * Math.floor(max));
  };

} // scoreboard function

scoreboard(getInningScore, inning, 9)