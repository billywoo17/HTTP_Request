function getAndPrintHTMLChunks (options) {
  var https = require('https');

  https.get(options, function (response) {
    response.setEncoding('utf8');

    var chunk = "";

    response.on('data', function (data) {
      chunk += data;
    });

    response.on('end', function() {
      console.log(chunk);
    });
  });
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};
getAndPrintHTMLChunks(requestOptions);

