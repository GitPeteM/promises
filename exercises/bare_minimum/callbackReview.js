/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('needle');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, callback) {
  try {
    const data = fs.readFileSync(filePath).toString();
    const firstLine = data.split('\n')[0];
    callback(null, firstLine);
  } catch (err){
    callback(err);
  }
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, callback) {
  // TODO
  request.get(url, (error, response) => {
    if (!error) {
      callback(null, response.statusCode);
    } else {
      callback(error);
    }
  })

};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
