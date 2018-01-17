import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { desactivable } from '../../hocs/desactivable';
import { counterIncrement } from '../../actions/counter';

export class ButtonCounter extends Component {

  handleClick = () => {
    // => ne créé pas this, arguments, super, new.target
    this.props.dispatch(counterIncrement());
  };

  render() {
    return <button onClick={this.handleClick}>{this.props.count}</button>;
  }
}

ButtonCounter.propTypes = {
  count: PropTypes.number,
};

ButtonCounter.defaultProps = {
  count: 0,
};

const mapStateToProps = (state) => ({
  count: state.count,
});

export const ButtonCounterDesactivable = connect(mapStateToProps)(desactivable(ButtonCounter));