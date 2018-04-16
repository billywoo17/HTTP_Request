var https = require('https');

module.exports = function getHTML (options, callback) {
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
};
