import React, { Component } from 'react';
import './App.css';
import { Hello } from '../UI/Hello';
import { Horloge, HorlogeDesactivable } from '../UI/Horloge';
import { ButtonCounter, ButtonCounterDesactivable } from '../UI/ButtonCounter';
import { ContactForm } from '../Pages/ContactForm';
import { ListButtonCounter } from '../UI/ListButtonCounter'

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
      <div className="App">
        <Hello name={this.state.contact.firstName} />
        <hr />
        <Horloge/>
        <hr />
        <ButtonCounter/>
        <hr />
        <ContactForm onAdded={this.contactAdded} />
        <hr />
        <HorlogeDesactivable format="HH:mm" />
        <hr />
        <ListButtonCounter />
      </div>
    );
  }
}

export default App;
