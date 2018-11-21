const handlers = require("./handlers");[]

const routes = {
  "/": handlers.home,
  "/main.css": handlers.css,
  "404": handlers.notFound
};

module.exports = function(req, res) {
  if (routes[req.url]) {
    routes[req.url](req, res);
  } else {
    routes[404](req, res);
  }
};
