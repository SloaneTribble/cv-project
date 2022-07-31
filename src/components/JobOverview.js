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
        <ul key={job.id} className="job">
          <li>Company: {job.company}</li>
          <li>Title: {job.title}</li>
          <li className="main-tasks">Main Tasks: {job.mainTasks}</li>
          <li>Start Date: {job.startDate}</li>
          <li>End Date: {job.endDate}</li>
          <div className="job-buttons">
            <button className={job.id} onClick={this.props.editJob}>
              Edit
            </button>
            <button className={job.id} onClick={this.props.deleteJob}>
              Delete
            </button>
          </div>
        </ul>
      ) : (
        <form key={job.id} className={job.id} onSubmit={this.props.submitEdit}>
          <label htmlFor="company">Company: </label>
          <input type="text" id="company" defaultValue={job.company}></input>

          <label htmlFor="title">Title: </label>
          <input type="text" id="title" defaultValue={job.title}></input>

          <label htmlFor="mainTasks">Main Tasks: </label>
          <textarea
            type="textarea"
            id="mainTasks"
            rows="4"
            defaultValue={job.mainTasks}
          ></textarea>

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
