import React, { Component } from "react";

class SchoolOverview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const schools = this.props.schools;

    let overview;

    overview = schools.map((school) => (
      <ul key={school.id}>
        <li>Name: {school.name}</li>
        <li>Major: {school.major}</li>
        <li>Graduation Date: {school.gradYear}</li>
        <br></br>
        <button className={school.id} onClick={this.props.deleteSchool}>
          Delete
        </button>
      </ul>
    ));

    return <div className="school-overview">{overview}</div>;
  }
}

export { SchoolOverview };
