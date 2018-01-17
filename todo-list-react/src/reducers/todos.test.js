import { newTodo, todos } from './todos';

describe('newTodo reducer', () => {
  test('initialize with empty string', () => {
    const newState = newTodo(undefined, {
      type: '@@INIT',
    });

    expect(newState).toEqual('');
  });

  test('action CHANGE_NEW_TODO', () => {
    const initialState = 'Ache';
    const newState = newTodo(initialState, {
      type: 'CHANGE_NEW_TODO',
      value: 'Achet'
    });

    expect(initialState).not.toBe(newState);
    expect(newState).toEqual('Achet');
  });

  test('action UNKNOWN', () => {
    const initialState = 'Ache';
    const newState = newTodo(initialState, {
      type: 'UNKNOWN',
      value: 'Achet'
    });

    expect(initialState).toBe(newState);
  });

});



test('todos reducer', () => {
  const initialState = 'Ache';
  const newState = newTodo(initialState, {
    type: 'CHANGE_NEW_TODO',
    value: 'Achet'
  });

  expect(initialState).not.toBe(newState);
  expect(newState).toEqual('Achet');
});

