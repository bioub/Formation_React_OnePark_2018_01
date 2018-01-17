
/*

export const newTodoSelector = (state) => state.newTodo;
export const todosSelector = (state) => state.todos;

 */

import { newTodoSelector, todosSelector } from './todos';

test('newTodoSelector should select correct part of the state', () => {
  const state = {
    newTodo: 'Acheter du pain',
    todos: ['Parler de react-router'],
  };

  expect(newTodoSelector(state)).toBe('Acheter du pain');
});

test('todosSelector should select correct part of the state', () => {
  const state = {
    newTodo: 'Acheter du pain',
    todos: ['Parler de react-router'],
  };

  expect(todosSelector(state)).toBe(state.todos);
});
