import React, { Component } from "react";
import People from "./People";

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="App">
        <People />
      </div>
    );
  }
}

export default App;
