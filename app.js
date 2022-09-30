'use strict';

let counter = 1;
const output = document.getElementById('output_div');
const number = document.getElementById('number_btn');
const fizz = document.getElementById('fizz_btn');
const buzz = document.getElementById('buzz_btn');
const fizzbuzz = document.getElementById('fizzbuzz_btn');
const reset = document.getElementById('reset_btn');
// const color_btn = document.getElementById("color_btn");
const highscore = document.getElementById('highscore_span');

function countUp() {
  counter++;
  output.innerHTML = counter;
  number.value = counter;
}

function gameOver() {
  let result;
  if (counter % 15 === 0) {
    result = 'a FizzBuzz';
  } else if (counter % 3 === 0) {
    result = 'a Fizz';
  } else if (counter % 5 === 0) {
    result = 'a Buzz';
  } else {
    result = 'just an ordinary Number';
  }
  output.innerHTML = `Wrong. It was ${result}.`;

  if (counter - 1 > highscore.innerHTML) {
    highscore.innerHTML = counter - 1;
  }
  counter = 1;
  number.value = counter;
}

// Output Field
output.innerHTML = counter;

// Number Button
number.value = counter;
number.addEventListener('click', () => {
  if (counter % 3 !== 0 && counter % 5 !== 0) {
    countUp();
  } else {
    gameOver();
  }
});

// Fizz Button
fizz.addEventListener('click', () => {
  if (counter % 3 === 0 && counter % 5 !== 0) {
    countUp();
  } else {
    gameOver();

    // output.innerHTML = "Wrong!";
  }
});

// Buzz Button
buzz.addEventListener('click', () => {
  if (counter % 3 !== 0 && counter % 5 === 0) {
    countUp();
  } else {
    gameOver();
  }
});

// FizzBuzz Button
fizzbuzz.addEventListener('click', () => {
  if (counter % 3 === 0 && counter % 5 === 0) {
    countUp();
  } else {
    gameOver();
  }
});

// Reset Button
reset.addEventListener('click', () => {
  counter = 1;
  output.innerHTML = counter;
  number.value = counter;
});
