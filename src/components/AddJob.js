import React, { Component } from "react";

class AddJob extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const addMode = this.props.addMode;

    if (addMode) {
      return (
        <div className="add-job">
          <form onSubmit={this.props.submitJob}>
            <label htmlFor="company">Company: </label>
            <input
              type="text"
              id="company"
              value={this.props.currentJob.company}
              onChange={this.props.handleChange}
            ></input>

            <label htmlFor="title">Title: </label>
            <input
              type="text"
              id="title"
              value={this.props.currentJob.title}
              onChange={this.props.handleChange}
            ></input>

            <label htmlFor="mainTasks">Main Tasks: </label>
            <textarea
              type="textarea"
              id="mainTasks"
              rows="3"
              value={this.props.currentJob.mainTasks}
              onChange={this.props.handleChange}
            ></textarea>

            <label htmlFor="startDate">Start Date: </label>
            <input
              type="date"
              id="startDate"
              value={this.props.currentJob.startDate}
              onChange={this.props.handleChange}
            ></input>

            <label htmlFor="endDate">Main Tasks: </label>
            <input
              type="date"
              id="endDate"
              value={this.props.currentJob.endDate}
              onChange={this.props.handleChange}
            ></input>

            <button type="submit">Submit</button>
          </form>
        </div>
      );
    }
  }
}

export { AddJob };
