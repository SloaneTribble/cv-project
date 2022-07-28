import React, { Component } from "react";

import { Header } from "./Header";

class MainContainer extends Component {
  constructor(props) {
    super(props);

    this.headerEdit = this.headerEdit.bind(this);

    this.nameChange = this.nameChange.bind(this);

    this.state = {
      name: "Johnny Two Hats",
      header: {
        editMode: false,
      },
    };
  }

  headerEdit() {
    let header = this.state.header;
    header.editMode = header.editMode ? false : true;
    this.setState(() => ({
      header,
    }));
  }

  nameChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  render() {
    return (
      <div className="main-container">
        <Header
          title="CV Application"
          name={this.state.name}
          handler={this.headerEdit}
          handleChange={this.nameChange}
          editMode={this.state.header.editMode}
        />
      </div>
    );
  }
}

export { MainContainer };
