import React from 'react';

const Form = ({ setInputText }) => {
   const inputTextHandler = (e) => {
      console.log(e.target.value);
      setInputText(e.target.value);
   };

   const submitTodoHandler = (e) => {
      e.preventDefault();
   }

   return(
      <form>
         <input 
         onChange= {inputTextHandler} 
         type="text" 
         className="todo-input" 
         />
         <button onClick={submitTodoHandler} type="submit" className="todo-button">
            <i className="fas fa-plus-square"></i>
         </button>
         <div className="select">
            <select name="todos" className="filter-todo">
               <option value="all">All</option>
               <option value="Complete">Complete</option>
               <option value="Uncomplete">Uncomplete</option>
            </select>
         </div>
      </form>
   );
};

export default Form;