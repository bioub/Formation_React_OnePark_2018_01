import React from 'react';
import { TodoFormContainer } from '../containers/TodoFormContainer';
import { TodoListContainer } from '../containers/TodoListContainer';
import './App.css';

export const App = () => {
  return (
    <div className="App">
      <TodoFormContainer msg="Coucou" />
      <TodoListContainer />
    </div>
  );
};

export default App;
