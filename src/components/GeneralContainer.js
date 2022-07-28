import React, { Component } from "react";

// Contains email, phone and brand website

class GeneralContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editMode: false,
      email: "nun@sandwich.uk",
      phone: "555-416-3838",
      website: "https://www.pbjmanagement.co.uk/artists/mighty-boosh",
    };

    this.generalEdit = this.generalEdit.bind(this);
  }

  generalEdit() {
    this.setState((prevState) => ({
      editMode: !prevState.editMode,
    }));
  }

  render() {
    const editMode = this.state.editMode;

    let buttonText;

    if (editMode) {
      buttonText = "Submit";
    } else {
      buttonText = "Edit";
    }

    return (
      <div className="general">
        <button className="general-edit" onClick={this.generalEdit}>
          {buttonText}
        </button>
      </div>
    );
  }
}

export { GeneralContainer };
