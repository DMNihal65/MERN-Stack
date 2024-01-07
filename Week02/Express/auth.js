//Authenticataion MongoDB

const express = require('express');
const jwt = require('jsonwebtoken');
const jwtpassword = "123456";

const app = express();

app.use(express.json());

const ALL_USERS = [
    {
        username : "nihal@gmail.com",
        password : "1234",
        name : "DM Nihal"
    },
    {
        username : "rakshit@gmail.com",
        password : "1234323",
        name : "Rakshit MG"
    },
    {
        username : "Malli@gmail.com",
        password : "123423442",
        name : "Mallikarjun Wali"
    }
];

function userExist(username,password){
    let userExist =false;
    if(ALL_USERS.find(user => user.username === username && user.password === password)){
        userExist = true;
    }

    return userExist;

}

app.post("/signin", function(req, res) {
    const username = req.body.username;
    const password = req.body.password;

    if(!userExist(username,password)){
        return res.status(403).json({message:"User does not exist"});

    }
     //Can send Both the username and password as to token
    // var token = jwt.sign({username: username,password:password}, jwtpassword);
    var token = jwt.sign({username: username}, jwtpassword);
    return res.json({token});


});

app.get("/user", function(req, res) {
    const token = req.headers.authorization;
    try{
        const decode = jwt.verify(token, jwtpassword);
        const username = decode.username;
        res.json({
            users:ALL_USERS
            .filter(user => user.username != username)
        })
    }
    catch(err){
        return res.status(403).json({message:"Invalid token"});
    }
})

app.listen(3000)