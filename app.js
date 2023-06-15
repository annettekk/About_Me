'use strict'
console.log('boo');
let correctAnswernumber = 0;
function YorNquestions() {
let questions = ['Do I like cats?', 'Do you like cats?', 'Is yellow my fav color?', 'Is pineapple my fav fruit?', 'Is poppy my fav flower?']
let answer;
let okishAnswers = ['yes', 'no', 'y', 'n'];
//console.log(questions[0])
for (let i = 0; i < questions.length; i++) {
    //console.log(questions[i])
    answer = prompt(questions[i]).toLowerCase();
    while (answer != okishAnswers[0] && answer != okishAnswers[1] && answer != okishAnswers[2] && answer != okishAnswers[3]) {
        alert('Please answer yes or no')
        answer = prompt(questions[i]).toLowerCase()
    }
    if (answer == 'yes' || answer == 'y') {
    alert('Corrrecto!');
    correctAnswernumber++
    } else if (answer == 'no' || answer == 'n') { alert('Incorect, sorry') 
    } } }
YorNquestions()

function numberGame() {
let answerTonumberGame = prompt('Guess a number!')
let attempt;
let correctAnswer = Math.floor(Math.random()*10)
let guessNumber = false;
for (attempt = 1; attempt < 5; attempt++) {
     
    if (answerTonumberGame > correctAnswer) {
        alert('Too high')
        answerTonumberGame = prompt('Guess a number!')
    }
    else if (answerTonumberGame < correctAnswer) {
        alert('Too low')
        answerTonumberGame = prompt('Guess a number!')
}
    
    else if (answerTonumberGame == correctAnswer) {
        alert('Corrrecto!');
        guessNumber = true
        correctAnswernumber++
    break 
    } else {
    alert('This is NaN!');
    answerTonumberGame = prompt('Guess a number!')
}}  
if (guessNumber === false) {alert('You are out of attempts. The answer was ' + correctAnswer)}
}
numberGame()
//console.log(correctAnswer)
//console.log(attempt)

//let fruitQuestions = ['Name another fruit that I like?']

function fruitGame() {
let fruitAttempt;
let okishFruitanswers = ['mangostin', 'mango', 'coconut', 'durian'];
let guessFruit = false;
let fruitAnswer = prompt('Name another fruit that I like?').toLowerCase()
    for (fruitAttempt = 1; fruitAttempt < 5; fruitAttempt++) {
        //fruitAnswer = prompt(fruitQuestions[j]).toLowerCase();
        if (fruitAnswer != okishFruitanswers[0] && fruitAnswer != okishFruitanswers[1] && fruitAnswer != okishFruitanswers[2] && fruitAnswer != okishFruitanswers[3]) {
            alert('Wrong');

            fruitAnswer = prompt('Name another fruit that I like?').toLowerCase()
        } else {
        alert('Si, senor!');
        guessFruit = true;
        correctAnswernumber++
        break
        } }
if (guessFruit === false) {alert('You are out of attempts. I also like ' + okishFruitanswers[0] + ', ' + okishFruitanswers[1] + ', ' + okishFruitanswers[2] + ', ' + okishFruitanswers[3])
}}

fruitGame()

alert('You have got ' + correctAnswernumber + ' correct answers.')