import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* Jika ada halaman menu, tambahkan di sini nanti */}
      </Routes>
    </Router>
  );
}

export default App;