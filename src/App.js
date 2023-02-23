import "./App.css";
import { People } from "./components/People/People";
import { Birds } from "./components/Birds/Birds";
import { Dogs } from "./components/Dogs/Dogs";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Havbar/Navbar";
import { Home } from "./components/Home/Home";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/dogs" element={<Dogs />} />
          <Route path="/birds" element={<Birds />} />
          <Route path="/people" element={<People />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
