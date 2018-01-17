import { TodoList } from '../components/TodoList'
import { connect } from 'react-redux';
import { todosSelector } from '../selectors/todos';

const mapStateToProps = (state) => ({
  todos: todosSelector(state),
});

export const TodoListContainer = connect(mapStateToProps)(TodoList);
