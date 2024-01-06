//BACKEND USING NODEJS

const express = require('express');
const port = 3000;
const port1 = 4000; // Can Run 2 ports simultaneously

const app = express();

app.get('/',function (req,res){
    res.send("Hello,world!");
})


app.listen(port,function(){
    console.log(`listing the port ${port}`)
})

// app.listen(port1,function(){
//     console.log(`listing the port ${port1}`)
// })


