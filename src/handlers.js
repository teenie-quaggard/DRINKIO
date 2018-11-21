const handlers = (module.exports = {});
const fs = require('fs');
const path = require('path');

const headers = {
  html : {"content-type": "text/html"},
  css : {"content-type": "text/css"}

};

handlers.home = function(req, res) {
  const filePath = path.join(__dirname, '..', 'public', 'index.html');
  fs.readFile(filePath, (err, file) => {
        if(err) {
            console.log(err);
            res.writeHead(500, headers.html);
            res.end('<h1>Sorry</h1>');
        } else {
            res.writeHead(200, headers.html);
            res.end(file);
        }
    });
}

handlers.css = function(req, res) {
  const filePath = path.join(__dirname, '..', 'public', 'main.css');
  fs.readFile(filePath, (err, file) => {
        if(err) {
            console.log(err);
            res.writeHead(500, headers.css);
            res.end('<h1>Sorry</h1>');
        } else {
            res.writeHead(200, headers.css);
            res.end(file);
        }
    });
}

handlers.notFound = function(req, res) {
  res.writeHead(404, headers);
  res.end("Resource not found");
};
