var getHTML = require('../step6');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

function printLowerCase (html) {
  /* Write your code here! */
  console.log(html.toLowerCase());
}

getHTML(requestOptions, printLowerCase);
