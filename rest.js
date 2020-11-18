const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url == "/") {
res.write("<h1>Hello from server</h1>");
}
else{
res.write("<h1>About from server</h1>");
}
res.end();
})

server.listen(3000, () => {
    console.log("Server runing...")
})