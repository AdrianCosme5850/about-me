'use strict';  
let userName = prompt('What\'s your name?')
alert('Welcome ' + userName + '!')
let userGuess1 = prompt('Do you think I\'ve ever been outside the country? (Yes/No)')
// console.log(userGuess1)
// while(userGuess1.toLowerCase() != 'yes' || 'no'){
//   alert('Please enter yes or no.')
//   userGuess1 = prompt('Do you think I\'ve ever been outside the country? (Yes/No)')
// }
if (userGuess1.toLowerCase() === 'yes'){
  alert('That\'s correct!');
} else if (userGuess1.toLowerCase() === 'no'){
  alert('That\'s incorrect! I\'ve been to Iraqi, Afghanistan, and Mexico!'); } 
  else {
  alert('Please enter yes or no.')
  userGuess1 = prompt('Do you think I\'ve ever been outside the country? (Yes/No)')
}
let userGuess2 = prompt('Have I ever owned a ferret before?(Yes/No)')
// console.log(userGuess2)
if(userGuess2.toLowerCase() === 'yes'){
  alert('That is correct!')
} else if (userGuess2.toLowerCase() === 'no'){
  alert('That is incorrect! I\'ve owned three!')
} else {
  alert('Please enter yes or no.')
  userGuess2 = prompt('Have I ever owned a ferret before?(Yes/No)')
}
let userGuess3 = prompt('Do I drink too many monsters?')
// console.log(userGuess3)
if (userGuess3.toLowerCase() === 'yes'){
  alert('You are very correct')
} else if (userGuess3.toLowerCase()){
  alert('Incorrect! I drink an obscene amount!')
} else {
  alert('Please enter yes or no.')
  userGuess3=prompt('Do I drink too many monsters?')
}
let userGuess4 = prompt('Do I have a tattoo?(Yes/No)')
// console.log(userGuess4)
if(userGuess4.toLowerCase() === 'yes'){
alert('That is incorrect!')
} else if (userGuess4.toLowerCase() === 'no'){
  alert('That is correct!')
} else {
  alert('Please enter yes or no.')
  userGuess4 = prompt('Do I have a tattoo?(Yes/No)')
}
let userGuess5 = prompt('Do I own a motorcycle?(Yes/No)')
// console.log(userGuess5)
if (userGuess5.toLowerCase() === 'yes'){
  alert('That is incorrect, I wish I owned one right now!')
} else if(userGuess5.toLowerCase() === 'no'){
  alert('That is correct! I wish.')
} else {
  alert('Please enter yes or no.')
  userGuess5 = prompt('Do I own a motorcycle?(Yes/No)')
}
alert('Thanks for playing ' + userName + '!')