import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class ButtonCounter extends Component {

  constructor({initialCount = 0}) {
    super();
    this.state = {
      count: initialCount,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {
    return <button onClick={this.handleClick}>{this.state.count}</button>;
  }
}

ButtonCounter.propTypes = {
  initialCount: PropTypes.number,
};

ButtonCounter.defaultProps = {
  initialCount: 0,
};