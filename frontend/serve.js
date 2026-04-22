const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer((req, res) => {
  fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
    if (err) {
      res.writeHead(500);
      res.end('Error loading index.html');
      return;
    }
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(data);
  });
}).listen(8000);
console.log('Frontend running on http://localhost:8000');
