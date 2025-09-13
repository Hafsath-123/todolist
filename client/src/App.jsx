import React from 'react';
import Header from './Components/Header';
import AddTodo from './Components/AddTodo';
import TodoList from './Components/TodoList';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const App = () => {
  return (
    <div>
      <Header/>
      <AddTodo/>
      <TodoList/>
      <ToastContainer/>
      
    </div>
  )
}

export default App
