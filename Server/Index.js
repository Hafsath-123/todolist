require('dotenv').config();
const express= require('express'); 
const RunServer = require('./database/Connection');
const todoRouter = require('./routes/todoRoute');
const cors =require('cors')

const app=express()
const port=process.env.PORT ||5000;

// json:javascript object notation
// used to transfer the data
app.use(express.json())
app.use(cors())

RunServer()
app.use('/todolist',todoRouter)

app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`)
})