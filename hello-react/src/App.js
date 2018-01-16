import React, { Component } from 'react';
import './App.css';
import { Hello } from './Hello';
import { Horloge } from './Horloge';
import { ButtonCounter } from './ButtonCounter';
import { ContactForm } from './ContactForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      contact: {
        firstName: 'John',
        lastName: 'Doe',
      },
    };
    this.contactAdded = this.contactAdded.bind(this);
  }

  contactAdded(contact) {
    this.setState({
      contact,
    });
  }

  render() {
    return (
      <div className="App" >
        <Hello name={this.state.contact.firstName} />
        <hr />
        <Horloge/>
        <hr />
        <ButtonCounter/>
        <hr />
        <ContactForm onAdded={this.contactAdded} />
      </div>
    );
  }
}

export default App;
