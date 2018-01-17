import React, { Component } from 'react';
import { desactivable } from './desactivable';
import format from 'date-fns/format';
import PropTypes from 'prop-types'

export class Horloge extends Component {

  // ESNext : property (supporté par create-react-app)
  // (sinon installer le plugin babel)
  state = {
    now: new Date(),
  };

  componentDidMount() {
    this._intervalId = setInterval(() => {
      this.setState({
        now: new Date(),
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this._intervalId);
  }

  render() {
    return <div>{format(this.state.now, this.props.format)}</div>
  }
}

Horloge.propTypes = {
  format: PropTypes.string,
};

Horloge.defaultProps = {
  format: 'HH:mm:ss',
};

export const HorlogeDesactivable = desactivable(Horloge);