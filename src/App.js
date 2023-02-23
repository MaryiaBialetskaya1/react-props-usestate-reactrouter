import "./App.css";
import { useState } from "react";
import { data, dataDogs } from "./data";
import { People } from "./components/People";
import { dataBirds } from "./data";
import { Birds } from "./components/Birds";
import { Dogs } from "./components/Dogs";
import { SimpleOnlineStore } from "./components/SimpleOnlineStore/SimpleOnlineStore";
import { storeData } from "./data";
import { Buttons } from "./components/Buttons/Buttons";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  <Router>
    <Link to="/dogs">Dogs</Link>
  </Router>;
  // const [people, setPeople] = useState(data);
  // const [birds, setBirds] = useState(dataBirds);
  // const [dogs, setDogs] = useState(dataDogs);

  const [store, setStore] = useState(storeData);

  const filteredCloth = (searchTerm) => {
    const newFilterCloth = storeData.filter(
      (element) => element.searchTerm === searchTerm
    );
    setStore(newFilterCloth);
  };
  return (
    <div>
      <Buttons filteredCloth={filteredCloth} />
      <SimpleOnlineStore onlineStore={store} />
      {/* <People propName={people} />
      <Birds birds={birds} />
      <Dogs dogs={dogs} /> */}
    </div>
  );
}

export default App;
