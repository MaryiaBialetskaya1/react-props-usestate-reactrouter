import "./App.css";
import { useState } from "react";
import { data, dataDogs } from "./data";
import { People } from "./components/People";
import { dataBirds } from "./data";
import { Birds } from "./components/Birds";
import { Dogs } from "./components/Gogs";

function App() {
  const [people, setPeople] = useState(data);
  const [birds, setBirds] = useState(dataBirds);
  const [dogs, setDogs] = useState(dataDogs);
  return (
    <div>
      <People propName={people} />
      <Birds birds={birds} />
      <Dogs dogs={dogs} />
    </div>
  );
}

export default App;
