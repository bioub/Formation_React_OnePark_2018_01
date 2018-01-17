import { TodoForm } from '../components/TodoForm'
import { connect } from 'react-redux';
import { newTodoSelector } from '../selectors/todos';
import { addTodo, changeNewTodo } from '../actions/todos';

const mapStateToProps = (state) => ({
  newTodo: newTodoSelector(state),
});

const mapDispatchToProps = (dispatch, props, ...others) => ({
  handleInput: (event) => { dispatch(changeNewTodo(event.target.value)) },
  handleSubmit: (event, newTodo) => {
    event.preventDefault();
    dispatch(addTodo(newTodo));
  },
});

export const TodoFormContainer = connect(mapStateToProps, mapDispatchToProps)(TodoForm);
