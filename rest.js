const http = require('http');


const server = http.createServer((req, res) => {
    if(req.url == "/"){
        res.writeHead(200, {
            'Content-type' : 'text/html'
        })
        res.end("<h1>Hello</h1>")
    }
    if (req.url == "/users") {
        res.writeHead(200, {
        'Content-type' : 'text/json'
    })

    const users = [
        {name:"Dima", age:19},
        {nama:"Yaroslav", age:19}
    ]

        res.end(JSON.stringify(users));

    }
})

server.listen(3000, () => {
    console.log("Server runing...")
})