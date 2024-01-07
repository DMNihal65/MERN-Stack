//Input Validation using ZOD library

const express = require('express');
const zod = require('zod'); //Importing the ZOD library
const app = express();

const schema = zod.array(zod.number());//Defineing the structure of the input schema

//Schema for the username and password

const userschema = zod.object({
    email: zod.string(),
    password: zod.string(),
    country : zod.literal("IN").or(zod.literal("US")),
    kidneys: zod.array(zod.number())
})



app.use(express.json())

app.post('/zod', (req, res) => {
    const reqestfromuser = req.body
    const username = req.headers.username;
    const password = req.headers.password;
    const kindeys = req.body.kidneys;
    const response = userschema.safeParse(reqestfromuser)
    
    if(!response.success){
        res.status(411).json({message:"Input is invalid"})
    }
    else{
        res.send({response});

    }
    

    // const nofokidneys = kindeys.length;

    // res.send("you have"+ nofokidneys + "Kidneys")
})


//GLOBAL CATCHES
//Goes to this middlewar if there is any errors
app.use(function(err, req, res, next){
    res.json({"msg":"This is on us Please bere with us"})
})

app.listen(3000)

