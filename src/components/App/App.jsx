import { useState, useEffect } from "react";
import List from "../List";
import Search from "../Search";
import "./App.css";

const data = ["html", "js", "css", "react", "angular"];

function App() {
  const [search, setSearch] = useState("");

  return (
    <div className="App">
      <div>
        <Search
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        >
          Find course:
        </Search>
        <List items={data} />
      </div>
    </div>
  );
}

export default App;
