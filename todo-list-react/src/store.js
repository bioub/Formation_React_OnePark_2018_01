import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import { todos, newTodo } from './reducers/todos';

export const configureStore = () => {
  return createStore(
    combineReducers({
      todos,
      newTodo,
    }),
    composeWithDevTools(),
  );
};
