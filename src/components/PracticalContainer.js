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

    this.submitEdit = this.submitEdit.bind(this);

    this.deleteJob = this.deleteJob.bind(this);

    this.submitJob = this.submitJob.bind(this);
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

  submitEdit = (e) => {
    e.preventDefault();
    console.log(e.target);
    let newCompany = e.target.company.value;
    let newTitle = e.target.title.value;
    let newMainTasks = e.target.mainTasks.value;
    let newStartDate = e.target.startDate.value;
    let newEndDate = e.target.endDate.value;
    let workingID = e.target.className;

    let currentJobs = [...this.state.jobs];
    let index = currentJobs.findIndex((obj) => obj.id === workingID);
    let activeJob = currentJobs[index];

    activeJob.company = newCompany;
    activeJob.title = newTitle;
    activeJob.mainTasks = newMainTasks;
    activeJob.startDate = newStartDate;
    activeJob.endDate = newEndDate;
    activeJob.editMode = false;

    this.setState({ jobss: currentJobs });
  };

  deleteJob = (e) => {
    console.log(e.target.className);
    const jobID = e.target.className;

    let jobs = this.state.jobs;

    let updatedJobs = jobs.filter((school) => {
      return school.id !== jobID;
    });

    this.setState({
      jobs: updatedJobs,
    });
  };

  submitJob = (e) => {
    e.preventDefault();
    console.log(e.target);
    console.log(this.state.currentJob);
    this.setState({
      jobs: this.state.jobs.concat(this.state.currentJob),
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
          submitJob={this.submitJob}
        />
      </div>
    );
  }
}

export { PracticalContainer };
