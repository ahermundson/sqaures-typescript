import React, { Component } from "react";
import Board from "./Board";
import "./App.css";

class App extends Component {
  render() {
    const test: string = "test";
    return (
      <div className="App">
        <Board id={"5bd4bed2dfe6d3b637be8662"} />
      </div>
    );
  }
}

export default App;
