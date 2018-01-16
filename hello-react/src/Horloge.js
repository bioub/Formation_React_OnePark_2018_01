import React, { Component } from 'react';

export class Horloge extends Component {

  constructor() {
    super();
    this.state = {
      now: new Date(),
    };
    setInterval(() => {
      this.setState({
        now: new Date(),
      });
    }, 1000);
  }

  render() {
    return <div>{this.state.now.toLocaleTimeString()}</div>
  }
}
