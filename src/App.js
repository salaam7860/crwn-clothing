import React from "react";
import './App.css'
import Homepage from "./pages/homepage/homepageComponent.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
)


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route  path='/' element={<Homepage />} />
          <Route  path='/hats' element={<HatsPage />} />
        
        </Routes>
      </Router>
    </div>
  );
}

export default App;