import React, { useEffect, useState } from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList'
import './App.css';

function App() {

   useEffect(() => {
      filterHandler();
   }, [todos, status]);

   const [inputText, setInputText] = useState("");
   const [todos, setTodos] = useState([]);
   const [status, setStatus] = useState("all");
   const [filteredTodos, setFilteredTodos] = useState([]);

   const filterHandler = () => {
      switch(status) {
         case "completed":
            setFilteredTodos(todos.filter(todo => todo.completed === true))
            break;
         case "uncompleted":
            setFilteredTodos(todos.filter(todo => todo.completed === false))
            break;
         default:
            setFilteredTodos(todos);
            break;
      }
   }

   return (
      <div className="App">
         <header>
            <h1>Wanna Do List</h1>
         </header>
         <Form 
         setStatus={setStatus}
         todos={todos} 
         setTodos={setTodos} 
         inputText={inputText} 
         setInputText={setInputText} 
         />
         <TodoList 
         todos={todos} 
         setTodos={setTodos} 
         />
      </div>
   );
}

export default App;