import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./reusable-components/footer";
import Landing from "./pages/landing";
import Contact from "./pages/contact";
import About from "./pages/about";
import Dentons from "./pages/dentons";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<Landing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/dentons" element={<Dentons />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
