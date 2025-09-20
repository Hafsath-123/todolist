const mongoose=require('mongoose')

const todoSchema=new mongoose.Schema({
    message:{
        type:String,
        required:true,
        minLength:4,
        maxLength:20
    }
})
const todo=mongoose.model('todo',todoSchema)
module.exports=todo