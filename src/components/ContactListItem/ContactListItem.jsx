import React, { Component } from 'react';
import ContactListItemCss from '../ContactListItem/ContactListItemCss.module.css';
class ContactListItem extends Component {
  handleClick = () => {
    const { id, onDeleteContact } = this.props;
    onDeleteContact(id);
  };

  render() {
    const { name, number } = this.props;

    return (
      <li className={ContactListItemCss.item}>
        <p>{name}: {number}</p>
        <button className={ContactListItemCss.button} onClick={this.handleClick}>Delete</button>
      </li>
    );
  }
}

export default ContactListItem;
