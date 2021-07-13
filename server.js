const http = require('http')

class Server {
    start(){
const server = http.createServer((req,res) => {
    if(req.url === '/'){
        res.write("Hello World")
        res.end()
    }
    if(req.url === '/api/options') {
        res.write(JSON.stringify([1,2,3,4,5,6,7]))
        res.end()
    }
})

// the above and below methods are the ways of adding listeners to http servers

server.on('connection',() => {
    console.log("Connection Established")
})

server.listen(3000)

console.log("Listening on port 3000 .............")
    }
}

module.exports = Server

// This method of creating a http sever is tedious so you generally use express js with node which is a framework

