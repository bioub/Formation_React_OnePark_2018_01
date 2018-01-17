import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { counters } from './reducers/counter';
import { contact } from './reducers/contact';

export const configureStore = () => {
  return createStore(combineReducers({
    counters,
    contact,
  }), composeWithDevTools());
};