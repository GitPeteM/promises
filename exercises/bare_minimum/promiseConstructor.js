/**
 * Implement these promise-returning functions.
 * Any successful value should be made available in the next `then` block chained
 * to the function invocation, while errors should be available in the `catch` block
 */

var request = require('needle');
var Promise = require('bluebird');
// var fs = require('fs');
var fs = require('fs');
// Promise.promisifyAll(fs);

const readFile = Promise.promisify(fs.readFile);

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFileAsync = function(filePath) {

  var promise = new Promise((resolve, reject) => {
    fs.readFile(filePath, (err, data) => {
      if (err) {
        // console.log(err)
        reject(err);
      } else {
        resolve(data.toString().split('\n')[0]);
      }
    });
  });

  // var promise = readFile(filePath);

  return promise;
};


// This function should retrieve the status code of a GET request to `url`
var getStatusCodeAsync = function(url) {
  // TODO

};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCodeAsync: getStatusCodeAsync,
  pluckFirstLineFromFileAsync: pluckFirstLineFromFileAsync
};
