import React, { Component } from 'react';


class App extends Component {
   state = {
      todos: [
         { id: 1, content: 'buy some milk' },
         { id: 2, content: 'play mario kart' }
      ]
   }

   render() {
      return (
         <div className="todo-app container">
            <h1 className="center blue-text">Todo's</h1>
         </div>
      );
   }
}

export default App;
