import React from 'react';

// Props
const Todo = ({ text, todo, todos, setTodos }) => {

   const deleteHandler = () => {
      setTodos(todos.filter(el => el.id !== todo.id));
   }

   const completeHandler = () => {
      setTodos(todos.map(item => {
         if (item.id === todo.id) {
            return {
               ...item, completed: !item.completed
            }
         }
         return item;
      }))
   };

   return(
      <div className="todo">
         <li className={`todo-item ${todo.completed ? "completed" : ''}`}>{text}</li>
         <button className="complete-btn" onClick={completeHandler}>
            <i className="far fa-laugh"></i>
         </button>
         <button className="delete-btn" onClick={deleteHandler}>
            <i className="far fa-dizzy"></i>
         </button>
      </div>
   );
};

export default Todo;