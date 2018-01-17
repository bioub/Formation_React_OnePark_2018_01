import { ADD_TODO, CHANGE_NEW_TODO } from '../constants/todos';

export const addTodo = (value = '') => ({
  type: ADD_TODO,
  value,
});

export const changeNewTodo = (value) => ({
  type: CHANGE_NEW_TODO,
  value,
});
