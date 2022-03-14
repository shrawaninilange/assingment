const express = require("express")
 

const app = express()

app.use(Logger)


 
app.get("/books" ,Logger,(req ,res) =>{
    return res.send("Fetching all books")
})
app.get("/book" ,Logger,(req ,res) =>{
    return res.send({ route : "/book "  , role: req.role})
})

app.get("/book/:name" ,Logger,(req ,res) =>{
    return res.send({ route : "/book/:name "  ,  role : req.role})
})



function Logger(req,res ,next){
    if( req.path === "/book"){
        req.role ="think possitve"
    }
    else if(req.path === "/book"){
        req.role = "any"
    }
    else{
        req.role ="any"
    }
    next()
}


 
app.listen(2000 , ()=>{
    console.log("listening 2000")
})