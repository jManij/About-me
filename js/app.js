'use strict';

//test
//Welcome Screen
// alert('Welcome to Guessing-Game! Respond with yes/no. Click OK to continue');
// var counter = 0; // counter to track the number of correct responses

// var firstGuess = prompt('Am I 35 years old?');
// console.log(firstGuess);
// if (firstGuess.toLowerCase() === 'yes' || firstGuess.toLowerCase() === 'y') {
//   alert('Omg! I am much younger!');
// } else if (firstGuess.toLowerCase() === 'no' || firstGuess.toLowerCase() === 'n') {
//   alert('I know, I look young! I am 29');
//   counter++;
// } else {
//   alert('Invalid Input!');
// }

// var secondGuess = prompt('Do I like chocolates?');
// console.log(secondGuess);
// if (secondGuess.toLowerCase() === 'yes' || secondGuess.toLowerCase() === 'y') {
//   alert('Right answer. Not sure if anybody dislikes chocolates!');
//   counter++;
// } else if (secondGuess.toLowerCase() === 'no' || secondGuess.toLowerCase() === 'n') {
//   alert('Wow! You got that so wrong!');
// } else {
//   alert('Invalid Input!');
// }

// var thirdGuess = prompt('Do you think I own a cat?');
// console.log(thirdGuess);
// if (thirdGuess.toLowerCase() === 'yes' || thirdGuess.toLowerCase() === 'y') {
//   alert('Well, you must have mistaken me with someone else.');
// } else if (thirdGuess.toLowerCase() === 'no' || thirdGuess.toLowerCase() === 'n') {
//   alert('Bingo! I am a dog guy :)');
//   counter++;
// } else {
//   alert('Invalid Input!');
// }

// var fourthGuess = prompt('Do you think I like programming?');
// console.log(fourthGuess);
// if (fourthGuess.toLowerCase() === 'yes' || fourthGuess.toLowerCase() === 'y') {
//   alert('Yes, I love programming!');
//   counter++;
// } else if (fourthGuess.toLowerCase() === 'no' || fourthGuess.toLowerCase() === 'n') {
//   alert('Are we talking about you?');
// } else {
//   alert('Invalid Input!');
// }

// var fifthGuess = prompt('Do I play video games?');
// console.log(fifthGuess);
// if (fifthGuess.toLowerCase() === 'yes' || fifthGuess.toLowerCase() === 'y') {
//   alert('True. But, the only game I play is fifa. You should try it!');
//   counter++;
// } else if (fifthGuess.toLowerCase() === 'no' || fifthGuess.toLowerCase() === 'n') {
//   alert('We need to play sometime. ');
// } else {
//   alert('Invalid Input!');
// }

// if (counter < 5) {
//   alert('You got '+ counter + ' out of 5 correct! Learn more about me in this page. ');
// } else {
//   alert('Wow! You got 5 out of 5 correct. Keep visiting the page!');
// }


//Declaration
var randomNumber = Math.floor(Math.random() * 50) + 1; //Generate random numbers from 1-50
var correct = 0; //Counter to tally the number of correct answers
var totalAttempts = 4; //total attempts allowed to the user
var found = false; //boolean value to check the status of the correct answer
var output = 'Guess the number I am thinking in between 1-50'; //message to the user

var sixthResponse; //user response
console.log(sixthResponse);
console.log('Random number: ' + randomNumber);

//Allow user multiple times to make the right guess
for (var i = 0; i < totalAttempts; i++) {
  sixthResponse = parseInt(prompt(output));

  if (sixthResponse === randomNumber) {
    console.log(sixthResponse);
    alert('Correct!!');
    correct++;
    found = true;
    break;
  } else if (sixthResponse > randomNumber) {
    output = 'Too high! Try again.';
  } else {
    output = 'Too low! Try again';
  }
}
//if the user still does not make the correct guess
if (!found) {
  alert('The number I am thinking is: '+ randomNumber);
}

//Declaration
totalAttempts = 6; //total attempts allowed to the user
found = false; //boolean value to check the status of correct answer
output = 'You have come long way. Guess the state I have visted'; //message to the user
var visitedStates = ['texas', 'california', 'hawaii', 'oklahoma', 'oregon', 'nevada', 'new york', 'new jersey'];
var seventhResponse; //= prompt('You have come long way. Could you guess the state I have visited? Hint: Spell it right!').toLowerCase();



for (var j = 0; j < totalAttempts; j++) {
  seventhResponse = prompt(output).toLowerCase();
  console.log(seventhResponse);

  //Iterate over the array to check the response
  for (var k = 0; k < visitedStates.length; k++) {

    //Check the response from the user
    if (seventhResponse === visitedStates[k]) {
      visitedStates.splice(k,1); //remove the correct response
      found = true;
      correct++;
      output = 'You got ' + correct + ' out of 2 questions correct. Yes, I have visited '+ seventhResponse + '. Here are the other states I have visited: \n';

      //Iterate over array to get the name of the rest of the states
      for (var l = 0; l < visitedStates.length; l++) {
        output += visitedStates[l] + '\n';
      }
      //Display the output
      alert(output);
      break;
    }
  }

  // if the correct response is obtained, break from the loop
  if (found) {
    break;
  } else {
    output = 'Sorry, I have not visited there. Try again';
  }

} // main for loop ends

//If the user has used all the attempts and did not get anything right
if (!found) {
  output = 'You got '+ correct + ' out of 2 questions. These are the states I have visited: \n';
  for (var iterator = 0; iterator < visitedStates.length; iterator++) {
    output += visitedStates[iterator] + '\n';
  }
  alert(output);
}
