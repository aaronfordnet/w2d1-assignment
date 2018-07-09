var https = require('https');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

// Callback function:
function printHTML (html) {
  console.log(html);
}

// Main function:
function getHTML (options, callback) {

  /* Add your code here */

  https.get(options, function (response) {

    response.setEncoding('utf8');

    var buffer = '';

    // Add each chunk to buffer
    response.on('data', function (data) {
      buffer += data;
    });

    // When get is complete, run callback funtion to log buffer
    response.on('end', function (data) {
      callback(buffer);
    });
  });
}


getHTML(requestOptions, printHTML);
