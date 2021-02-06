let foo = 'bar';
const $ = require('jquery');

console.log(foo);
$(document).ready(function(){
  console.log('Hello world');
  $('#from-jquery').append('Если этот текст можно прочитать, значит на фронте все правильно.');
});
