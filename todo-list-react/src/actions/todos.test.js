import { addTodo } from './todos';

describe('addTodo action create', () => {

  it('should return ADD_TODO action empty', () => {
    const action = addTodo();
    // expect(action.type).toBe('ADD_TODO');
    // expect(action.value).toBe('');
    expect(action).toEqual({
      type: 'ADD_TODO',
      value: '',
    });
  });


  it('should return ADD_TODO action with param', () => {
    const action = addTodo('My Todo');
    expect(action).toEqual({
      type: 'ADD_TODO',
      value: 'My Todo',
    });
  });

});
