import { render } from "@testing-library/react";
import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="header">{this.props.title}</div>;
  }
}

export { Header };
