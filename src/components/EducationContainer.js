import React, { Component } from "react";

import { SchoolOverview } from "./SchoolOverview";

import { AddSchool } from "./AddSchool";

import uniqid from "uniqid";

// Next: allow user to edit each school entry

class EducationContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      addMode: false,
      schools: [
        {
          editMode: false,
          id: uniqid(),
          name: "School One",
          major: "Major",
          gradYear: "1964-01-01",
        },
        {
          editMode: false,
          id: uniqid(),
          name: "School Two",
          major: "Majeur",
          gradYear: "1983-12-25",
        },
      ],
      currentSchool: {
        editMode: false,
        id: uniqid(),
        name: "",
        major: "",
        gradYear: "",
      },
    };

    this.addModeToggle = this.addModeToggle.bind(this);

    this.handleChange = this.handleChange.bind(this);

    this.submitSchool = this.submitSchool.bind(this);

    this.editSchool = this.editSchool.bind(this);

    this.submitEdit = this.submitEdit.bind(this);

    this.deleteSchool = this.deleteSchool.bind(this);
  }

  addModeToggle() {
    this.setState((prevState) => ({
      addMode: !prevState.addMode,
    }));
    console.log(this.state.addMode);
  }

  handleChange = (e) => {
    console.log(e.target);
    this.setState((prevState) => ({
      currentSchool: {
        ...prevState.currentSchool,
        [e.target.id]: e.target.value,
      },
    }));
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

  editSchool = (e) => {
    let currentSchools = [...this.state.schools];
    let index = currentSchools.findIndex(
      (obj) => obj.id === e.target.className
    );
    currentSchools[index].editMode = true;
    this.setState({ schools: currentSchools });
  };

  submitEdit = (e) => {
    e.preventDefault();
    console.log(e.target);
    let newName = e.target.name.value;
    let newMajor = e.target.major.value;
    let newGradYear = e.target.gradYear.value;
    let workingID = e.target.className;

    let currentSchools = [...this.state.schools];
    let index = currentSchools.findIndex((obj) => obj.id === workingID);
    let activeSchool = currentSchools[index];

    activeSchool.name = newName;
    activeSchool.major = newMajor;
    activeSchool.gradYear = newGradYear;
    activeSchool.editMode = false;

    this.setState({ schools: currentSchools });
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
          editSchool={this.editSchool}
          submitEdit={this.submitEdit}
          deleteSchool={this.deleteSchool}
        />
        <button className="new-school" onClick={this.addModeToggle}>
          {addText}
        </button>
        <AddSchool
          addMode={this.state.addMode}
          handleChange={this.handleChange}
          currentSchool={this.state.currentSchool}
          submitSchool={this.submitSchool}
        />
      </div>
    );
  }
}

export { EducationContainer };
