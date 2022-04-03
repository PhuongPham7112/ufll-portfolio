import React from 'react';
import './App.css';
import HeaderBar from './components/HeaderBar';
import Intro from './pages/Intro';
import TargetCustomer from './pages/TargetCustomer';
import WhatWeDo from './pages/WhatWeDo';
import HowWeDo from './pages/HowWeDo';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  document.title = "VUA Team";
  return (
    <div className="App">
      <HeaderBar/>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Intro/>}/>
            <Route path="/target-customer" element={<TargetCustomer/>}/>
            <Route path="/our-idea" element={<WhatWeDo/>}/>
            <Route path="/how-we-do-it" element={<HowWeDo/>}/>
          </Routes>
        </Router>
      </div>
        
    </div>
  );
}

export default App;
