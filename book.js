const express = require("express")

const app = express()


app.get("/home" , (req,res) =>{
    console.log("helle")
             
 
})


app.get("/books" , (req,res) =>{
    res.send({  
        book :  1,
        book1  : "think and grow rich",
        book2 : "another",
        book3 : "third",
      } )
     
             
             
 
})   

app.listen(2000, () =>{
    console.log("listening port 2000")
})