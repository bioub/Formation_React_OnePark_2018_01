import React from 'react';
import { TodoForm } from './TodoForm';
import { shallow } from 'enzyme';

test('it renders without crashing', () => {
  shallow(<TodoForm />);
});

test('it call props handleSubmit', () => {
  const mock = jest.fn();

  const wrapper = shallow(<TodoForm handleSubmit={mock} newTodo="Ma todo"/>);
  wrapper.simulate('submit');

  expect(mock).toHaveBeenCalledTimes(1);
  expect(mock).toHaveBeenCalledWith(undefined, 'Ma todo');
});
