import React, { Component } from "react";

import { HeaderContainer } from "./HeaderContainer";

import { GeneralContainer } from "./GeneralContainer";

class MainContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="main-container">
        <HeaderContainer />
        <GeneralContainer />
      </div>
    );
  }
}

export { MainContainer };
