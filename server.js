const http = require("http");
const fs = require("fs");

const port = 3001;
const hostname = "localhost"; // IP

function serverHandler(req, res) {
  let filePath = req.url; // url requested by client
  if (filePath === "/") filePath = "index.html"; // default value of response

  // 
  fs.readFile(`./public/${filePath}`, (error, content) => {
    if(error) {
        res.statusCode = 404;
        res.end('<img src=./error.jpeg ></img>')
    }
    res.end(content);
  });
}

const server = http.createServer(serverHandler);

server.listen(port, hostname, () => {
  console.log(`server on: http://${hostname}:${port}`);
});

