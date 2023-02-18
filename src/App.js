import "./App.css";
import { useState } from "react";
import { data } from "./data";
import { People } from "./People";

function App() {
  const [people, setPeople] = useState(data);
  return (
    <div>
      <People propName={people} />
    </div>
  );
}

export default App;
