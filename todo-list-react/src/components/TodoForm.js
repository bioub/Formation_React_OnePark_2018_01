import React from 'react';

export const TodoForm = ({newTodo, handleSubmit, handleInput}) => {
  return (
    <form onSubmit={(event) => handleSubmit(event, newTodo)}>
      <input onInput={handleInput} value={newTodo}/><button>+</button>
    </form>
  );
};
