import React, { Component } from "react";

import uniqid from "uniqid";

class Practical extends Component {
  constructor(props) {
    super(props);

    this.state = {
      addMode: false,
      jobs: [
        {
          company: "The Zooniverse",
          title: "Zookeeper",
          mainTasks: ["Clean", "Maintain", "Operate"],
          startDate: "01/01/1990",
          endDate: "01/02/1990",
        },
        {
          company: "Kraftwork Orange",
          title: "Leading Man",
          mainTasks: ["Write", "Rewrite", "Expedite"],
          startDate: "02/01/1991",
          endDate: "02/02/1992",
        },
      ],
      currentJob: {
        company: "",
        title: "",
        mainTasks: [],
        startDate: "",
        endDate: "",
      },
    };
  }
}
