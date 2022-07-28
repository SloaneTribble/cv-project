import { render } from "@testing-library/react";
import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="header">
        <div className="header-title">{this.props.title}</div>
        <div className="header-name">{this.props.name}</div>
        <button className="name-edit" onClick={this.props.handler}>
          Edit
        </button>
      </div>
    );
  }
}

export { Header };
