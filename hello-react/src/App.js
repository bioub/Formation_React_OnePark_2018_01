import React, { Component } from 'react';
import './App.css';
import { Hello } from './Hello';
import { Horloge, HorlogeDesactivable } from './Horloge';
import { ButtonCounter, ButtonCounterDesactivable } from './ButtonCounter';
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
        <Horloge format="HH:mm"/>
        <hr />
        <ButtonCounter/>
        <hr />
        <ContactForm onAdded={this.contactAdded} />
        <hr />
        <HorlogeDesactivable format="HH:mm" />
        <hr />
        <ButtonCounterDesactivable />
      </div>
    );
  }
}

export default App;
