import { COUNTER_INCREMENT } from '../constants';

export const counterIncrement = (index) => ({
  type: COUNTER_INCREMENT,
  index
});
