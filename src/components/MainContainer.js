import React, { Component } from "react";

import { Header } from "./Header";

class MainContainer extends Component {
  constructor(props) {
    super(props);

    this.headerEdit = this.headerEdit.bind(this);

    this.state = {
      name: "Johnny Two Hats",
      header: {
        editMode: false,
      },
    };
  }

  headerEdit() {
    console.log(`Before updating mode: ${this.state.header.editMode}`);
    let header = this.state.header;
    header.editMode = header.editMode ? false : true;
    this.setState(() => ({
      header,
    }));
    console.log(`After updating mode: ${this.state.header.editMode}`);
  }

  render() {
    return (
      <div className="main-container">
        <Header
          title="CV Application"
          name={this.state.name}
          handler={this.headerEdit}
        />
      </div>
    );
  }
}

export { MainContainer };
