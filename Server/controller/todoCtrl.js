const todo = require("../model/todo"); // make sure todoModel.js exists in models folder

// CREATE
const createToDo = async (req, res) => {
  const { message } = req.body;

  if(req.body.message === "") {
    return res.status(401).json({ errorMessage: "Message cannot be empty" });
  }

  // validation: check if message length is valid
  if (message.length < 4 || message.length > 20) {
    return res
      .status(400)
      .json({ errorMessage: "Message must be between 4 and 20 characters." });
  }

  try {
    const addToDo = await todo.create({ message });
    res.status(200).json({ success: "created", data: addToDo });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// READ (Get all todos)
const getAllToDo= async(req,res)=>{
  try{
      const getToDo=await todo.find({});
      res.status(200).json({data:getToDo});

  }catch(error){
      console.log(error);
  }
};

// DELETE
const deleteToDo = async (req, res) => {
  try {
    const deleted = await todo.findByIdAndDelete(req.params.id);
    res.status(200).json({ success: "deleted", data: deleted });
  } catch (error) {
    console.error(error);
  
  }
}

// UPDATE
const updatedTodo =async(req,res)=>{
  try{

const updatedTodo= await todo.findByIdAndUpdate(
  req.params.id,
  {
      message:req.body.message,
  },
  {new:true}
);
if(updatedTodo){
  res.json({success:"updated",data:updatedTodo});
}else{
  res.status(404).json({error:"ToDo not found"});
}
}catch(error){
  res.status(400).json({error:error.Message})
}
};

module.exports = {
  createToDo,
  getAllToDo,
  updatedTodo,
  deleteToDo
};
