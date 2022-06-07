var fs = require("fs")

fs.readFile("hello.txt", (error, data)=>{
    if(error){
        throw error
    }

    console.log(data)
    console.log(data.toString())

})