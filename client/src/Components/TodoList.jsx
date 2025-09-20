import { AiFillDelete } from "react-icons/ai"; 
import { AiTwotoneEdit } from "react-icons/ai"; 
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from "react-toastify";


const TodoList = () => {
    const [todos, setTodos] = useState([])
    const [isEditing, setIsEditing] = useState(false)
    const [currentTodo, setCurrentTodo] = useState({ _id: null, message: '' })

    const getAllTodos = async () => {
        try {
            const response = await axios.get('https://todolist-bcknd.onrender.com/todolist/getall')
            setTodos(response.data.data);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getAllTodos();
    }, []);

    // the useEffect hook is an essential part of this react component.
    // it is used to perform side effect in functional components,such ad futching data,subscribing to events or manually updating the DOM

    // in this components ,the useEffect is used to fetch the initial lost of to-dos from the backend when the componnets is first rendered.

    const handleDelete = async (id) => {
        try {
            const result = await axios.delete(`https://todolist-bcknd.onrender.com/todolist/deleteTodo/${id}`);
            if (result.data.success === 'deleted') {
                toast.success('todo delete successfully')
                getAllTodos();

            }

        } catch (error) {
            console.error(error)
            toast.error('failrd to delete todo')

        }

    };

    const handleEditInputChange = (e) => {
        setCurrentTodo({ ...currentTodo, message: e.target.value });
    };
    // {currentTodo} means "create a new object and copy all propertirs of currentTodob into it"
    // example
    // initial State:

    // isEditing=false
    // currentTodo={_id:null,message:''}
    // the user is not editing any to-do yet

    const handleEdit = (todo) => {
        setIsEditing(true);
        setCurrentTodo({ _id: todo._id, message: todo.message });

    };
    const handleUpdate = async () => {
        // validate the message before updating
        if (currentTodo.message.length < 4 || currentTodo.message.length > 20) {
            toast.error('message must be between 4 and 20 character.');
            return; //block the update if validatec fails

        }
        try {
            const result = await axios.put(`https://todolist-bcknd.onrender.com/todolist/updateToDo/${currentTodo._id}`, {
                message: currentTodo.message
            });
            if (result.data.success === 'updated') {
                toast.success('todo update successfully');
                console.log(result)
                getAllTodos();
                setIsEditing(false);
                setCurrentTodo({ _id: null, message: '' });

            }
        } catch (error) {
            console.log(error);
            toast.error('failed to update')
        }
    };
    const handleCancelEdit = () => {
        setIsEditing(false);
        setCurrentTodo({ _id: null, message: '' });

    };


return (
    <div>
        {isEditing ? (
            <div>
                <input type="text"
                    value={currentTodo.message}
                    onChange={handleEditInputChange}/>
                    <button onClick={handleUpdate}>update</button>
                    <button onClick={handleCancelEdit}>cancle</button>
            </div>
        ) : (
            <ul>
                {todos.map((todo) => (
                    <li key={todo._id}>
                        {todo.message}
                        <AiTwotoneEdit  className="icon" onClick= {() =>
                                handleEdit(todo)} />

<AiFillDelete  className="icon" onClick ={() =>
                                handleDelete(todo._id)} />
                    </li>
                                ))}

            </ul>
        )}


    </div>
);
};
export default TodoList;
