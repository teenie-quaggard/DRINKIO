const handlers = require("./handlers");
const queryString = require("query-string");
const query = "query";

const routes = {
  "/": handlers.home,
  "/main.css": handlers.css,
  "/reset.css": handlers.reset,
  "/main.js": handlers.js,
  "/dom.js": handlers.dom,
  "/image/background.jpg": handlers.image,
  "404": handlers.notFound
};

module.exports = function(req, res) {
  console.log(queryString.parse(req.url));

  if (routes[req.url]) {
    routes[req.url](req, res);
  } else if (req.url.includes(query)) {
    console.log("uuu");
  } else {
    routes[404](req, res);
  }
};
