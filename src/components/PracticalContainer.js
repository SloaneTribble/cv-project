import React, { Component } from "react";

import uniqid from "uniqid";

import { AddJob } from "./AddJob";

import { JobOverview } from "./JobOverview";

class PracticalContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      addMode: false,
      jobs: [
        {
          editMode: false,
          id: uniqid(),
          company: "The Zooniverse",
          title: "Zookeeper",
          mainTasks: "Clean, Maintain, Operate",
          startDate: "01/01/1990",
          endDate: "01/02/1990",
        },
        {
          editMode: false,
          id: uniqid(),
          company: "Kraftwork Orange",
          title: "Leading Man",
          mainTasks: "Write, Rewrite, Expedite",
          startDate: "02/01/1991",
          endDate: "02/02/1992",
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
    };

    this.addModeToggle = this.addModeToggle.bind(this);

    this.handleCompanyChange = this.handleCompanyChange.bind(this);

    this.handleTitleChange = this.handleTitleChange.bind(this);

    this.handleMainTasksChange = this.handleMainTasksChange.bind(this);

    this.handleStartDateChange = this.handleStartDateChange.bind(this);

    this.handleEndDateChange = this.handleEndDateChange.bind(this);

    this.editJob = this.editJob.bind(this);
  }

  addModeToggle() {
    this.setState((prevState) => ({
      addMode: !prevState.addMode,
    }));
    console.log(this.state.addMode);
  }

  handleCompanyChange = (e) => {
    this.setState((prevState) => ({
      currentJob: {
        ...prevState.currentJob,
        company: e.target.value,
      },
    }));
  };

  handleTitleChange = (e) => {
    this.setState((prevState) => ({
      currentJob: {
        ...prevState.currentJob,
        title: e.target.value,
      },
    }));
  };

  handleMainTasksChange = (e) => {
    this.setState((prevState) => ({
      currentJob: {
        ...prevState.currentJob,
        mainTasks: e.target.value,
      },
    }));
  };

  handleStartDateChange = (e) => {
    this.setState((prevState) => ({
      currentJob: {
        ...prevState.currentJob,
        startDate: e.target.value,
      },
    }));
  };

  handleEndDateChange = (e) => {
    this.setState((prevState) => ({
      currentJob: {
        ...prevState.currentJob,
        endDate: e.target.value,
      },
    }));
  };

  editJob = (e) => {
    let currentJobs = [...this.state.jobs];
    let index = currentJobs.findIndex((obj) => obj.id === e.target.className);
    currentJobs[index].editMode = true;
    this.setState({ schools: currentJobs });
  };

  render() {
    const currentMode = this.state.addMode;

    let addText;
    if (currentMode) {
      addText = "Close";
    } else {
      addText = "Add Job";
    }
    return (
      <div className="practical">
        <span>Practical Experience</span>
        <JobOverview
          jobs={this.state.jobs}
          editJob={this.editJob}
          deleteJob={this.deleteJob}
          submitEdit={this.submitEdit}
        />
        <button className="new-job" onClick={this.addModeToggle}>
          {addText}
        </button>
        <AddJob
          addMode={this.state.addMode}
          currentJob={this.state.currentJob}
          companyChange={this.handleCompanyChange}
          titleChange={this.handleTitleChange}
          mainTasksChange={this.handleMainTasksChange}
          startDateChange={this.handleStartDateChange}
          endDateChange={this.handleEndDateChange}
        />
      </div>
    );
  }
}

export { PracticalContainer };
