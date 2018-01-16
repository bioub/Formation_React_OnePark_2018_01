import React, { Component } from 'react';

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

export const desactivable = (InnerComponent) => {
  class Desactivable extends Component {
    constructor() {
      super();
      this.state = {
        show: true,
      };
      this.toggleShow = this.toggleShow.bind(this);
    }

    toggleShow() {
      this.setState({
        show: !this.state.show,
      });
    }

    render() {
      const { show, ...otherProps } = this.props;

      return (
        <div>
          {this.state.show && <InnerComponent {...otherProps} />}
          <button onClick={this.toggleShow}>{this.state.show ? 'Hide' : 'Show'}</button>
        </div>
      );
    }
  }

  Desactivable.displayName = `Desactivable(${getDisplayName(InnerComponent)})`;

  return Desactivable;
};