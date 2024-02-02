//Express boilerplate code

const express = require('express');


const app = express();

//importing the zod schema written in the types.js
const { createTodo, updateTodo } = require('./types');
const { todo } = require('./db');





app.use(express.json())


//ZOD FOR VALIDATION



app.post('/todo', async function(req,res){
    const createdata = req.body
    const parsedData = createTodo.safeParse(createdata);
    
    
    if(!parsedData.success){
        res.status(404).json({message:"You sent a Wrong Input"});
        return;
    }

    // if sucess then send to mongoDB
    await todo.create({
        title : parsedData.data.title,
        description : parsedData.data.description,
        completed : false
    })

    res.json({
        msg : "Todo Created !"
    })


   
})


//Await becase it should come from the database
app.get('/todos', async function(req,res){

    const todos = await todo.find({})

    res.json({
        todos
    })

    
})
//Should use the async function this is the best practice
app.put('/completed', async function(req,res){
    const updatedata = req.body;
    const parsedUpData = updateTodo.safeParse(updatedata);
    if(!parsedUpData.success){
        res.status(404).json({message:"You sent a Wrong Input"});
        return;
    } 

    //uniquly identified by _id
    await todo.update({
        _id:req.body.id,
    },{
        completed: true
    })

    res.json({
        msg : "Todo Marked as completed !"
    })

    
})

app.listen(3000)