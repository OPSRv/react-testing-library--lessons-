import { useState, useEffect } from "react";
import List from "../List";
import "./App.css";

function App() {
  const data = ["html", "js", "css", "react", "angular"];

  return (
    <div className="App">
      <p>Hello</p>
      <div>
        <List items={data} />
      </div>
    </div>
  );
}

export default App;
