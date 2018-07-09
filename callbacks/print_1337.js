var getHTML = require('../step6');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/1337.html'
};

function print1337 (html) {
  /* Write your code here! */
  html = html
    .replace((/you/ig), 'j00')
    .replace((/er/ig), '0r')
    .replace((/ck/ig), 'x')
    .replace((/t/ig), '7')
    .replace((/s/ig), '5')
    .replace((/o/ig), '0')
    .replace((/l/ig), '1')
    .replace((/e/ig), '3')
    .replace((/a/ig), '4');

  console.log(html);
}

getHTML(requestOptions, print1337);
