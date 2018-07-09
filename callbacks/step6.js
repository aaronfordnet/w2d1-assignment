// Main function:
module.exports = function getHTML (options, callback) {

var https = require('https');

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
