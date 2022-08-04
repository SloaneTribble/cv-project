import React, { Component } from "react";

function Header(props) {
  const editMode = props.editMode;

  let nameField;

  let buttonText;

  if (editMode) {
    buttonText = "Submit";
    nameField = (
      <form className="name-form">
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          value={props.name}
          onChange={props.handleChange}
        ></input>
      </form>
    );
  } else {
    buttonText = "Edit";
    nameField = <div className="header-name">{props.name}</div>;
  }
  return (
    <div className="header">
      <div className="header-title">{props.title}</div>
      {nameField}
      <button className="name-edit" onClick={props.handler}>
        {buttonText}
      </button>
    </div>
  );
}

export { Header };
