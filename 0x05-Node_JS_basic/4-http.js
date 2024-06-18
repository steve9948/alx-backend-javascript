// Import the HTTP module
const http = require('http');

// Create and configure the HTTP server
const app = http.createServer((req, res) => {
  res.write('Hello Holberton School!'); // Write response message
  res.end(); // End the response
}).listen(1245); // Listen on port 1245

// Export the server instance
module.exports = app;
