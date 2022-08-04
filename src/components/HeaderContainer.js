import React, { useState } from "react";

import { Header } from "./Header";

function HeaderContainer() {
  const [state, setState] = useState({
    name: "Johnny Two Hats",
    header: {
      editMode: false,
    },
  });

  const headerEdit = function () {
    let currentState = { ...state };

    currentState.header.editMode = currentState.header.editMode ? false : true;

    setState({ ...state, editMode: currentState.header.editMode });
  };

  const nameChange = (e) => {
    setState({ ...state, name: e.target.value });
  };

  return (
    <div className="header-container">
      <Header
        name={state.name}
        handler={headerEdit}
        handleChange={nameChange}
        editMode={state.header.editMode}
      />
    </div>
  );
}

export { HeaderContainer };
