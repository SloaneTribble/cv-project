import React, { Component } from "react";

class JobOverview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const jobs = this.props.jobs;

    let overview;

    overview = jobs.map((job) =>
      job.editMode === false ? (
        <ul key={job.id}>
          <li>Company: {job.company}</li>
          <li>Title: {job.title}</li>
          <li>Main Tasks: {job.mainTasks}</li>
          <li>Start Date: {job.startDate}</li>
          <li>End Date: {job.endDate}</li>
          <br></br>
          <button className={job.id} onClick={this.props.editJob}>
            Edit
          </button>
          <button className={job.id} onClick={this.props.deleteJob}>
            Delete
          </button>
        </ul>
      ) : (
        <form key={job.id} className={job.id} onSubmit={this.props.submitEdit}>
          <label htmlFor="company">Company: </label>
          <input type="text" id="company" defaultValue={job.company}></input>

          <label htmlFor="title">Title: </label>
          <input type="text" id="major" defaultValue={job.title}></input>

          <label htmlFor="main-tasks">Main Tasks: </label>
          <input
            type="textarea"
            id="main-tasks"
            defaultValue={job.mainTasks}
          ></input>

          <label htmlFor="startDate">Start Date: </label>
          <input
            type="date"
            id="startDate"
            defaultValue={job.startDate}
          ></input>

          <label htmlFor="endDate">End Date: </label>
          <input type="date" id="endDate" defaultValue={job.endDate}></input>
          <button type="submit">Submit</button>
        </form>
      )
    );

    return <div className="job-overview">{overview}</div>;
  }
}

export { JobOverview };