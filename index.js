const express = require("express");

const app = express();

app.get("/name",(req,res)=>{
    res.send("Hey there Nandani jadon");
})


app.listen(6600,()=>{

    console.log("Server is running in 6600 port");
})