/*
 * Write a function WITH NO CALLBACKS that,
 * (1) reads a GitHub username from a `readFilePath`
 *     (the username will be the first line of the file)
 * (2) then, sends a request to the GitHub API for the user's profile
 * (3) then, writes the JSON response of the API to `writeFilePath`
 *
 * HINT: We exported some similar promise-returning functions in previous exercises
 */

var fs = require('fs');
var Promise = require('bluebird');
var getGitHubProfileAsync = require('./promisification.js').getGitHubProfileAsync;

Promise.promisifyAll(fs);



var fetchProfileAndWriteToFile = function(readFilePath, writeFilePath) {
  // read from file
  return fs.readFileAsync(readFilePath)
    // proccess file data
    .then((data) => {
      data = data.toString();
      if (!data) {
        throw new Error('File is empty!');
      }
      var handle = data.split('\n')[0];

      // console.log(`------- Handle to search for: ${handle}`);
      // make get request
      return getGitHubProfileAsync(handle);
    })
    // proccess get request
    .then((data) => {
      return fs.writeFileAsync(writeFilePath, JSON.stringify(data));
    });
};

// Export these functions so we can test them
module.exports = {
  fetchProfileAndWriteToFile: fetchProfileAndWriteToFile
};
