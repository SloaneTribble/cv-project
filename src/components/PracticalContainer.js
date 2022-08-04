import React, { useState } from "react";

import uniqid from "uniqid";

import { AddJob } from "./AddJob";

import { JobOverview } from "./JobOverview";

function PracticalContainer() {
  const [state, setState] = useState({
    addMode: false,
    jobs: [
      {
        editMode: false,
        id: uniqid(),
        company: "The Zooniverse",
        title: "Zookeeper",
        mainTasks: "Clean, Maintain, Operate",
        startDate: "1990-01-01",
        endDate: "1991-01-10",
      },
      {
        editMode: false,
        id: uniqid(),
        company: "Kraftwork Orange",
        title: "Leading Man",
        mainTasks: "Write, Rewrite, Expedite",
        startDate: "1991-02-02",
        endDate: "1992-04-12",
      },
    ],
    currentJob: {
      editMode: false,
      id: uniqid(),
      company: "",
      title: "",
      mainTasks: [],
      startDate: "",
      endDate: "",
    },
  });

  const addModeToggle = function () {
    setState((prevState) => ({
      ...prevState,
      addMode: !prevState.addMode,
    }));
    console.log(state.addMode);
  };

  const handleChange = (e) => {
    let currentState = { ...state };
    let job = currentState.currentJob;
    let currentProperty = e.target.id;
    job[currentProperty] = e.target.value;
    setState({ ...state, currentJob: job });
  };

  const editJob = (e) => {
    let currentJobs = [...state.jobs];
    let index = currentJobs.findIndex((obj) => obj.id === e.target.className);
    currentJobs[index].editMode = true;
    setState({ ...state, jobs: currentJobs });
  };

  const submitEdit = (e) => {
    e.preventDefault();
    console.log(e.target);
    let newCompany = e.target.company.value;
    let newTitle = e.target.title.value;
    let newMainTasks = e.target.mainTasks.value;
    let newStartDate = e.target.startDate.value;
    let newEndDate = e.target.endDate.value;
    let workingID = e.target.className;

    let currentJobs = [...state.jobs];
    let index = currentJobs.findIndex((obj) => obj.id === workingID);
    let activeJob = currentJobs[index];

    activeJob.company = newCompany;
    activeJob.title = newTitle;
    activeJob.mainTasks = newMainTasks;
    activeJob.startDate = newStartDate;
    activeJob.endDate = newEndDate;
    activeJob.editMode = false;

    setState({ ...state, jobs: currentJobs });
  };

  const deleteJob = (e) => {
    console.log(e.target.className);
    const jobID = e.target.className;

    let jobs = state.jobs;

    let updatedJobs = jobs.filter((school) => {
      return school.id !== jobID;
    });

    setState({
      ...state,
      jobs: updatedJobs,
    });
  };

  const submitJob = (e) => {
    e.preventDefault();
    console.log(e.target);
    console.log(state.currentJob);
    setState({
      jobs: state.jobs.concat(state.currentJob),
      addMode: false,
      currentJob: {
        editMode: false,
        id: uniqid(),
        company: "",
        title: "",
        startDate: "",
        endDate: "",
      },
    });
  };

  const currentMode = state.addMode;

  let addText;
  if (currentMode) {
    addText = "Close";
  } else {
    addText = "Add Job";
  }
  return (
    <div className="practical">
      <span className="practical-title">Practical Experience</span>
      <JobOverview
        jobs={state.jobs}
        editJob={editJob}
        deleteJob={deleteJob}
        submitEdit={submitEdit}
      />
      <br></br>
      <button className="new-job" onClick={addModeToggle}>
        {addText}
      </button>
      <AddJob
        addMode={state.addMode}
        currentJob={state.currentJob}
        handleChange={handleChange}
        submitJob={submitJob}
      />
    </div>
  );
}

export { PracticalContainer };
