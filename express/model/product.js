var mongoose = require("mongoose")

//use mongoose to initialize the schema
var mongoSchema = mongoose.Schema

//create the reference for product document
var productSchema = new mongoSchema({
    "name": String,
    "price": Number
}, {collection:'productlist'}  )

module.exports = mongoose.model('productlist', productSchema)