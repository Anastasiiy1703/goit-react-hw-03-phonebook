import React, { Component } from 'react';
import ContactListItem from '../ContactListItem/ContactListItem';

class ContactList extends Component {
  render() {
    const { contacts, onDeleteContact } = this.props;

    return (
      <ul>
        {contacts.map(contact => (
          <ContactListItem
            key={contact.id}
            id={contact.id}
            name={contact.name}
            number={contact.number}
            onDeleteContact={onDeleteContact}
          />
        ))}
      </ul>
    );
  }
}

export default ContactList;
