var express = require('express')

//create express app
var app = express()

app.use(express.json())

//create root api endpoint => http://localhost:1234/
app.get("/", (request, response)=>{
    //response.send("Welcome to Express App!!!!" + " GET")
    response.json({
        message: "Welcome to REST API!",
        requestMethod: request.method,
        requestURL:request.url
    })
})

app.post("/", (request, response)=>{
    //response.send("Welcome to Express App!!!!" + " POST")
    response.json({
        message: "Welcome to REST API!",
        requestMethod: request.method,
        requestURL:request.url
    })
})


app.post("/welcome", (request, response)=>{
    //response.send("Welcome to Express App!!!!" + " POST")
    console.log(request.body)
    response.json({
        message: "Welcome to REST API!",
        requestMethod: request.method,
        requestURL:request.url,
        requestBody:  request.body
    })
})

app.listen(1234, ()=>{
    console.log("Express app listening on port 1234");
})

