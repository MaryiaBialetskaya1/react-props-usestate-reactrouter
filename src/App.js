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
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Havbar/Navbar";

function App() {
  const [people] = useState(data);
  const [birds] = useState(dataBirds);
  const [dogs] = useState(dataDogs);
  const [store, setStore] = useState(storeData);

  const filteredCloth = (searchTerm) => {
    const newFilterCloth = storeData.filter(
      (element) => element.searchTerm === searchTerm
    );
    setStore(newFilterCloth);
  };
  return (
    <Router>
      <div>
        <Navbar />
        {/* <Buttons filteredCloth={filteredCloth} /> */}
        {/* <SimpleOnlineStore onlineStore={store} /> */}
        <Routes>
          <Route path="/dogs" element={<Dogs dogs={dogs} />} />
          <Route path="/birds" element={<Birds birds={birds} />} />
          <Route path="/people" element={<People propName={people} />} />
          <Route
            path="/store"
            element={
              <SimpleOnlineStore
                onlineStore={store}
                filteredCloth={filteredCloth}
              />
            }
          />
        </Routes>
        {/* <People propName={people} />
      <Birds birds={birds} />
      <Dogs dogs={dogs} /> */}
      </div>
    </Router>
  );
}

export default App;
