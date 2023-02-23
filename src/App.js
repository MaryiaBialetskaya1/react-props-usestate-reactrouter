import "./App.css";
import { useState } from "react";
import { data, dataDogs } from "./data";
import { People } from "./components/People/People";
import { dataBirds } from "./data";
import { Birds } from "./components/Birds/Birds";
import { Dogs } from "./components/Dogs/Dogs";
import { SimpleOnlineStore } from "./components/SimpleOnlineStore/SimpleOnlineStore";
import { storeData } from "./data";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Havbar/Navbar";
import { Home } from "./components/Home/Home";

function App() {
  const [people] = useState(data);
  const [birds] = useState(dataBirds);
  const [dogs] = useState(dataDogs);

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/dogs" element={<Dogs dogs={dogs} />} />
          <Route path="/birds" element={<Birds birds={birds} />} />
          <Route path="/people" element={<People propName={people} />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
