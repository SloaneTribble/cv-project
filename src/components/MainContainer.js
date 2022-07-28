import React, { Component } from "react";

import { Header } from "./Header";

class MainContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="main-container">
        <Header title="CV Application" />
      </div>
    );
  }
}

export { MainContainer };
