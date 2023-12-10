import React, { Component } from 'react';
import FilterCss from '../Filter/FilterCss.module.css';
class Filter extends Component {
  render() {
    const { value, onChange } = this.props;

      return (
      <label className={FilterCss.label}>
        Find contacts by name:
        <input className={FilterCss.input} type="text" value={value} onChange={onChange} />
              </label>
    );
  }
}

export default Filter;
