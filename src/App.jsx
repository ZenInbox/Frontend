import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Dashboard from './Components/Dashboard';
import Navbar from "./Components/Navbar";
import Contact from './Components/Contact';
import Team from './Components/Team';
import CustomEmail from './Components/Templates/CustomEmail';
import ProfEmail from './Components/Templates/ProfEmail';
import MarkEmail from './Components/Templates/MarkEmail';
import FollowUpEmail from './Components/Templates/FollowUpEmail';
import PersonalEmail from './Components/Templates/PersonalEmail';
import Template from './Components/Template';
import SentEmails from './Components/SentEmails';
import MyDrafts from './Components/MyDrafts';
import MyActivity from './Components/MyActivity';
import ChangelogPage from './Components/ChangelogPage';
import Help from "./Components/Help"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivacyPolicy from './Components/Privacy';
import Services from './Components/Services';

function App() {
  
  return (
    <Router>
      <div className="App">
        <Navbar />
        <ToastContainer/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<PrivacyPolicy/>} />
          <Route path="/terms&services" element={<Services/>} />
          <Route path="/team" element={<Team />} />
          <Route path="/dashboard" element={<Dashboard />} >
            <Route index element={<Template />} /> 
            <Route path="/dashboard/template" element={<Template />} />
            <Route path="/dashboard/sent" element = {<SentEmails/>}/>
            <Route path="/dashboard/drafts" element = {<MyDrafts/>}/>
            <Route path="/dashboard/activity" element = {<MyActivity/>}/>
            <Route path="/dashboard/changelog" element = {<ChangelogPage/>}/>
            <Route path="/dashboard/help" element = {<Help/>}/>
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
