import React from 'react';
import { TodoFormContainer } from './TodoFormContainer';
import { shallow } from 'enzyme';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { todos, newTodo } from '../reducers/todos';

describe('TodoFormContainner', () => {
  let fakeStore;
  // let mockReducer = jest.fn();

  beforeEach(() => {
    fakeStore = createStore(combineReducers({
      todos,
      newTodo
    }));
  });

  test('it renders without crashing', () => {
    shallow(<Provider store={fakeStore}><TodoFormContainer /></Provider>);
    // expect(mockReducer).toHaveBeenCalled();
    expect(fakeStore.getState()).toEqual({
      todos: [],
      newTodo: '',
    })
  });
});
