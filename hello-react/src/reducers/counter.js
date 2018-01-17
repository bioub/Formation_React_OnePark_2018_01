import { COUNTER_INCREMENT } from '../constants';

export const counter = (state = { count: 0 }, action) => {
  switch (action.type) {
    case COUNTER_INCREMENT:
      return {
        count: state.count + 1,
      };
  }

  return state;
};

export const counters = (state = [{count: 0}, {count: 0}, {count: 0}], action) => {
  switch (action.type) {
    case COUNTER_INCREMENT:
      return [
        ...state.slice(0, action.index),
        counter(state[action.index], action),
        ...state.slice(action.index + 1)
      ];
  }

  return state;
};