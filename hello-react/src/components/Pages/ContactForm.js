import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class ContactForm extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.onAdded(this.state);
  }
  handleInput(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit} >
        <p>First name : <input onInput={this.handleInput} value={this.state.firstName} name="firstName"/></p>
        <p>Last name : <input onInput={this.handleInput} value={this.state.lastName} name="lastName"/></p>
        <button>Envoyer</button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  onAdded: PropTypes.func,
};
