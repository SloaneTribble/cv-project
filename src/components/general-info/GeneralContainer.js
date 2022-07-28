import React, { Component } from "react";

class GeneralContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="general-title">{this.props.title}</div>
        <form class="general-form-container">
          <label htmlFor="name" id="name">
            {/* 
            * Need to make sure this coincides with state updated in parent div
            <input type="text" value={this.props.name}>Enter Name</input> */}
          </label>
        </form>
      </div>
    );
  }
  // Title (General)

  // Name:
  // Email:
  // Phone:
}
