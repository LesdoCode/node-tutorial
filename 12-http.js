const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page. Thank You Jesus.");
  }

  if (req.url === "/about") {
    res.end("Welcome");
  }
});

server.listen(3000);
