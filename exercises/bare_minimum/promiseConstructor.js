/**
 * Implement these promise-returning functions.
 * Any successful value should be made available in the next `then` block chained
 * to the function invocation, while errors should be available in the `catch` block
 */

var request = require('needle');
var Promise = require('bluebird');
var fs = require('fs');

Promise.promisifyAll(fs);
Promise.promisifyAll(request);


// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFileAsync = function(filePath) {

  return fs.readFileAsync(filePath)
    .then((data) => data.toString().split('\n')[0])
    .catch((error) => new Error(error));
};


// This function should retrieve the status code of a GET request to `url`
var getStatusCodeAsync = function(url) {
  return request.getAsync(url)
    .then(response => response.statusCode)
    .catch(error => throw new Error(error));

  // var promise = new Promise((resolve, reject) => {
  //   request.get(url, (error, response) => {
  //     if (error) {
  //       // console.log(err)
  //       reject(error);
  //     } else {
  //       resolve(response.statusCode);
  //     }
  //   });
  // });

  // return promise;

};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCodeAsync: getStatusCodeAsync,
  pluckFirstLineFromFileAsync: pluckFirstLineFromFileAsync
};
