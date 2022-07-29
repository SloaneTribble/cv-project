import React, { Component } from "react";

class AddSchool extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const addMode = this.props.addMode;

    if (addMode) {
      return (
        <div>
          <form onSubmit={this.props.submitSchool}>
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              id="name"
              value={this.props.currentSchool.name}
              onChange={this.props.nameChange}
            ></input>
            <label htmlFor="major">Major: </label>
            <input
              type="text"
              id="major"
              value={this.props.currentSchool.major}
              onChange={this.props.majorChange}
            ></input>
            <label htmlFor="gradYear">Graduation Date: </label>
            <input
              type="date"
              id="gradYear"
              value={this.props.currentSchool.gradYear}
              onChange={this.props.gradYearChange}
            ></input>
            <button type="submit">Submit</button>
          </form>
        </div>
      );
    }
  }
}

export { AddSchool };
