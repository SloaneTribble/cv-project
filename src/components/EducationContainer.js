import React, { Component } from "react";

import { SchoolOverview } from "./SchoolOverview";

import { AddSchool } from "./AddSchool";

import uniqid from "uniqid";

// Users should be able to add, edit and remove schools individually

class EducationContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      addMode: false,
      schools: [
        {
          id: uniqid(),
          name: "School One",
          major: "Major",
          gradYear: "10/10/1010",
        },
        {
          id: uniqid(),
          name: "School Two",
          major: "Majeur",
          gradYear: "11/11/1910",
        },
      ],
      currentSchool: {
        id: uniqid(),
        name: "",
        major: "",
        gradYear: "",
      },
    };

    this.addModeToggle = this.addModeToggle.bind(this);

    this.handleNameChange = this.handleNameChange.bind(this);

    this.handleMajorChange = this.handleMajorChange.bind(this);

    this.handleGradYearChange = this.handleGradYearChange.bind(this);

    this.submitSchool = this.submitSchool.bind(this);

    this.deleteSchool = this.deleteSchool.bind(this);
  }

  addModeToggle() {
    this.setState((prevState) => ({
      addMode: !prevState.addMode,
    }));
    console.log(this.state.addMode);
  }

  handleNameChange = (e) => {
    this.setState({
      currentSchool: {
        id: this.state.currentSchool.id,
        name: e.target.value,
        major: this.state.currentSchool.major,
        gradYear: this.state.currentSchool.gradYear,
      },
    });
  };

  handleMajorChange = (e) => {
    this.setState({
      currentSchool: {
        id: this.state.currentSchool.id,
        name: this.state.currentSchool.name,
        major: e.target.value,
        gradYear: this.state.currentSchool.gradYear,
      },
    });
  };

  handleGradYearChange = (e) => {
    this.setState({
      currentSchool: {
        id: this.state.currentSchool.id,
        name: this.state.currentSchool.name,
        major: this.state.currentSchool.major,
        gradYear: e.target.value,
      },
    });
  };

  submitSchool = (e) => {
    e.preventDefault();
    console.log(e.target);
    console.log(this.state.currentSchool);
    this.setState({
      schools: this.state.schools.concat(this.state.currentSchool),
      addMode: false,
      currentSchool: {
        id: uniqid(),
        name: "",
        major: "",
        gradYear: "",
      },
    });
  };

  deleteSchool = (e) => {
    console.log(e.target.className);
    const schoolID = e.target.className;

    let schools = this.state.schools;

    let updatedSchools = schools.filter((school) => {
      return school.id !== schoolID;
    });

    this.setState({
      schools: updatedSchools,
    });
  };

  render() {
    const currentMode = this.state.addMode;

    let addText;
    if (currentMode) {
      addText = "Close";
    } else {
      addText = "Add School";
    }

    return (
      <div className="education">
        <span>Education</span>
        <SchoolOverview
          schools={this.state.schools}
          deleteSchool={this.deleteSchool}
        />
        <button className="new-school" onClick={this.addModeToggle}>
          {addText}
        </button>
        <AddSchool
          currentSchool={this.state.currentSchool}
          addMode={this.state.addMode}
          nameChange={this.handleNameChange}
          majorChange={this.handleMajorChange}
          gradYearChange={this.handleGradYearChange}
          submitSchool={this.submitSchool}
        />
      </div>
    );
  }
}

export { EducationContainer };
