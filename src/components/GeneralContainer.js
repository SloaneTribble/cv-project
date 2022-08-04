import React, { useState } from "react";

// Contains email, phone and brand website

function GeneralContainer() {
  const [state, setState] = useState({
    editMode: false,
    email: "nun@sandwich.uk",
    phone: "555-416-3838",
    website: "https://www.pbjmanagement.co.uk/artists/mighty-boosh",
  });

  const generalEdit = function () {
    setState((prevState) => ({
      editMode: !prevState.editMode,
    }));
  };

  const emailChange = (e) => {
    setState({
      email: e.target.value,
    });
  };

  const phoneChange = (e) => {
    setState({
      phone: e.target.value,
    });
  };

  const websiteChange = (e) => {
    setState({
      website: e.target.value,
    });
  };

  const editMode = state.editMode;

  let buttonText;

  let generalField;

  if (editMode) {
    buttonText = "Submit";
    generalField = (
      <form className="general-form">
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          id="email"
          value={state.email}
          onChange={emailChange}
        ></input>

        <label htmlFor="phone">Phone: </label>
        <input
          type="text"
          id="phone"
          value={state.phone}
          onChange={phoneChange}
        ></input>

        <label htmlFor="website">Website: </label>
        <input
          type="text"
          id="website"
          value={state.website}
          onChange={websiteChange}
        ></input>
      </form>
    );
  } else {
    buttonText = "Edit";
    generalField = (
      <div className="general-info">
        <div className="email">{state.email}</div>
        <div className="phone">{state.phone}</div>
        <div className="website">{state.website}</div>
      </div>
    );
  }

  return (
    <div className="general">
      {generalField}
      <button className="general-edit" onClick={generalEdit}>
        {buttonText}
      </button>
    </div>
  );
}

export { GeneralContainer };
