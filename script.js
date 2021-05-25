'use strict';

// selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const currentScore0El = document.getElementById('current--0');
const currentScore1El = document.getElementById('current--1');
let currentScore = 0;
let activePlayer = 0;

// starting conditions
score0El.textContent = '0';
score1El.textContent = '0';
diceEl.classList.add('hidden');

// dice roll functionality
btnRoll.addEventListener('click', function () {
  // Generate a random number
  const dice = Math.floor(Math.random() * 6) + 1;

  // Display the dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  // Check if rolled 1, switch to next player
  if (dice !== 1) {
    currentScore += dice;
    currentScore0El.textContent = currentScore;
  } else {
    console.log('Switching to other player');
    // player1.classList.contains('player--active')
    //   ? player1.classList.remove('player--active') &&
    //     player2.classList.add('player--active')
    //   : player2.classList.remove('player--active') &&
    //     player1.classList.add('player--active');
  }
});
