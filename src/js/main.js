import $ from 'jquery/dist/jquery';

export default function main() {
  $(document).ready(function () {
    console.log('Hello world');
    $('#from-jquery').append('Если этот текст можно прочитать, значит на фронте все правильно.');
  });
}
