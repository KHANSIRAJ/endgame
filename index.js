var readlineSync = require("readline-sync");

var score = 0;

// input >> processing >> output
var userName = readlineSync.question("What's your name? ");

console.log("Welcome "+ userName + " to DO YOU KNOW Siraj?");


// data of high score
var highScores = [
  {
    name: "Siraj",
    score: 10,
  },

  {
    name: "Sanket",
    score: 10,
  },
]

// play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { // branching
    console.log("right!");
    score = score + 1;
    
  } else {
    console.log("wrong!");
   
  }

  console.log("current score: ", score);
  console.log("-------------")
}

// array of objects
var questions = [{
  question: "Where do I live? ",
  answer: "wardha"
}, {
  question: "My favorite superhero would be? ",
  answer: "tony"
},
{
  question: "Where do I work? ",
  answer: "google"
}];

// loop
for (var i=0; i<questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer)
}

console.log("YAY! You SCORED: ", score);

console.log("Check out the scores")