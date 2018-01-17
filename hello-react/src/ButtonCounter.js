import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { desactivable } from './desactivable';

export class ButtonCounter extends Component {

  state = {
    count: this.props.count,
  };

  handleClick = () => {
    // => ne créé pas this, arguments, super, new.target
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return <button onClick={this.handleClick}>{this.state.count}</button>;
  }
}

ButtonCounter.propTypes = {
  count: PropTypes.number,
};

ButtonCounter.defaultProps = {
  count: 0,
};


export const ButtonCounterDesactivable = desactivable(ButtonCounter);