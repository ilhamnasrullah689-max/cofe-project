import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Alamat import yang sudah diperbaiki
import LandingPage from "./components/LandingPage.jsx"; 
import Menu from "./Menu.jsx"; 

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="*" element={<LandingPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;