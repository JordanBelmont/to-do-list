import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList';
import './App.css';

function App() {

   const [inputText, setInputText] = useState("");
   const [todos, setTodos] = useState([]);
   const [status, setStatus] = useState("all");
   const [filteredTodos, setFilteredTodos] = useState([]);


   
   useEffect(() => {
      filterHandler();
      saveLocalTodos();
   }, [todos, status]);

   const filterHandler = () => {
      switch (status) {
         case "completed":
            setFilteredTodos(todos.filter((todo) => todo.completed === true))
            break;
         case "uncompleted":
            setFilteredTodos(todos.filter((todo) => todo.completed === false))
            break;
         default:
            setFilteredTodos(todos);
            break;
      }
   };

   // Save to local storage
   const saveLocalTodos = () => {
      if (localStorage.getItem('todos') === null) {
         localStorage.setItem('todos', JSON.stringify([]));
      } else {
         localStorage.setItem('todos', JSON.stringify(todos))
      }
   }

   const getLocalTodos = () => {
      if (localStorage.getItem('todos') === null) {
         localStorage.setItem('todos', JSON.stringify([]));
      } else {
         localStorage.setItem('todos', JSON.stringify(todos))
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
         filteredTodos={filteredTodos}
         />
      </div>
   );
}

export default App;