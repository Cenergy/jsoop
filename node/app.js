console.log("hello world");

const http = require("http");

const httpserver = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("hello world");
    res.end();
  }
});
httpserver.listen(3000);
