import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { counter } from './reducers/counter';

export const configureStore = () => {
  return createStore(counter, composeWithDevTools());
};