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

    return <div className="school-overview">{school1Name}</div>;
  }
}

export { SchoolOverview };
