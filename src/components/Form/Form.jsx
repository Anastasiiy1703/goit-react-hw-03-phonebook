import React, { Component } from 'react';
import FormCss from '../Form/FormCss.module.css'
class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, number } = this.state;
    this.props.onSubmit(name, number);
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
        <form className={FormCss.form} onSubmit={this.handleSubmit}>
            <ul className={FormCss.list}>
                <li className={FormCss.item}>
        <label className={FormCss.name}>Name</label>
            <input className={FormCss.formInput}
          type="text"
          name="name"
          placeholder="Enter name"
          value={name}
          onChange={this.handleChange}
          required
                    />
                </li>
                <li className={FormCss.item}>
            <label className={FormCss.name}>Number</label>
                    <input
                        className={FormCss.formInput}
          type="tel"
          name="number"
          placeholder="Enter phone number"
          value={number}
          onChange={this.handleChange}
          required
                    />
                </li>
                <li>
                    <button type="submit">Add Contact</button>
                    </li>
                </ul>
      </form>
    );
  }
}

export default Form;
