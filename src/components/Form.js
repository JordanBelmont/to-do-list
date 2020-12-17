import React from 'react';

const Form = () => {
   return(
      <form>
         <input type="text" className="todo-input" />
         <button type="submit" className="todo-button">
            <i className="fas fa-plus-square"></i>
         </button>
         <div className="select">
            <select name="todos" className="filter-todo">
               <option value="all">All</option>
               <option value="Complete">All</option>
               <option value="Uncomplete">All</option>
            </select>
         </div>
      </form>
   );
};

export default Form;