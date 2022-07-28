import React, { Component } from "react";

import { HeaderContainer } from "./HeaderContainer";

class MainContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="main-container">
        <HeaderContainer />
      </div>
    );
  }
}

export { MainContainer };
