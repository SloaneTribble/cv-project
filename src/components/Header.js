import { render } from "@testing-library/react";
import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const editMode = this.props.editMode;

    let nameField;

    let buttonText;

    if (editMode) {
      buttonText = "submit";
      nameField = (
        <form className="name-form">
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            value={this.props.name}
            onChange={this.props.handleChange}
          ></input>
        </form>
      );
    } else {
      buttonText = "edit";
      nameField = <div className="header-name">{this.props.name}</div>;
    }
    return (
      <div className="header">
        <div className="header-title">{this.props.title}</div>
        {nameField}
        <button className="name-edit" onClick={this.props.handler}>
          {buttonText}
        </button>
      </div>
    );
  }
}

export { Header };
