/*
Generate a random number between 10 to 20.
*/

const min = 10;
const max = 20;
const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

console.log(randomNumber);