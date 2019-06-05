'use strict';


//Welcome Screen
alert('Welcome to Guessing-Game! Respond with yes/no. Click OK to continue');
var counter = 0; // counter to track the number of correct responses

var firstGuess = prompt('Am I 35 years old?');
console.log(firstGuess);
if (firstGuess.toLowerCase() === 'yes' || firstGuess.toLowerCase() === 'y') {
  alert('Omg! I am much younger!');
} else if (firstGuess.toLowerCase() === 'no' || firstGuess.toLowerCase() === 'n') {
  alert('I know, I look young! I am 29');
  counter++;
} else {
  alert('Invalid Input!');
}

var secondGuess = prompt('Do I like chocolates?');
console.log(secondGuess);
if (secondGuess.toLowerCase() === 'yes' || secondGuess.toLowerCase() === 'y') {
  alert('Right answer. Not sure if anybody dislikes chocolates!');
  counter++;
} else if (secondGuess.toLowerCase() === 'no' || secondGuess.toLowerCase() === 'n') {
  alert('Wow! You got that so wrong!');
} else {
  alert('Invalid Input!');
}

var thirdGuess = prompt('Do you think I own a cat?');
console.log(thirdGuess);
if (thirdGuess.toLowerCase() === 'yes' || thirdGuess.toLowerCase() === 'y') {
  alert('Well, you must have mistaken me with someone else.');
} else if (thirdGuess.toLowerCase() === 'no' || thirdGuess.toLowerCase() === 'n') {
  alert('Bingo! I am a dog guy :)');
  counter++;
} else {
  alert('Invalid Input!');
}

var fourthGuess = prompt('Do you think I like programming?');
console.log(fourthGuess);
if (fourthGuess.toLowerCase() === 'yes' || fourthGuess.toLowerCase() === 'y') {
  alert('Yes, I love programming!');
  counter++;
} else if (fourthGuess.toLowerCase() === 'no' || fourthGuess.toLowerCase() === 'n') {
  alert('Are we talking about you?');
} else {
  alert('Invalid Input!');
}

var fifthGuess = prompt('Do I play video games?');
console.log(fifthGuess);
if (fifthGuess.toLowerCase() === 'yes' || fifthGuess.toLowerCase() === 'y') {
  alert('True. But, the only game I play is fifa. You should try it!');
  counter++;
} else if (fifthGuess.toLowerCase() === 'no' || fifthGuess.toLowerCase() === 'n') {
  alert('We need to play sometime. ');
} else {
  alert('Invalid Input!');
}

if (counter < 5) {
  alert('You got '+ counter + ' out of 5correct! Learn more about me in this page. ');
} else {
  alert('Wow! You got 5 out of 5 correct. Keep visiting the page!');
}
