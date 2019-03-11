var https = require('https');
var data = '';

function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  https.get(requestOptions, function(response) {
    response.setEncoding('UTF-8');
    response.on('data', function (chunk) {
      data += chunk;
    });
    response.on('error', function (error) {
      console.log("Error: " + error);
    });
    response.on('end', function () {
      console.log(data);
      console.log("Data read complete.");
    });
  });
};

getAndPrintHTML();