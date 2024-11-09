import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Dashboard from './Components/Dashboard';
import Navbar from "./Components/Navbar";
import Contact from './Components/Contact';
import Features from './Components/Features';
import CustomEmail from './Components/Templates/CustomEmail';
import ProfEmail from './Components/Templates/ProfEmail';
import MarkEmail from './Components/Templates/MarkEmail';
import FollowUpEmail from './Components/Templates/FollowUpEmail';
import PersonalEmail from './Components/Templates/PersonalEmail';
import Template from './Components/Template';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/features" element={<Features />} />
          <Route path="/dashboard" element={<Dashboard />} >
            <Route index element={<Template />} /> 
            <Route path="/dashboard/template" element={<Template />} />
          </Route>
          <Route path="/dashboard/template/custom" element={<CustomEmail />} />
          <Route path="/dashboard/template/prof" element={<ProfEmail />} />
          <Route path="/dashboard/template/personal" element={<PersonalEmail />} />
          <Route path="/dashboard/template/mark" element={<MarkEmail />} />
          <Route path="/dashboard/template/followup" element={<FollowUpEmail />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
