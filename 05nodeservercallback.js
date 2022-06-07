var http = require("http")


//use callback function to create server
var myFirstServer = http.createServer((request, response)=>{
    response.writeHead(200, { 'Content-Type': 'text/html' })
    response.write("Hello Response")
    console.log("response sent....")
    response.end()
})

// function myServer(request, response) {
//     //console.log(request)
//     response.writeHead(200, { 'Content-Type': 'text/html' })
//     response.write("Hello Response")
//     console.log("response sent....")
//     response.end()
// }

//myFirstServer will listen on port 1234 -> http://localhost:1234
myFirstServer.listen(1234, ()=>{
    console.log("Listening on port 1234")
})