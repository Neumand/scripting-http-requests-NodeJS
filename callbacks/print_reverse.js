var getData = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

function reverse(html) {
  var reversedHTML = html.split('').reverse().join('');
  console.log(reversedHTML);
}


getData.getHTML(requestOptions, reverse);