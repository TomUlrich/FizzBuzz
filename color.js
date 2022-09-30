'use strict';

const lets_span = document.querySelector('.lets_span');
const play_span = document.querySelector('.play_span');
const fizzbuzz_span = document.querySelector('.fizzbuzz_span');
const color_btn = document.getElementById('color_btn');

function setRandomColor() {
  let r = Math.ceil(Math.random() * 255);
  let g = Math.ceil(Math.random() * 255);
  let b = Math.ceil(Math.random() * 255);
  return `rgb(${r},${g},${b})`;
}

// Color Button
color_btn.addEventListener('click', () => {
  lets_span.style.color = setRandomColor();
  play_span.style.color = setRandomColor();
  fizzbuzz_span.style.color = setRandomColor();
});