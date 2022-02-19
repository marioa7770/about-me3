'use strict';



let username = prompt('What is your name?');
alert('Hello ' + username + '! we are going to play a game.');


let points = 0; 


let questions = ['Do I love music? Yes or No','Do I like meetings? Yes or No','Do I like indian food?','Do I like Pizza?','Do I like to exercise?'];
let correctAnswers = ['yes','no','yes','yes','yes'];
let replies = ['Correct Friend!','Sorry, thats not correct.'];

function questionQuiz() {
  for (let i = 0; i < questions.length; i++) {
    let userAnswer = prompt(questions[i]).toLowerCase();
    if (userAnswer === correctAnswers[i] || userAnswer === 'y') {
    } else if (userAnswer !== correctAnswers[i] && userAnswer === 'n') {
      alert(replies[1]);
    } else {
      alert('Please answer yes or no');
    }
  }
}
questionQuiz();

//Question 6: (got help from Talyor, TA on how to keep track of number of attempts)
function instrumentsPlayed() {
  let numOfAttempts = 4;
  while (numOfAttempts > 0) {
    let guess = prompt('How many instruments do I play?');
    guess = parseInt(guess);

  
    if (guess === 2) { 
      console.log('correct', guess); 
      points++; 
      alert('Correct Friend!');
      break; 
    } else if (guess > 3) {
      console.log('too high', guess); 
      numOfAttempts--; //reduces number of guess by 1
      alert(`Too high. You have ${numOfAttempts} attempts left`);
    } else if (guess < 2) {
      console.log('Too low', guess); 
      numOfAttempts--; 
      alert(`Too low. You have ${numOfAttempts} attempts left`); 
    }
  } if (!numOfAttempts) {
    alert('Sorry, the correct answer was 2');
  }
}
instrumentsPlayed();



let sportsILike = ['football', 'baseball', 'basketball', 'soccer'];
function typesOfSports() {
  let attempts = 4;
  let correctAnswer = false; 
  while (attempts > 0 && !correctAnswer) { 
    let guesses = prompt('What are my favorite types of sports?');
    attempts--;
    for (let i = 0; i < 4; i++) {
      if (guesses === sportsILike[i]) {
        points++;
        alert('Correct My Friend!');
        correctAnswer = true; 
      }
    } if (correctAnswer === false) {
      alert(`Sorry, try again. You have ${attempts} attempts left.`);
    }
  }
}
typesOfSports();
alert(` I like watching ${sportsILike} all the time`); 


alert(username + ', you got ' + points + ' out of 7 questions correct on the quiz. Thank you have a great day');
