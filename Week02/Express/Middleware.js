//Middleware - Autentication,Input Validation (Pre checks)

const express = require('express');

const app = express();

app.use(express.json());

app.get('/userdumb',function(req,res){

    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyId = req.query.kidneyId;

    console.log(username)
    console.log(password)

    // if(username === "Nihal" && password === "Nihal6565"){
        if(username!="Nihal" || password!="Nihal6565"){
            res.status(400).json({"msg": "Please enter valid inputs"})
            return
        }
        if(kidneyId!=1 && kidneyId!=2){
            res.status(400).json({"msg": "Please enter valid Kidneys"})
            return
        }

            res.json({
                msg:"Bro Your are Fine"
            })

        
});

//This is a Dumb way of Autentication
//Use the Middleware
//Create a Middleware function and use this in all the routes

// Middleware Funtion to calculate no of requests
let reqests = 0;

function noOfReqests(req, res,next) {
    reqests++;
    console.log(reqests)
    if(reqests > 5){
        res.status(400).json({"msg": "You are not allowed to request more than 5"});
        return
    }
    
    next();
}
//one way of adding middlware to the routes
app.get("/request", noOfReqests , function(req, res) {
    res.json({"msg": "No of requests are " + reqests})
})

//other way is to use app.use(middleware) so that every time a route gets called it uses the middleare first and accordingly move to the other funtion
// app.use(noOfReqests)


//From now every routes will access the noofreqest middleware before entring the route function
app.get('/noofreqest', (req,res) => {
    res.json({"msg":"This is to test the inner funtion after use.app(noofreqest)"})
})




//Input Validation 

app.use(express.json())

app.post('/checkhealth', (req, res) => {
    const kindeys = req.body.kidneys;
    const nofokidneys = kindeys.length;

    res.send("you have"+ nofokidneys + "Kidneys")
})


//GLOBAL CATCHES
//Goes to this middlewar if there is any errors
app.use(function(err, req, res, next){
    res.json({"msg":"This is on us Please bere with us"})
})

app.listen(3000)