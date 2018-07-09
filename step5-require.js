var getHTML = require('./step5');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

// Callback function:
function printHTML (html) {
  console.log(html);
}

getHTML(requestOptions, printHTML);
