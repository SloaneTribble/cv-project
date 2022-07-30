import React, { Component } from "react";

import { HeaderContainer } from "./HeaderContainer";

import { GeneralContainer } from "./GeneralContainer";

import { EducationContainer } from "./EducationContainer";

import { PracticalContainer } from "./PracticalContainer";

class MainContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="main-container">
        <HeaderContainer />
        <GeneralContainer />
        <EducationContainer />
        <PracticalContainer />
      </div>
    );
  }
}

export { MainContainer };
