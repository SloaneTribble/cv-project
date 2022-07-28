import "./App.css";

import React, { Component } from "react";

import { MainContainer } from "./components/MainContainer";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <MainContainer />
      </div>
    );
  }
}

export default App;
