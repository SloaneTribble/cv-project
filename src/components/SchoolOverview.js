import React, { Component } from "react";

class SchoolOverview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let schools = this.props.schools;

    let overview;

    overview = schools.map((school) =>
      school.editMode === false ? (
        <ul className="school" key={school.id}>
          <li className="school-detail">Name: {school.name}</li>
          <li className="school-detail">Major: {school.major}</li>
          <li className="school-detail">Graduation Date: {school.gradYear}</li>
          <div className="school-buttons">
            <button className={school.id} onClick={this.props.editSchool}>
              Edit
            </button>
            <button className={school.id} onClick={this.props.deleteSchool}>
              Delete
            </button>
          </div>
        </ul>
      ) : (
        <form
          key={school.id}
          className={school.id}
          onSubmit={this.props.submitEdit}
        >
          <label htmlFor="name">Name: </label>
          <input type="text" id="name" defaultValue={school.name}></input>
          <label htmlFor="major">Major: </label>
          <input type="text" id="major" defaultValue={school.major}></input>
          <label htmlFor="gradYear">Graduation Date: </label>
          <input
            type="date"
            id="gradYear"
            defaultValue={school.gradYear}
          ></input>
          <button type="submit">Submit</button>
        </form>
      )
    );

    return <div className="school-overview">{overview}</div>;
  }
}

export { SchoolOverview };
