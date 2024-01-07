const express = require("express");
const app = express();
app.use(express.json());
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://nihaldm65:Nihal6565%40@cluster0.aszhikr.mongodb.net/")

const User = mongoose.model("Users", { //Create a model for the moongodb
    name : String,
    email: String,
    password: String
}) ;

app.get("/usersnew", async function(req, res) {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const existinguser = await User.findOne({email: email});
    if(existinguser){
        return res.status(404).send("User Alredy Exists");
    }


    const user = new User({//Add a new user data to the database using the model created before
        name : username,
        email:email,
        password :password
    },
    );
    
    user.save();//Put data into the database
    res.json({
        "msg": "User Created Sucessfully"
    })



})



app.listen(3000);