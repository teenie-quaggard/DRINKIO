const handlers = (module.exports = {});

const headers = {
  "content-type": "text/html"
};

handlers.home = function(req, res) {
  res.writeHead(200, headers);
  res.end();
};

handlers.notFound = function(req, res) {
  res.writeHead(404, headers);
  res.end("Resource not found");
};
