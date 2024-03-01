import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Layout/Footer/footer";
import Landing from "./pages/Landing/landing";
import Contact from "./pages/Contact/contact";
import About from "./pages/About/about";
import Dentons from "./pages/Dentons/dentons";
import Insights from "./pages/Insights/insights";
import Practice from "./pages/PracticeArea/practiceArea";
import Maps from "../src/pages/maps.jsx";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<Landing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/dentons" element={<Dentons />} />
          <Route path='/insights' element={<Insights />} />
          <Route path="/practiceAreas" element={<Practice />} />
          <Route path="/maps" element={<Maps />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
