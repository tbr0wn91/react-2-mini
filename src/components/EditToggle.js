import React, { Component } from 'react';

export default class EditToggle extends Component {
  render() {
    return (
      <select onChange={(event) => this.props.update(event.target.value)} className="dropDownContainer ml0">
        <option value="true"> Allow Edit </option>
        <option value="false"> Disable Edit </option>
      </select>
    );
  }
}
