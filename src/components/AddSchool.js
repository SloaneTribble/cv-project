import React, { useState } from "react";

function AddSchool(props) {
  const addMode = props.addMode;

  if (addMode) {
    return (
      <div className="add-school">
        <form onSubmit={props.submitSchool}>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            value={props.currentSchool.name}
            onChange={props.handleChange}
          ></input>
          <label htmlFor="major">Major: </label>
          <input
            type="text"
            id="major"
            value={props.currentSchool.major}
            onChange={props.handleChange}
          ></input>
          <label htmlFor="gradYear">Graduation Date: </label>
          <input
            type="date"
            id="gradYear"
            value={props.currentSchool.gradYear}
            onChange={props.handleChange}
          ></input>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export { AddSchool };
