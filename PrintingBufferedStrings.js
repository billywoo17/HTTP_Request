function getAndPrintHTMLChunks () {
  var https = require('https');
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  https.get(requestOptions, function (response) {
    response.setEncoding('utf8');

    var chunk = "";

    response.on('data', function (data) {
      chunk += data + '\n';
    });

    response.on('end', function() {
      console.log(chunk);
    });
  });
}
getAndPrintHTMLChunks();