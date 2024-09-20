import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Deals from "./pages/Deals";
import Notes from "./pages/Notes"; // Import the Notes component
import WebDesignDeal from "./pages/WebDesignDeal";
import SEODetail from "./pages/SEODetail";
import MobileAppDeal from "./pages/MobileAppDeal";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/deals" element={<Deals />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/notes" element={<Notes />} /> {/* Add the Notes route */}

        <Route path="/deals/web-design" element={<WebDesignDeal />} />
        <Route path="/deals/seo-audit" element={<SEODetail />} />
        <Route path="/deals/mobile-apps" element={<MobileAppDeal />} />
      </Routes>
    </Router>
  );
}

export default App;
