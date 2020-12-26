import React from 'react';

// Props
const Form = ({ inputText, setInputText, todos, setTodos, setStatus }) => {
   
   // Gets the value of the input text as it's being typed
   const inputTextHandler = (e) => {
      setInputText(e.target.value);
   };

   // Turns the submitted data into an object
   const submitTodoHandler = (e) => {
      e.preventDefault();
      setTodos([
         ...todos, {
            id: Math.random() * 1000, // Can install package to generate unique id number instead of math
            text: inputText, // text taken from state
            completed: false // status set to uncompleted
         }
      ]);
      setInputText(""); // resets input bar
   }

   // 
   const statusHandler = (e) => {
      setStatus(e.target.value);
   }

   return(
      <form>
         <input 
         type="text" 
         value={inputText}
         className="todo-input"
         onChange={inputTextHandler}
         />
         <button 
         type="submit" 
         className="todo-button"
         onClick={submitTodoHandler} 
         >
            <i className="fas fa-plus"></i>
         </button>
         <div className="select">
            <select 
            name="todos" 
            className="todo-select"
            onChange={statusHandler}
            >
               <option value="all">All</option>
               <option value="completed">Completed</option>
               <option value="uncompleted">Uncompleted</option>
            </select>
         </div>
      </form>
   );
};

export default Form;