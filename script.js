'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉 Correct Number!';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 23;

// document.querySelector('.guess').value = 30;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = message =>
  (document.querySelector('.message').textContent = message);

const displayNumber = number =>
  (document.querySelector('.number').textContent = number);

const button = document.querySelector('.check');
button.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // If there is no input log warning message!
  if (!guess) {
    displayMessage('⛔ No number!');

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    displayNumber(secretNumber);
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 You lost the game!');
      score--;
      document.querySelector('.score').textContent = score;
    }
  }
});

const again = document.querySelector('.again');
again.addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1; // Reset value of secretNumber
  score = 20;
  document.querySelector('.score').textContent = score; // Reset value of score
  displayNumber('?'); // Reset the Question Mark
  document.querySelector('.guess').value = ''; // Reset value of number input field
  displayMessage('Start guessing...'); // Reset the text of message...
  document.querySelector('body').style.backgroundColor = '#222'; // Body gets the default black background color
  document.querySelector('.number').style.width = '15rem'; // Number gets the original width
});
