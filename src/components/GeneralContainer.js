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

    this.emailChange = this.emailChange.bind(this);

    this.phoneChange = this.phoneChange.bind(this);

    this.websiteChange = this.websiteChange.bind(this);
  }

  generalEdit() {
    this.setState((prevState) => ({
      editMode: !prevState.editMode,
    }));
  }

  emailChange = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  phoneChange = (e) => {
    this.setState({
      phone: e.target.value,
    });
  };

  websiteChange = (e) => {
    this.setState({
      website: e.target.value,
    });
  };

  render() {
    const editMode = this.state.editMode;

    let buttonText;

    let generalField;

    if (editMode) {
      buttonText = "Submit";
      generalField = (
        <form className="general-form">
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            value={this.state.email}
            onChange={this.emailChange}
          ></input>

          <label htmlFor="phone">Phone: </label>
          <input
            type="text"
            id="phone"
            value={this.state.phone}
            onChange={this.phoneChange}
          ></input>

          <label htmlFor="website">Website: </label>
          <input
            type="text"
            id="website"
            value={this.state.website}
            onChange={this.websiteChange}
          ></input>
        </form>
      );
    } else {
      buttonText = "Edit";
    }

    return (
      <div className="general">
        <button className="general-edit" onClick={this.generalEdit}>
          {buttonText}
        </button>
        {generalField}
      </div>
    );
  }
}

export { GeneralContainer };
