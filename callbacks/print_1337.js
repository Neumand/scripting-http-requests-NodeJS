var getData = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/1337.html'
};

function leet(html) {
  var h4x0r = "";
  for (var i = 0; i < html.length; i++) {
    switch(html.charAt(i)) {
      case "a":
      h4x0r += 4;
      break;
      case "e":
      h4x0r += 3;
      break;
      case "l":
      h4x0r += 1;
      break;
      case "o":
      h4x0r += 0;
      break;
      case "s":
      h4x0r += 5;
      break;
      case "t":
      h4x0r += 7;
      break; 
      default:
      h4x0r += html.charAt(i);
  }
  }
  console.log(h4x0r);
}


getData.getHTML(requestOptions, leet);