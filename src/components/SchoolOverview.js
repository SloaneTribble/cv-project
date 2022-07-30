import React, { Component } from "react";

class SchoolOverview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const schools = this.props.schools;

    let overview;

    overview = schools.map((school) =>
      school.editMode === false ? (
        <ul key={school.id}>
          <li>Name: {school.name}</li>
          <li>Major: {school.major}</li>
          <li>Graduation Date: {school.gradYear}</li>
          <li>Edit Mode: {school.editMode.toString()} </li>
          <br></br>
          <button className={school.id} onClick={this.props.editSchool}>
            Edit
          </button>
          <button className={school.id} onClick={this.props.deleteSchool}>
            Delete
          </button>
        </ul>
      ) : (
        <form key={school.id} onSubmit={this.props.submitEdit}>
          <label htmlFor="name">Name: </label>
          <input type="text" id="name"></input>
          <label htmlFor="major">Major: </label>
          <input type="text" id="major"></input>
          <label htmlFor="gradYear">Graduation Date: </label>
          <input type="date" id="gradYear"></input>
          <button type="submit">Submit</button>
        </form>
      )
    );

    return <div className="school-overview">{overview}</div>;
  }
}

export { SchoolOverview };
