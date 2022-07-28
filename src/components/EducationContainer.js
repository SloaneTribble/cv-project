import React, { Component } from "react";

import { SchoolOverview } from "./SchoolOverview";

// Users should be able to add, edit and remove schools individually

class EducationContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      addMode: false,
      schools: [
        { name: "School One", major: "Major", gradYear: "10/10/1010" },
        { name: "School Two", major: "Majeur", gradYear: "11/11/1910" },
      ],
      currentSchool: {
        name: "Stool School",
        major: "Stool Legs",
        gradYear: "01/01/1990",
      },
    };

    this.addModeToggle = this.addModeToggle.bind(this);
  }

  addModeToggle() {
    this.setState((prevState) => ({
      addMode: !prevState.addMode,
    }));
    console.log(this.state.addMode);
  }

  render() {
    const currentMode = this.state.addMode;

    let addText;
    if (currentMode) {
      addText = "Submit New School";
    } else {
      addText = "Edit";
    }

    return (
      <div>
        <span>Education</span>
        <SchoolOverview schools={this.state.schools} />
        <button className="new-school" onClick={this.addModeToggle}>
          {addText}
        </button>
      </div>
    );
  }
}

export { EducationContainer };
