const express=require('express')
const { getAllToDo, createToDo,deleteToDo, updatedTodo } = require('../controller/todoCtrl')

const todoRouter=express.Router()

// get->read
// post -> send/create
// put ->update
// delete -> delete

todoRouter.get('/getall',getAllToDo)
todoRouter.post('/',createToDo)
todoRouter.put('/updateToDo/:id', updatedTodo)
todoRouter.delete('/deleteToDo/:id',deleteToDo)


module.exports=todoRouter
