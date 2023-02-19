import "./App.css";
import { useState } from "react";
import { data } from "./data";
import { People } from "./components/People";
import { dataBirds } from "./data";
import { Birds } from "./components/Birds";

function App() {
  const [people, setPeople] = useState(data);

  const [birds, setBirds] = useState(dataBirds);
  return (
    <div>
      <People propName={people} />
      <Birds birds={birds} />
    </div>
  );
}

export default App;
