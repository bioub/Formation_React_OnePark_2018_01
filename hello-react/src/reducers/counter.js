import { COUNTER_INCREMENT } from '../constants';

export const counter = (state = { count: 0 }, action) => {
  if (action.type === COUNTER_INCREMENT) {
    return {
      count: state.count + 1,
    };
  }

  return state;
};