'use strict';


//Array demo
//Array is a collection
//Compared to java  '{}' it uses '[]'
/*
We access items in an array with bracket notation

*/

var emptyArray = [];
var quizAnswers = ['a', 'b', 'c', 'c', 'e'];
var arrayofThings = ['string', {}, ['thing'], console.log, undefined, null, 0, 2, true, false];
console.log(arrayofThings);

console.log("test");
console.log(quizAnswers);
console.log(quizAnswers[2] === 'b');
quizAnswers[2] = 'MANISH';
console.log(quizAnswers);
