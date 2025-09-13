const express=require('express')
const { getAllToDo, createToDo, updateToDo, deleteToDo } = require('../controller/todoCtrl')

const todoRouter=express.Router()

// get->read
// post -> send/create
// put ->update
// delete -> delete

todoRouter.get('/getall',getAllToDo)
todoRouter.post('/',createToDo)
todoRouter.put('/updateTodo/:id',updateToDo)
todoRouter.delete('/deleteToDo/:id',deleteToDo)


module.exports=todoRouter
