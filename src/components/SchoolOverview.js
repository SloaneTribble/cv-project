import React, { Component } from "react";

class SchoolOverview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const schools = this.props.schools;
    console.log(schools);
    let school1 = schools[0];

    let school1Name = school1.name;

    let overview;

    overview = schools.map((school) => (
      <ul key={school.id}>
        <li>Name: {school.name}</li>
        <li>Major: {school.major}</li>
        <li>Graduation Date: {school.gradYear}</li>
        <br></br>
      </ul>
    ));

    return <div className="school-overview">{overview}</div>;
  }
}

export { SchoolOverview };
