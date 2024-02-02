const  mongoose  = require("mongoose")

mongoose.connect("mongodb+srv://nihaldm65:Nihal6565%40@cluster0.aszhikr.mongodb.net/todos2")

const schema = mongoose.Schema({
    title : String,
    description : String,
    completed : Boolean
})

const todo = mongoose.model('todos',schema);

module.exports = {
    todo
}