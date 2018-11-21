const handlers = (module.exports = {});
const fs = require('fs');
const path = require('path');

const headers = {
  "content-type": "text/html"
};

handlers.home = function(req, res) {
  const filePath = path.join(__dirname, '..', 'public', 'index.html');
  fs.readFile(filePath, (err, file) => {
        if(err) {
            console.log(err);
            res.writeHead(500, 'Content-Type: text/html');
            res.end('<h1>Sorry</h1>')
        } else {
            res.writeHead(200, 'Content-Type: text/html');
            res.end(file);
        }
    });
}

handlers.notFound = function(req, res) {
  res.writeHead(404, headers);
  res.end("Resource not found");
};
