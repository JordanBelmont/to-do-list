import React from 'react';

const Form = ({ inputText, setInputText, todos, setTodos, setStatus }) => {
   
   const inputTextHandler = (e) => {
      setInputText(e.target.value);
   };

   const submitTodoHandler = (e) => {
      e.preventDefault();
      setTodos([
         ...todos, {
            id: Math.random() * 1000, 
            text: inputText, 
            completed: false, 
         }
         // install package to generate unique id number
      ]);
      setInputText("");
   }

   const statusHandler = (e) => {
      setStatus(e.target.value);
   }

   return(
      <form>
         <input 
         value={inputText}
         onChange= {inputTextHandler} 
         type="text" 
         className="todo-input" 
         />
         <button 
         onClick={submitTodoHandler} 
         type="submit" 
         className="todo-button"
         >
            <i className="fas fa-plus-square"></i>
         </button>
         <div className="select">
            <select 
            name="todos" 
            className="filter-todo"
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