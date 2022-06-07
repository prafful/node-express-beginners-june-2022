var fs = require("fs")

var message = "Hello, writing to file using fs.writeFile"

fs.writeFile("hello1.txt", message, (error)=>{
    if(error){
        throw error
    }

    console.log("File successfully written!")
})