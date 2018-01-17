import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { desactivable } from '../../hocs/desactivable';
import { counterIncrement } from '../../actions/counter';
import { countSelector } from '../../selectors/counter';

export class ButtonCounter extends Component {

  handleClick = () => {
    // => ne créé pas this, arguments, super, new.target
    this.props.dispatch(counterIncrement(this.props.index));
  };

  render() {
    return <button onClick={this.handleClick}>{this.props.count}</button>;
  }
}

ButtonCounter.propTypes = {
  count: PropTypes.number,
  index: PropTypes.number,
};

ButtonCounter.defaultProps = {
  count: 0,
};

const mapStateToProps = (state, props) => ({
  count: countSelector(state, props.index),
});

export const ButtonCounterDesactivable = connect(mapStateToProps)(desactivable(ButtonCounter));