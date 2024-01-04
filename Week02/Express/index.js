//Express for the HTTP Server

const express = require('express');

const app = express();

// function sum(n){
//     let ans = 0;
//     for(let i=1;i<=n;i++){
//         ans = ans+i
//     }

//     return ans
// }

// app.get('/', function(req,res){
//     const n= req.query.n; //Take the input Qurey parameter by adding ? n=1-
//     const ans = sum(n)
//     res.send("Hi there! your answer is " + ans);
// })


//Real word Example

//in memory Hospital Example

var users = [{
    name:"nihal",
    kidenys : [{
        healthy: false
    },
    {
        healthy: false
    }]
}];


//Check for the number of kidenys and health

app.get('/', function(req, res){
    const johnkidneys = users[0].kidenys;
    // console.log(johnkidneys)

    const numberofkidneys = johnkidneys.length;
    // console.log(numberofkidneys)
    let healthykideny = 0;
    for(let i=0;i< johnkidneys.length;i++){
        if(johnkidneys[i].healthy){
            healthykideny = healthykideny + 1;
        }
    };
    const unhealtykidenys = numberofkidneys-healthykideny;
    // console.log(johnkidneys)

    //sending data
    res.json({
        
        numberofkidneys,
        healthykideny,
        unhealtykidenys
    })
})



//Post new unhealty kidenys
//TO Post request can use POSTMAN
//to parse the jason should use app.jason

app.use(express.json());
app.post("/new" , function(req,res){
    const ishealty = req.body.ishealty;
    users[0].kidenys.push[{
        healthy : ishealty
    }]

    res.json({
        msg: "Done!"
    })
})


//Make the kindneys Healty

app.put("/update", function(req, res){
    for(i=0;i<users[0].kidenys.length;i++){
        users[0].kidenys[i].healthy = true
    }
    res.json({
        "msg" :"Updated"
    })
})


//Delete the Unheathy Kidenys

app.delete("/delete", function(req, res){
    const newkidenys = [];
    for(let i=0;i<users[0].kidenys.length;i++){
        if(users[0].kidenys.healthy){
            newkidenys.push({
                healthy : true
            })
        }
    }


    users[0].kidenys = newkidenys;
    res.json({msg:"DOne delete"})
})
app.listen(3000);
