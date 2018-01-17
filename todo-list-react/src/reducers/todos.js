import { ADD_TODO, CHANGE_NEW_TODO } from '../constants/todos';

export const todos = (state = [], {type, value}) => {
  switch (type) {
    case ADD_TODO:
      return [
        ...state,
        value,
      ];
  }

  return state;
};


export const newTodo = (state = '', {type, value}) => {
  switch (type) {
    case CHANGE_NEW_TODO:
      return value;
  }
  return state;
};
