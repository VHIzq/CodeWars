const http = require("http");

const website = (req, res) => {
  res.writeHead(200, {"Content-type": "text/html"});
  res.end("Mi <strong>primer</strong> servidor");
}

let server = http.createServer(website);

server.listen(6969, "192.168.137.1");
console.log("Servidor en línea")