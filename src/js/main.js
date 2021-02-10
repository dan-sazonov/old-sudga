let foo = 'bar';
const R = require('ramda');

const square = function square (x) { return x * x; };
const squares = R.chain(square, [1, 2, 3, 4, 5]);
console.log(squares);
$(document).ready(function(){
  console.log(foo);
  console.log('Hello world');
  $('#from-jquery').append('Если этот текст можно прочитать, значит на фронте все правильно.');
  $('.carousel').carousel()
});
