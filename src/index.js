const path = require('path')
const express = require('express')


const app = express()
app.use(express.static(path.join(__dirname, '../public')));


app.listen(3000,async (req,res)=>{
    console.log("Server is up on Port : 3000");
})