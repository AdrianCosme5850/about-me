'use strict';
let correctAnswers = 0;
let userName = prompt('What\'s your name?');
function questionOne(){
  alert('Welcome ' + userName + '!');
  let userGuess1 = prompt('Do you think I\'ve ever been outside the country? (Yes/No)');
  // console.log(userGuess1)
  if (userGuess1.toLowerCase() === 'yes'){
    alert('That\'s correct!');
    correctAnswers += 1;
  } else if (userGuess1.toLowerCase() === 'no'){
    alert('That\'s incorrect! I\'ve been to Iraqi, Afghanistan, and Mexico!'); }
  else {
    alert('Please enter yes or no.');
    userGuess1 = prompt('Do you think I\'ve ever been outside the country? (Yes/No)');
  }
}
questionOne();

function questionTwo(){
  let userGuess2 = prompt('Have I ever owned a ferret before?(Yes/No)');
  // console.log(userGuess2)
  if(userGuess2.toLowerCase() === 'yes'){
    alert('That is correct!');
    correctAnswers += 1;
  } else if (userGuess2.toLowerCase() === 'no'){
    alert('That is incorrect! I\'ve owned three!');
  } else {
    alert('Please enter yes or no.');
    userGuess2 = prompt('Have I ever owned a ferret before?(Yes/No)');
  }
}
questionTwo();

function questionThree(){
  let userGuess3 = prompt('Do I drink too many monsters?');
  // console.log(userGuess3)
  if (userGuess3.toLowerCase() === 'yes'){
    alert('You are very correct');
    correctAnswers += 1;
  } else if (userGuess3.toLowerCase()){
    alert('Incorrect! I drink an obscene amount!');
  } else {
    alert('Please enter yes or no.');
    userGuess3=prompt('Do I drink too many monsters?');
  }
}
questionThree();

function questionFour(){
  let userGuess4 = prompt('Do I have a tattoo?(Yes/No)');
  // console.log(userGuess4)
  if(userGuess4.toLowerCase() === 'yes'){
    alert('That is incorrect!');
  } else if (userGuess4.toLowerCase() === 'no'){
    alert('That is correct!');
    correctAnswers += 1;
  } else {
    alert('Please enter yes or no.');
    userGuess4 = prompt('Do I have a tattoo?(Yes/No)');
  }
}
questionFour();

function questionFive(){
  let userGuess5 = prompt('Do I own a motorcycle?(Yes/No)');
  // console.log(userGuess5)
  if (userGuess5.toLowerCase() === 'yes'){
    alert('That is incorrect, I wish I owned one right now!');
  } else if(userGuess5.toLowerCase() === 'no'){
    alert('That is correct! I wish.');
    correctAnswers += 1;
  } else {
    alert('Please enter yes or no.');
    userGuess5 = prompt('Do I own a motorcycle?(Yes/No)');
  }
}
questionFive();

function questionSix(){
  let numberGuess = prompt('Guess a number! 1-10!');
  for (let x = 0; x < 3; x++) {
    if (numberGuess === '5'){
      alert('Correct!');
      correctAnswers += 1;
      break;
    } else if (numberGuess < 5){
      alert('Too low! Try again!');
      numberGuess = prompt('Guess a number! 1-10!');
    } else if (numberGuess > 5){
      alert('Too high! Try again!');
      numberGuess = prompt('Guess a number! 1-10!');
    }
    if(x === 2){
      alert('The correct answer was 5. Thanks for playing!');
    }
  }
}
questionSix();

function questionSeven(){
  let userGuessCountry = prompt('Guess what country I\'ve been to before!');
  let countries = ['iraq', 'afghanistan', 'mexico'];
  for (let y = 0; y < 6; y++) {if (userGuessCountry === countries[0] || userGuessCountry === countries[1] || userGuessCountry === countries[2]){
    alert('That\'s correct!');
    correctAnswers += 1;
    break;
  } else {
    alert('Sorry, that\'s incorrect!');
    userGuessCountry = prompt('Guess what country I\'ve been to before!');
  }
  if (y === 5){
    alert('Sorry the correct answers were ' + countries[1] + ', ' + countries[0] + ', and ' + countries[2] + '.');
  }
  }
}
questionSeven();

alert('Thanks for playing ' + userName + '! You got ' + correctAnswers + ' right!');

