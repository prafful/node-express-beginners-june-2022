var express = require("express")
var mongoose = require("mongoose")
var product = require('./model/product')

//initialize the express app
var app = express()

//configure the mongoose with some settings
mongoose.set('debug', true)

//use mongoose to connect with database using database string
mongoose.connect("mongodb://localhost:27017/catalog")
var db = mongoose.connection

//check if database connection is established
db.on('error', ()=>{
    console.log("Error connecting to the database....")
})

db.once('open', ()=>{
    console.log("Connected to the database....")
})

app.get("/products/all", (request, response)=>{
    //use product (declared in line 3) to get the list of all products
    // from productlist collection
    product.find({}, (error, data)=>{
        if(error){
            response.send(error)
        }else{
            console.log(data)
            response.json(data)
        }
    })
})

app.listen(1234, ()=>{
    console.log("Listening on port 1234....")
})