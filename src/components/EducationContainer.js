import React, { useState } from "react";

import { SchoolOverview } from "./SchoolOverview";

import { AddSchool } from "./AddSchool";

import uniqid from "uniqid";

function EducationContainer() {
  const [state, setState] = useState({
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
  });

  const addModeToggle = function () {
    setState((prevState) => ({
      ...prevState,
      addMode: state.addMode === true ? false : true,
    }));
  };

  const handleChange = (e) => {
    let currentState = { ...state };
    let school = currentState.currentSchool;
    console.log(school);
    let currentProperty = e.target.id;
    school[currentProperty] = e.target.value;
    setState({
      ...state,
      currentSchool: school,
    });
  };

  const submitSchool = (e) => {
    e.preventDefault();
    console.log(e.target);
    console.log(state.currentSchool);
    setState({
      schools: state.schools.concat(state.currentSchool),
      addMode: false,
      currentSchool: {
        id: uniqid(),
        name: "",
        major: "",
        gradYear: "",
      },
    });
  };

  const editSchool = (e) => {
    let currentSchools = [...state.schools];
    let index = currentSchools.findIndex(
      (obj) => obj.id === e.target.className
    );
    currentSchools[index].editMode = true;
    setState({ schools: currentSchools });
  };

  const submitEdit = (e) => {
    e.preventDefault();
    console.log(e.target);
    let newName = e.target.name.value;
    let newMajor = e.target.major.value;
    let newGradYear = e.target.gradYear.value;
    let workingID = e.target.className;

    let currentSchools = [...state.schools];
    let index = currentSchools.findIndex((obj) => obj.id === workingID);
    let activeSchool = currentSchools[index];

    activeSchool.name = newName;
    activeSchool.major = newMajor;
    activeSchool.gradYear = newGradYear;
    activeSchool.editMode = false;

    setState({ schools: currentSchools });
  };

  const deleteSchool = (e) => {
    console.log(e.target.className);
    const schoolID = e.target.className;

    let schools = state.schools;

    let updatedSchools = schools.filter((school) => {
      return school.id !== schoolID;
    });

    setState({
      schools: updatedSchools,
    });
  };
  const currentMode = state.addMode;

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
        schools={state.schools}
        editSchool={editSchool}
        submitEdit={submitEdit}
        deleteSchool={deleteSchool}
      />
      <br></br>
      <button className="new-school" onClick={addModeToggle}>
        {addText}
      </button>
      <AddSchool
        addMode={state.addMode}
        handleChange={handleChange}
        currentSchool={state.currentSchool}
        submitSchool={submitSchool}
      />
    </div>
  );
}

export { EducationContainer };
