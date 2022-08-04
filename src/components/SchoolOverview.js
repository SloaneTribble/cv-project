import React, { Component } from "react";

function SchoolOverview({ schools, editSchool, submitEdit, deleteSchool }) {
  let overview;

  let schoolArray = schools;

  overview = schoolArray.map((school) =>
    school.editMode === false ? (
      <ul className="school" key={school.id}>
        <li className="school-detail">Name: {school.name}</li>
        <li className="school-detail">Major: {school.major}</li>
        <li className="school-detail">Graduation Date: {school.gradYear}</li>
        <div className="school-buttons">
          <button className={school.id} onClick={editSchool}>
            Edit
          </button>
          <button className={school.id} onClick={deleteSchool}>
            Delete
          </button>
        </div>
      </ul>
    ) : (
      <form key={school.id} className={school.id} onSubmit={submitEdit}>
        <label htmlFor="name">Name: </label>
        <input type="text" id="name" defaultValue={school.name}></input>
        <label htmlFor="major">Major: </label>
        <input type="text" id="major" defaultValue={school.major}></input>
        <label htmlFor="gradYear">Graduation Date: </label>
        <input type="date" id="gradYear" defaultValue={school.gradYear}></input>
        <button type="submit">Submit</button>
      </form>
    )
  );

  return <div className="school-overview">{overview}</div>;
}

export { SchoolOverview };
