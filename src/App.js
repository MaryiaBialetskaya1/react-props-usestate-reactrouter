import "./App.css";
import { useState } from "react";
import { data } from "./data";

function App() {
  const [people, setPeople] = useState(data);
  return (
    <div className="App">
      {people.map((item) => {
        const { id, name } = item;
        return (
          <div key={id}>
            <h2>
              {id} - {name}
            </h2>
          </div>
        );
      })}
    </div>
  );
}

export default App;
