const { log } = require("console")
var http = require("http")
var url = require("url")

//create server using call back function
var server = http.createServer((request, response)=>{
    response.writeHead(200, {'Content-Type': 'text/html'})
    response.write("<h1>Working with query parameters</h1>")
    console.log("Request is coming from...." )
    console.log("Query parameter string: "+ request.url)
    //extract the values (query parameters) from request.url
    var queryParameterObject = url.parse(request.url, true).query
    console.log(queryParameterObject)
    console.log("Name: " + queryParameterObject.name)
    console.log("Location: " + queryParameterObject.location)
    console.log("Course: " + queryParameterObject.course)
    
    response.write("Name: " + queryParameterObject.name)
    response.write("<br>")
    response.write("Location: " + queryParameterObject.location)
    response.write("<br>")
    response.write("Course: " + queryParameterObject.course)
    response.write("<br>")




    
    console.log("Response sent....")
    response.end()
})

server.listen(1234, ()=>{
    console.log("Server listening on port 1234");
})