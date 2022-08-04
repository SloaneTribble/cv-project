import React from "react";

function AddJob(props) {
  const addMode = props.addMode;

  if (addMode) {
    return (
      <div className="add-job">
        <form onSubmit={props.submitJob}>
          <label htmlFor="company">Company: </label>
          <input
            type="text"
            id="company"
            value={props.currentJob.company}
            onChange={props.handleChange}
          ></input>

          <label htmlFor="title">Title: </label>
          <input
            type="text"
            id="title"
            value={props.currentJob.title}
            onChange={props.handleChange}
          ></input>

          <label htmlFor="mainTasks">Main Tasks: </label>
          <textarea
            type="textarea"
            id="mainTasks"
            rows="3"
            value={props.currentJob.mainTasks}
            onChange={props.handleChange}
          ></textarea>

          <label htmlFor="startDate">Start Date: </label>
          <input
            type="date"
            id="startDate"
            value={props.currentJob.startDate}
            onChange={props.handleChange}
          ></input>

          <label htmlFor="endDate">Main Tasks: </label>
          <input
            type="date"
            id="endDate"
            value={props.currentJob.endDate}
            onChange={props.handleChange}
          ></input>

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export { AddJob };
