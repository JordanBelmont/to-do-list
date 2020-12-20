import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList';
import './App.css';

function App() {

   // States
   const [inputText, setInputText] = useState("");
   const [todos, setTodos] = useState([]);
   const [status, setStatus] = useState("all");
   const [filteredTodos, setFilteredTodos] = useState([]);

   // Run once when app starts
   useEffect(() => {
      getLocalTodos();
   }, []);

   //
   useEffect(() => {
      filterHandler();
      saveLocalTodos();
   }, [todos, status]);

   // 
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

   // Saves and pushes the data in state to local storage
   const saveLocalTodos = () => {
      localStorage.setItem('todos', JSON.stringify(todos));
   };
   
   // Checks local storage

   const getLocalTodos = () => {
      if (localStorage.getItem('todos') === null) {
         localStorage.setItem('todos', JSON.stringify([])); // if there's nothing - set an empty array
      } else {
         let todoLocal = JSON.parse(localStorage.getItem('todos')); 
         setTodos(todoLocal); // if there's something - push it to state
      }
   }

   return (
      <div className="App">
         <header>
            <h1>Wanna-Do List</h1>
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