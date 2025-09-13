require('dotnev').config();
const express= require('express'); 
const RunServer = require('./database/Connection');
const todoRouter = require('./routes/todoRoute');
const cors =require('cors')






const app=express()
const port=process.env.PORT

// json:javascript object notation
// used to transfer the data
app.use(express.json())
app.use(cors())

RunServer()
app.use('/TodoList',todoRouter)

app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`)
})