import React from 'react';
import PropTypes from 'prop-types';

import { TodoListItem } from './TodoListItem';

export const TodoList = ({todos = []}) => {

  const todosList = todos.map((todo, i) => <TodoListItem key={i} todo={todo} />);

  return (
    <div>
      {todosList}
    </div>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array,
};
