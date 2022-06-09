import http from 'http';

const server = http.createServer((req, res) => {
    res.end("Hello my name is david.")
}).listen(8001);

console.log("Server up and running on port: 8001");