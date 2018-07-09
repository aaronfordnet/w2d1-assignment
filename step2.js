function getAndPrintHTML () {

  var https = require('https');

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  /* Add your code here */

  https.get(requestOptions, function (response) {

    response.setEncoding('utf8');

    var buffer = '';

    response.on('data', function (data) {
      buffer += data;
      console.log(buffer);
    });

  });
}

getAndPrintHTML();
