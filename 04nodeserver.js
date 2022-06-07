var http = require("http")


//myServer is a named function
var myFirstServer = http.createServer(myServer)

function myServer(request, response) {
    //console.log(request)
    response.writeHead(200, { 'Content-Type': 'text/html' })
    response.write("Hello Response")
    console.log("response sent....")
    response.end()
}

//myFirstServer will listen on port 1234 -> http://localhost:1234
myFirstServer.listen(1234)