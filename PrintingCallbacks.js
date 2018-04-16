function getHTML (options, callback) {
  var https = require('https');

  https.get(options, function (response) {
    response.setEncoding('utf8');

    var chunk = "";

    response.on('data', function (data) {
      chunk += data;
    });

    response.on('data', function (data) {
      callback(chunk);
    });
  });
}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML)