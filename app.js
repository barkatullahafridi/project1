const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, Docker on AWS EC2!\n');
});

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/`);
});

